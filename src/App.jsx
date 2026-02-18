import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setIsDark(prev => !prev)}>
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
}

export default App
