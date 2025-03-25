import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { useState } from 'react' // Import useState from React to manage state
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0); // State for count
  const [timeLeft, setTimeLeft] = useState(60); // State for countdown timer
  const [isActive, setIsActive] = useState(false); // State to manage timer activity
  const [theme, setTheme] = useState('light') // State for theme

  // Function to toggle the theme between light and dark
  const toggleTheme = () => { 
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle theme
  }

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setTimeLeft(60);
    setIsActive(false);
  };

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      toggleTheme();
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);
    setTheme(theme === 'light' ? 'dark' : 'light') // Toggle theme
  }

  return (
    
      <div className={theme}> {/* Apply the theme class to the main container */}
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Button to toggle theme */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
          <div
            style={{
              width: `${(timeLeft / 60) * 100}%`,
              height: '10px',
              backgroundColor: 'green',
              borderRadius: '5px',
            }}
          />
        </div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
        <p>Time Left: {timeLeft} seconds</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <></>
  )


export default App
