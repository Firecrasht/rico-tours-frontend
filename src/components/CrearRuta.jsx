import React, { useEffect, useState } from "react";
import axios from "axios";

const CrearRuta = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [camionId, setCamionId] = useState("");
  const [camiones, setCamiones] = useState([]);

  useEffect(() => {
    axios.get("/api/camiones").then((res) => {
      setCamiones(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/rutas", { origen, destino, fechaSalida, camionId });
    alert("Ruta creada correctamente");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Ruta</h2>
      <input type="text" placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value)} />
      <input type="text" placeholder="Destino" value={destino} onChange={(e) => setDestino(e.target.value)} />
      <input type="datetime-local" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} />
      <select value={camionId} onChange={(e) => setCamionId(e.target.value)}>
        <option value="">Selecciona un camión</option>
        {camiones.map((c) => (
          <option key={c.id} value={c.id}>
            {c.modelo} ({c.capacidad} asientos)
          </option>
        ))}
      </select>
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearRuta;
