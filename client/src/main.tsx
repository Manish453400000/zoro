import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import './sass/utility.scss'
import './sass/component.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
