<?php
/**
 * Plugin Name: AI LP Embed
 * Description: Embed the AI landing page React bundle inside WordPress via shortcode.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('AI_LP_EMBED_HANDLE', 'ai-lp-embed');
define('AI_LP_EMBED_DIST_PATH', plugin_dir_path(__FILE__) . 'dist/');
define('AI_LP_EMBED_DIST_URL', plugin_dir_url(__FILE__) . 'dist/');
/**
 * Read the Vite manifest once per request.
 */
function ai_lp_embed_get_manifest(): array {
    static $manifest = null;

    if ($manifest !== null) {
        return $manifest;
    }

    $manifest_file = AI_LP_EMBED_DIST_PATH . 'manifest.json';
    if (!file_exists($manifest_file)) {
        $manifest = [];
        return $manifest;
    }

    $decoded = json_decode(file_get_contents($manifest_file), true);
    if (!is_array($decoded)) {
        $manifest = [];
        return $manifest;
    }

    $manifest = $decoded;
    return $manifest;
}

function ai_lp_embed_enqueue_assets(): void {
    $manifest = ai_lp_embed_get_manifest();
    if (empty($manifest)) {
        return;
    }

    $entry = $manifest['src/main.tsx'] ?? $manifest['src/main.ts'] ?? null;
    if (!$entry || empty($entry['file'])) {
        return;
    }

    $script_relative = $entry['file'];
    $script_path = AI_LP_EMBED_DIST_PATH . $script_relative;
    $version = file_exists($script_path) ? (string) filemtime($script_path) : (string) time();

    if (!empty($entry['css'])) {
        foreach ((array) $entry['css'] as $index => $css_file) {
            $handle = AI_LP_EMBED_HANDLE . '-style' . ($index ? '-' . $index : '');
            $css_path = AI_LP_EMBED_DIST_PATH . $css_file;
            $css_version = file_exists($css_path) ? (string) filemtime($css_path) : $version;
            wp_enqueue_style($handle, AI_LP_EMBED_DIST_URL . $css_file, [], $css_version);
        }
    }

    wp_enqueue_script(
        AI_LP_EMBED_HANDLE,
        AI_LP_EMBED_DIST_URL . $script_relative,
        [],
        $version,
        true
    );

    wp_localize_script(AI_LP_EMBED_HANDLE, 'aiLpConfig', [
        'restUrl' => esc_url_raw(rest_url('ai-lp/v1/contact')),
        'nonce'   => wp_create_nonce('wp_rest'),
    ]);
}

add_action('wp_enqueue_scripts', function () {
    if (!is_page()) {
        return;
    }

    $post = get_post();
    if (!$post instanceof \WP_Post) {
        return;
    }

    if (!has_shortcode($post->post_content, 'ai_lp')) {
        return;
    }

    ai_lp_embed_enqueue_assets();
});

function ai_lp_embed_shortcode(): string {
    ob_start();
    ?>
    <div id="root" class="ai-lp-root"></div>
    <?php
    return (string) ob_get_clean();
}
add_shortcode('ai_lp', 'ai_lp_embed_shortcode');

add_action('rest_api_init', function () {
    register_rest_route('ai-lp/v1', '/contact', [
        'methods'  => 'POST',
        'callback' => function (\WP_REST_Request $request) {
            $data = (array) $request->get_json_params();

            /**
             * TODO: Replace this stub with production-ready logic
             * (e.g. wp_mail, CRM integration, spam checks).
             */
            return new \WP_REST_Response([
                'ok'       => true,
                'received' => [
                    'name'  => $data['name'] ?? '',
                    'email' => $data['email'] ?? '',
                ],
            ]);
        },
        'permission_callback' => '__return_true',
    ]);
});
