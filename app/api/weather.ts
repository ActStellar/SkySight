import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getCurrentWeather = async (location: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const getWeeklyForecast = async (location: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}forecast`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric',
        cnt: 7,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weekly forecast:', error);
    throw error;
  }
};