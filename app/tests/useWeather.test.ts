import { renderHook, waitFor } from '@testing-library/react';
import { useWeather } from '@/app/hooks/useWeather';
import * as weatherApi from '@/app/api/weather';

jest.mock('@/app/api/weather');

describe('useWeather Hook', () => {
  it('fetches weather data correctly', async () => {
    (weatherApi.getCurrentWeather as jest.Mock).mockResolvedValue({
      name: 'Tokyo',
      main: { temp: 25, humidity: 60 },
      weather: [{ description: 'clear sky' }],
    });
    (weatherApi.getWeeklyForecast as jest.Mock).mockResolvedValue({
      list: [{ dt: 1688208000, main: { temp: 28 } }],
    });

    const { result } = renderHook(() => useWeather('Tokyo'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.currentWeather).toBeDefined();
    expect(result.current.weeklyForecast).toBeDefined();
    expect(result.current.error).toBeNull();
  });

  it('handles API errors gracefully', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    (weatherApi.getCurrentWeather as jest.Mock).mockRejectedValue(new Error('API call failed'));
    (weatherApi.getWeeklyForecast as jest.Mock).mockRejectedValue(new Error('API call failed'));

    const { result } = renderHook(() => useWeather('InvalidCity'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Failed to fetch weather data: Error: API call failed');
    expect(result.current.currentWeather).toBeNull();
    expect(result.current.weeklyForecast).toBeNull();
  });
});
