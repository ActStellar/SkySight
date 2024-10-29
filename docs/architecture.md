# システムアーキテクチャ

## ディレクトリ構造

```markdown
sky-sight/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── api/
│ │ └── weather.ts
│ ├── components/
│ │ ├── SearchForm.tsx
│ │ ├── WeatherCard.tsx
│ │ └── Chart.tsx
│ ├── hooks/
│ ├── styles/
│ ├── utils/
└── public/
```

## データフロー

1. **ユーザー入力:** 検索ホームで都市名/国名を入力し、APIコールが発生。
2. **APIコール:** `useWeather`フックを介してOpenWeatherMap APIにリクエスト。
3. **データの整形:** `formatWeatherData`関数を使用し、取得したデータを表示形式に変換。
4. **UIの更新:** WeatherCardやChartコンポーネントでデータを表示。

## 使用技術

- **API:** OpenWeatherMap
- **UI:** React + Next.js
- **アニメーション:** Two.js
- **デプロイ:** Vercel
