"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
type StoredItem = { id: string; title: string; issuer: string };

export default function AdminPanel() {
  const { data: session, status } = useSession(); const [message, setMessage] = useState(""); const [busy, setBusy] = useState(false); const [items, setItems] = useState<StoredItem[]>([]);
  async function refresh() { const response = await fetch("/api/admin/documents"); if (response.ok) setItems(await response.json()); }
  useEffect(() => { if (session) refresh(); }, [session]);
  async function upload(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setBusy(true); setMessage(""); const form = new FormData(event.currentTarget); const result = await fetch("/api/admin/documents", { method: "POST", body: form }); const payload = await result.json(); setMessage(payload.message || (result.ok ? "Documento añadido." : "No se pudo guardar.")); setBusy(false); if (result.ok) { event.currentTarget.reset(); refresh(); } }
  async function remove(id: string) { if (!confirm("¿Eliminar este documento del archivo?")) return; setBusy(true); const result = await fetch("/api/admin/documents", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) }); const payload = await result.json(); setMessage(payload.message); setBusy(false); if (result.ok) refresh(); }
  if (status === "loading") return <p>Cargando acceso…</p>;
  if (!session) return <div className="admin-login"><p className="eyebrow">Acceso restringido</p><h1>El archivo también tiene un cuarto de trabajo.</h1><p>Inicia sesión con la cuenta de GitHub autorizada para modificar la colección.</p><button onClick={() => signIn("github")}>Entrar con GitHub ↗</button></div>;
  return <div className="admin-panel"><div className="admin-bar"><span>Sesión: @{session.login}</span><button onClick={() => signOut()}>Cerrar sesión</button></div><h1>Agregar una pieza</h1><p>El archivo se guarda directamente en el repositorio y el sitio se actualiza tras el siguiente despliegue.</p><form onSubmit={upload}><label>Título<input name="title" required maxLength={120} /></label><label>Entidad emisora<input name="issuer" required maxLength={80} /></label><label>Disciplina<input name="discipline" required maxLength={50} placeholder="Ej. Tecnología" /></label><label>Documento (PDF, JPG, PNG o WEBP)<input name="file" required type="file" accept="application/pdf,image/jpeg,image/png,image/webp" /></label><button disabled={busy}>{busy ? "Subiendo…" : "Añadir al archivo"}</button>{message && <p className="notice">{message}</p>}</form>{items.length > 0 && <section className="manage"><p className="eyebrow">Documentos añadidos</p>{items.map(item => <div key={item.id}><span>{item.title}<small>{item.issuer}</small></span><button disabled={busy} onClick={() => remove(item.id)}>Eliminar</button></div>)}</section>}</div>;
}
