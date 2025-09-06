import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inmuebles SA",
  description: "Pagina desarrollado por Carlos Andres Mendoza Garcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className="logo">
              <h1>InmueblesSA</h1>
            </div>
            <div className={styles.nav_links}>
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/Search">Buscar propiedad</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
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
      </body>
    </html>
  );
}
