import { LINKS, PROFILE } from '../data/content'
import { FaLinkedin, FaGithub, FaArrowRightLong, FaLocationDot, FaDownload } from 'react-icons/fa6'
import { SiUpwork } from 'react-icons/si'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
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
      {/* Halo de color detrás de la foto */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px] dark:bg-accent/25"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        {/* Columna de texto */}
        <div>
          {PROFILE.available && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-600 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Disponible para proyectos
            </span>
          )}

          <p className="section-label">// {PROFILE.tagline}</p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{PROFILE.name}</h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm sm:text-base">
            <span className="text-slate-800 dark:text-slate-100">{PROFILE.roles[0]}</span>
            <span className="text-accent-soft dark:text-accent">+</span>
            <span className="text-slate-800 dark:text-slate-100">{PROFILE.roles[1]}</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {PROFILE.intro}
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
            <a href={LINKS.upwork} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <SiUpwork className="text-[#6FDA44]" /> Upwork
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FaLinkedin className="text-[#0A66C2]" /> LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Columna de foto */}
        <div className="order-first justify-self-center md:order-last">
          <div className="relative">
            {/* Marco desplazado estilo técnico */}
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-2xl border border-accent/40"
              style={{ transform: 'translate(10px, 10px)' }}
            />
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-white/10">
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="h-72 w-60 object-cover object-top sm:h-80 sm:w-64"
              />
            </div>
            {/* Etiqueta monoespaciada en la esquina */}
            <span className="absolute -bottom-3 left-4 rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] text-slate-500 shadow-sm dark:border-white/10 dark:bg-[#0e1626]">
              ~/danny
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
