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
  // CV descargable. Ya está el .docx en public/; para un PDF, expórtalo y cambia a
  // '/CV-Danny-Endara.pdf' (colocando el archivo en public/).
  cv: '/CV-Danny-Endara.docx',
  available: true, // muestra el indicador "Disponible para proyectos"
  location: 'Valencia, Venezuela · Remoto',
}

export const LINKS = {
  email: 'dannyendara28@gmail.com',
  linkedin: 'https://linkedin.com/in/dannyendara',
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
    desc: 'Bots para WhatsApp, Telegram e Instagram (y voz con Retell AI) con memoria, tool calling y bases de conocimiento que no alucinan tus datos, más escalamiento a asesor humano.',
    tag: 'WhatsApp · Telegram · Voz',
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

// Experiencia laboral (timeline). "current: true" resalta el rol actual.
export const EXPERIENCE = [
  {
    role: 'Automation Lead / Encargado de Ingeniería',
    company: 'Lety.AI · Miami',
    period: 'Dic. 2025 – Jul. 2026',
    current: true,
    desc: 'Lideré una flota de agentes conversacionales de IA en producción para más de 250 clientes activos simultáneos. Diseñé el sistema de reintentos con backoff exponencial + jitter, construí flujos end-to-end en n8n (WhatsApp/Meta, GoHighLevel, Claude/GPT) y un sistema de llamadas salientes con agentes de voz (Retell AI) integrado a facturación.',
    tags: ['n8n', 'GoHighLevel', 'Retell AI', 'Claude/GPT'],
  },
  {
    role: 'Prompt Engineer',
    company: 'Lety.AI · Miami',
    period: 'Abr. 2025 – Dic. 2025',
    desc: 'Diseñé, versioné y optimicé prompts de sistema y bases de conocimiento para agentes en salud, bienes raíces, educación y retail. Diagnostiqué y corregí fallos de enrutamiento, memoria conversacional y alucinaciones mediante análisis de logs.',
    tags: ['Prompt Engineering', 'Bases de conocimiento', 'n8n'],
  },
  {
    role: 'Analista Programador',
    company: 'Centro Policlínico Valencia',
    period: 'Ago. 2022 – Nov. 2024',
    desc: 'Desarrollé sistemas para modernizar la gestión clínica: control de asistencia de RRHH, gestión de seguros médicos y programación de citas. Soporte técnico continuo y resolución de incidencias a usuarios internos.',
    tags: ['JavaScript', 'SQL Server', 'Soporte TI'],
  },
  {
    role: 'Desarrollador Front-End',
    company: 'Alfanar Energía · freelance',
    period: '2024 – 2025',
    desc: 'Interfaz de un módulo de RRHH para gestión de solicitudes de vacaciones y notificaciones en tiempo real, con datos extraídos de API.',
    tags: ['React', 'API REST', 'Tailwind'],
  },
  {
    role: 'Desarrollador Front-End',
    company: 'S&H Software · freelance',
    period: '2023 – 2024',
    desc: 'E-commerce dinámico y personalizado, adaptado en tiempo real según datos de API, con módulo de compras y cálculo automático de precios.',
    tags: ['React', 'JavaScript', 'API REST'],
  },
]

// Proyectos de automatización / IA (demos de portafolio).
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

// Proyectos frontend reales (trabajo profesional / freelance).
export const FRONTEND_PROJECTS = [
  {
    title: 'E-commerce dinámico',
    company: 'S&H Software',
    desc: 'Tienda en línea personalizada que se adapta en tiempo real según datos de la API de la empresa, con módulo de compras y cálculo automático de precios.',
    stack: ['React', 'JavaScript', 'API REST', 'Tailwind'],
  },
  {
    title: 'Módulo de RRHH · Gestión de vacaciones',
    company: 'Alfanar Energía',
    desc: 'Interfaz para la solicitud y aprobación de vacaciones con notificaciones en tiempo real, alimentada por datos extraídos de API.',
    stack: ['React', 'Redux', 'API REST'],
  },
  {
    title: 'Sistemas de gestión clínica',
    company: 'Centro Policlínico Valencia',
    desc: 'Módulos para control de asistencia de RRHH, gestión de seguros médicos y programación de citas, modernizando la operación de la clínica.',
    stack: ['JavaScript', 'SQL Server', 'Bootstrap'],
  },
]

// Formación académica.
export const EDUCATION = [
  {
    title: 'Técnico Superior Universitario en Informática',
    place: 'Instituto Universitario "Juan Pablo Pérez Alfonzo" (IUTEPAL)',
    period: '2021 – 2022',
    note: 'Certificado de excelencia académica · 2.º mejor promedio de la promoción.',
  },
]

export const CERTS = [
  'Taller de Ciberdefensa · CIIL (2022)',
  'Emprendimiento Profesional (2019)',
  'Herramientas de Ofimática · Inces (2016)',
]

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Conversacional / Técnico' },
]
