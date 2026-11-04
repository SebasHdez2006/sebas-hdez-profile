export type Certificate = { id: string; title: string; issuer: string; discipline: string; file: string; type: "pdf" | "image"; year: string };

const platzi = [
  "Administración de Servidores Linux", "Agile Delivery Management", "Análisis de Datos para la Gestión de Proyectos", "Arquitectura de Software Aplicada", "Arquitectura de Sofware Profesional", "Arquitecturas CSS", "Arquitecturas Limpias para el Desarrollo de Software", "Fundamentos de Arquitectura de Software", "Fundamentos de Ingeniería de Software", "Fundamentos de Product Owner", "Fundamentos de Project Management", "Gestión de Equipos Ágiles", "Gestión de Proyectos con Jira", "Gestión para Planificar, Definir e Identificar Riesgos de un Proyecto", "Google Suite", "Herramientas y Frameworks Intermedias para Product Owners", "Historias de Usuario en Scrum", "Inglés C1", "Introducción a la Administración de Servidores Linux", "Introducción a los Microservicios", "Introducción a los Patrones de Diseño de Software", "Práctica de Project Management", "Project Management con PMBOK", "Ruta de Administración de Servidores Linux", "Ruta de Gestión de Proyectos y Metodologías Ágiles", "Scrum Master", "Scrum Profesional 2019", "Scrum Profesional 2025", "Seguimiento y Cierre de Proyectos"
];

const discipline = (title: string) => /Linux|Microservicios|Patrones|Arquitectura|Ingeniería|CSS/.test(title) ? "Tecnología" : /Inglés|Google/.test(title) ? "Herramientas" : "Gestión";
export const certificates: Certificate[] = [
  ...platzi.map((title, index) => ({ id: `platzi-${index + 1}`, title, issuer: "Platzi", discipline: discipline(title), file: `platzi-${String(index + 1).padStart(2, "0")}.pdf`, type: "pdf" as const, year: "" })),
  { id: "aws", title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", discipline: "Cloud", file: "aws-cloud-practitioner.pdf", type: "pdf", year: "" },
  { id: "photoshop", title: "Certificado Photoshop", issuer: "Adobe", discipline: "Diseño", file: "photoshop.pdf", type: "pdf", year: "" },
  { id: "scrum-local", title: "Certificado Scrum Master", issuer: "Scrum", discipline: "Gestión", file: "scrum-master.pdf", type: "pdf", year: "" },
  { id: "sic-pdf", title: "Certificado SIC", issuer: "SIC", discipline: "Formación", file: "sic.pdf", type: "pdf", year: "" },
  { id: "sic-image", title: "Certificado SIC", issuer: "SIC", discipline: "Formación", file: "sic.jpg", type: "image", year: "" }
];

export const certificateUrl = (file: string) => file.startsWith("http") ? file : encodeURI(`/certificates/${file}`);
