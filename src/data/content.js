// ════════════════════════════════════════════════════════════════
//  DATOS DEL PORTAFOLIO — edita casi todo desde aquí.
//  Guía completa de configuración en README.md (sección "Personalizar").
// ════════════════════════════════════════════════════════════════

// ── Identidad (compartida en todos los perfiles) ────────────────
export const PROFILE = {
  name: 'Danny Endara',
  photo: '/foto-danny.jpg',
  // CV descargable (ya está el .docx en public/; para PDF, expórtalo y cambia la ruta).
  cv: '/CV-Danny-Endara.docx',
  availableLabel: 'Disponible',
  location: 'Valencia, Venezuela · Remoto',
}

// ── Datos de contacto ───────────────────────────────────────────
export const LINKS = {
  email: 'dannyendara28@gmail.com',
  linkedin: 'https://linkedin.com/in/dannyendara',
  github: 'https://github.com/DanEnd28',
  upwork: 'https://www.upwork.com/freelancers/~01196ad5687b14fc6c',
  whatsapp: 'https://wa.me/584224543543', // +58 422-4543543
}

// ── Redes / enlaces (CONFIGURABLE) ──────────────────────────────
// Estos aparecen como botones en el hero, tarjetas en Contacto e iconos
// en el footer. Para AGREGAR una red: copia una línea y cambia sus datos.
//   - icon: nombre de un icono disponible en SocialIcons.jsx
//     (email, linkedin, github, upwork, whatsapp, instagram, x, youtube, website, telegram)
//   - value: texto visible en la tarjeta de contacto
//   - color: color de marca (hex) para el icono
export const SOCIALS = [
  { key: 'email', label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, icon: 'email', color: '#22d3ee' },
  { key: 'linkedin', label: 'LinkedIn', value: 'in/dannyendara', href: LINKS.linkedin, icon: 'linkedin', color: '#0A66C2' },
  { key: 'github', label: 'GitHub', value: 'github.com/DanEnd28', href: LINKS.github, icon: 'github', color: '#a855f7' },
  { key: 'upwork', label: 'Upwork', value: 'Perfil freelance', href: LINKS.upwork, icon: 'upwork', color: '#6FDA44' },
  { key: 'whatsapp', label: 'WhatsApp', value: '+58 422-4543543', href: LINKS.whatsapp, icon: 'whatsapp', color: '#25D366' },
  // Ejemplo para agregar otra red (descomenta y ajusta):
  // { key: 'instagram', label: 'Instagram', value: '@tu_usuario', href: 'https://instagram.com/tu_usuario', icon: 'instagram', color: '#E4405F' },
]

// ── Secciones visibles (ACTIVA / DESACTIVA) ─────────────────────
// Pon en false una sección que aún no quieras mostrar.
export const SECTIONS = {
  proyectosAutomatizacion: false, // ← desactivada por ahora (sin imágenes listas)
  proyectosFrontend: true,
  educacion: true,
}

// ── Perfiles / enfoques ─────────────────────────────────────────
// El selector del hero cambia entre estos. Enlace directo: ?perfil=ia|frontend|ti
export const PROFILE_ORDER = ['ia', 'frontend', 'ti']

