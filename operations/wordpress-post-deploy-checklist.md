# WordPress Plugin Post-Deployment Checklist

Use this checklist immediately after the GitHub Actions workflow reports a successful deployment.

## 1. Confirm workflow artifacts
- Open the latest run of **Deploy WordPress Plugin** and expand the `Show remote listing` step.
- Verify that the resolved plugin path (e.g. `/home/users/<account>/web/wordpress/wp-content/plugins/ai-lp-embed`) lists:
  - `ai-lp-embed.php`
  - `dist/index.html`
  - `dist/manifest.json`
  - `dist/assets/` directory with hashed bundle files

## 2. Inspect the server over SSH/SFTP
- Connect to the same path on the Lolipop server.
- Ensure the directory structure matches the workflow output and timestamps reflect the most recent deployment.
- If you keep backups, download `ai-lp-embed.php` and `dist/` once to compare locally.

## 3. Refresh the WordPress admin
- Sign in to `/wp-admin/` and open **Plugins → Installed Plugins**.
- Locate **AI LP Embed** (plugin slug `ai-lp-embed`). If it is not visible, click **Check for updates** in the admin bar or clear any admin caching plugins.
- Confirm the plugin status is **Active**. If it is inactive, click **Activate**.

## 4. Clear caches and regenerate assets
- Clear caching plugins such as LiteSpeed Cache, W3 Total Cache, or WP Super Cache.
- Purge any CDN (Cloudflare, etc.) connected to the site.
- Ask stakeholders to hard-refresh (Ctrl/Cmd+Shift+R) once to ensure they see the latest bundle.

## 5. Functional smoke test
- Visit a page that embeds the AI LP widget and confirm it renders with the expected styling and data.
- Test at least one interactive flow (e.g. chat prompt submission) if applicable.
- Check the browser console for JavaScript errors.

## 6. Rollback plan
- If you encounter issues, re-run the workflow on the previous commit SHA (use **Run workflow → Use workflow from** dropdown) to redeploy the last known good build.
- Keep a note of the problematic SHA and describe the symptom in the incident log for follow-up.

Document any findings in the deployment log so the next on-call engineer understands the site state.
