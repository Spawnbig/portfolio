import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "@/components";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Sanhueza | Ingeniero Informático",
  description:
    "Bienvenido al portafolio de Nicolas Sanhueza, ingeniero en informática especializado en desarrollo frontend y backend con experiencia en React, Angular, NestJS.",
  keywords: [
    "Nicolas Sanhueza",
    "portafolio",
    "ingeniero informático",
    "desarrollador frontend",
    "desarrollador backend",
    "React",
    "Angular",
    "Next.js",
    "NestJS",
    "desarrollo web",
    "innovación",
    "IA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" className="background-animate">
      <body
        className={`${interFont.className} mx-auto w-full px-5 md:gap-10 flex xl:w-3/5 relative`}
      >
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
