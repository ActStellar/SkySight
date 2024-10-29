import { render } from '@testing-library/react';
import Chart from '@/app/components/Chart';

const mockForecast = {
  list: [
    { dt: 1688208000, main: { temp: 25 } },
    { dt: 1688294400, main: { temp: 28 } },
  ],
};

describe('Chart Component', () => {
  it('renders a chart with forecast data', () => {
    const { container } = render(<Chart forecast={mockForecast} />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });
});