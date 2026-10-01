// ════════════════════════════════════════════════════════════════
//  DATOS DEL PORTAFOLIO — edita casi todo desde aquí.
//  · Este archivo: datos que NO dependen del idioma (enlaces, imágenes,
//    logos, stack, videos, secciones visibles).
//  · Textos: src/content/es.ts (español) y src/content/en.ts (inglés).
//  Guía completa en README.md (sección "Personalizar").
// ════════════════════════════════════════════════════════════════

import type { FrontendId, ProjectSlug, SocialKey, StackGroupId } from './types'

// ── Identidad (compartida en todos los perfiles) ────────────────
export const PROFILE = {
  name: 'Danny Endara',
  photo: '/foto-danny.jpg', // archivo en public/
  // CV descargable (ya está el .docx en public/; para PDF, expórtalo y cambia la ruta).
  cv: '/CV-Danny-Endara.docx',
  // Cargo que aparece en la tarjeta sobre la foto.
  headline: 'Automation Lead & AI Agent Engineer',
}

// ── Datos de contacto ───────────────────────────────────────────
export const LINKS = {
  email: 'dannyendara28@gmail.com',
  linkedin: 'https://linkedin.com/in/dannyendara',
  github: 'https://github.com/DanEnd28',
  upwork: 'https://www.upwork.com/freelancers/~01196ad5687b14fc6c',
  whatsapp: 'https://wa.me/584224543543', // +58 422-4543543
}