export const PROFILES = {
  ia: {
    label: 'IA & Automatización',
    roles: ['AI Automation Engineer', 'Frontend Developer (React)'],
    tagline: 'n8n · GoHighLevel · Agentes Conversacionales de IA',
    intro:
      'Construyo agentes de IA y automatizaciones en producción que no se caen cuando una API falla — desde el flujo en n8n hasta la interfaz en React que los hace visibles.',
    about: [
      'Vengo de un rol reciente donde lideré la ingeniería de automatización de una plataforma de agentes de IA con sede en Miami, dando soporte a más de 250 clientes activos simultáneos en múltiples rubros.',
      'Mi diferencial no es solo conectar nodos: es diseñar sistemas que no se caen cuando una API externa falla. Clasificación de errores por tipo (rate-limit, timeout, auth, servidor), reintentos con backoff exponencial + jitter y diagnóstico por causa raíz antes de aplicar soluciones.',
      'Entrego el sistema completo: arquitectura del agente (WhatsApp, Instagram, voz con Retell AI), orquestación en n8n, integración con CRM (GoHighLevel) y modelos de lenguaje (Claude, GPT), más la capa de resiliencia que lo mantiene operativo sin supervisión.',
    ],
    chipsLabel: 'Rubros con los que he trabajado',
    chips: ['Salud & Estética', 'Bienes Raíces', 'Educación', 'Retail', 'Logística & Envíos', 'y más'],
    // Métricas (solo para este perfil de automatización).
    stats: [
      { value: '250+', label: 'clientes activos simultáneos' },
      { value: '15 meses', label: 'sosteniendo sistemas en producción' },
      { value: '24/7', label: 'sistemas que no se detienen' },
    ],
    services: [
      { icon: '⚙️', title: 'Automatización de procesos', desc: 'Flujos en n8n desde simples hasta arquitecturas complejas con colas, reintentos y manejo de errores tipado.', tag: 'n8n · Webhooks · Redis' },
      { icon: '🤖', title: 'Agentes conversacionales', desc: 'WhatsApp, Instagram, Telegram y voz (Retell AI) con memoria, tool calling y bases de conocimiento que no alucinan.', tag: 'WhatsApp · Voz · Telegram' },
      { icon: '🧩', title: 'Resiliencia y manejo de errores', desc: 'Clasificación de errores por tipo, backoff exponencial + jitter, reportes de incidencias y diagnóstico por causa raíz.', tag: 'Retry · Backoff · RCA' },
      { icon: '🔌', title: 'Integraciones API y CRM', desc: 'GoHighLevel (contactos, citas, facturación), Google Calendar, Supabase y PostgreSQL.', tag: 'GoHighLevel · Supabase' },
      { icon: '⚛️', title: 'Dashboards en React', desc: 'Interfaces en tiempo real que consumen y visualizan la data de las automatizaciones.', tag: 'React · Realtime' },
    ],
  },

  frontend: {
    label: 'Frontend',
    roles: ['Frontend Developer', 'React · TypeScript'],
    tagline: 'React · TypeScript · Tailwind · Redux · Material UI',
    intro:
      'Construyo interfaces y sistemas de gestión con React: componentes reutilizables, responsive y de alto rendimiento, conectados a APIs reales.',
    about: [
      'Desarrollador front-end con experiencia construyendo sistemas de gestión completos: e-commerce dinámico, módulos de RRHH, gestión de vacaciones, seguros médicos y generación de carnets.',
      'Diseño e implemento interfaces intuitivas y responsivas con React, TypeScript, Tailwind, Redux y Material UI, integrando APIs del equipo de backend y asegurando que los datos se muestren de forma clara y eficiente.',
      'Mi trabajo reciente en automatización e IA me da una ventaja poco común en frontend: entiendo el sistema completo de punta a punta, no solo la capa visual.',
    ],
    chipsLabel: 'Lo que construyo',
    chips: ['E-commerce', 'Dashboards en tiempo real', 'Sistemas de RRHH', 'Gestión de vacaciones', 'Autenticación OAuth', 'Calendarios interactivos'],
    services: [
      { icon: '🎨', title: 'Interfaces de usuario', desc: 'Componentes reutilizables, responsive y accesibles con React + Tailwind.', tag: 'React · Tailwind' },
      { icon: '📊', title: 'Dashboards en tiempo real', desc: 'Paneles que consumen APIs y se actualizan en vivo (Supabase Realtime).', tag: 'React · Supabase' },
      { icon: '🔗', title: 'Consumo de APIs', desc: 'Integración con REST APIs y manejo de estado predecible con Redux.', tag: 'REST · Redux' },
      { icon: '🔐', title: 'Autenticación e integraciones', desc: 'Login con OAuth (Microsoft), flujos protegidos y control de versiones con Git.', tag: 'OAuth · Git' },
      { icon: '⚡', title: 'TypeScript y rendimiento', desc: 'Tipado estático, código mantenible y builds optimizados con Vite.', tag: 'TypeScript · Vite' },
    ],
  },

  ti: {
    label: 'TI & Sistemas',
    roles: ['Analista / Desarrollador de Sistemas', 'Automatización · Soporte TI'],
    tagline: 'Automatización · Integración de sistemas · Soporte TI · Bases de datos',
    intro:
      'Técnico Superior en Informática con experiencia sosteniendo sistemas en producción: desarrollo, integración, bases de datos y soporte técnico con pensamiento analítico.',
    about: [
      'Técnico Superior Universitario en Informática con experiencia en desarrollo de soluciones tecnológicas, integración de sistemas y soporte TI. Mi experiencia reciente combina automatización de procesos e inteligencia aplicada a sistemas en producción.',
      'No me limito a hacer que un sistema funcione una vez: diseño la capa que lo mantiene operativo todos los días — detección y clasificación de errores y diagnóstico sistemático de causa raíz (fallos de red, de servicios externos, de autenticación o de lógica interna) antes de aplicar cualquier solución.',
      'Sumo a eso una base sólida como desarrollador (React, integraciones API, bases de datos relacionales) y soporte técnico a usuarios. Busco un rol donde esta combinación de sistemas, automatización y pensamiento analítico tenga impacto inmediato.',
    ],
    chipsLabel: 'Áreas de trabajo',
    chips: ['Soporte a usuarios', 'Integración de sistemas', 'Bases de datos', 'Automatización de procesos', 'Resolución de incidencias', 'Sistemas de gestión'],
    services: [
      { icon: '🛠️', title: 'Soporte TI e incidencias', desc: 'Diagnóstico y resolución de incidencias operativas y soporte a usuarios internos.', tag: 'Soporte · Diagnóstico' },
      { icon: '🔗', title: 'Integración de sistemas', desc: 'Conexión de plataformas, APIs, CRM (GoHighLevel) y servicios externos.', tag: 'APIs · CRM' },
      { icon: '🗄️', title: 'Bases de datos', desc: 'Diseño y gestión de esquemas relacionales (PostgreSQL, SQL Server, MySQL).', tag: 'PostgreSQL · SQL Server' },
      { icon: '⚙️', title: 'Automatización de procesos', desc: 'Flujos que reducen trabajo manual y errores operativos con n8n.', tag: 'n8n · Procesos' },
      { icon: '💻', title: 'Sistemas de gestión', desc: 'Sistemas internos de RRHH, seguros, citas y control de asistencia.', tag: 'React · JavaScript' },
    ],
  },
}

