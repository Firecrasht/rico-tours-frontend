import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="text" placeholder="Correo" /><br />
        <input type="password" placeholder="Contraseña" /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;