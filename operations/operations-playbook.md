# 運用手順書

## 更新フロー
1. GitHubでfeatureブランチを作成し、コピー・デザインを更新。
2. `npm run lint` → `npm run build` → `npm run preview`で品質確認。
3. GrowthBookで実験フラグを設定し、GA4/GTMのイベント発火をテスト。
4. mainブランチへマージ後、Vercel/Netlify等でデプロイ。ステージングでLighthouseとフォーム送信テストを実施。
5. 公開後24時間はGA4リアルタイムで主要CTAとフォームイベントをモニタリング。

## WordPress プラグイン自動デプロイ
- 対象: `deliverables/wp-plugin/ai-lp-embed/` 配下のプラグイン（`ai-lp-embed.php`＋`dist/`）。
- トリガー: mainブランチへのマージ、または GitHub Actions の `Deploy WordPress Plugin` ワークフローを `workflow_dispatch` で手動実行。
- 仕組み: `.github/workflows/deploy-wordpress.yml` が、ビルド成果物を含むプラグイン一式をFTP経由でサーバーの `wp-content/plugins/ai-lp-embed/` に同期。

### 事前準備（初回のみ）
1. サーバー側でSSH/FTPSが有効なアカウントを用意し、WordPressが置かれているドキュメントルートを確認。
2. GitHubリポジトリの Secrets に以下を登録。
   - `WP_HOST`: FTP/SSHホスト名。
   - `WP_USER`: ログインユーザー名。
   - `WP_SSH_PASS`: 上記ユーザーのパスワード。
   - `WP_REMOTE_PATH`: プラグインを配置したいディレクトリ。例：`/public_html/wp-content/plugins/` または `public_html/office/wp-content/plugins/`。
   - （任意）`WP_SSH_PORT`: ポート番号。未設定時は `22` を使用。

### 実行フロー
1. mainブランチにプラグインの変更をマージするとワークフローが起動。
2. `npm ci` → `npm run build` で最新の `dist/` を生成し、`deliverables/wp-plugin/ai-lp-embed/` にバンドル。
3. `WP_REMOTE_PATH` で指定したディレクトリ配下に `ai-lp-embed` フォルダを自動生成し、`rsync --delete` で差分同期（不要ファイルは削除）。
4. 成功するとGitHub Actionsのログにリモート先のファイル一覧が表示される。失敗時はエラーメッセージを参照し、接続設定や権限を確認。

### 運用ヒント
- 本番・ステージングを分けたい場合は、ブランチ条件とSecretsを分離したワークフローを複製する。
- サーバー側で直接ファイルを編集すると次回デプロイで上書きされるため、変更は必ずGit経由で管理する。
- 緊急時に手動アップロードする場合も、完了後にGitへ同内容を反映し整合性を保つ。

## 画像規格
- ヒーロー画像: 1600×900, AVIF/WEBP, 200KB以下
- セクション背景: 1200×800, WEBP, 150KB以下
- アイコン: SVGまたは24×24 PNG
- 画像命名: `section-purpose-size.ext`（例: `hero-dashboard-1600x900.avif`）

## 見出し・字数ガイド
- H1: 32文字以内、メインキーワード含む
- H2: 28〜32px相当、1文60文字以内
- 段落: 120〜160文字、漢字比率35％以下
- 箇条書き: 3〜5項目に統一、各項目50文字以内

## 公開チェックリスト
- [ ] Lighthouse Mobile/SEO/Accessibility/Best Practices 各90以上
- [ ] フォーム送信で`view_form`/`start_form`/`submit_form`/`book_meeting`が発火
- [ ] JSON-LD（Organization/LocalBusiness/Product/FAQ/Breadcrumb）がエラーなし
- [ ] CTAヒートマップ（Hotjar等）で主要ボタン視認率80%以上
- [ ] サンクスページから日程調整の案内が機能
- [ ] 404/500監視（UptimeRobot）に異常なし

## 運用リズム
- 週次: KPIレビュー（CVR、直帰率、フォーム完了率）、ABテスト結果確認
- 月次: 施策レポート、コンテンツ更新、SEO順位確認
- 四半期: プラン・料金見直し、E-E-A-T要素の更新、金融機関連携実績の刷新
