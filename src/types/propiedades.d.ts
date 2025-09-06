export type TipoInmueble = "Casa" | "Apartamento" | "Lote" | "Oficina";
export type TipoVenta = "Arriendo" | "Venta";
export type EstadoPropiedad = "Nuevo" | "Destacado";

export interface PropiedadDTO {
  nombre: string;
  ciudad: string;
  barrio: string;
  tipoInmueble: TipoInmueble;
  precio: number;
  tipoVenta: TipoVenta;
  especificaciones: string[];
  estado?: EstadoPropiedad;
}

export interface PropiedadResponse extends PropiedadDTO {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
