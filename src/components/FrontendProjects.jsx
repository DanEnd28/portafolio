import Section from './Section'
import { FRONTEND_PROJECTS } from '../data/content'

export default function FrontendProjects() {
  return (
    <Section id="frontend" label="// 05 · Frontend" title="Proyectos frontend">
      <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
        Interfaces y sistemas de gestión que construí como desarrollador front-end,
        antes y en paralelo a mi trabajo de automatización.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {FRONTEND_PROJECTS.map((p) => (
          <article key={p.title} className="card flex flex-col">
            <span className="font-mono text-xs text-accent-soft dark:text-accent">
              {p.company}
            </span>
            <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-slate-400 dark:text-slate-500">
              * Proyecto profesional — código propiedad del cliente.
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
