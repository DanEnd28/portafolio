import Section from './Section'
import { STATS, INDUSTRIES } from '../data/content'

export default function About() {
  return (
    <Section id="sobre-mi" label="// 01 · Sobre mí" title="Sobre mí">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          Vengo de un rol reciente donde lideré la ingeniería de automatización de una
          plataforma de agentes de IA con sede en Miami, dando soporte a más de{' '}
          <span className="font-semibold text-slate-900 dark:text-white">250 clientes activos simultáneos</span>{' '}
          en múltiples rubros.
        </p>
        <p>
          Mi diferencial no es solo conectar nodos: es diseñar sistemas que{' '}
          <span className="font-semibold text-slate-900 dark:text-white">no se caen cuando una API externa falla</span>.
          Clasificación de errores por tipo (rate-limit, timeout, auth, error de
          servidor), reintentos con backoff exponencial + jitter y diagnóstico por causa
          raíz antes de aplicar soluciones. Esa disciplina viene de sostener sistemas
          reales en producción, no de proyectos de práctica.
        </p>
        <p>
          Tengo base sólida de frontend (React, TypeScript, Tailwind), que uso para
          cerrar soluciones de punta a punta: automatización, IA y la interfaz que las
          consume.
        </p>
      </div>

      {/* Rubros */}
      <div className="mt-8 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
          Rubros con los que he trabajado
        </p>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map((industry) => (
            <span key={industry} className="chip">{industry}</span>
          ))}
          <span className="chip border-dashed text-slate-400 dark:text-slate-500">y más</span>
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
