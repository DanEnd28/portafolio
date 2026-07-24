import { LINKS } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
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

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="section-label">// AI Automation Engineer</p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Danny Endara
        </h1>

        <p className="mt-4 font-mono text-sm text-slate-600 sm:text-base dark:text-slate-400">
          AI Automation Engineer{' '}
          <span className="text-accent-soft dark:text-accent">|</span> n8n{' '}
          <span className="text-accent-soft dark:text-accent">·</span> GoHighLevel{' '}
          <span className="text-accent-soft dark:text-accent">·</span> Agentes Conversacionales de IA
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Construyo agentes de IA y automatizaciones en producción que no se caen
          cuando una API falla.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contacto" className="btn btn-primary">Contacto</a>
          <a href={LINKS.upwork} target="_blank" rel="noreferrer" className="btn btn-ghost">Upwork ↗</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
