import Section from './Section'
import { BRAND } from './BrandIcons'
import { TECH_STACK } from '../data/content'

function TechCard({ name, brand }) {
  const entry = brand ? BRAND[brand] : null

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
      {entry ? (
        <entry.Icon
          className="h-6 w-6 shrink-0 transition-transform group-hover:scale-110"
          style={{ color: entry.color }}
          aria-hidden
        />
      ) : (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-accent2" />
        </span>
      )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <Section id="stack" label="// 06 · Herramientas" title="Stack técnico">
      <div className="space-y-10">
        {TECH_STACK.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => (
                <TechCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