// ── Experiencia laboral (timeline) ──────────────────────────────
export const EXPERIENCE = [
  {
    role: 'Automation Lead / Encargado de Ingeniería',
    company: 'Lety.AI · Miami',
    period: 'Dic. 2025 – Jul. 2026',
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
    desc: 'Desarrollé sistemas para modernizar la gestión clínica: control de asistencia de RRHH (SYSCAM), gestión de seguros médicos (SINTEG) y programación de citas. Soporte técnico continuo y resolución de incidencias a usuarios internos.',
    tags: ['JavaScript', 'React', 'SQL Server', 'Soporte TI'],
  },
  {
    role: 'Desarrollador Front-End',
    company: 'Alfanar Energía · freelance',
    period: '2024 – 2025',
    desc: 'Interfaz de un módulo de RRHH para gestión de solicitudes de vacaciones con login vía Microsoft (OAuth), calendario interactivo y notificaciones en tiempo real, con datos extraídos de API.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    role: 'Desarrollador Front-End',
    company: 'S&H Software · freelance',
    period: '2023 – 2024',
    desc: 'E-commerce dinámico y personalizado, adaptado en tiempo real según datos de API, con módulo de compras y cálculo automático de precios.',
    tags: ['React', 'JavaScript', 'API REST'],
  },
]

