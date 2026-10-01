// Tipos del contenido. Normalmente no hace falta tocar este archivo:
// el contenido se edita en shared.ts (datos comunes) y en en.ts / es.ts (textos).

export const LANGS = ['en', 'es'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'en'

export const PROFILE_ORDER = ['ia', 'frontend', 'ti'] as const
export type ProfileKey = (typeof PROFILE_ORDER)[number]

export const PROJECT_SLUGS = [
  'ai-booking-agent-dental',
  'multichannel-messaging-backend',
  'ghl-scheduling-tools',
  'mcp-multitenant-clinic',
  'n8n-error-handler',
] as const
export type ProjectSlug = (typeof PROJECT_SLUGS)[number]

export type FrontendId = 'alfanar' | 'sinteg' | 'syscam' | 'ecommerce'
export type StackGroupId = 'automation' | 'frontend' | 'infra'
export type SocialKey = 'email' | 'linkedin' | 'github' | 'upwork' | 'whatsapp'

/** Iconos de trazo disponibles (ver src/components/icons.tsx). */
export type IconName =
  | 'zap' | 'bot' | 'split' | 'db' | 'cal' | 'globe' | 'code' | 'send' | 'user' | 'users'
  | 'shield' | 'clock' | 'mail' | 'alert' | 'wrench' | 'server' | 'file' | 'trash' | 'list'
  | 'text' | 'mic' | 'refresh' | 'chart' | 'layout' | 'plug' | 'lock' | 'buoy' | 'monitor'
  | 'flow' | 'bag' | 'arrowUR' | 'sheet' | 'check'

export interface Service {
  icon: IconName
  title: string
  desc: string
  tag: string
}

export interface Stat {
  value: string // número grande, p. ej. '300'
  suffix: string // va en color de acento, p. ej. '+'
  label: string
}

export interface ProfileText {
  label: string // texto de la pestaña
  roles: [string, string]
  tagline: string
  intro: string
  /** El primer párrafo se muestra como frase destacada; los demás, como texto normal. */
  about: string[]
  chipsLabel: string
  chips: string[]
  stats?: Stat[]
  services: Service[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  current?: boolean
  desc: string
  tags: string[]
}

export interface ProjectText {
  kicker: string
  title: string
  problem: string
  result: string
}

export interface FrontendText {
  title: string
  role: string
  desc: string
}

export interface Dictionary {
  meta: { title: string; description: string; ogRole: string; ogAlt: string }
  nav: { about: string; experience: string; projects: string; frontend: string; stack: string; contact: string; menu: string; theme: string; language: string; main: string; mobile: string }
  hero: {
    available: string
    location: string
    cta: string
    cv: string
    caption: string
    seal: string
    marqueeLabel: string
    meta: { value: string; label: string }[]
  }
  sections: {
    about: { kicker: string; title: string }
    what: { kicker: string; title: string; lead: string }
    experience: { kicker: string; title: string }
    projects: { kicker: string; title: string; lead: string }
    frontend: { kicker: string; title: string }
    stack: { kicker: string; title: string }
    education: { kicker: string; title: string }
    contact: { kicker: string; title: string }
  }
  profileTabsLabel: string
  profiles: Record<ProfileKey, ProfileText>
  servicesCta: { title: string; button: string }
  experienceNow: string
  experience: ExperienceItem[]
  projectLabels: { problem: string; result: string; animation: string; diagram: string }
  projects: Record<ProjectSlug, ProjectText>
  frontendNoShot: string
  frontendProjects: Record<FrontendId, FrontendText>
  stack: { groups: Record<StackGroupId, { title: string; also: string[] }> }
  education: {
    degreeLabel: string
    degree: string
    place: string
    period: string
    note: string
    certsLabel: string
    certs: string[]
    langsLabel: string
    langs: { name: string; level: string }[]
    setupLabel: string
    setup: { name: string; value: string }[]
  }
  contact: {
    title: string
    text: string
    upworkValue: string
    form: {
      name: string
      email: string
      company: string
      phone: string
      type: string
      message: string
      send: string
      sending: string
      ok: string
      error: string
      /** label = texto visible; value = lo que llega al webhook de n8n (se deja en español). */
      types: { label: string; value: string }[]
    }
  }
  footer: { text: string }
  chat: {
    button: string
    title: string
    subtitle: string
    welcome: string
    placeholder: string
    leadPrompt: string
    namePlaceholder: string
    phonePlaceholder: string
    start: string
    thanks: string // {name} se reemplaza por el nombre del visitante
    typing: string
    error: string
    reset: string
    close: string
    send: string
  }
}
