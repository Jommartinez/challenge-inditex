import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'
import { HeroeProvider } from './context/HeroeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HeroeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HeroeProvider>
  </BrowserRouter>,
)
