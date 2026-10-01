// ════════════════════════════════════════════════════════════════
//  TEXTOS EN ESPAÑOL (/es) — edita aquí.
//  Misma estructura que en.ts: si agregas algo en uno, agrégalo en el otro
//  (TypeScript te avisa si falta un campo).
// ════════════════════════════════════════════════════════════════

import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    title: 'Danny Endara · AI Automation & Full-Stack Developer',
    description:
      'Danny Endara, ingeniero de automatización con IA y desarrollador full-stack. Agentes de IA en producción, workflows en n8n e interfaces en React.',
    ogRole: 'Automatización con IA · Full-Stack Developer',
    ogAlt: 'Danny Endara, AI Automation & Full-Stack Developer',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    frontend: 'Frontend',
    stack: 'Stack',
    contact: 'Contacto',
    menu: 'Menú',
    theme: 'Cambiar tema',
    language: 'Idioma',
    main: 'Principal',
    mobile: 'Móvil',
  },
  hero: {
    available: 'Disponible para nuevos proyectos',
    location: 'Valencia, Venezuela · Remoto',
    cta: 'Contacto',
    cv: 'Descargar CV',
    caption: 'Actualmente en Lety.AI · Miami',
    seal: 'Disponible · para nuevos proyectos · ',
    marqueeLabel: 'Tecnologías con las que trabajo',
    meta: [
      { value: '300+', label: 'workflows en producción' },
      { value: '250+', label: 'cuentas de clientes activas' },
      { value: 'n8n · MCP', label: 'agentes, flujos y servidores MCP propios' },
      { value: 'ES · EN', label: 'español · inglés' },
    ],
  },
  sections: {
    about: { kicker: 'Sobre mí', title: 'Sobre mí' },
    what: {
      kicker: 'Servicios',
      title: 'Qué hago',
      lead: 'Elige un enfoque. Los servicios cambian con él, igual que en el resto de la página.',
    },
    experience: { kicker: 'Trayectoria', title: 'Experiencia' },
    projects: {
      kicker: 'Trabajo destacado',
      title: 'Proyectos de automatización',
      lead: 'Cinco sistemas reales en producción. Cada animación sigue una solicitud por el workflow. Los datos de los clientes son privados; la arquitectura y las decisiones son mías.',
    },
    frontend: { kicker: 'Interfaces', title: 'Proyectos frontend' },
    stack: { kicker: 'Herramientas', title: 'Stack técnico' },
    education: { kicker: 'Formación', title: 'Educación e idiomas' },
    contact: { kicker: 'Hablemos', title: 'Contacto' },
  },
  profileTabsLabel: 'Enfoque',
  profiles: {
    ia: {
      label: 'IA & Automatización',
      roles: ['AI Automation', 'Full-Stack Developer'],
      tagline: 'n8n · AI Agents · Web Apps',
      intro:
        'Construyo agentes de IA y automatizaciones en producción que no se caen cuando una API falla — desde el flujo en n8n hasta la interfaz en React que los hace visibles.',
      about: [
        'Hoy trabajo en Lety.AI (Miami), una plataforma de agentes de IA, como Automation Lead & AI Agent Engineer (Encargado de Ingeniería y Desarrollo de Agentes): más de 300 workflows en producción para más de 250 cuentas de clientes activas en múltiples rubros.',
        'Mi diferencial no es solo conectar nodos: es diseñar sistemas que no se caen cuando una API externa falla. Clasificación de errores por tipo (rate-limit, timeout, auth, servidor), reintentos con backoff exponencial + jitter y diagnóstico por causa raíz antes de aplicar soluciones.',
        'Entrego el sistema completo: arquitectura del agente (chat web, mensajería y voz con Retell AI, más servidores MCP propios), orquestación en n8n, integración con CRM (GoHighLevel) y modelos de lenguaje (Claude, GPT), más la capa de resiliencia que lo mantiene operativo sin supervisión.',
      ],
      chipsLabel: 'Rubros con los que he trabajado',
      chips: ['Salud & Estética', 'Bienes Raíces', 'Educación', 'Retail', 'Logística & Envíos', 'y más'],
      stats: [
        { value: '300', suffix: '+', label: 'workflows en producción' },
        { value: '250', suffix: '+', label: 'cuentas de clientes activas' },
      ],
      services: [
        { icon: 'flow', title: 'Automatización de procesos', desc: 'Elimino el trabajo manual y repetitivo de tu equipo con flujos en n8n — desde tareas simples hasta arquitecturas con colas, reintentos y manejo de errores tipado.', tag: 'n8n · Webhooks · Redis' },
        { icon: 'bot', title: 'Agentes conversacionales', desc: 'Atiendo a tus clientes 24/7 en tu web, por voz (Retell AI) y en mensajería como WhatsApp o Telegram, con memoria, tool calling, servidores MCP y respuestas que no alucinan.', tag: 'Chat web · Voz · MCP' },
        { icon: 'refresh', title: 'Resiliencia y manejo de errores', desc: 'Te entrego sistemas que siguen funcionando cuando algo falla: clasificación de errores, reintentos con backoff + jitter y diagnóstico por causa raíz antes de que te enteres tú.', tag: 'Retry · Backoff · RCA' },
        { icon: 'plug', title: 'Integraciones API y CRM', desc: 'Conecto tu CRM, calendario y bases de datos para que la información fluya sola: GoHighLevel, Google Calendar, Supabase y PostgreSQL.', tag: 'GoHighLevel · Supabase' },
        { icon: 'chart', title: 'Dashboards en React', desc: 'Te doy visibilidad en tiempo real de tus automatizaciones con paneles que consumen y muestran esa data al instante.', tag: 'React · Realtime' },
      ],
    },
    frontend: {
      label: 'Frontend',
      roles: ['Frontend Developer', 'React · TypeScript'],
      tagline: 'React · TypeScript · Tailwind · Redux · Material UI',
      intro:
        'Te entrego interfaces y sistemas de gestión que tu equipo puede usar sin fricción: rápidos, responsive y conectados a tus APIs reales.',
      about: [
        'Desarrollador front-end con experiencia construyendo sistemas de gestión completos: e-commerce dinámico, módulos de RRHH, gestión de vacaciones, seguros médicos y generación de carnets.',
        'Diseño e implemento interfaces intuitivas y responsivas con React, TypeScript, Tailwind, Redux y Material UI, integrando APIs del equipo de backend y asegurando que los datos se muestren de forma clara y eficiente.',
        'Mi trabajo reciente en automatización e IA me da una ventaja poco común en frontend: entiendo el sistema completo de punta a punta, no solo la capa visual.',
      ],
      chipsLabel: 'Lo que construyo',
      chips: ['E-commerce', 'Dashboards en tiempo real', 'Sistemas de RRHH', 'Gestión de vacaciones', 'Autenticación OAuth', 'Calendarios interactivos'],
      services: [
        { icon: 'layout', title: 'Interfaces de usuario', desc: 'Te doy una interfaz que tus usuarios pueden usar sin fricción: componentes reutilizables, responsive y accesibles con React + Tailwind.', tag: 'React · Tailwind' },
        { icon: 'chart', title: 'Dashboards en tiempo real', desc: 'Paneles que muestran tu data actualizada al instante, sin que nadie tenga que refrescar la página (Supabase Realtime).', tag: 'React · Supabase' },
        { icon: 'code', title: 'Consumo de APIs', desc: 'Conecto tu frontend con el backend de tu equipo y mantengo el estado de la app predecible con Redux.', tag: 'REST · Redux' },
        { icon: 'lock', title: 'Autenticación e integraciones', desc: 'Acceso seguro para tus usuarios con login OAuth (Microsoft) y flujos protegidos, con control de versiones ordenado en Git.', tag: 'OAuth · Git' },
        { icon: 'zap', title: 'TypeScript y rendimiento', desc: 'Código mantenible y builds rápidos con Vite, para que el proyecto no se vuelva difícil de tocar con el tiempo.', tag: 'TypeScript · Vite' },
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
        { icon: 'buoy', title: 'Soporte TI e incidencias', desc: 'Resuelvo las incidencias que frenan a tus usuarios, con diagnóstico rápido y soporte directo.', tag: 'Soporte · Diagnóstico' },
        { icon: 'plug', title: 'Integración de sistemas', desc: 'Hago que tus plataformas, APIs, CRM (GoHighLevel) y servicios externos se hablen entre sí sin fricción.', tag: 'APIs · CRM' },
        { icon: 'db', title: 'Bases de datos', desc: 'Diseño esquemas relacionales sólidos y fáciles de mantener (PostgreSQL, SQL Server, MySQL).', tag: 'PostgreSQL · SQL Server' },
        { icon: 'flow', title: 'Automatización de procesos', desc: 'Reduzco el trabajo manual y los errores operativos de tu equipo con flujos en n8n.', tag: 'n8n · Procesos' },
        { icon: 'monitor', title: 'Sistemas de gestión', desc: 'Construyo sistemas internos a medida — RRHH, seguros, citas, control de asistencia — para que tu operación deje de depender de hojas de cálculo.', tag: 'React · JavaScript' },
      ],
    },
  },
  servicesCta: { title: '¿Tienes un flujo que se cae o uno que todavía no existe?', button: 'Cuéntame' },
  experienceNow: 'Actual',
  experience: [
    {
      role: 'Automation Lead & AI Agent Engineer',
      company: 'Lety.AI · Miami',
      period: 'Dic. 2025 – Actualidad',
      current: true,
      desc: 'Encargado de Ingeniería y Desarrollo de Agentes (recontratado en 2026). Lidero la ingeniería de una flota de agentes de IA en producción: 300+ workflows en producción para 250+ cuentas de clientes activas, y sumé el área de desarrollo personalizado de IA. Construí desde cero un servidor MCP propio para integrar una API externa de agendamiento, permitiendo que los agentes consulten horarios y reserven citas directamente. Sostengo soporte continuo, nuevos desarrollos y el sistema de reintentos (backoff exponencial + jitter) sobre flujos end-to-end en n8n: WhatsApp/Meta, GoHighLevel, Claude/GPT y voz (Retell AI).',
      tags: ['n8n', 'MCP', 'GoHighLevel', 'Retell AI', 'Claude/GPT'],
    },
    {
      role: 'Prompt Engineer',
      company: 'Lety.AI · Miami',
      period: 'Abr. 2025 – Dic. 2025',
      desc: 'Diseñé y optimicé prompts y bases de conocimiento para agentes en salud, bienes raíces, educación y retail. Diagnostiqué y corregí fallos de enrutamiento, memoria y alucinaciones vía análisis de logs.',
      tags: ['Prompt Engineering', 'Bases de conocimiento', 'n8n'],
    },
    {
      role: 'Desarrollador Front-End',
      company: 'Alfanar Energía · freelance',
      period: '2024 – 2025',
      desc: 'Módulo de RRHH para gestión de vacaciones de empleados con login vía Microsoft (OAuth), calendario interactivo y notificaciones en tiempo real.',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      role: 'Analista Programador',
      company: 'Centro Policlínico Valencia',
      period: 'Ago. 2022 – Nov. 2024',
      desc: 'Sistemas para la gestión clínica: control de asistencia de RRHH (SYSCAM), seguros médicos (SINTEG) y citas. Soporte técnico y resolución de incidencias a usuarios internos.',
      tags: ['JavaScript', 'React', 'SQL Server', 'Soporte TI'],
    },
    {
      role: 'Desarrollador Front-End',
      company: 'S&H Software · freelance',
      period: '2023 – 2024',
      desc: 'E-commerce dinámico adaptado en tiempo real según datos de API, con módulo de compras y cálculo automático de precios.',
      tags: ['React', 'JavaScript', 'API REST'],
    },
  ],
  projectLabels: { problem: 'Problema', result: 'Resultado', animation: 'animación', diagram: 'Diagrama del workflow' },
  projects: {
    'ai-booking-agent-dental': {
      kicker: 'Agente de IA · Agendamiento',
      title: 'Agente de IA que agenda citas para una clínica dental',
      problem: 'Agendar contra una agenda real arriesga pacientes equivocados, citas duplicadas y horas que no existen.',
      result: 'Un agente en WhatsApp que agenda en vivo con 3 protecciones en código, validación de identidad, protocolo de derivación fijo y tools inmunes a la llamada duplicada.',
    },
    'multichannel-messaging-backend': {
      kicker: 'Backend de mensajería',
      title: 'Backend de mensajería con IA multicanal',
      problem: 'Los clientes escriben en ráfagas y mandan audios e imágenes, y los peores fallos figuran como «Succeeded».',
      result: 'Un webhook n8n compartido para WhatsApp, Instagram, Facebook y SMS: buffer en Redis donde el último mensaje procesa todo, multimedia convertida en texto y reintentos puntuales.',
    },
    'ghl-scheduling-tools': {
      kicker: 'Tooling GoHighLevel',
      title: 'Tools de agendamiento para GoHighLevel configuradas por headers',
      problem: 'Un workflow por calendario no escala y los modelos alucinan horarios.',
      result: 'Un solo webhook sirve a todos los calendarios. La configuración viaja en los headers y cada reserva reverifica el horario y ofrece alternativas reales.',
    },
    'mcp-multitenant-clinic': {
      kicker: 'Servidor MCP',
      title: 'Servidor MCP multi-tenant para una API de gestión clínica',
      problem: 'El trigger MCP de n8n no pasa los headers, así que no había forma de aislar clínicas sin exponer tokens al modelo.',
      result: 'Un servidor MCP en TypeScript sin estado: un token por clínica, sin base de datos, 4 niveles de acceso de 23 a 54 tools y un contrato de respuesta sobre el que ramifica el agente.',
    },
    'n8n-error-handler': {
      kicker: 'Observabilidad',
      title: 'Error Handler para 300+ workflows de n8n',
      problem: 'n8n solo avisa de un error si alguien mira las ejecuciones, y un correo por error satura.',
      result: 'Un Error Handler central en 3 carriles: bitácora en tiempo real, digest dos veces al día y resumen semanal por workflow → nodo → error → cliente, con CSV.',
    },
  },
  frontendNoShot: 'Capturas próximamente',
  frontendProjects: {
    alfanar: {
      title: 'Alfanar — Gestión de vacaciones con OAuth',
      role: 'FrontEnd Developer',
      desc: 'Sistema integral de gestión de vacaciones con inicio de sesión vía Microsoft (OAuth), calendario interactivo para ver los períodos de todos los empleados, organigrama, estadísticas y evaluaciones de desempeño. Interfaz intuitiva, responsive y de alto rendimiento.',
    },
    sinteg: {
      title: 'SINTEG — Sistema de seguros médicos',
      role: 'FrontEnd Developer | Analista Programador',
      desc: 'Sistema de aseguradoras para empresas y particulares: las empresas contratan planes o servicios médicos para sus empleados; la aplicación gestiona los pagos a médicos y unidades de servicio y los descuentos para los empleados de la empresa cliente.',
    },
    syscam: {
      title: 'SYSCAM — Sistema de gestión de RRHH',
      role: 'FrontEnd Developer | Analista Programador',
      desc: 'Sistema de Recursos Humanos con control de asistencia, registro de horas, gestión de vacaciones, permisos por enfermedad y justificaciones. Incluye página de login, movimientos de empleados y generación de carnets con código de barras.',
    },
    ecommerce: {
      title: 'E-commerce dinámico',
      role: 'FrontEnd Developer',
      desc: 'Tienda en línea personalizada que se adapta en tiempo real según datos de la API de la empresa, con módulo de compras y cálculo automático de precios.',
    },
  },
  stack: {
    groups: {
      automation: { title: 'Automatización · IA · Backend', also: ['GoHighLevel', 'Retell AI (voz)', 'Google Calendar', 'REST APIs', 'Webhooks', 'Prompt Engineering'] },
      frontend: { title: 'Frontend', also: ['JavaScript', 'Redux', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'HTML5', 'CSS3', 'Vite'] },
      infra: { title: 'Infraestructura · Datos · Herramientas', also: ['SQL Server', 'MySQL', 'Git & GitHub', 'Linux'] },
    },
  },
  education: {
    degreeLabel: 'Título',
    degree: 'Técnico Superior Universitario en Informática',
    place: 'Instituto Universitario “Juan Pablo Pérez Alfonzo” (IUTEPAL)',
    period: '2021 – 2022',
    note: 'Certificado de excelencia académica.',
    certsLabel: 'Certificados',
    certs: ['Taller de Ciberdefensa · Grupo Lazarus (CIIL) · 2022', 'Emprendimiento — Reparación de celulares (2019)', 'Herramientas de Ofimática · Inces (2016)'],
    langsLabel: 'Idiomas',
    langs: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio (conversacional / técnico)' },
    ],
    setupLabel: 'Modalidad',
    setup: [
      { name: 'Remoto', value: 'Valencia, Venezuela · UTC−4' },
      { name: 'Estado', value: 'Disponible para nuevos proyectos' },
    ],
  },
  contact: {
    title: '¿Tienes un proyecto, una vacante o una idea en mente?',
    text: 'Escríbeme — respondo rápido y me adapto a lo que necesites.',
    upworkValue: 'Perfil freelance',
    form: {
      name: 'nombre',
      email: 'email',
      company: 'empresa (opcional)',
      phone: 'teléfono (opcional)',
      type: 'tipo de consulta',
      message: 'mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Mensaje enviado! Te responderé pronto.',
      error: 'Hubo un error. Escríbeme directo a',
      types: [
        { label: 'Proyecto freelance', value: 'Proyecto freelance' },
        { label: 'Vacante / empleo', value: 'Vacante / empleo' },
        { label: 'Consultoría / asesoría', value: 'Consultoría / asesoría' },
        { label: 'Otro', value: 'Otro' },
      ],
    },
  },
  footer: { text: 'Automatización & IA · Frontend · Sistemas. Abierto a nuevas oportunidades.' },
  chat: {
    button: 'Pregúntale a mi asistente',
    title: 'Asistente de Danny',
    subtitle: 'Pregúntame lo que quieras sobre Danny',
    welcome: '¡Hola! 👋 Soy el asistente personal de Danny. Puedo contarte sobre su experiencia, proyectos, stack y disponibilidad. ¿Qué te gustaría saber?',
    placeholder: 'Escribe tu mensaje…',
    leadPrompt: 'Déjame tu nombre y teléfono para que Danny pueda escribirte:',
    namePlaceholder: 'Tu nombre',
    phonePlaceholder: 'Tu teléfono / WhatsApp',
    start: 'Empezar a chatear',
    thanks: '¡Gracias, {name}! 🙌 ¿En qué puedo ayudarte sobre Danny?',
    typing: 'escribiendo…',
    error: 'Ups, no pude conectar ahora mismo. Escríbele a Danny por WhatsApp o email 🙏',
    reset: 'Reiniciar conversación',
    close: 'Cerrar',
    send: 'Enviar',
  },
}

export default es
