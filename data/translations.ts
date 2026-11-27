export type Locale = "es" | "en" | "pt";

export type Translation = {
  exploreArchive: string;
  collection: string;
  heroTitleStart: string;
  heroTitleEmphasis: string;
  intro: string;
  location: string;
  scroll: string;
  documents: string;
  aboutEyebrow: string;
  statementBefore: string;
  statementEmphasis: string;
  statementAfter: string;
  archiveEyebrow: string;
  archiveTitleStart: string;
  archiveTitleEnd: string;
  piecesSelected: string;
  all: string;
  viewDocument: string;
  close: string;
  openDocument: string;
  sourceArchive: string;
  madeWith: string;
  languageLabel: string;
  disciplines: Record<string, string>;
};

export const localeOptions: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" }
];

export const isLocale = (value: string | null): value is Locale => value === "es" || value === "en" || value === "pt";

export const translations: Record<Locale, Translation> = {
  es: {
    exploreArchive: "Explorar archivo",
    collection: "Colección 01 — 2026",
    heroTitleStart: "El oficio",
    heroTitleEmphasis: "en progreso.",
    intro: "Un archivo personal de aprendizaje: tecnología, producto, gestión y las ideas que conectan los puntos.",
    location: "San Salvador, ES",
    scroll: "↓ desplázate para explorar",
    documents: "{count} documentos",
    aboutEyebrow: "Sobre el archivo",
    statementBefore: "Las credenciales son ",
    statementEmphasis: "rastros.",
    statementAfter: " Lo que importa es la curiosidad sostenida, el trabajo que dejan detrás y lo que permiten construir después.",
    archiveEyebrow: "Archivo de credenciales",
    archiveTitleStart: "Aprender, dejar",
    archiveTitleEnd: "constancia, seguir.",
    piecesSelected: "{count} piezas seleccionadas",
    all: "Todo",
    viewDocument: "Ver documento",
    close: "Cerrar",
    openDocument: "Abrir documento",
    sourceArchive: "Archivo fuente",
    madeWith: "Hecho con intención",
    languageLabel: "Idioma",
    disciplines: {
      Cloud: "Cloud",
      Diseño: "Diseño",
      Formación: "Formación",
      Gestión: "Gestión",
      Herramientas: "Herramientas",
      Tecnología: "Tecnología"
    }
  },
  en: {
    exploreArchive: "Explore archive",
    collection: "Collection 01 — 2026",
    heroTitleStart: "The craft",
    heroTitleEmphasis: "in progress.",
    intro: "A personal learning archive: technology, product, management, and the ideas that connect the dots.",
    location: "San Salvador, SV",
    scroll: "↓ scroll to explore",
    documents: "{count} documents",
    aboutEyebrow: "About the archive",
    statementBefore: "Credentials are ",
    statementEmphasis: "traces.",
    statementAfter: " What matters is sustained curiosity, the work they leave behind, and what they make it possible to build next.",
    archiveEyebrow: "Credential archive",
    archiveTitleStart: "Learn, document,",
    archiveTitleEnd: "keep going.",
    piecesSelected: "{count} selected pieces",
    all: "All",
    viewDocument: "View document",
    close: "Close",
    openDocument: "Open document",
    sourceArchive: "Source archive",
    madeWith: "Made with intention",
    languageLabel: "Language",
    disciplines: {
      Cloud: "Cloud",
      Diseño: "Design",
      Formación: "Training",
      Gestión: "Management",
      Herramientas: "Tools",
      Tecnología: "Technology"
    }
  },
  pt: {
    exploreArchive: "Explorar arquivo",
    collection: "Coleção 01 — 2026",
    heroTitleStart: "O ofício",
    heroTitleEmphasis: "em progresso.",
    intro: "Um arquivo pessoal de aprendizagem: tecnologia, produto, gestão e as ideias que conectam os pontos.",
    location: "San Salvador, SV",
    scroll: "↓ role para explorar",
    documents: "{count} documentos",
    aboutEyebrow: "Sobre o arquivo",
    statementBefore: "As credenciais são ",
    statementEmphasis: "rastros.",
    statementAfter: " O que importa é a curiosidade sustentada, o trabalho que deixam para trás e o que permitem construir depois.",
    archiveEyebrow: "Arquivo de credenciais",
    archiveTitleStart: "Aprender, registrar,",
    archiveTitleEnd: "continuar.",
    piecesSelected: "{count} peças selecionadas",
    all: "Tudo",
    viewDocument: "Ver documento",
    close: "Fechar",
    openDocument: "Abrir documento",
    sourceArchive: "Arquivo fonte",
    madeWith: "Feito com intenção",
    languageLabel: "Idioma",
    disciplines: {
      Cloud: "Cloud",
      Diseño: "Design",
      Formación: "Formação",
      Gestión: "Gestão",
      Herramientas: "Ferramentas",
      Tecnología: "Tecnologia"
    }
  }
};
