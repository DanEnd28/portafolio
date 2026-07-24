import { PROFILES, PROFILE_ORDER } from '../data/content'

// Selector de enfoque (segmented control). Controla el mismo estado global
// desde el hero, "Sobre mí" y "Qué hago".
export default function ProfileTabs({ profile, onChange, size = 'md' }) {
  const pad = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
      {PROFILE_ORDER.map((key) => {
        const active = key === profile
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            aria-pressed={active}
            className={`rounded-lg font-mono font-medium transition-colors ${pad} ${
              active
                ? 'bg-white text-slate-900 shadow-sm dark:bg-accent dark:text-slate-900'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {PROFILES[key].label}
          </button>
        )
      })}
    </div>
  )
}
