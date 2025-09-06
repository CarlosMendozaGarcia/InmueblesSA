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

  const allieslist= [
    {
      imagen:"data:image/png;base64,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",
      title:"Constructora Bolivar",
      text:"Empresa dedicada a la construcción de viviendas vis",
    },
    {
      imagen:"data:image/png;base64,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",
      title:"Constructora Amarilo",
      text:"Constructora lider en desarrollo de proyectos mobiliarios en la ciudad de Barranquilla",
    }

  ]
  const toggleService = (index: number) => {
    if (activeServices.includes(index)) {
      setActiveServices(activeServices.filter((i) => i !== index));
    } else {
      setActiveServices([...activeServices, index]);
    }
  };

  return (
    <div className={styles.landingpage}>
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
        <div className={styles.allies_content}>
          <h2>Nuestros Aliados</h2>
          <div className={styles.allies}>
            {allieslist.map((allie, index) => (
              <div key={index} className={styles.card_allies}>
                <Image
                  src={allie.imagen}
                  width={100}
                  height={100}
                  alt={allie.title}
                />
                <h3>{allie.title}</h3>
                <p>{allie.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
