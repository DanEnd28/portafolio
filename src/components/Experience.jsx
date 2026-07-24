import Section from './Section'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <Section id="experiencia" label="// 03 · Trayectoria" title="Experiencia">
      <ol className="relative ml-3 border-l border-slate-200 dark:border-white/10">
        {EXPERIENCE.map((job, i) => (
          <li key={i} className="relative pb-10 pl-8 last:pb-0">
            {/* Punto en la línea de tiempo */}
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                job.current
                  ? 'border-accent bg-accent'
                  : 'border-slate-300 bg-white dark:border-white/20 dark:bg-[#0a0f1a]'
              }`}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              {job.current && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[11px] text-accent-soft dark:text-accent">
                  actual
                </span>
              )}
            </div>

            <p className="mt-0.5 font-mono text-sm text-accent-soft dark:text-accent">
              {job.company}
            </p>
            <p className="mt-0.5 font-mono text-xs text-slate-500">{job.period}</p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {job.desc}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
