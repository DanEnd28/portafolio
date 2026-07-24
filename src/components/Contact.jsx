import { useState } from 'react'
import Section from './Section'
import { LINKS } from '../data/content'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { SiWhatsapp, SiUpwork } from 'react-icons/si'

const CHANNELS = [
  { key: 'email', label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, Icon: FaEnvelope, color: '#22d3ee' },
  { key: 'linkedin', label: 'LinkedIn', value: 'Conectemos', href: LINKS.linkedin, Icon: FaLinkedin, color: '#0A66C2' },
  { key: 'github', label: 'GitHub', value: 'github.com/DanEnd28', href: LINKS.github, Icon: FaGithub, color: '#8b949e' },
  { key: 'upwork', label: 'Upwork', value: 'Perfil freelance', href: LINKS.upwork, Icon: SiUpwork, color: '#6FDA44' },
  { key: 'whatsapp', label: 'WhatsApp', value: '+58 424-4543543', href: LINKS.whatsapp, Icon: SiWhatsapp, color: '#25D366' },
]

export default function Contact() {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Sin webhook configurado → abrimos el cliente de correo como respaldo.
    if (!webhookUrl) {
      window.location.href = `mailto:${LINKS.email}`
      return
    }

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      setStatus('sending')
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contacto" label="// 08 · Hablemos" title="Contacto">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Canales de contacto con logos */}
        <div>
          <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            ¿Tienes una automatización, un agente de IA o una interfaz en mente? Escríbeme.
          </p>
          <div className="space-y-3">
            {CHANNELS.map(({ key, label, value, href, Icon, color }) => (
              <a
                key={key}
                href={href}
                target={key === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${color}1a`, color }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs text-slate-500">{label}</span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
                <span className="ml-auto text-slate-400 transition-transform group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Formulario (opcional, apunta a VITE_N8N_WEBHOOK_URL si existe) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="mb-1 block font-mono text-xs text-slate-500">nombre</label>
            <input
              id="nombre" name="nombre" type="text" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent-soft dark:border-white/15 dark:focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-slate-500">email</label>
            <input
              id="email" name="email" type="email" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent-soft dark:border-white/15 dark:focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="mb-1 block font-mono text-xs text-slate-500">mensaje</label>
            <textarea
              id="mensaje" name="mensaje" rows="4" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent-soft dark:border-white/15 dark:focus:border-accent"
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full justify-center">
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>

          {status === 'ok' && <p className="text-sm text-green-600 dark:text-green-400">¡Mensaje enviado! Te responderé pronto.</p>}
          {status === 'error' && <p className="text-sm text-red-600 dark:text-red-400">Hubo un error. Escríbeme directo a {LINKS.email}.</p>}
          {!webhookUrl && (
            <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
              * Configura VITE_N8N_WEBHOOK_URL para activar el envío; sin ella el botón abre tu correo.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
