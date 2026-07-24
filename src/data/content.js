// ────────────────────────────────────────────────────────────────
// Datos del portafolio. Reemplaza los placeholders marcados con TODO.
// ────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Danny Endara',
  // Roles que se muestran en el hero (automatización + frontend).
  roles: ['AI Automation Engineer', 'Frontend Developer (React)'],
  tagline: 'n8n · GoHighLevel · Agentes Conversacionales de IA · React',
  intro:
    'Construyo agentes de IA y automatizaciones en producción que no se caen cuando una API falla — y las interfaces en React que las hacen visibles.',
  // Tu foto ya está en public/foto-danny.jpg
  photo: '/foto-danny.jpg',
  available: true, // muestra el indicador "Disponible para proyectos"
  location: 'Valencia, Venezuela · Remoto', // TODO: ajusta si quieres
}

export const LINKS = {
  email: 'dannyendara28@gmail.com', // TODO: confirma el email que prefieres exponer
  linkedin: 'https://linkedin.com/in/tu-usuario', // TODO: pega la URL real de tu LinkedIn
  github: 'https://github.com/DanEnd28',
  upwork: 'https://www.upwork.com/freelancers/tu-usuario', // TODO: pega la URL real de Upwork
  whatsapp: 'https://wa.me/584244543543', // +58 424-4543543
}

// Métricas cortas que aparecen bajo "Sobre mí".
export const STATS = [
  { value: '250+', label: 'clientes activos simultáneos' },
  { value: '15 meses', label: 'sosteniendo sistemas en producción' },
  { value: '24/7', label: 'automatizaciones que no se detienen' },
]

// Rubros en los que ha trabajado (se muestran como chips en "Sobre mí").
export const INDUSTRIES = [
  'Salud & Estética',
  'Bienes Raíces',
  'Educación',
  'Retail',
  'Logística & Envíos',
]

export const WHAT_I_DO = [
  {
    icon: '⚙️',
    title: 'Automatización de procesos',
    desc: 'Flujos en n8n desde simples hasta arquitecturas complejas con colas, reintentos y manejo de errores tipado. Sistemas que se sostienen sin supervisión constante.',
    tag: 'n8n · Webhooks · Redis',
  },
  {
    icon: '🤖',
    title: 'Agentes conversacionales de IA',
    desc: 'Bots para WhatsApp, Telegram e Instagram con memoria, tool calling y bases de conocimiento que no alucinan tus datos, más escalamiento a asesor humano.',
    tag: 'WhatsApp · Telegram · Instagram',
  },
  {
    icon: '🔌',
    title: 'Integraciones API y CRM',
    desc: 'Conecto GoHighLevel, Google Calendar, Supabase y PostgreSQL para sincronizar datos y automatizar agendamiento, seguimiento y facturación.',
    tag: 'GoHighLevel · Google · Supabase',
  },
  {
    icon: '⚛️',
    title: 'Desarrollo frontend',
    desc: 'React, TypeScript y Tailwind para construir dashboards e interfaces en tiempo real que exponen y visualizan lo que las automatizaciones producen.',
    tag: 'React · TypeScript · Tailwind',
  },
]

export const PROJECTS = [
  {
    title: 'Agente de IA en WhatsApp y Telegram con tools',
    desc: 'Agente conversacional en n8n (nodo AI Agent con Claude/GPT) conectado a tres tools reales: leer y filtrar un catálogo en Google Sheets, registrar nuevos leads y agendar citas en Google Calendar. Con manejo de errores tipado y documentación en Sticky Notes.',
    stack: ['n8n', 'Claude/GPT API', 'WhatsApp API', 'Telegram', 'Google Calendar'],
    repo: 'https://github.com/DanEnd28/agente-whatsapp-telegram', // TODO: crea el repo y ajusta la URL
  },
  {
    title: 'Sistema de reintentos y manejo de errores',
    desc: 'Capa de resiliencia en n8n: fuerza fallos específicos (429, 500, 503, timeout), los clasifica por tipo con un Switch y reintenta con backoff exponencial + jitter hasta un máximo de intentos. Cada intento queda registrado con timestamp, tipo de error y resultado.',
    stack: ['n8n', 'JavaScript', 'Webhook', 'Error handling'],
    repo: 'https://github.com/DanEnd28/n8n-retry-error-handling', // TODO
  },
  {
    title: 'Integración GoHighLevel + WhatsApp',
    desc: 'Reconstrucción de la arquitectura de un agente GHL + WhatsApp: un webhook parsea el payload de GHL (contacto, teléfono, mensaje, customData), un AI Agent lo procesa con base de conocimiento y responde vía la API de mensajería, con patrón set_tag visible para escalar a un humano y sanitización de salida.',
    stack: ['n8n', 'GoHighLevel', 'WhatsApp API', 'IA Conversacional'],
    repo: 'https://github.com/DanEnd28/ghl-whatsapp-n8n', // TODO
  },
  {
    title: 'Agente IA + Supabase + Dashboard en tiempo real',
    desc: 'Ciclo completo: un agente en n8n captura datos estructurados de una conversación, clasifica urgencia y categoría con un LLM y los inserta en Supabase. Un dashboard en React (Vite) consume esa tabla en tiempo real vía Supabase Realtime y visualiza los leads por categoría y estado.',
    stack: ['n8n', 'Supabase', 'React', 'LLM'],
    repo: 'https://github.com/DanEnd28/agente-supabase-dashboard', // TODO
  },
]
