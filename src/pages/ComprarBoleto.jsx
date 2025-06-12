export default function ComprarBoleto() { return (import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ComprarBoleto() {
  const [rutas, setRutas] = useState([])
  const [seleccionada, setSeleccionada] = useState(null)
  const [qr, setQr] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/rutas').then(res => setRutas(res.data))
  }, [])

  const comprar = async () => {
    const token = localStorage.getItem('token')
    if (!token || !seleccionada) return
    const res = await axios.post('http://localhost:3001/api/boletos/comprar',
      { usuarioId: 1, rutaId: seleccionada },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    setQr(res.data.qrCode)
  }

  return (
    <div>
      <h2>Comprar Boleto</h2>
      <select onChange={e => setSeleccionada(e.target.value)}>
        <option>Selecciona ruta</option>
        {rutas.map(r => <option key={r.id} value={r.id}>{r.origen} - {r.destino}</option>)}
      </select>
      <button onClick={comprar}>Comprar</button>
      {qr && <img src={qr} alt="QR del boleto" />}
    </div>
  )
}
); }