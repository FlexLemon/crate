import { useEffect, useState, type CSSProperties } from 'react'
import { copy, DOWNLOAD_URL, OG_IMAGE, SITE_URL, type Lang } from './copy.ts'

const STORAGE_KEY = 'crate-site-lang'

function setMeta(kind: 'name' | 'property', key: string, value: string) {
  const selector = `meta[${kind}="${key}"]`
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(kind, key)
    document.head.appendChild(node)
  }
  node.setAttribute('content', value)
}

function applySeo(lang: Lang) {
  const t = copy[lang]
  document.documentElement.lang = lang
  document.title = t.title
  setMeta('name', 'description', t.description)
  setMeta('property', 'og:title', t.title)
  setMeta('property', 'og:description', t.description)
  setMeta('property', 'og:url', SITE_URL)
  setMeta('property', 'og:image', OG_IMAGE)
  setMeta('property', 'og:locale', t.ogLocale)
  setMeta('name', 'twitter:title', t.title)
  setMeta('name', 'twitter:description', t.description)
  setMeta('name', 'twitter:image', OG_IMAGE)
}

function FlagEs() {
  return (
    <svg viewBox="0 0 21 15" aria-hidden="true">
      <rect width="21" height="15" fill="#c60b1e" />
      <rect y="4" width="21" height="7" fill="#ffc400" />
    </svg>
  )
}

function FlagEn() {
  return (
    <svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="en">
        <path d="M0 0h60v30H0z" />
      </clipPath>
      <g clipPath="url(#en)">
        <path d="M0 0h60v30H0z" fill="#012169" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  )
}

function loadLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* keep default */
  }
  return 'es'
}

export function Landing() {
  const [lang, setLang] = useState<Lang>(loadLang)
  const t = copy[lang]

  useEffect(() => {
    applySeo(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  function setLangTo(next: Lang) {
    setLang(next)
  }

  return (
    <div className="site">
      <div className="site-glow site-glow-a" />
      <div className="site-glow site-glow-b" />

      <header className="site-bar">
        <div className="site-brand">
          <img src="./logo.png?v=2" alt="" />
          <img className="site-wordmark" src="./wordmark.png?v=4" alt="Crate" />
        </div>
        <div className="site-langs" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === 'es' ? 'is-on' : ''}
            aria-pressed={lang === 'es'}
            aria-label={t.langEs}
            onClick={() => setLangTo('es')}
          >
            <FlagEs />
          </button>
          <button
            type="button"
            className={lang === 'en' ? 'is-on' : ''}
            aria-pressed={lang === 'en'}
            aria-label={t.langEn}
            onClick={() => setLangTo('en')}
          >
            <FlagEn />
          </button>
        </div>
      </header>

      <main>
        <section className="site-hero">
          <div className="site-hero-copy">
            <p className="site-kicker">{t.kicker}</p>
            <h1 className="site-visually-hidden">{t.brand}</h1>
            <p className="site-hero-mark-wrap" aria-hidden="true">
              <img className="site-hero-mark" src="./wordmark.png?v=4" alt="" />
            </p>
            <p className="site-tagline">{t.tagline}</p>
            <a className="site-download" href={DOWNLOAD_URL}>
              {t.download}
            </a>
            <p className="site-pillars">
              {t.pillars.map((item, index) => (
                <span key={item}>
                  {index ? <i>·</i> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="site-deck">
            <div className="site-glass">
              <img src="./logo.png?v=2" alt="Crate, caja de vinilos de cristal" />
            </div>
          </div>
        </section>

        <section className="site-rack">
          <h2>{t.rackTitle}</h2>
          <div className="site-modules">
            {t.modules.map((mod, index) => (
              <article key={mod.id} className={`site-module is-${mod.id}`} style={{ '--i': index } as CSSProperties}>
                <span className="site-module-state">{mod.state}</span>
                <h3>{mod.title}</h3>
                <p>{mod.lead}</p>
                <div className="site-module-face" />
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-foot">{t.copyright}</footer>
    </div>
  )
}
