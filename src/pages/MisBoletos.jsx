import { useEffect, useState } from "react";
import api from "../api";
import { getUserIdFromToken } from "../utils/auth";

export default function MisBoletos() {
  const [boletos, setBoletos] = useState([]);

  useEffect(() => {
    const fetchBoletos = async () => {
      const id = getUserIdFromToken();
      if (!id) return;
      const res = await api.get(`/boletos/usuario/${id}`);
      setBoletos(res.data);
    };
    fetchBoletos();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mis Boletos</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Ruta</th>
            <th className="px-4 py-2 border">Fecha</th>
            <th className="px-4 py-2 border">Estado</th>
            <th className="px-4 py-2 border">QR</th>
          </tr>
        </thead>
        <tbody>
          {boletos.map((b) => (
            <tr key={b.id}>
              <td className="px-4 py-2 border">{b.ruta.origen} - {b.ruta.destino}</td>
              <td className="px-4 py-2 border">{new Date(b.ruta.fechaSalida).toLocaleString()}</td>
              <td className="px-4 py-2 border">{b.usado ? "Usado" : "No usado"}</td>
              <td className="px-4 py-2 border">
                <img src={b.qrCode} alt="QR" width="60" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
