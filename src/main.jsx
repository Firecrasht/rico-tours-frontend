import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import Login from './pages/Login'
import ComprarBoleto from './pages/ComprarBoleto'
import ValidarQR from './pages/ValidarQR'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comprar" element={<ComprarBoleto />} />
        <Route path="/validar" element={<ValidarQR />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
