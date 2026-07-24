import { PROFILE, SOCIALS } from '../data/content'
import { socialIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Identidad */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-bold">
              <span className="text-accent-soft dark:text-accent">&gt;_</span> {PROFILE.name}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Automatización & IA · Frontend · Sistemas — abierto a nuevas oportunidades.
            </p>
          </div>

          {/* Iconos de redes */}
          <div className="flex flex-wrap justify-center gap-2">
            {SOCIALS.map(({ key, href, icon, label }) => {
              const Icon = socialIcon(icon)
              return (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:hover:border-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-[11px] text-slate-400 dark:text-slate-600">
          © 2026 {PROFILE.name} · Construido con React + Vite + Tailwind
        </p>
      </div>
    </footer>
  )
}
