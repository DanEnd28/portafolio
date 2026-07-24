import Section from './Section'
import ProfileTabs from './ProfileTabs'
import { STATS, PROFILES } from '../data/content'

export default function About({ profile, onChangeProfile }) {
  const p = PROFILES[profile]

  return (
    <Section id="sobre-mi" label="// 01 · Sobre mí" title="Sobre mí">
      <div className="mb-6">
        <ProfileTabs profile={profile} onChange={onChangeProfile} size="sm" />
      </div>

      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {p.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Chips por perfil (rubros / lo que construyo / áreas) */}
      <div className="mt-8 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
          {p.chipsLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
      </div>

      {/* Métricas */}
      <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-200 bg-white p-5 text-center dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="font-mono text-2xl font-bold text-accent-soft dark:text-accent sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
