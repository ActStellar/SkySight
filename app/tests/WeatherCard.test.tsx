import { render, screen } from '@testing-library/react';
import WeatherCard from '@/app/components/WeatherCard';

const mockWeather = {
  name: 'Tokyo',
  weather: [{ description: 'clear sky' }],
  main: { temp: 20, humidity: 65 },
};

describe('WeatherCard Component', () => {
  test('renders weather information correctly', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/20°C/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity: 65%/i)).toBeInTheDocument();
  });
});
