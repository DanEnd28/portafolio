import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'stack', label: 'Stack' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? 'border-b border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0a0f1a]/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-accent-soft dark:text-accent">&gt;_</span> DanEnd28
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-slate-300 p-2 dark:border-white/15"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-3 md:hidden dark:border-white/10 dark:bg-[#0a0f1a]">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-slate-600 dark:text-slate-300"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function ThemeButton({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Cambiar tema"
      className="rounded-md border border-slate-300 p-2 text-sm transition-colors hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/5"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