// ── Proyectos de automatización / IA (demos) ────────────────────
// Agrega capturas/GIFs en el array "images" (rutas dentro de public/).
export const PROJECTS = [
  {
    title: 'Agente de IA en WhatsApp y Telegram con tools',
    desc: 'Agente conversacional en n8n (nodo AI Agent con Claude/GPT) conectado a tres tools reales: leer y filtrar un catálogo en Google Sheets, registrar leads y agendar citas en Google Calendar. Con manejo de errores tipado y documentación en Sticky Notes.',
    stack: ['n8n', 'Claude/GPT API', 'WhatsApp API', 'Telegram', 'Google Calendar'],
    repo: 'https://github.com/DanEnd28/agente-whatsapp-telegram', // TODO
    images: [], // ej: ['/proyectos/agente-1.png', '/proyectos/agente-2.png']
  },
  {
    title: 'Sistema de reintentos y manejo de errores',
    desc: 'Capa de resiliencia en n8n: fuerza fallos específicos (429, 500, 503, timeout), los clasifica por tipo con un Switch y reintenta con backoff exponencial + jitter hasta un máximo de intentos. Cada intento queda registrado con timestamp, tipo de error y resultado.',
    stack: ['n8n', 'JavaScript', 'Webhook', 'Error handling'],
    repo: 'https://github.com/DanEnd28/n8n-retry-error-handling', // TODO
    images: [],
  },
  {
    title: 'Integración GoHighLevel + WhatsApp',
    desc: 'Reconstrucción de la arquitectura de un agente GHL + WhatsApp: un webhook parsea el payload de GHL (contacto, teléfono, mensaje, customData), un AI Agent lo procesa con base de conocimiento y responde vía la API de mensajería, con patrón set_tag visible para escalar a un humano y sanitización de salida.',
    stack: ['n8n', 'GoHighLevel', 'WhatsApp API', 'IA Conversacional'],
    repo: 'https://github.com/DanEnd28/ghl-whatsapp-n8n', // TODO
    images: [],
  },
  {
    title: 'Agente IA + Supabase + Dashboard en tiempo real',
    desc: 'Ciclo completo: un agente en n8n captura datos estructurados de una conversación, clasifica urgencia y categoría con un LLM y los inserta en Supabase. Un dashboard en React (Vite) consume esa tabla en tiempo real vía Supabase Realtime y visualiza los leads por categoría y estado.',
    stack: ['n8n', 'Supabase', 'React', 'LLM'],
    repo: 'https://github.com/DanEnd28/agente-supabase-dashboard', // TODO
    images: [],
  },
]

