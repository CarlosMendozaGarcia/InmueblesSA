import { NextResponse } from "next/server";
import {connectDB} from "../../../lib/db";
import Propiedad, { IPropiedad } from "../../../models/Propiedad";

// GET con filtros
export async function GET(req: Request) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);

    const nombre = searchParams.get("nombre");
    const ciudad = searchParams.get("ciudad");
    const barrio = searchParams.get("barrio");
    const tipoInmueble = searchParams.get("tipoInmueble");
    const tipoVenta = searchParams.get("tipoVenta");
    const estado = searchParams.get("estado");
    const precioMinimo = searchParams.get("precioMinimo");
    const precioMaximo = searchParams.get("precioMaximo");

    // Construimos el filtro dinámico
    const filtro: any = {};

    if (nombre) filtro.nombre = { $regex: nombre, $options: "i" }; // búsqueda parcial insensible a mayúsculas
    if (ciudad) filtro.ciudad = { $regex: ciudad, $options: "i" };
    if (barrio) filtro.barrio = { $regex: barrio, $options: "i" };
    if (tipoInmueble) filtro.tipoInmueble = tipoInmueble;
    if (tipoVenta) filtro.tipoVenta = tipoVenta;
    if (estado) filtro.estado = estado;

    // Filtro de precios
    if (precioMinimo || precioMaximo) {
      filtro.precio = {};
      if (precioMinimo) filtro.precio.$gte = Number(precioMinimo);
      if (precioMaximo) filtro.precio.$lte = Number(precioMaximo);
    }

    const propiedades: IPropiedad[] = await Propiedad.find(filtro);
    return NextResponse.json(propiedades);
  } catch (error: any) {
    console.error("Error al obtener propiedades:", error);
    return NextResponse.json(
      { message: "Error al obtener propiedades", error: error.message },
      { status: 500 }
    );
  }
}

// POST → crear propiedad
export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const propiedad = new Propiedad(body);
    await propiedad.save();

    return NextResponse.json(propiedad, { status: 201 });
  } catch (error: any) {
    console.error("Error al crear propiedad:", error);
    return NextResponse.json(
      { message: "Error al crear propiedad", error: error.message },
      { status: 500 }
    );
  }
}
