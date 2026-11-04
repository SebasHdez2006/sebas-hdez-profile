"use client";
import { useEffect, useMemo, useState } from "react";
import type { Certificate } from "@/data/certificates";
import { certificateUrl } from "@/data/certificates";

export default function Gallery({ initialCertificates, disciplines }: { initialCertificates: Certificate[]; disciplines: string[] }) {
  const [active, setActive] = useState("Todo"); const [allCertificates, setAllCertificates] = useState(initialCertificates);
  const [selected, setSelected] = useState<Certificate | null>(null);
  useEffect(() => { fetch("https://raw.githubusercontent.com/SebasHdez2006/sebas-hdez-profile/main/data/custom-certificates.json").then(result => result.ok ? result.json() : []).then((items: Certificate[]) => setAllCertificates([...initialCertificates, ...items])).catch(() => undefined); }, [initialCertificates]);
  const visible = useMemo(() => active === "Todo" ? allCertificates : allCertificates.filter(item => item.discipline === active), [active, allCertificates]); const filters = ["Todo", ...new Set([...disciplines, ...allCertificates.map(item => item.discipline)])];
  return <section className="archive" id="archivo"><div className="archive-head"><div><p className="eyebrow">Archivo de credenciales</p><h2>Aprender, dejar<br />constancia, seguir.</h2></div><p className="archive-count">{visible.length.toString().padStart(2, "0")} piezas seleccionadas</p></div>
    <div className="filters">{filters.map(filter => <button key={filter} onClick={() => setActive(filter)} className={active === filter ? "active" : ""}>{filter}</button>)}</div>
    <div className="grid">{visible.map((item, index) => <button className="card" style={{ "--delay": `${index * 35}ms` } as React.CSSProperties} onClick={() => setSelected(item)} key={item.id}><span className="card-index">{String(index + 1).padStart(2, "0")}</span><div className={`art art-${index % 6}`}><span>{item.issuer.slice(0, 1)}</span><small>{item.discipline}</small></div><div className="card-meta"><p>{item.issuer}</p><h3>{item.title}</h3><span>Ver documento <i>↗</i></span></div></button>)}</div>
    {selected && <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button className="close" onClick={() => setSelected(null)}>Cerrar ×</button><div className="viewer" onClick={event => event.stopPropagation()}>{selected.type === "pdf" ? <iframe title={selected.title} src={certificateUrl(selected.file)} /> : <img alt={selected.title} src={certificateUrl(selected.file)} />}<div className="viewer-meta"><p className="eyebrow">{selected.issuer} · {selected.discipline}</p><h2>{selected.title}</h2><a href={certificateUrl(selected.file)} target="_blank">Abrir documento ↗</a></div></div></div>}
  </section>;
}
