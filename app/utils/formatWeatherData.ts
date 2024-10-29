export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
};

export const formatWeatherDescription = (description: string): string => {
  return description.charAt(0).toUpperCase() + description.slice(1);
};