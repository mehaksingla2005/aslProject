import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Footer.jsx'
import Follow from './Follow.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Follow/>
    <Footer/>
  </React.StrictMode>,
)
