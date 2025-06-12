import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#eee" }}>
    <Link to="/">Inicio</Link> |{" "}
    <Link to="/login">Iniciar Sesión</Link> |{" "}
    <Link to="/comprar">Comprar Boleto</Link>
  </nav>
);

export default Navbar;