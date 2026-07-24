// Iconos de marca (react-icons/si + fa6) y un logo custom para GoHighLevel.
import {
  SiN8N,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiWhatsapp,
  SiTelegram,
  SiGooglecalendar,
  SiClaude,
} from 'react-icons/si'

// Logo custom para GoHighLevel (no está en la librería de iconos).
export function GhlIcon({ className, style }) {
  const { color, ...rest } = style || {}
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[5px] font-mono font-bold ${className}`}
      style={{ background: color || 'currentColor', fontSize: '1.5rem', ...rest }}
    >
      <span className="text-[0.36em] leading-none text-slate-900">GHL</span>
    </span>
  )
}

// Icono para Claude/GPT: usamos el de Claude como representante de "modelos de lenguaje".
export { SiClaude as AiIcon }

// Mapa de marca → { Icon, color }. El color es el oficial de cada marca.
export const BRAND = {
  n8n: { Icon: SiN8N, color: '#EA4B71' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  react: { Icon: SiReact, color: '#61DAFB' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  tailwind: { Icon: SiTailwindcss, color: '#38BDF8' },
  postgres: { Icon: SiPostgresql, color: '#4169E1' },
  supabase: { Icon: SiSupabase, color: '#3FCF8E' },
  whatsapp: { Icon: SiWhatsapp, color: '#25D366' },
  telegram: { Icon: SiTelegram, color: '#26A5E4' },
  gcalendar: { Icon: SiGooglecalendar, color: '#4285F4' },
  ai: { Icon: SiClaude, color: '#D97757' },
  ghl: { Icon: GhlIcon, color: '#2DD4BF' },
}
