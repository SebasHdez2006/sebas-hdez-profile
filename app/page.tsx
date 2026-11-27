"use client";

import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";
import { certificates } from "@/data/certificates";
import { isLocale, localeOptions, translations, type Locale } from "@/data/translations";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    const browserLanguage = window.navigator.language.slice(0, 2);
    setLocale(isLocale(stored) ? stored : isLocale(browserLanguage) ? browserLanguage : "es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("language", locale);
  }, [locale]);

  const copy = translations[locale];
  const disciplines = [...new Set(certificates.map(item => item.discipline))];
  const formatCount = (template: string, count: number) => template.replace("{count}", count.toString());

  return <main>
    <section className="hero" id="inicio">
      <div className="grain" />
      <nav>
        <a className="wordmark" href="#inicio">SH<span>·</span>ARCHIVE</a>
        <div className="nav-actions">
          <label className="language-picker">
            <span>{copy.languageLabel}</span>
            <select aria-label={copy.languageLabel} value={locale} onChange={event => setLocale(event.target.value as Locale)}>
              {localeOptions.map(option => <option key={option.code} value={option.code}>{option.label}</option>)}
            </select>
          </label>
          <a className="nav-link" href="#archivo">{copy.exploreArchive} <i>↘</i></a>
        </div>
      </nav>
      <div className="hero-copy">
        <p className="eyebrow">{copy.collection}</p>
        <h1>{copy.heroTitleStart}<br /><em>{copy.heroTitleEmphasis}</em></h1>
        <p className="intro">{copy.intro}</p>
      </div>
      <div className="hero-foot">
        <span>{copy.location}</span>
        <span>{copy.scroll}</span>
        <span>{formatCount(copy.documents, certificates.length)}</span>
      </div>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
    </section>
    <section className="manifesto">
      <p className="eyebrow">{copy.aboutEyebrow}</p>
      <p className="statement">{copy.statementBefore}<em>{copy.statementEmphasis}</em>{copy.statementAfter}</p>
    </section>
    <Gallery initialCertificates={certificates} disciplines={disciplines} copy={copy} />
    <footer>
      <span>© {new Date().getFullYear()} Sebastián Hernández</span>
      <a href="https://github.com/SebasHdez2006/sebas-hdez-profile" target="_blank" rel="noreferrer">{copy.sourceArchive} ↗</a>
      <span>{copy.madeWith}</span>
    </footer>
  </main>;
}
