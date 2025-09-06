import mongoose, { Schema, Document } from "mongoose";
import { TipoInmueble, TipoVenta, EstadoPropiedad } from "../types/propiedades";

export interface IPropiedad extends Document {
  nombre: string;
  ciudad: string;
  barrio: string;
  tipoInmueble: TipoInmueble;
  precio: number;
  tipoVenta: TipoVenta;
  especificaciones: string[];
  estado?: EstadoPropiedad;
}

const PropiedadSchema: Schema = new Schema(
  {
    nombre: { type: String, required: true },
    ciudad: { type: String, required: true },
    barrio: { type: String, required: true },
    tipoInmueble: {
      type: String,
      enum: ["Casa", "Apartamento", "Lote", "Oficina"],
      required: true,
    },
    precio: { type: Number, required: true },
    tipoVenta: {
      type: String,
      enum: ["Arriendo", "Venta"],
      required: true,
    },
    especificaciones: [{ type: String }],
    estado: { type: String, enum: ["Nuevo", "Destacado"], default: "Nuevo" },
  },
  { timestamps: true }
);

export default mongoose.models.Propiedad ||
  mongoose.model<IPropiedad>("Propiedad", PropiedadSchema);
