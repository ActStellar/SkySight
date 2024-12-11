import { formatTemperature, formatWeatherDescription } from '../utils/formatWeatherData';
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherDownpour, TiWeatherShower, TiWeatherStormy, TiWeatherSnow, TiWeatherWindy } from "react-icons/ti";

interface WeatherCardProps {
  weather: any;
}

const WeatherIconFormat = (weather: string) => {
  switch (weather) {
    case 'Clear sky':
      return <TiWeatherSunny style={{fontSize: '200px'}}/>
    case 'Few clouds':
    case 'Scattered clouds':
    case 'Broken clouds':
      return <TiWeatherCloudy style={{fontSize: '200px'}}/>
    case 'Overcast clouds':
      return <TiWeatherCloudy style={{color: 'gray', fontSize: '200px'}}/>
    case 'Shower rain':
      return <TiWeatherShower style={{fontSize: '200px'}}/>
    case 'Rain':
      return <TiWeatherDownpour style={{fontSize: '200px'}}/>
    case 'Thunderstorm':
      return <TiWeatherStormy style={{fontSize: '200px'}}/>
    case 'Snow':
      return <TiWeatherSnow style={{fontSize: '200px'}}/>
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return <TiWeatherWindy style={{fontSize: '200px'}}/>
    default:
      return <></>
  }
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      {WeatherIconFormat(weather.weather[0].description)}
      <p>{formatWeatherDescription(weather.weather[0].description)}</p>
      <p>{formatTemperature(weather.main.temp)}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;