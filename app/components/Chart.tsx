import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatDate } from '../utils/formatWeatherData';

// 必要な要素をChart.jsに登録
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface ChartProps {
  forecast: any;
}

const WeatherChart = ({ forecast }: ChartProps) => {
  const data = {
    labels: forecast.list.map((entry: any) => formatDate(entry.dt)),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.list.map((entry: any) => entry.main.temp),
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

export default WeatherChart;