"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./search.module.css";

const tipoInmueble = ["Apartamento", "Casa", "Oficina", "Local"];
const tipoVenta = ["Venta", "Arriendo"];
const estadoInmueble = ["Nuevo", "Destacado"];

export default function Search() {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [tipo, setTipo] = useState("");
  const [venta, setVenta] = useState("");
  const [estado, setEstado] = useState("");
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [precioMaximo, setPrecioMaximo] = useState(0);

  const [resultados, setResultados] = useState<any[]>([]);

  const handleBuscar = async () => {
    try {
      const params = new URLSearchParams();

      if (nombre) params.append("nombre", nombre);
      if (ciudad) params.append("ciudad", ciudad);
      if (barrio) params.append("barrio", barrio);
      if (tipo) params.append("tipoInmueble", tipo);
      if (venta) params.append("tipoVenta", venta);
      if (estado) params.append("estado", estado);
      if (precioMinimo > 0)
        params.append("precioMinimo", precioMinimo.toString());
      if (precioMaximo > 0)
        params.append("precioMaximo", precioMaximo.toString());

      const res = await fetch(`/api/propiedades?${params.toString()}`);
      const data = await res.json();
      setResultados(data);
    } catch (error) {
      console.error("Error al buscar propiedades:", error);
    }
  };

  return (
    <div className={styles.searchpage}>
      <section>
        <div className={styles.search_filters}>
          <div className={styles.filters_input_main}>
            <label htmlFor="nombre">Nombre de propiedad:</label>
            <input
              className={styles.input}
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Buscar propiedad"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className={styles.filters_input}>
            <label htmlFor="ciudad">Ciudad:</label>
            <input
              className={styles.input}
              type="text"
              name="ciudad"
              id="ciudad"
              placeholder="Ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
          <div className={styles.filters_input}>
            <label htmlFor="barrio">Barrio:</label>
            <input
              className={styles.input}
              type="text"
              name="barrio"
              id="barrio"
              placeholder="Barrio"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
            />
          </div>
          <div className={styles.filters}>
            <label htmlFor="tipoInmueble">Tipo de inmueble:</label>
            <select className={styles.select}
              name="tipoInmueble"
              id="tipoInmueble"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="" disabled>
                Tipo de inmueble
              </option>
              {tipoInmueble.map((tipo, index) => (
                <option key={index} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filters}>
            <label htmlFor="tipoVenta">Tipo de Venta:</label>
            <select
              className={styles.select}
              name="tipoVenta"
              id="tipoVenta"
              value={venta}
              onChange={(e) => setVenta(e.target.value)}
            >
              <option value="" disabled>
                Tipo de venta
              </option>
              {tipoVenta.map((tipo, index) => (
                <option key={index} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filters}>
            <label htmlFor="estado">Estado: </label>
            <select
              className={styles.select}
              name="estado"
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="" disabled>
                Estado
              </option>
              {estadoInmueble.map((tipo, index) => (
                <option key={index} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filters}>
            <label htmlFor="precioMinimo">Precio Minimo</label>
            <input
              type="range"
              name="precioMinimo"
              id="precioMinimo"
              min="0"
              max="100000000"
              value={precioMinimo}
              onChange={(e) => setPrecioMinimo(Number(e.target.value))}
            />
            <label>{`$${precioMinimo.toLocaleString()}`}</label>
          </div>
          <div className={styles.filters}>
            <label htmlFor="precioMaximo">Precio Maximo</label>
            <input
              type="range"
              name="precioMaximo"
              id="precioMaximo"
              min="0"
              max="100000000"
              value={precioMaximo}
              onChange={(e) => setPrecioMaximo(Number(e.target.value))}
            />
            <label>{`$${precioMaximo.toLocaleString()}`}</label>
          </div>
          <button className={styles.button} onClick={handleBuscar}>
            Buscar
          </button>
        </div>
        <div className={styles.results}>
          {resultados.length > 0 ? (
            resultados.map((propiedad) => (
              <div key={propiedad._id} className={styles.card}>
                <h3>{propiedad.nombre}</h3>
                <p>
                  {propiedad.ciudad} - {propiedad.barrio}
                </p>
                <p>
                  {propiedad.tipoInmueble} | {propiedad.tipoVenta}
                </p>
                <p>💲 {propiedad.precio.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </div>
      </section>
    </div>
  );
}