// ── Proyectos frontend reales (profesionales / freelance) ───────
export const FRONTEND_PROJECTS = [
  {
    title: 'Alfanar — Gestión de vacaciones con OAuth',
    company: 'Alfanar Energía',
    role: 'FrontEnd Developer',
    desc: 'Sistema integral de gestión de vacaciones con inicio de sesión vía Microsoft (OAuth), calendario interactivo para ver los períodos de todos los empleados, organigrama, estadísticas y evaluaciones de desempeño. Interfaz intuitiva, responsive y de alto rendimiento.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Docker'],
    images: [
      '/proyectos/alfanar-1.png', '/proyectos/alfanar-2.png', '/proyectos/alfanar-3.png',
      '/proyectos/alfanar-4.png', '/proyectos/alfanar-5.png', '/proyectos/alfanar-6.png',
      '/proyectos/alfanar-7.png', '/proyectos/alfanar-8.png', '/proyectos/alfanar-9.png',
      '/proyectos/alfanar-10.png', '/proyectos/alfanar-11.png', '/proyectos/alfanar-12.png',
      '/proyectos/alfanar-13.png', '/proyectos/alfanar-14.png', '/proyectos/alfanar-15.png',
    ],
  },
  {
    title: 'SINTEG — Sistema de seguros médicos',
    company: 'Centro Policlínico Valencia',
    role: 'FrontEnd Developer | Analista Programador',
    desc: 'Sistema de aseguradoras para empresas y particulares: las empresas contratan planes o servicios médicos para sus empleados; la aplicación gestiona los pagos a médicos y unidades de servicio y los descuentos para los empleados de la empresa cliente.',
    stack: ['React', 'Tailwind CSS', 'Material UI', 'Redux', 'PostgreSQL'],
    images: ['/proyectos/sinteg-video.mp4', '/proyectos/sinteg-1.png', '/proyectos/sinteg-2.png'],
  },
  {
    title: 'SYSCAM — Sistema de gestión de RRHH',
    company: 'Centro Policlínico Valencia',
    role: 'FrontEnd Developer | Analista Programador',
    desc: 'Sistema de Recursos Humanos con control de asistencia, registro de horas, gestión de vacaciones, permisos por enfermedad y justificaciones. Incluye página de login, movimientos de empleados y generación de carnets con código de barras.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    images: ['/proyectos/syscam-1.png', '/proyectos/syscam-2.png', '/proyectos/syscam-3.png'],
  },
  {
    title: 'E-commerce dinámico',
    company: 'S&H Software',
    role: 'FrontEnd Developer',
    desc: 'Tienda en línea personalizada que se adapta en tiempo real según datos de la API de la empresa, con módulo de compras y cálculo automático de precios.',
    stack: ['React', 'JavaScript', 'API REST', 'Tailwind'],
    images: [], // agrega capturas cuando las tengas
  },
]

// ── Stack técnico (CONFIGURABLE) ────────────────────────────────
// Cada item: { name, brand }. "brand" es una clave del mapa BRAND en
// BrandIcons.jsx (define el logo y color). Si omites "brand", se muestra
// como chip de texto con un punto. Agrega/quita items libremente.
export const TECH_STACK = [
  {
    title: 'Automatización · IA · Backend',
    items: [
      { name: 'n8n', brand: 'n8n' },
      { name: 'GoHighLevel', brand: 'ghl' },
      { name: 'Claude / GPT', brand: 'ai' },
      { name: 'WhatsApp / Meta API', brand: 'whatsapp' },
      { name: 'Telegram', brand: 'telegram' },
      { name: 'Retell AI (voz)' },
      { name: 'Google Calendar', brand: 'gcalendar' },
      { name: 'Redis', brand: 'redis' },
      { name: 'Supabase', brand: 'supabase' },
      { name: 'MCP' },
      { name: 'REST APIs' },
      { name: 'Webhooks' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', brand: 'react' },
      { name: 'TypeScript', brand: 'typescript' },
      { name: 'JavaScript', brand: 'javascript' },
      { name: 'Redux', brand: 'redux' },
      { name: 'Tailwind CSS', brand: 'tailwind' },
      { name: 'Material UI', brand: 'mui' },
      { name: 'Bootstrap', brand: 'bootstrap' },
      { name: 'HTML5', brand: 'html5' },
      { name: 'CSS3', brand: 'css' },
      { name: 'Vite', brand: 'vite' },
    ],
  },
  {
    title: 'Infraestructura · Datos · Herramientas',
    items: [
      { name: 'PostgreSQL', brand: 'postgres' },
      { name: 'SQL Server' },
      { name: 'MySQL', brand: 'mysql' },
      { name: 'Docker', brand: 'docker' },
      { name: 'Git & GitHub', brand: 'github' },
      { name: 'Linux', brand: 'linux' },
    ],
  },
]

// ── Formación académica ─────────────────────────────────────────
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
  'Emprendimiento — Reparación de celulares (2019)',
  'Herramientas de Ofimática · Inces (2016)',
]

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Conversacional / Técnico' },
]
