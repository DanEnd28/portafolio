import { PROFILE, PROFILES, SOCIALS } from '../data/content'
import ProfileTabs from './ProfileTabs'
import { socialIcon } from './SocialIcons'
import { FaArrowRightLong, FaLocationDot, FaDownload } from 'react-icons/fa6'

export default function Hero({ profile, onChangeProfile }) {
  const p = PROFILES[profile]

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Fondo técnico sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px] dark:bg-accent/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-40 h-64 w-64 rounded-full bg-accent2/20 blur-[110px] dark:bg-accent2/25"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Selector de enfoque */}
        <div className="mb-8">
          <p className="mb-2 font-mono text-xs text-slate-400 dark:text-slate-500">
            // elige el enfoque
          </p>
          <ProfileTabs profile={profile} onChange={onChangeProfile} />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          {/* Texto */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-600 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {PROFILE.availableLabel}
            </span>

            <p className="section-label">// {p.tagline}</p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{PROFILE.name}</h1>

            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm sm:text-base">
              <span className="text-slate-800 dark:text-slate-100">{p.roles[0]}</span>
              {p.roles[1] && (
                <>
                  <span className="text-accent-soft dark:text-accent">+</span>
                  <span className="text-slate-800 dark:text-slate-100">{p.roles[1]}</span>
                </>
              )}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {p.intro}
            </p>

            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-slate-500">
              <FaLocationDot className="text-accent-soft dark:text-accent" /> {PROFILE.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-primary">
                Contacto <FaArrowRightLong />
              </a>
              <a href={PROFILE.cv} download className="btn btn-ghost">
                <FaDownload /> Descargar CV
              </a>
              {SOCIALS.filter((s) => s.key !== 'email').map((s) => {
                const Icon = socialIcon(s.icon)
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <Icon style={{ color: s.color }} /> {s.label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Foto */}
          <div className="order-first justify-self-center md:order-last">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-accent/30 shadow-xl dark:border-accent/40">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="h-72 w-60 object-cover object-center sm:h-80 sm:w-64"
                />
              </div>
              <span className="absolute -bottom-3 left-4 rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] text-slate-500 shadow-sm dark:border-white/10 dark:bg-[#0e1626]">
                ~/danny
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
