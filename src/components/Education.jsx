import Section from './Section'
import { EDUCATION, CERTS, LANGUAGES } from '../data/content'

export default function Education() {
  return (
    <Section id="educacion" label="// 07 · Formación" title="Educación e idiomas">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Educación + certificaciones */}
        <div>
          {EDUCATION.map((ed) => (
            <div key={ed.title} className="card">
              <h3 className="text-base font-semibold">{ed.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{ed.place}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">{ed.period}</p>
              <p className="mt-3 text-sm text-accent-soft dark:text-accent">{ed.note}</p>
            </div>
          ))}

          <div className="mt-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
              Formación complementaria
            </p>
            <ul className="space-y-2">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-1 text-accent-soft dark:text-accent">▹</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
            Idiomas
          </p>
          <div className="space-y-3">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="font-mono text-xs text-slate-500">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
