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
    cta: 'Cuéntame tu proyecto',
    cv: 'Descargar CV',
    caption: 'Actualmente en Lety.AI · Miami',
    seal: 'Disponible · para nuevos proyectos · ',
    marqueeLabel: 'Tecnologías con las que trabajo',
    meta: [
      { value: '300+', label: 'workflows en producción' },
      { value: '250+', label: 'cuentas de clientes activas' },
      { value: '< 12 h', label: 'tiempo de respuesta' },
      { value: 'ES · EN', label: 'atención en español e inglés' },
    ],
  },
  sections: {
    about: { kicker: 'Sobre mí', title: 'Sobre mí' },
    what: {
      kicker: 'Servicios',
      title: 'Qué ofrezco',
      lead: 'Selecciona el servicio que se ajuste a las necesidades de tu empresa.',
    },
    process: {
      kicker: 'Proceso',
      title: 'Cómo trabajo',
      lead: 'Un proceso claro, para que sepas qué recibes y cuándo.',
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
        'Automatizo la atención, el agendamiento y las tareas repetitivas de tu negocio con agentes de IA que trabajan las 24 horas y no se caen cuando una API falla.',
      about: [
        'Ayudo a negocios a responder más rápido y a dejar de hacer a mano lo que una máquina puede hacer bien: atender mensajes, agendar citas, registrar clientes potenciales y avisar cuando algo falla.',
        'Hoy lidero el departamento de desarrollo y creación de agentes de Lety.AI (Miami), con más de 300 workflows en producción para más de 250 cuentas de clientes. Eso es lo que ofrezco: soluciones probadas con clientes reales, no demos.',
        'Me encargo de todo: entiendo tu operación, diseño la solución, la construyo, la dejo documentada y la sigo cuidando después de entregarla.',
      ],
      chipsLabel: 'Rubros con los que he trabajado',
      chips: ['Salud & Estética', 'Bienes Raíces', 'Educación', 'Retail', 'Logística & Envíos', 'y más'],
      stats: [
        { value: '300', suffix: '+', label: 'workflows en producción' },
        { value: '250', suffix: '+', label: 'cuentas de clientes activas' },
      ],
      services: [
        { icon: 'bot', image: '/services/ia-atencion.webp', title: 'Atención automática todo el día', desc: 'Un agente de IA responde a tus clientes por WhatsApp, Instagram o tu web, resuelve dudas, toma sus datos y agenda, sin que nadie de tu equipo esté pendiente.', tag: 'WhatsApp · Web · Voz' },
        { icon: 'cal', image: '/services/ia-agenda.webp', title: 'Una agenda que se llena sola', desc: 'Tus clientes reservan directamente en tu calendario, sin citas duplicadas ni horarios inventados.', tag: 'GoHighLevel · Google Calendar' },
        { icon: 'flow', image: '/services/ia-manual.webp', title: 'Menos trabajo manual', desc: 'Automatizo lo repetitivo: pasar datos entre sistemas, enviar recordatorios, registrar clientes y generar reportes.', tag: 'n8n · Webhooks' },
        { icon: 'refresh', image: '/services/ia-resiliencia.webp', title: 'Sistemas que no se caen', desc: 'Si un servicio falla, el sistema reintenta, te avisa y sigue funcionando. Te enteras antes que tus clientes.', tag: 'Reintentos · Alertas' },
        { icon: 'plug', image: '/services/ia-conectado.webp', title: 'Todo conectado', desc: 'Tu CRM, calendario, base de datos e IA trabajando juntos, con la información siempre al día.', tag: 'CRM · APIs · IA' },
      ],
    },
    frontend: {
      label: 'Frontend',
      roles: ['Frontend Developer', 'React · TypeScript'],
      tagline: 'React · TypeScript · Tailwind · Redux · Material UI',
      intro:
        'Convierto los procesos de tu empresa en aplicaciones web fáciles de usar: rápidas, que se ven bien en cualquier pantalla y conectadas a tus datos reales.',
      about: [
        'Si tu equipo trabaja con hojas de cálculo, correos y procesos a mano, te construyo la aplicación que lo ordena: sistemas de RRHH, vacaciones, seguros, citas o una tienda en línea.',
        'Cuido que sea clara para quien la usa todos los días, que funcione en celular y computadora, y que muestre la información correcta conectándose a tus sistemas.',
        'Como también automatizo procesos con IA, entiendo el sistema completo, no solo la pantalla: lo que construyo encaja con el resto de tu operación.',
      ],
      chipsLabel: 'Lo que construyo',
      chips: ['E-commerce', 'Dashboards en tiempo real', 'Sistemas de RRHH', 'Gestión de vacaciones', 'Autenticación OAuth', 'Calendarios interactivos'],
      services: [
        { icon: 'monitor', image: '/services/fe-sistemas.webp', title: 'Sistemas internos a tu medida', desc: 'Lo que hoy llevas en hojas de cálculo, en una aplicación: solicitudes, aprobaciones y estados claros para todo el equipo.', tag: 'React · TypeScript' },
        { icon: 'chart', image: '/services/fe-paneles.webp', title: 'Paneles con tus datos en tiempo real', desc: 'Ves cómo va tu negocio al instante, sin esperar reportes ni actualizar la página.', tag: 'React · Supabase' },
        { icon: 'bag', image: '/services/fe-tiendas.webp', title: 'Tiendas y catálogos en línea', desc: 'Tu catálogo en la web, conectado a tu inventario, con precios que se calculan solos.', tag: 'React · APIs' },
        { icon: 'lock', image: '/services/fe-acceso.webp', title: 'Acceso seguro para tu equipo', desc: 'Inicio de sesión con la cuenta de Microsoft o Google de tu empresa y permisos según el rol de cada persona.', tag: 'OAuth · Roles' },
        { icon: 'zap', image: '/services/fe-rendimiento.webp', title: 'Rápido y fácil de mantener', desc: 'Código ordenado y bien probado, para que tu aplicación siga siendo rápida y sea fácil de mejorar con el tiempo.', tag: 'TypeScript · Vite' },
      ],
    },
    ti: {
      label: 'TI & Sistemas',
      roles: ['Analista / Desarrollador de Sistemas', 'Automatización · Soporte TI'],
      tagline: 'Automatización · Integración de sistemas · Soporte TI · Bases de datos',
      intro:
        'Mantengo los sistemas de tu empresa funcionando: resuelvo incidencias, conecto plataformas, ordeno tus datos y automatizo lo que hoy se hace a mano.',
      about: [
        'Cuando un sistema falla, tu equipo se detiene. Te ayudo a que eso pase menos y a que, cuando pase, se resuelva rápido y por la causa real.',
        'Tengo experiencia dando soporte a usuarios, integrando sistemas, diseñando bases de datos y construyendo sistemas internos de gestión en una clínica, además de automatizar procesos con IA en producción.',
        'Busco sumarme a un equipo donde esta mezcla de soporte, sistemas y automatización tenga impacto desde el primer día.',
      ],
      chipsLabel: 'Áreas de trabajo',
      chips: ['Soporte a usuarios', 'Integración de sistemas', 'Bases de datos', 'Automatización de procesos', 'Resolución de incidencias', 'Sistemas de gestión'],
      services: [
        { icon: 'buoy', image: '/services/ti-soporte.webp', title: 'Soporte que resuelve', desc: 'Tus usuarios vuelven a trabajar rápido: diagnóstico claro, solución de fondo y seguimiento hasta cerrar cada caso.', tag: 'Soporte · Diagnóstico' },
        { icon: 'plug', image: '/services/ti-integracion.webp', title: 'Sistemas que se hablan', desc: 'Tus plataformas, CRM y servicios externos comparten la información solos, sin copiar y pegar.', tag: 'APIs · CRM' },
        { icon: 'db', image: '/services/ti-datos.webp', title: 'Datos ordenados y confiables', desc: 'Bases de datos bien diseñadas, para que tu información esté completa, sin duplicados y fácil de consultar.', tag: 'PostgreSQL · SQL Server' },
        { icon: 'flow', image: '/services/ti-automatizacion.webp', title: 'Procesos sin pasos manuales', desc: 'Lo que hoy toma varios pasos y genera errores, en un flujo automático que corre solo.', tag: 'n8n · Procesos' },
        { icon: 'list', image: '/services/ti-gestion.webp', title: 'Gestión interna a tu medida', desc: 'Asistencia, citas, seguros o RRHH en un sistema propio, para que tu operación deje de depender de hojas de cálculo.', tag: 'React · JavaScript' },
      ],
    },
  },
  servicesCta: { title: '¿Tienes un proceso que te quita tiempo o un sistema que falla?', button: 'Cuéntame' },
  process: [
    { title: 'Diagnóstico', desc: 'Me cuentas tu operación, por escrito o en una llamada corta, y te digo qué conviene automatizar primero.' },
    { title: 'Propuesta', desc: 'Alcance, plazo y precio cerrados antes de empezar.' },
    { title: 'Construcción', desc: 'Avances que puedes probar cada semana.' },
    { title: 'Entrega y soporte', desc: 'Documentación, una capacitación corta y acompañamiento después de entregar.' },
  ],
  experienceNow: 'Actual',
  experience: [
    {
      role: 'Automation Lead & AI Agent Engineer',
      company: 'Lety.AI · Miami',
      period: 'Dic. 2025 – Actualidad',
      current: true,
      points: [
        'Lidero el departamento de desarrollo y creación de agentes de IA: 300+ workflows en producción para 250+ cuentas de clientes.',
        'Construí un servidor MCP propio para que los agentes agenden directamente en sistemas externos.',
        'Mantengo el monitoreo de errores y los reintentos automáticos de la plataforma.',
      ],
      tags: ['n8n', 'MCP', 'GoHighLevel', 'Retell AI', 'Claude/GPT'],
    },
    {
      role: 'Prompt Engineer',
      company: 'Lety.AI · Miami',
      period: 'Abr. 2025 – Dic. 2025',
      points: [
        'Prompts y bases de conocimiento para agentes de salud, bienes raíces, educación y retail.',
        'Corregí fallos de enrutamiento, memoria y alucinaciones analizando logs.',
      ],
      tags: ['Prompt Engineering', 'Bases de conocimiento', 'n8n'],
    },
    {
      role: 'Desarrollador Front-End',
      company: 'Alfanar Energía · freelance',
      period: '2024 – 2025',
      points: ['Módulo de vacaciones para RRHH con login de Microsoft y calendario interactivo.'],
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      role: 'Desarrollador Front-End',
      company: 'S&H Software · freelance',
      period: '2023 – 2024',
      points: ['Tienda en línea que se actualiza con los datos de la empresa y calcula precios automáticamente.'],
      tags: ['React', 'JavaScript', 'API REST'],
    },
    {
      role: 'Analista Programador',
      company: 'Centro Policlínico Valencia',
      period: 'Ago. 2022 – Nov. 2024',
      points: [
        'Sistemas de control de asistencia (SYSCAM), seguros médicos (SINTEG) y citas.',
        'Soporte técnico y resolución de incidencias para el personal.',
      ],
      tags: ['JavaScript', 'React', 'SQL Server', 'Soporte TI'],
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
    certsLabel: 'Certificados',
    certs: ['Taller de Ciberdefensa · Grupo Lazarus (CIIL) · 2022'],
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
    title: 'Hablemos de tu proyecto',
    text: 'Cuéntame tu caso y te respondo en menos de 12 horas con una propuesta para resolverlo.',
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
  footer: { text: 'Agentes de IA, automatizaciones y sistemas web para tu negocio.' },
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
