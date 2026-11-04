import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Sebastián Hernández — Archivo de credenciales",
  description: "Una colección viva de aprendizaje, práctica y oficio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
