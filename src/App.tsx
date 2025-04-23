import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <style>
        {`
          .spline-container {
            width: 100%;
            height: 100%;
            max-width: 700px;
            transition: transform 0.3s ease;
          }

          @media (max-width: 768px) {
            .spline-wrapper {
              justify-content: center !important;
              padding-right: 0 !important;
            }

            .spline-container {
              transform: scale(0.8);
              transform-origin: center;
              max-width: 90vw;
              height: 70vh;
            }
          }

          @media (max-width: 480px) {
            .spline-container {
              transform: scale(0.65);
              height: 60vh;
            }
          }
        `}
      </style>
    </>
  )
}
