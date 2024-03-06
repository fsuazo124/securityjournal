import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Login />
  </React.StrictMode>,
)
