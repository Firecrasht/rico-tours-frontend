export default function Login() { return (import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      alert('Login exitoso')
    } catch (e) {
      alert('Error en login')
    }
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Entrar</button>
    </div>
  )
}
); }