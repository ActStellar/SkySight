import { formatTemperature, formatWeatherDescription } from '../utils/formatWeatherData';

interface WeatherCardProps {
  weather: any;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{formatWeatherDescription(weather.weather[0].description)}</p>
      <p>{formatTemperature(weather.main.temp)}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;