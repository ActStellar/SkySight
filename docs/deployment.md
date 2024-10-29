# Vercelデプロイ手順

## 1. 環境変数の設定

- **設定する変数:**
  - `NEXT_PUBLIC_WEATHER_API_KEY`: OpenWeatherMapのAPIキー
- Vercelの「Settings > Environment Variables」で環境変数を設定します。  
  これにより、コードに直接APIキーを含めることなく、APIコールが実行されます。

## 2.ドメイン設定

- **デフォルトドメイン:**
  - Vercelが提供する`your-project.vercel.app`をそのまま使用。
- **カスタムドメイン:**
  - 無償で設定可能な場合、任意のものに変更します。

## 3. デプロイ手順

1. GitHubリポジトリをVercelに連携。
2. Vercelのダッシュボードで「Deploy」ボタンをクリック。
3. デプロイ後、アプリが自動的に更新されます。
