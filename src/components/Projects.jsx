import Section from './Section'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <Section id="proyectos" label="// 04 · Automatización & IA" title="Proyectos de automatización">
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card flex flex-col">
            {/* Placeholder de imagen/GIF — reemplaza por una captura del proyecto */}
            <div className="mb-5 flex aspect-video items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 dark:border-white/10 dark:bg-white/5">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                [ imagen / gif por completar ]
              </span>
            </div>

            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-ghost text-xs">
                Ver en GitHub ↗
              </a>
              <p className="mt-3 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                * Proyecto de portafolio — arquitectura de demostración.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
