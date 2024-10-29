# SkySight

## 概要

SkySightは、世界中の気象情報を提供するWebアプリケーションです。  
ユーザーは都市名や国名を検索することで、現在または習慣の気象情報を確認できます。  
Two.jsを用いた親しみやすい背景アニメーションと、ダークモード対応のUIで快適なユーザー体験を提供します。

## 機能

- 都市名/国名での天気検索
- 当日、昨日、直近7日間の気象情報の表示
- ダークモードの切り替え
- Two.jsを用いた背景アニメーション

## 使用技術

- フロントエンド: Next.js(App Router)
- CSSモジュール: Sass
- グラフ: Chart.js
- アニメーション: Two.js
- API: OpenWeatherMap
- 開発ツール: Turbopack, Jest, Cypress

## 環境構築と実行方法

1. **リポジトリのクローン**

    ```bash
    git clone https://github.com/ActStellar/SkySight.git
    cd sky-sight
    ```

2. 依存関係のインストール

    ```bash
    npm install
    ```

3. 環境変数の設定
    - `.env`ファイルを作成し、以下APIキーを追加してください。

    ```makefile
    NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
    ```

4. 開発サーバーの起動

    ```bash
    npm run dev
    ```

5. ブラウザでアクセス  
    `http://localhost:3000`

## ライセンス

MIT License - 詳細は[LICENSE](./LICENSE)
ファイルをご覧ください。
