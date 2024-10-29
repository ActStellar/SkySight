import { getCurrentWeather, getWeeklyForecast } from '@/app/api/weather';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Weather API', () => {
  it('fetches current weather', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { main: { temp: 25 } } });
    const data = await getCurrentWeather('Tokyo');
    expect(data.main.temp).toBe(25);
  });

  it('fetches weekly forecast', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { list: [{ main: { temp: 25 } }] } });
    const data = await getWeeklyForecast('Tokyo');
    expect(data.list[0].main.temp).toBe(25);
  });
});
