import { faker } from "@faker-js/faker";
import { connectDB } from "../src/lib/db";
import Propiedad from "../src/models/Propiedad";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" })

console.log("🔍 URI desde seed:", process.env.MONGODB_URI);
async function seed() {
  try {
    await connectDB();

    // Limpiar la colección antes de insertar
    await Propiedad.deleteMany({});

    const tiposInmueble = ["casa", "Apartamento", "Lote", "Oficina"];
    const tiposVenta = ["Arriendo", "Venta"];
    const estados = ["Nuevo", "Destacado"];

    const propiedades = Array.from({ length: 50 }).map(() => ({
      nombre: faker.company.name(), // Nombre llamativo tipo inmobiliario
      ciudad: faker.location.city(),
      barrio: faker.location.street(),
      tipoInmueble: faker.helpers.arrayElement(tiposInmueble),
      precio: faker.number.int({ min: 80000000, max: 800000000 }),
      tipoVenta: faker.helpers.arrayElement(tiposVenta),
      especificaciones: [
        `${faker.number.int({ min: 1, max: 5 })} habitaciones`,
        `${faker.number.int({ min: 1, max: 4 })} baños`,
        faker.helpers.arrayElement(["Balcón", "Parqueadero", "Terraza", "Patio"]),
      ],
      estado: faker.helpers.arrayElement(estados),
    }));

    await Propiedad.insertMany(propiedades);

    console.log("✅ Seed completado: 20 propiedades con datos aleatorios insertadas.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error en el seed:", error);
    process.exit(1);
  }
}

seed();
