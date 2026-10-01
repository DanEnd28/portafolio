'use client'

import { useState, useSyncExternalStore, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import { LANGS, type Lang } from '@/content/types'
import { UiIcon } from '../icons'

export interface NavLink {
  href: string
  label: string
}

interface Props {
  lang: Lang
  links: NavLink[]
  labels: { menu: string; theme: string; language: string; main: string; mobile: string }
}

const subscribeScroll = (cb: () => void) => {
  window.addEventListener('scroll', cb, { passive: true })
  return () => window.removeEventListener('scroll', cb)
}

// Recuerda el idioma elegido para la redirección de "/".
function rememberLang(l: Lang) {
  document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`
}

export default function Nav({ lang, links, labels }: Props) {
  const router = useRouter()
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 8, () => false)
  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* sin almacenamiento */
    }
  }

  // Cambia de /en a /es (o al revés) conservando ?perfil= y el #hash.
  const switchLang = (e: MouseEvent, l: Lang) => {
    e.preventDefault()
    if (l === lang) return
    rememberLang(l)
    const { search, hash } = window.location
    router.push(`/${l}${search}${hash}`, { scroll: !!hash })
  }

  return (
    <>
      <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
        <div className="wrap nav-in">
          <a href="#top" className="brand" aria-label="Danny Endara">
            <span className="brand-mark" aria-hidden="true">DE</span>
            <span className="bt">Danny Endara</span>
          </a>
          <nav className="links" aria-label={labels.main}>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-tools">
            <div className="seg" role="group" aria-label={labels.language}>
              {LANGS.map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  hrefLang={l}
                  lang={l}
                  className="seg-btn"
                  aria-current={l === lang ? 'true' : undefined}
                  onClick={(e) => switchLang(e, l)}
                >
                  {l.toUpperCase()}
                </a>
              ))}
            </div>
            <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={labels.theme}>
              <UiIcon name="sun" className="i-sun" />
              <UiIcon name="moon" className="i-moon" />
            </button>
            <button
              type="button"
              className="icon-btn burger"
              aria-label={labels.menu}
              aria-expanded={open}
              aria-controls="mnav"
              onClick={() => setOpen((o) => !o)}
            >
              <UiIcon name={open ? 'close' : 'burger'} />
            </button>
          </div>
        </div>
      </header>
      <nav id="mnav" className={`mnav${open ? ' open' : ''}`} aria-label={labels.mobile}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  )
}
