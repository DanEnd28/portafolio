import Section from './Section'
import Gallery from './Gallery'
import { FRONTEND_PROJECTS } from '../data/content'
import { FaCartShopping, FaStore, FaLaptopCode } from 'react-icons/fa6'

// Icono de respaldo cuando un proyecto no tiene imágenes.
const PLACEHOLDER_ICONS = {
  ecommerce: FaCartShopping,
  store: FaStore,
  app: FaLaptopCode,
}

function ImagePlaceholder({ type }) {
  const Icon = PLACEHOLDER_ICONS[type] || FaLaptopCode
  return (
    <div className="mb-5 flex aspect-video items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-accent/10 to-accent2/10 dark:border-white/10">
      <Icon className="h-14 w-14 text-accent2/70 dark:text-accent2/80" aria-hidden />
    </div>
  )
}

export default function FrontendProjects() {
  return (
    <Section id="frontend" label="// 05 · Frontend" title="Proyectos frontend">
      <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
        Interfaces y sistemas de gestión que construí como desarrollador front-end.
        Haz click en una imagen para ampliarla.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {FRONTEND_PROJECTS.map((p) => (
          <article key={p.title} className="card flex flex-col">
            {p.images?.length > 0 ? (
              <div className="mb-5">
                <Gallery images={p.images} title={p.title} />
              </div>
            ) : (
              <ImagePlaceholder type={p.placeholder} />
            )}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-accent-soft dark:text-accent">
                {p.company}
              </span>
              {p.role && (
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                  · {p.role}
                </span>
              )}
            </div>

            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
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
