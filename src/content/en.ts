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
    cta: 'Get in touch',
    cv: 'Download CV',
    caption: 'Currently at Lety.AI · Miami',
    seal: 'Open to work · for new projects · ',
    marqueeLabel: 'Technologies I work with',
    meta: [
      { value: '300+', label: 'workflows in production' },
      { value: '250+', label: 'active client accounts' },
      { value: 'n8n · MCP', label: 'agents, flows and my own MCP servers' },
      { value: 'ES · EN', label: 'Spanish · English' },
    ],
  },
  sections: {
    about: { kicker: 'About', title: 'About me' },
    what: {
      kicker: 'Services',
      title: 'What I do',
      lead: 'Pick a focus. The services change with it, the same way they change on the rest of the page.',
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
        'I build production AI agents and automations that stay up when an API fails, from the n8n flow to the React interface that makes them visible.',
      about: [
        'Today I work at Lety.AI (Miami), an AI agent platform, as Automation Lead & AI Agent Engineer: 300+ workflows in production for 250+ active client accounts across many industries.',
        'What sets me apart isn’t wiring nodes together. It’s designing systems that don’t break when an external API fails: errors classified by type (rate limit, timeout, auth, server), retries with exponential backoff + jitter, and root-cause diagnosis before any fix.',
        'I deliver the whole system: agent architecture (web chat, messaging and voice with Retell AI, plus my own MCP servers), orchestration in n8n, CRM integration (GoHighLevel) and language models (Claude, GPT), plus the resilience layer that keeps it running unattended.',
      ],
      chipsLabel: 'Industries I’ve worked with',
      chips: ['Health & Aesthetics', 'Real Estate', 'Education', 'Retail', 'Logistics & Shipping', 'and more'],
      stats: [
        { value: '300', suffix: '+', label: 'workflows in production' },
        { value: '250', suffix: '+', label: 'active client accounts' },
      ],
      services: [
        { icon: 'flow', title: 'Process automation', desc: 'I remove manual, repetitive work from your team with n8n flows, from simple tasks to architectures with queues, retries and typed error handling.', tag: 'n8n · Webhooks · Redis' },
        { icon: 'bot', title: 'Conversational agents', desc: 'Your customers get answers 24/7 on your website, by voice (Retell AI) and on WhatsApp or Telegram, with memory, tool calling, MCP servers and replies that don’t hallucinate.', tag: 'Web chat · Voice · MCP' },
        { icon: 'refresh', title: 'Resilience & error handling', desc: 'Systems that keep working when something fails: error classification, retries with backoff + jitter and root-cause diagnosis before you even notice.', tag: 'Retry · Backoff · RCA' },
        { icon: 'plug', title: 'API & CRM integrations', desc: 'I connect your CRM, calendar and databases so information flows on its own: GoHighLevel, Google Calendar, Supabase and PostgreSQL.', tag: 'GoHighLevel · Supabase' },
        { icon: 'chart', title: 'React dashboards', desc: 'Real-time visibility into your automations, with panels that consume and display that data instantly.', tag: 'React · Realtime' },
      ],
    },
    frontend: {
      label: 'Frontend',
      roles: ['Frontend Developer', 'React · TypeScript'],
      tagline: 'React · TypeScript · Tailwind · Redux · Material UI',
      intro:
        'I deliver interfaces and management systems your team can use without friction: fast, responsive and connected to your real APIs.',
      about: [
        'Front-end developer with experience building complete management systems: dynamic e-commerce, HR modules, vacation management, health insurance and ID card generation.',
        'I design and build intuitive, responsive interfaces with React, TypeScript, Tailwind, Redux and Material UI, integrating the backend team’s APIs and making sure data is shown clearly and efficiently.',
        'My recent work in automation and AI gives me an uncommon edge in frontend: I understand the whole system end to end, not just the visual layer.',
      ],
      chipsLabel: 'What I build',
      chips: ['E-commerce', 'Real-time dashboards', 'HR systems', 'Vacation management', 'OAuth authentication', 'Interactive calendars'],
      services: [
        { icon: 'layout', title: 'User interfaces', desc: 'An interface your users can use without friction: reusable, responsive and accessible components with React + Tailwind.', tag: 'React · Tailwind' },
        { icon: 'chart', title: 'Real-time dashboards', desc: 'Panels that show your data updated instantly, without anyone refreshing the page (Supabase Realtime).', tag: 'React · Supabase' },
        { icon: 'code', title: 'API consumption', desc: 'I connect your frontend to your team’s backend and keep app state predictable with Redux.', tag: 'REST · Redux' },
        { icon: 'lock', title: 'Authentication & integrations', desc: 'Secure access for your users with OAuth login (Microsoft) and protected flows, with clean version control in Git.', tag: 'OAuth · Git' },
        { icon: 'zap', title: 'TypeScript & performance', desc: 'Maintainable code and fast builds with Vite, so the project doesn’t become hard to touch over time.', tag: 'TypeScript · Vite' },
      ],
    },
    ti: {
      label: 'IT & Systems',
      roles: ['Systems Analyst / Developer', 'Automation · IT Support'],
      tagline: 'Automation · Systems integration · IT support · Databases',
      intro:
        'IT technician with a higher technical degree and experience keeping production systems running: development, integration, databases and technical support with analytical thinking.',
      about: [
        'Higher technical degree in Computer Science, with experience developing technology solutions, integrating systems and providing IT support. My recent work combines process automation with intelligence applied to production systems.',
        'I don’t stop at making a system work once. I design the layer that keeps it running every day: error detection and classification, and systematic root-cause diagnosis (network, external services, authentication or internal logic) before applying any fix.',
        'On top of that I bring a solid developer base (React, API integrations, relational databases) and user support. I’m looking for a role where this mix of systems, automation and analytical thinking has immediate impact.',
      ],
      chipsLabel: 'Areas of work',
      chips: ['User support', 'Systems integration', 'Databases', 'Process automation', 'Incident resolution', 'Management systems'],
      services: [
        { icon: 'buoy', title: 'IT support & incidents', desc: 'I resolve the incidents that slow your users down, with fast diagnosis and direct support.', tag: 'Support · Diagnosis' },
        { icon: 'plug', title: 'Systems integration', desc: 'I make your platforms, APIs, CRM (GoHighLevel) and external services talk to each other without friction.', tag: 'APIs · CRM' },
        { icon: 'db', title: 'Databases', desc: 'Solid, easy-to-maintain relational schemas (PostgreSQL, SQL Server, MySQL).', tag: 'PostgreSQL · SQL Server' },
        { icon: 'flow', title: 'Process automation', desc: 'I cut manual work and operational errors for your team with n8n flows.', tag: 'n8n · Processes' },
        { icon: 'monitor', title: 'Management systems', desc: 'Custom internal systems (HR, insurance, appointments, attendance) so your operation stops depending on spreadsheets.', tag: 'React · JavaScript' },
      ],
    },
  },
  servicesCta: { title: 'Have a flow that keeps breaking, or one that doesn’t exist yet?', button: 'Tell me about it' },
  experienceNow: 'Current',
  experience: [
    {
      role: 'Automation Lead & AI Agent Engineer',
      company: 'Lety.AI · Miami',
      period: 'Dec 2025 – Present',
      current: true,
      desc: 'Head of Agent Engineering and Development (rehired in 2026). I lead engineering for a fleet of production AI agents: 300+ workflows in production for 250+ active client accounts, and I added the custom AI development area. I built an MCP server from scratch to integrate an external scheduling API, so agents check availability and book appointments directly. I own ongoing support, new builds and the retry system (exponential backoff + jitter) across end-to-end n8n flows: WhatsApp/Meta, GoHighLevel, Claude/GPT and voice (Retell AI).',
      tags: ['n8n', 'MCP', 'GoHighLevel', 'Retell AI', 'Claude/GPT'],
    },
    {
      role: 'Prompt Engineer',
      company: 'Lety.AI · Miami',
      period: 'Apr 2025 – Dec 2025',
      desc: 'Designed and optimized prompts and knowledge bases for agents in health, real estate, education and retail. Diagnosed and fixed routing, memory and hallucination failures through log analysis.',
      tags: ['Prompt Engineering', 'Knowledge bases', 'n8n'],
    },
    {
      role: 'Front-End Developer',
      company: 'Alfanar Energía · freelance',
      period: '2024 – 2025',
      desc: 'HR module for employee vacation management with Microsoft login (OAuth), an interactive calendar and real-time notifications.',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      role: 'Programmer Analyst',
      company: 'Centro Policlínico Valencia',
      period: 'Aug 2022 – Nov 2024',
      desc: 'Clinical management systems: HR attendance control (SYSCAM), health insurance (SINTEG) and appointments. Technical support and incident resolution for internal users.',
      tags: ['JavaScript', 'React', 'SQL Server', 'IT Support'],
    },
    {
      role: 'Front-End Developer',
      company: 'S&H Software · freelance',
      period: '2023 – 2024',
      desc: 'Dynamic e-commerce that adapts in real time to API data, with a purchase module and automatic price calculation.',
      tags: ['React', 'JavaScript', 'API REST'],
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
    note: 'Certificate of academic excellence.',
    certsLabel: 'Certificates',
    certs: ['Cyber Defense Workshop · Grupo Lazarus (CIIL) · 2022', 'Entrepreneurship: cell phone repair · 2019', 'Office Tools · Inces · 2016'],
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
    title: 'Got a project, a role or an idea in mind?',
    text: 'Write to me. I reply fast and adapt to what you need.',
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
  footer: { text: 'Automation & AI · Frontend · Systems. Open to new opportunities.' },
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
