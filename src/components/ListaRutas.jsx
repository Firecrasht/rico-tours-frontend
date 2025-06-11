import React, { useEffect, useState } from "react";
import axios from "axios";

const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    axios.get("/api/rutas").then((res) => {
      setRutas(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Rutas disponibles</h2>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id}>
            {ruta.origen} → {ruta.destino} | {new Date(ruta.fechaSalida).toLocaleString()} | Camión: {ruta.Camion?.modelo} ({ruta.Camion?.capacidad} asientos)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRutas;
