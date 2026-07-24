// ────────────────────────────────────────────────────────────────
// Datos del portafolio. Reemplaza los placeholders marcados con TODO.
// ────────────────────────────────────────────────────────────────

export const LINKS = {
  email: 'tu-email@ejemplo.com', // TODO: tu email real
  linkedin: 'https://linkedin.com/in/tu-usuario', // TODO
  github: 'https://github.com/tu-usuario', // TODO
  upwork: 'https://www.upwork.com/freelancers/tu-usuario', // TODO
  whatsapp: 'https://wa.me/000000000000', // TODO (opcional): incluye código de país sin +
}

export const WHAT_I_DO = [
  {
    icon: '⚙️',
    title: 'Automatización de procesos',
    desc: 'Diseño y construyo flujos en n8n que orquestan APIs, bases de datos y servicios de mensajería en producción.',
    tag: 'n8n',
  },
  {
    icon: '🤖',
    title: 'Agentes conversacionales de IA',
    desc: 'Bots inteligentes en WhatsApp, Telegram e Instagram con memoria, tools y manejo de contexto sobre modelos de lenguaje.',
    tag: 'WhatsApp · Telegram · Instagram',
  },
  {
    icon: '🔌',
    title: 'Integraciones API y CRM',
    desc: 'Conecto GoHighLevel, Google Calendar, Supabase y más para sincronizar datos y automatizar agendamiento y seguimiento.',
    tag: 'GoHighLevel · Google · Supabase',
  },
  {
    icon: '⚛️',
    title: 'Desarrollo frontend',
    desc: 'React, TypeScript y Tailwind como complemento: dashboards y interfaces que exponen la data de mis automatizaciones.',
    tag: 'React (complemento)',
  },
]

export const PROJECTS = [
  {
    title: 'Agente conversacional multicanal con tools',
    desc: 'Agente de IA en WhatsApp/Telegram que consulta y escribe en Google Sheets y agenda en Google Calendar mediante tool calling.',
    stack: ['n8n', 'Claude/GPT API', 'Google Sheets', 'Google Calendar'],
    repo: 'https://github.com/tu-usuario/proyecto-1', // TODO
  },
  {
    title: 'Sistema de manejo de errores y reintentos',
    desc: 'Arquitectura resiliente en n8n con captura de errores, reintentos exponenciales y alertas cuando una API externa falla.',
    stack: ['n8n', 'Redis', 'Error handling'],
    repo: 'https://github.com/tu-usuario/proyecto-2', // TODO
  },
  {
    title: 'GoHighLevel + WhatsApp para atención y agendamiento',
    desc: 'Integración bidireccional que sincroniza contactos y conversaciones de WhatsApp con el CRM y automatiza el agendamiento de citas.',
    stack: ['GoHighLevel', 'WhatsApp API', 'n8n'],
    repo: 'https://github.com/tu-usuario/proyecto-3', // TODO
  },
  {
    title: 'Dashboard con agente IA + Supabase en tiempo real',
    desc: 'Panel en React que muestra métricas y conversaciones en vivo, alimentado por un agente de IA y una base Supabase con suscripciones realtime.',
    stack: ['React', 'Supabase', 'Claude/GPT API'],
    repo: 'https://github.com/tu-usuario/proyecto-4', // TODO
  },
]

export const TECH_STACK = [
  'n8n',
  'JavaScript',
  'React',
  'PostgreSQL',
  'Supabase',
  'GoHighLevel',
  'WhatsApp API',
  'Telegram Bot API',
  'Google Calendar API',
  'Claude / GPT API',
]
