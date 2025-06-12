import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ComprarBoleto from './pages/ComprarBoleto';
import MisBoletos from './pages/MisBoletos';
import ValidarQR from './pages/ValidarQR';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/comprar" element={<ComprarBoleto />} />
        <Route path="/boletos" element={<MisBoletos />} />
        <Route path="/validar" element={<ValidarQR />} />
      </Routes>
    </>
  );
};

export default App;
