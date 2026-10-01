// ════════════════════════════════════════════════════════════════
//  TEXTOS EN INGLÉS (/en) — edita aquí.
//  Misma estructura que es.ts: si agregas algo en uno, agrégalo en el otro
//  (TypeScript te avisa si falta un campo).
// ════════════════════════════════════════════════════════════════

import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    title: 'Danny Endara · AI Automation & Full-Stack Developer',
    description:
      'Danny Endara, AI automation engineer and full-stack developer. Production AI agents, n8n workflows and React interfaces.',
    ogRole: 'AI Automation · Full-Stack Developer',
    ogAlt: 'Danny Endara, AI Automation & Full-Stack Developer',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    frontend: 'Frontend',
    stack: 'Stack',
    contact: 'Contact',
    menu: 'Menu',
    theme: 'Toggle theme',
    language: 'Language',
    main: 'Main',
    mobile: 'Mobile',
  },
  hero: {
    available: 'Available for new projects',
    location: 'Valencia, Venezuela · Remote',
    cta: 'Tell me about your project',
    cv: 'Download CV',
    caption: 'Currently at Lety.AI · Miami',
    seal: 'Open to work · for new projects · ',
    marqueeLabel: 'Technologies I work with',
    meta: [
      { value: '300+', label: 'workflows in production' },
      { value: '250+', label: 'active client accounts' },
      { value: '< 12 h', label: 'response time' },
      { value: 'EN · ES', label: 'service in English and Spanish' },
    ],
  },
  sections: {
    about: { kicker: 'About', title: 'About me' },
    what: {
      kicker: 'Services',
      title: 'What I offer',
      lead: 'What your business gets from working with me.',
    },
    process: {
      kicker: 'Process',
      title: 'How I work',
      lead: 'A clear process, so you know what you get and when.',
    },
    experience: { kicker: 'Timeline', title: 'Experience' },
    projects: {
      kicker: 'Selected work',
      title: 'Automation projects',
      lead: 'Five real systems running in production. Each animation follows one request through the workflow. Client data stays private; the architecture and decisions are mine.',
    },
    frontend: { kicker: 'Interfaces', title: 'Frontend projects' },
    stack: { kicker: 'Tools', title: 'Tech stack' },
    education: { kicker: 'Background', title: 'Education & languages' },
    contact: { kicker: 'Let’s talk', title: 'Contact' },
  },
  profileTabsLabel: 'Focus',
  profiles: {
    ia: {
      label: 'AI & Automation',
      roles: ['AI Automation', 'Full-Stack Developer'],
      tagline: 'n8n · AI Agents · Web Apps',
      intro:
        'I automate your customer service, scheduling and repetitive tasks with AI agents that work around the clock and keep running when an API fails.',
      about: [
        'I help businesses reply faster and stop doing by hand what a machine can do well: answering messages, booking appointments, capturing leads and flagging problems before they grow.',
        'Today I lead the agent development and creation department at Lety.AI (Miami), with 300+ workflows in production for 250+ client accounts. That is what I offer you: solutions proven with real customers, not demos.',
        'I handle the whole process: I learn how your business runs, design the solution, build it, document it and keep looking after it once it’s delivered.',
      ],
      chipsLabel: 'Industries I’ve worked with',
      chips: ['Health & Aesthetics', 'Real Estate', 'Education', 'Retail', 'Logistics & Shipping', 'and more'],
      stats: [
        { value: '300', suffix: '+', label: 'workflows in production' },
        { value: '250', suffix: '+', label: 'active client accounts' },
      ],
      services: [
        { icon: 'bot', image: '/services/ia-atencion.webp', title: 'Customer service around the clock', desc: 'An AI agent answers your customers on WhatsApp, Instagram or your website, solves questions, takes their details and books, with no one on your team watching.', tag: 'WhatsApp · Web · Voice' },
        { icon: 'cal', image: '/services/ia-agenda.webp', title: 'A calendar that fills itself', desc: 'Your customers book straight into your calendar, with no double bookings and no made-up time slots.', tag: 'GoHighLevel · Google Calendar' },
        { icon: 'flow', image: '/services/ia-manual.webp', title: 'Less manual work', desc: 'I automate the repetitive work: moving data between systems, sending reminders, logging leads and building reports.', tag: 'n8n · Webhooks' },
        { icon: 'refresh', image: '/services/ia-resiliencia.webp', title: 'Systems that stay up', desc: 'If a service fails, the system retries, alerts you and keeps running. You find out before your customers do.', tag: 'Retries · Alerts' },
        { icon: 'plug', image: '/services/ia-conectado.webp', title: 'Everything connected', desc: 'Your CRM, calendar, database and AI working together, with information always up to date.', tag: 'CRM · APIs · AI' },
      ],
    },
    frontend: {
      label: 'Frontend',
      roles: ['Frontend Developer', 'React · TypeScript'],
      tagline: 'React · TypeScript · Tailwind · Redux · Material UI',
      intro:
        'I turn your company’s processes into web apps that are easy to use: fast, good on any screen and connected to your real data.',
      about: [
        'If your team runs on spreadsheets, emails and manual steps, I build the app that brings order to it: HR, leave management, insurance, appointments or an online store.',
        'I make sure it’s clear for the people who use it every day, works on phone and desktop, and shows the right information by connecting to your systems.',
        'Because I also automate processes with AI, I understand the whole system, not just the screen: what I build fits the rest of your operation.',
      ],
      chipsLabel: 'What I build',
      chips: ['E-commerce', 'Real-time dashboards', 'HR systems', 'Vacation management', 'OAuth authentication', 'Interactive calendars'],
      services: [
        { icon: 'monitor', image: '/services/fe-sistemas.webp', title: 'Internal systems built for you', desc: 'What you track in spreadsheets today, in one app: requests, approvals and clear statuses for the whole team.', tag: 'React · TypeScript' },
        { icon: 'chart', image: '/services/fe-paneles.webp', title: 'Live dashboards of your data', desc: 'See how your business is doing right now, without waiting for reports or refreshing the page.', tag: 'React · Supabase' },
        { icon: 'bag', image: '/services/fe-tiendas.webp', title: 'Online stores and catalogs', desc: 'Your catalog on the web, connected to your inventory, with prices that calculate themselves.', tag: 'React · APIs' },
        { icon: 'lock', image: '/services/fe-acceso.webp', title: 'Secure access for your team', desc: 'Sign-in with your company’s Microsoft or Google account, and permissions based on each person’s role.', tag: 'OAuth · Roles' },
        { icon: 'zap', image: '/services/fe-rendimiento.webp', title: 'Fast and easy to maintain', desc: 'Clean, well-tested code, so your app stays fast and is easy to improve over time.', tag: 'TypeScript · Vite' },
      ],
    },
    ti: {
      label: 'IT & Systems',
      roles: ['Systems Analyst / Developer', 'Automation · IT Support'],
      tagline: 'Automation · Systems integration · IT support · Databases',
      intro:
        'I keep your company’s systems running: I fix incidents, connect platforms, organize your data and automate what is still done by hand.',
      about: [
        'When a system fails, your team stops. I help that happen less, and when it does, I get it fixed fast and at the real cause.',
        'I’ve supported users, integrated systems, designed databases and built internal management systems at a medical clinic, and today I automate processes with AI in production.',
        'I’m looking to join a team where this mix of support, systems and automation makes an impact from day one.',
      ],
      chipsLabel: 'Areas of work',
      chips: ['User support', 'Systems integration', 'Databases', 'Process automation', 'Incident resolution', 'Management systems'],
      services: [
        { icon: 'buoy', image: '/services/ti-soporte.webp', title: 'Support that solves', desc: 'Your users get back to work fast: clear diagnosis, a real fix and follow-up until each case is closed.', tag: 'Support · Diagnosis' },
        { icon: 'plug', image: '/services/ti-integracion.webp', title: 'Systems that talk to each other', desc: 'Your platforms, CRM and external services share information on their own, with no copy and paste.', tag: 'APIs · CRM' },
        { icon: 'db', image: '/services/ti-datos.webp', title: 'Clean, reliable data', desc: 'Well-designed databases, so your information is complete, free of duplicates and easy to query.', tag: 'PostgreSQL · SQL Server' },
        { icon: 'flow', image: '/services/ti-automatizacion.webp', title: 'Processes without manual steps', desc: 'What takes several steps and causes errors today becomes an automatic flow that runs on its own.', tag: 'n8n · Processes' },
        { icon: 'list', image: '/services/ti-gestion.webp', title: 'Internal management, your way', desc: 'Attendance, appointments, insurance or HR in a system of your own, so your operation stops depending on spreadsheets.', tag: 'React · JavaScript' },
      ],
    },
  },
  servicesCta: { title: 'Have a process that eats your time, or a system that keeps failing?', button: 'Tell me about it' },
  process: [
    { title: 'Discovery', desc: 'You tell me how your business runs, in writing or on a short call, and I tell you what to automate first.' },
    { title: 'Proposal', desc: 'Fixed scope, timeline and price before we start.' },
    { title: 'Build', desc: 'Progress you can try every week.' },
    { title: 'Delivery & support', desc: 'Documentation, a short training session and support after delivery.' },
  ],
  experienceNow: 'Current',
  experience: [
    {
      role: 'Automation Lead & AI Agent Engineer',
      company: 'Lety.AI · Miami',
      period: 'Dec 2025 – Present',
      current: true,
      points: [
        'I lead the AI agent development and creation department: 300+ workflows in production for 250+ client accounts.',
        'Built an in-house MCP server so agents book directly into external systems.',
        'Maintain the platform’s error monitoring and automatic retries.',
      ],
      tags: ['n8n', 'MCP', 'GoHighLevel', 'Retell AI', 'Claude/GPT'],
    },
    {
      role: 'Prompt Engineer',
      company: 'Lety.AI · Miami',
      period: 'Apr 2025 – Dec 2025',
      points: [
        'Prompts and knowledge bases for agents in health, real estate, education and retail.',
        'Fixed routing, memory and hallucination failures through log analysis.',
      ],
      tags: ['Prompt Engineering', 'Knowledge bases', 'n8n'],
    },
    {
      role: 'Front-End Developer',
      company: 'Alfanar Energía · freelance',
      period: '2024 – 2025',
      points: ['HR leave-management module with Microsoft sign-in and an interactive calendar.'],
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      role: 'Front-End Developer',
      company: 'S&H Software · freelance',
      period: '2023 – 2024',
      points: ['Online store that updates from the company’s data and calculates prices automatically.'],
      tags: ['React', 'JavaScript', 'API REST'],
    },
    {
      role: 'Programmer Analyst',
      company: 'Centro Policlínico Valencia',
      period: 'Aug 2022 – Nov 2024',
      points: [
        'Attendance (SYSCAM), health insurance (SINTEG) and appointment systems.',
        'Technical support and incident resolution for staff.',
      ],
      tags: ['JavaScript', 'React', 'SQL Server', 'IT Support'],
    },
  ],
  projectLabels: { problem: 'Problem', result: 'Result', animation: 'animation', diagram: 'Workflow diagram' },
  projects: {
    'ai-booking-agent-dental': {
      kicker: 'AI agent · Booking',
      title: 'AI booking agent for a dental clinic',
      problem: 'Booking against a live clinic schedule risks the wrong patient, duplicate appointments and slots that don’t exist.',
      result: 'A WhatsApp agent that books live with 3 safeguards in code, ID validation, a fixed referral protocol and tools immune to duplicate calls.',
    },
    'multichannel-messaging-backend': {
      kicker: 'Messaging backend',
      title: 'Multichannel AI messaging backend',
      problem: 'Customers write in bursts and send audio and images, and the worst failures show up as “Succeeded”.',
      result: 'One shared n8n webhook for WhatsApp, Instagram, Facebook and SMS: a Redis buffer where the last message processes all, media turned into text and targeted retries.',
    },
    'ghl-scheduling-tools': {
      kicker: 'GoHighLevel tooling',
      title: 'Scheduling tools for GoHighLevel, configured by headers',
      problem: 'One workflow per calendar doesn’t scale, and models hallucinate time slots.',
      result: 'One webhook serves every calendar. Config travels in the tool’s headers, and each booking re-checks the slot and returns real alternatives.',
    },
    'mcp-multitenant-clinic': {
      kicker: 'MCP server',
      title: 'Multi-tenant MCP server for a clinic management API',
      problem: 'n8n’s MCP trigger doesn’t pass connection headers, so clinics couldn’t be isolated without exposing tokens to the model.',
      result: 'A stateless TypeScript MCP server: one token per clinic, no database, 4 access levels from 23 to 54 tools and a response contract the agent branches on.',
    },
    'n8n-error-handler': {
      kicker: 'Observability',
      title: 'Error Handler for 300+ n8n workflows',
      problem: 'n8n only reports an error if someone checks the executions, and one email per error floods the inbox.',
      result: 'One central Error Handler in 3 lanes: a real-time log, a twice-daily digest and a weekly summary by workflow → node → error → client, with CSV.',
    },
  },
  frontendNoShot: 'Screenshots coming soon',
  frontendProjects: {
    alfanar: {
      title: 'Alfanar: vacation management with OAuth',
      role: 'FrontEnd Developer',
      desc: 'Complete vacation management system with Microsoft sign-in (OAuth), an interactive calendar with every employee’s leave, org chart, statistics and performance reviews. Intuitive, responsive and fast.',
    },
    sinteg: {
      title: 'SINTEG: health insurance system',
      role: 'FrontEnd Developer | Programmer Analyst',
      desc: 'Insurance system for companies and individuals: companies contract medical plans for their employees, and the app manages payments to doctors and service units and the employees’ discounts.',
    },
    syscam: {
      title: 'SYSCAM: HR management system',
      role: 'FrontEnd Developer | Programmer Analyst',
      desc: 'HR system with attendance control, hour logging, vacation management, sick leave and justifications. Includes login, employee movements and ID cards with barcodes.',
    },
    ecommerce: {
      title: 'Dynamic e-commerce',
      role: 'FrontEnd Developer',
      desc: 'Custom online store that adapts in real time to the company’s API data, with a purchase module and automatic price calculation.',
    },
  },
  stack: {
    groups: {
      automation: { title: 'Automation · AI · Backend', also: ['GoHighLevel', 'Retell AI (voice)', 'Google Calendar', 'REST APIs', 'Webhooks', 'Prompt Engineering'] },
      frontend: { title: 'Frontend', also: ['JavaScript', 'Redux', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'HTML5', 'CSS3', 'Vite'] },
      infra: { title: 'Infrastructure · Data · Tools', also: ['SQL Server', 'MySQL', 'Git & GitHub', 'Linux'] },
    },
  },
  education: {
    degreeLabel: 'Degree',
    degree: 'Higher Technical Degree (TSU) in Computer Science',
    place: 'Instituto Universitario “Juan Pablo Pérez Alfonzo” (IUTEPAL)',
    period: '2021 – 2022',
    certsLabel: 'Certificates',
    certs: ['Cyber Defense Workshop · Grupo Lazarus (CIIL) · 2022'],
    langsLabel: 'Languages',
    langs: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Intermediate (conversational / technical)' },
    ],
    setupLabel: 'Work setup',
    setup: [
      { name: 'Remote', value: 'Valencia, Venezuela · UTC−4' },
      { name: 'Status', value: 'Available for new projects' },
    ],
  },
  contact: {
    title: 'What would you like to automate?',
    text: 'Tell me about your case and I’ll reply within 12 hours with a proposal to solve it.',
    upworkValue: 'Freelance profile',
    form: {
      name: 'name',
      email: 'email',
      company: 'company (optional)',
      phone: 'phone (optional)',
      type: 'inquiry type',
      message: 'message',
      send: 'Send message',
      sending: 'Sending…',
      ok: 'Message sent! I’ll get back to you soon.',
      error: 'Something went wrong. Write to me directly at',
      types: [
        { label: 'Freelance project', value: 'Proyecto freelance' },
        { label: 'Job opening', value: 'Vacante / empleo' },
        { label: 'Consulting', value: 'Consultoría / asesoría' },
        { label: 'Other', value: 'Otro' },
      ],
    },
  },
  footer: { text: 'AI agents, automations and web systems for your business.' },
  chat: {
    button: 'Ask my AI assistant',
    title: 'Danny’s assistant',
    subtitle: 'Ask anything about Danny',
    welcome: 'Hi! I’m Danny’s personal assistant. I can tell you about his experience, projects, stack and availability. What would you like to know?',
    placeholder: 'Type your message…',
    leadPrompt: 'Leave your name and phone so Danny can get back to you:',
    namePlaceholder: 'Your name',
    phonePlaceholder: 'Your phone / WhatsApp',
    start: 'Start chatting',
    thanks: 'Thanks, {name}! What would you like to know about Danny?',
    typing: 'typing…',
    error: 'Oops, I couldn’t connect right now. Reach Danny on WhatsApp or by email.',
    reset: 'Restart conversation',
    close: 'Close',
    send: 'Send',
  },
}

export default en
