# API仕様書

## 使用API

- **OpenWeatherMap**: [OpenWeatherMap API](https://openweathermap.org/api)

## エンドポイント

1. **現在の気象情報**

    `GET /data/2.5/weather?q={city}&appid={API_KEY}`

2. **週間予報**

    `GET /data/2.5/forecast?q={city}&appid={API_KEY}&cnt=7`

3. **タイムマシンAPI (過去の天気)**

    `GET /data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={timestamp}&appid={API_KEY}`

## エラーコード

- **401 Unauthorized:** APIキーが無効です。
- **404 Not Found:** 該当する都市が見つかりません。
