import { useState } from 'react'
import Section from './Section'
import { LINKS, SOCIALS } from '../data/content'
import { socialIcon } from './SocialIcons'

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
        {/* Canales de contacto (desde SOCIALS) */}
        <div>
          <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            ¿Tienes un proyecto, una vacante o una idea en mente? Escríbeme — respondo
            rápido y me adapto a lo que necesites.
          </p>
          <div className="space-y-3">
            {SOCIALS.map(({ key, label, value, href, icon, color }) => {
              const Icon = socialIcon(icon)
              return (
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
              )
            })}
          </div>
        </div>

        {/* Formulario (opcional, apunta a VITE_N8N_WEBHOOK_URL si existe) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="mb-1 block font-mono text-xs text-slate-500">nombre</label>
            <input
              id="nombre" name="nombre" type="text" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:focus:border-accent2"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-slate-500">email</label>
            <input
              id="email" name="email" type="email" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:focus:border-accent2"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="empresa" className="mb-1 block font-mono text-xs text-slate-500">empresa <span className="opacity-50">(opcional)</span></label>
              <input
                id="empresa" name="empresa" type="text"
                className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:focus:border-accent2"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="mb-1 block font-mono text-xs text-slate-500">teléfono <span className="opacity-50">(opcional)</span></label>
              <input
                id="telefono" name="telefono" type="tel"
                className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:focus:border-accent2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tipo" className="mb-1 block font-mono text-xs text-slate-500">tipo de consulta</label>
            <select
              id="tipo" name="tipo" defaultValue="Proyecto freelance"
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:bg-[#0a0f1a] dark:focus:border-accent2"
            >
              <option>Proyecto freelance</option>
              <option>Vacante / empleo</option>
              <option>Consultoría / asesoría</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className="mb-1 block font-mono text-xs text-slate-500">mensaje</label>
            <textarea
              id="mensaje" name="mensaje" rows="4" required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2 dark:border-white/15 dark:focus:border-accent2"
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
