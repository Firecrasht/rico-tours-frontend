import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <Link style={{ color: '#fff', margin: '0 1rem' }} to="/">Login</Link>
      <Link style={{ color: '#fff', margin: '0 1rem' }} to="/comprar">Comprar Boleto</Link>
      <Link style={{ color: '#fff', margin: '0 1rem' }} to="/boletos">Mis Boletos</Link>
      <Link style={{ color: '#fff', margin: '0 1rem' }} to="/validar">Validar QR</Link>
    </nav>
  );
};

export default Navbar;
