'use client';

import { useState } from 'react';
import * as Common from '@/app/components/components'
import { useWeather } from '@/app/hooks/useWeather';

const HomePage = () => {
  const [location, setLocation] = useState('');
  const { currentWeather, weeklyForecast, error, loading } = useWeather(location);

  return (
      <>
        <Common.Form onSearch={setLocation} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {currentWeather && <Common.WeatherCard weather={currentWeather} />}
        {/* {weeklyForecast && <Common.Chart forecast={weeklyForecast} />} */}
      </>
  );
};

export default HomePage;