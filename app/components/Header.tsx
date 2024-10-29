"use client"

import React, {useState, useEffect} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import '@/app/styles/common.scss'

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  // ローカルストレージからモード状態を読み込み、初期化
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedMode)
    document.body.classList.toggle('dark-mode', savedMode)
  }, [])

  // ダークモードの状態をローカルストレージに保存&適用
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString())
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  return (
    <header className={isDarkMode ? 'dark-mode' : ''}>
      <h1>SkySight</h1>
      <button onClick={toggleDarkMode} className='bright-button'>
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  )
}

export default Header