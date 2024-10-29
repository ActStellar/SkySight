import { renderHook, waitFor } from '@testing-library/react';
import { useWeather } from '@/app/hooks/useWeather';

jest.mock('../api/weather', () => ({
  getCurrentWeather: jest.fn(() =>
    Promise.resolve({
      name: 'Tokyo',
      main: { temp: 25, humidity: 60 },
      weather: [{ description: 'clear sky' }]
    })
  ),
  getWeeklyForecast: jest.fn(() =>
    Promise.resolve({
      list: [{ dt: 1688208000, main: { temp: 28 } }]
    })
  ),
}));

describe('useWeather Hook', () => {
  it('fetches weather data correctly', async () => {
    const { result } = renderHook(() => useWeather('Tokyo'));

    // 非同期データの更新を待機
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // 取得したデータが正しく存在することを確認
    expect(result.current.currentWeather).toBeDefined();
    expect(result.current.weeklyForecast).toBeDefined();
    expect(result.current.error).toBeNull();
  });

  it('handles API errors gracefully', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // コンソールエラーを抑制

    const mockError = new Error('API call failed');
    jest.mocked(require('../api/weather').getCurrentWeather).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useWeather('InvalidCity'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Failed to fetch weather data.');
    expect(result.current.currentWeather).toBeNull();
    expect(result.current.weeklyForecast).toBeNull();
  });
});