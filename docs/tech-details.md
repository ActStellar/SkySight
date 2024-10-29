# 使用技術とAPI管理

## 1. 使用技術のバージョン情報

- **Next.js:** 15.0.1
- **Two.js:** 0.8.14
- **Chart.js:** 4.4.6
- **Sass:** 1.80.4
- **Turbopack:** 開発モードで使用

## 2. API使用の制限と管理

- **制限:**
  - OpenWeatherMapの無料プランは1日あたり1,000リクエスト。

- **管理方法:**
  - リクエスト回数が制限に近づいた場合、API呼び出しを一時停止し、エラーメッセージを表示。

## 3. Turbopackの活用

- **開発モード:** 開発時のホットリロードを高速化し、即時反映します。
- **本番環境:** 現時点ではTurbopackは開発環境でのみ利用し、本番ではWebpackが利用されます。