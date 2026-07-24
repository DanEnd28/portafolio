import Section from './Section'
import { BRAND } from './BrandIcons'

// Stack agrupado: deja claro que el portafolio cubre automatización + frontend.
const GROUPS = [
  {
    title: 'Automatización · IA · Backend',
    items: [
      { name: 'n8n', brand: 'n8n' },
      { name: 'GoHighLevel', brand: 'ghl' },
      { name: 'Claude / GPT API', brand: 'ai' },
      { name: 'WhatsApp API', brand: 'whatsapp' },
      { name: 'Telegram Bot API', brand: 'telegram' },
      { name: 'Google Calendar API', brand: 'gcalendar' },
      { name: 'PostgreSQL', brand: 'postgres' },
      { name: 'Supabase', brand: 'supabase' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', brand: 'react' },
      { name: 'TypeScript', brand: 'typescript' },
      { name: 'JavaScript', brand: 'javascript' },
      { name: 'Tailwind CSS', brand: 'tailwind' },
    ],
  },
]

function TechCard({ name, brand }) {
  const { Icon, color } = BRAND[brand]
  return (
    <div
      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]"
      style={{ '--brand': color }}
    >
      <Icon
        className="h-6 w-6 shrink-0 transition-transform group-hover:scale-110"
        style={{ color }}
        aria-hidden
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <Section id="stack" label="// 06 · Herramientas" title="Stack técnico">
      <div className="space-y-10">
        {GROUPS.map((group) => (
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
