import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(
  '%cYou opened the console on a fake 90s website. Respect.',
  'font-family: monospace; color: #0000ee;',
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
