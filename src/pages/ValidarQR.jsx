export default function ValidarQR() { return (import { useState } from 'react'
import axios from 'axios'

export default function ValidarQR() {
  const [codigo, setCodigo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const validar = async () => {
    const res = await axios.post('http://localhost:3001/api/boletos/validar', { codigo })
    setMensaje(res.data.mensaje)
  }

  return (
    <div>
      <h2>Validador de Boleto</h2>
      <input type="text" placeholder="Código escaneado" onChange={e => setCodigo(e.target.value)} />
      <button onClick={validar}>Validar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}
); }