// ── Redes / enlaces ─────────────────────────────────────────────
// Aparecen como botones en el hero (todas menos email), filas en Contacto
// e iconos en el footer. "key" elige el icono (ver SocialIcon en icons.tsx).
// "value" es el texto visible en Contacto; el de Upwork se traduce en en.ts/es.ts.
export const SOCIALS: { key: SocialKey; label: string; value?: string; href: string }[] = [
  { key: 'email', label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
  { key: 'linkedin', label: 'LinkedIn', value: 'in/dannyendara', href: LINKS.linkedin },
  { key: 'github', label: 'GitHub', value: 'github.com/DanEnd28', href: LINKS.github },
  { key: 'upwork', label: 'Upwork', href: LINKS.upwork },
  { key: 'whatsapp', label: 'WhatsApp', value: '+58 422-4543543', href: LINKS.whatsapp },
]

// ── Asistente de chat (widget flotante) ─────────────────────────
// Se conecta al webhook de n8n de la variable NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL.
// Si "enabled" es false o no hay webhook, el widget no aparece.
// Los textos del chat están en en.ts / es.ts (bloque "chat").
export const CHAT = { enabled: true }

// ── Secciones visibles (ACTIVA / DESACTIVA) ─────────────────────
// Pon en false una sección que no quieras mostrar (también sale del menú).
export const SECTIONS = {
  proyectosAutomatizacion: true,
  proyectosFrontend: true,
  educacion: true,
}

// ── Proyectos de automatización ─────────────────────────────────
// Los textos (título, problema, resultado) están en en.ts / es.ts por slug.
// "wf": nombre del workflow que aparece arriba del diagrama.
// "featured": la tarjeta ocupa todo el ancho.
//
// VIDEOS (opcional): cuando tengas la animación de un proyecto, guarda el MP4
// en public/videos/<slug>.mp4 y pon aquí video: '/videos/<slug>.mp4'.
// Se reproduce en bucle, sin sonido, solo cuando la tarjeta está a la vista,
// y no se reproduce si el visitante pidió reducir el movimiento.
// Mientras "video" esté vacío se muestra el diagrama del workflow.
// Formato recomendado: 16:9, 1280×720, H.264, menos de 4 MB.
export const PROJECTS: {
  slug: ProjectSlug
  wf: string
  featured?: boolean
  stack: string[]
  video: string
}[] = [
  {
    slug: 'ai-booking-agent-dental',
    wf: 'dental-booking-agent',
    featured: true,
    stack: ['n8n', 'WhatsApp', 'Clinic management API', 'GoHighLevel', 'Claude / GPT'],
    video: '/videos/ai-booking-agent-dental.mp4',
  },
  {
    slug: 'multichannel-messaging-backend',
    wf: 'shared-messaging-webhook',
    stack: ['n8n', 'GoHighLevel', 'Redis', 'LLM', 'Webhooks'],
    video: '/videos/multichannel-messaging-backend.mp4',
  },
  {
    slug: 'ghl-scheduling-tools',
    wf: 'ghl-booking-tools',
    stack: ['n8n', 'GoHighLevel API v2', 'JavaScript', 'Webhooks'],
    video: '/videos/ghl-scheduling-tools.mp4',
  },
  {
    slug: 'mcp-multitenant-clinic',
    wf: 'clinic-mcp-server',
    stack: ['TypeScript', 'MCP SDK', 'Express', 'Zod', 'Docker'],
    video: '/videos/mcp-multitenant-clinic.mp4',
  },
  {
    slug: 'n8n-error-handler',
    wf: 'central-error-handler',
    stack: ['n8n', 'Error Trigger', 'Google Sheets', 'Slack', 'Email'],
    video: '/videos/n8n-error-handler.mp4',
  },
]

// ── Proyectos frontend reales (profesionales / freelance) ───────
// Textos en en.ts / es.ts. "image": captura en public/proyectos/ (o null para
// mostrar un icono). Las capturas se ven en 16:9 recortadas desde arriba.
export const FRONTEND_PROJECTS: { id: FrontendId; company: string; image: string | null; stack: string[] }[] = [
  { id: 'alfanar', company: 'Alfanar Energía', image: '/proyectos/alfanar-3.png', stack: ['React', 'Tailwind CSS', 'TypeScript', 'Docker'] },
  { id: 'sinteg', company: 'Centro Policlínico Valencia', image: '/proyectos/sinteg-1.png', stack: ['React', 'Tailwind CSS', 'Material UI', 'Redux', 'PostgreSQL'] },
  { id: 'syscam', company: 'Centro Policlínico Valencia', image: '/proyectos/syscam-1.png', stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'] },
  { id: 'ecommerce', company: 'S&H Software', image: null, stack: ['React', 'JavaScript', 'API REST', 'Tailwind'] },
]

// ── Stack técnico ───────────────────────────────────────────────
// "logos": tecnologías con logo (archivo SVG en public/logos/<logo>.svg,
// se sacan de simple-icons.org). El resto ("También") está en en.ts / es.ts.
export const TECH_STACK: { id: StackGroupId; logos: { name: string; logo: string }[] }[] = [
  {
    id: 'automation',
    logos: [
      { name: 'n8n', logo: 'n8n' },
      { name: 'Claude / GPT', logo: 'claude' },
      { name: 'WhatsApp / Meta API', logo: 'whatsapp' },
      { name: 'Telegram', logo: 'telegram' },
      { name: 'Redis', logo: 'redis' },
      { name: 'Supabase', logo: 'supabase' },
      { name: 'MCP', logo: 'modelcontextprotocol' },
    ],
  },
  {
    id: 'frontend',
    logos: [
      { name: 'React', logo: 'react' },
      { name: 'Next.js', logo: 'nextdotjs' },
      { name: 'TypeScript', logo: 'typescript' },
    ],
  },
  {
    id: 'infra',
    logos: [
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'Docker', logo: 'docker' },
    ],
  },
]

// ── Carrusel de tecnologías bajo el hero ────────────────────────
// "logo" es opcional (sin logo se muestra solo el nombre).
export const MARQUEE: { name: string; logo?: string }[] = [
  { name: 'n8n', logo: 'n8n' },
  { name: 'Claude', logo: 'claude' },
  { name: 'OpenAI', logo: 'openai' },
  { name: 'MCP', logo: 'modelcontextprotocol' },
  { name: 'GoHighLevel' },
  { name: 'WhatsApp API', logo: 'whatsapp' },
  { name: 'Redis', logo: 'redis' },
  { name: 'Supabase', logo: 'supabase' },
  { name: 'PostgreSQL', logo: 'postgresql' },
  { name: 'React', logo: 'react' },
  { name: 'Next.js', logo: 'nextdotjs' },
  { name: 'TypeScript', logo: 'typescript' },
  { name: 'Docker', logo: 'docker' },
  { name: 'Retell AI' },
  { name: 'Telegram', logo: 'telegram' },
]
