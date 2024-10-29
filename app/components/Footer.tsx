import React from 'react'
import '@/app/styles/common.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2022-2024 SkySight. All rights reserved.</p>
      <p>Powered by <a href="https://openweathermap.org" target="_blank" rel='noopener noreferrer'>OpenWeatherMap</a></p>
    </footer>
  )
}

export default Footer