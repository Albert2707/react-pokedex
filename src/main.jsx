import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import PokeContext from './context/PokeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <PokeContext>
    <App />
      </PokeContext>
    </DarkModeContextProvider>
  </React.StrictMode>
)
