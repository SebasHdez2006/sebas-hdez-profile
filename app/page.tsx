import Gallery from "@/components/Gallery";
import { certificates } from "@/data/certificates";

export default function Home() {
  const disciplines = new Set(certificates.map(item => item.discipline));
  return <main>
    <section className="hero" id="inicio">
      <div className="grain" />
      <nav><a className="wordmark" href="#inicio">SH<span>·</span>ARCHIVE</a><a className="nav-link" href="#archivo">Explorar archivo <i>↘</i></a></nav>
      <div className="hero-copy"><p className="eyebrow">Colección 01 — 2026</p><h1>El oficio<br /><em>en progreso.</em></h1><p className="intro">Un archivo personal de aprendizaje: tecnología, producto, gestión y las ideas que conectan los puntos.</p></div>
      <div className="hero-foot"><span>San Salvador, ES</span><span>↓ desplázate para explorar</span><span>{certificates.length} documentos</span></div>
      <div className="orb orb-one" /><div className="orb orb-two" />
    </section>
    <section className="manifesto"><p className="eyebrow">Sobre el archivo</p><p className="statement">Las credenciales son <em>rastros.</em> Lo que importa es la curiosidad sostenida, el trabajo que dejan detrás y lo que permiten construir después.</p></section>
    <Gallery initialCertificates={certificates} disciplines={[...disciplines]} />
    <footer><span>© {new Date().getFullYear()} Sebastián Hernández</span><a href="https://github.com/SebasHdez2006/sebas-hdez-profile" target="_blank" rel="noreferrer">Archivo fuente ↗</a><span>Hecho con intención</span></footer>
  </main>;
}
