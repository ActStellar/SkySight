import { useState, useEffect } from 'react';
import { getCurrentWeather, getWeeklyForecast } from '../api/weather';

export const useWeather = (location: string) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const current = await getCurrentWeather(location);
        const weekly = await getWeeklyForecast(location);
        setCurrentWeather(current);
        setWeeklyForecast(weekly);
      } catch (error: any) {
        setError(`Failed to fetch weather data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    if (location) fetchWeatherData();
  }, [location]);

  return { currentWeather, weeklyForecast, error, loading };
};