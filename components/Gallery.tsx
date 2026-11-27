"use client";

import { useMemo, useState } from "react";
import type { Certificate } from "@/data/certificates";
import { certificateUrl } from "@/data/certificates";
import type { Translation } from "@/data/translations";

export default function Gallery({ initialCertificates, disciplines, copy }: { initialCertificates: Certificate[]; disciplines: string[]; copy: Translation }) {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const visible = useMemo(() => active === "all" ? initialCertificates : initialCertificates.filter(item => item.discipline === active), [active, initialCertificates]);
  const filters = ["all", ...disciplines];
  const disciplineLabel = (discipline: string) => copy.disciplines[discipline] || discipline;
  const filterLabel = (filter: string) => filter === "all" ? copy.all : disciplineLabel(filter);
  const piecesSelected = copy.piecesSelected.replace("{count}", visible.length.toString().padStart(2, "0"));

  return <section className="archive" id="archivo">
    <div className="archive-head">
      <div>
        <p className="eyebrow">{copy.archiveEyebrow}</p>
        <h2>{copy.archiveTitleStart}<br />{copy.archiveTitleEnd}</h2>
      </div>
      <p className="archive-count">{piecesSelected}</p>
    </div>
    <div className="filters">
      {filters.map(filter => <button key={filter} onClick={() => setActive(filter)} className={active === filter ? "active" : ""}>{filterLabel(filter)}</button>)}
    </div>
    <div className="grid">
      {visible.map((item, index) => <button className="card" style={{ "--delay": `${index * 35}ms` } as React.CSSProperties} onClick={() => setSelected(item)} key={item.id}>
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        <div className={`art art-${index % 6}`}>
          <span>{item.issuer.slice(0, 1)}</span>
          <small>{disciplineLabel(item.discipline)}</small>
        </div>
        <div className="card-meta">
          <p>{item.issuer}</p>
          <h3>{item.title}</h3>
          <span>{copy.viewDocument} <i>↗</i></span>
        </div>
      </button>)}
    </div>
    {selected && <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
      <button className="close" onClick={() => setSelected(null)}>{copy.close} ×</button>
      <div className="viewer" onClick={event => event.stopPropagation()}>
        {selected.type === "pdf" ? <iframe title={selected.title} src={certificateUrl(selected.file)} /> : <img alt={selected.title} src={certificateUrl(selected.file)} />}
        <div className="viewer-meta">
          <p className="eyebrow">{selected.issuer} · {disciplineLabel(selected.discipline)}</p>
          <h2>{selected.title}</h2>
          <a href={certificateUrl(selected.file)} target="_blank" rel="noreferrer">{copy.openDocument} ↗</a>
        </div>
      </div>
    </div>}
  </section>;
}
