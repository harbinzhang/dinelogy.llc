import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Alternative main.tsx using HashRouter for simpler GitHub Pages deployment
// HashRouter uses URL hash (#) for routing, which works better with static hosting
// Trade-off: URLs will look like: https://site.com/#/product instead of https://site.com/product

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)