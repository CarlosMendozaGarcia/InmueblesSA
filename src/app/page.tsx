"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [activeServices, setActiveServices] = useState<number[]>([]);

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

  const toggleService = (index: number) => {
    if (activeServices.includes(index)) {
      setActiveServices(activeServices.filter((i) => i !== index));
    } else {
      setActiveServices([...activeServices, index]);
    }
  };

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
                  <div
                    onClick={() => toggleService(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={service.img}
                      width={40}
                      height={40}
                      alt={service.alt}
                    />
                  </div>
                  <p
                    className={`${styles.serviceText} ${
                      activeServices.includes(index) ? styles.open : ""
                    }`}
                  >
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.allies_section}>
        <div className="allies-content">
          <h2>Nuestros Aliados</h2>
          <div className="display-allies">
            
          </div>
        </div>
      </section>
    </div>
  );
}
