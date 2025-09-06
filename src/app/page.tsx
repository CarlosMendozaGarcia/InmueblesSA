import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const serviceslist = [
    {
      img: "/service_1.svg",
      alt: "compra-venta de inmuebles",
      text: "compra-venta de inmuebles",
    },
    {
      img: "/service_2.svg",
      alt: "Asesorías legales",
      text: "Asesorías legales",
    },
    {
      img: "/service_3.svg",
      alt: "Avalúos inmobiliarios",
      text: "Avalúos inmobiliarios",
    },
    {
      img: "/service_4.svg",
      alt: "Administración de propiedades",
      text: "Administración de propiedades",
    },
    {
      img: "/service_5.svg",
      alt: "Marketing y visibilidad",
      text: "Marketing y visibilidad",
    },
  ];
  return (
    <div>
      <section className={styles.welcome_section}>
        <Image src="/Banner.png" fill alt="Banner" className={styles.banner} />
        <div className={styles.welcome_content}>
          <div className="welcome-text">
            <h1>Bienvenido a Inmuebles SA</h1>
            <p>Encuentra la casa de tus sueños a pocos clicks</p>
          </div>
        </div>
      </section>
      <section className={styles.services_section}>
        <div className={styles.services_content}>
          <div className={styles.services_title}>
            <h2>Nuestros Servicios</h2>
          </div>
          <div className={styles.services_list}>
            <ul>
              {serviceslist.map((service, index) => (
                <li key={index}>
                  <Image
                    src={service.img}
                    width={40}
                    height={40}
                    alt={service.alt}
                  />
                  <p>{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.allies_section}>
        <div className="allies-content">
          <h2>Nuestros Aliados</h2>
          <div className="display-allies"></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className="Navegación">
            <p>Navegación</p>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/Search">Buscar propiedad</Link>
              </li>
            </ul>
          </div>
          <div className="Contacto">
            <p>Contacto</p>
            <ul>
              <li>Tel: +57 123 456 7890</li>
              <li>Email: inmueblessa@enterprise.com</li>
            </ul>
          </div>
          <div className="Redes sociales">
            <p>Redes sociales</p>
            <ul>
              <li>Facebook: Inmuebles SA</li>
              <li>Instagram: @InmueblesSA</li>
              <li>X: inmueblesSA</li>
            </ul>
          </div>
        </div>
        <p>desarrollado por Carlos Andres Mendoza Garcia </p>
      </footer>
    </div>
  );
}
