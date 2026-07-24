import { useState } from 'react'
import Section from './Section'
import { LINKS } from '../data/content'

export default function Contact() {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Si no hay webhook configurado, abrimos el cliente de correo como respaldo.
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
    <Section id="contacto" label="// 05 · Hablemos" title="Contacto">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Enlaces directos */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            ¿Tienes una automatización o un agente de IA en mente? Escríbeme.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <span className="text-accent-soft dark:text-accent">email</span> ·{' '}
              <a href={`mailto:${LINKS.email}`} className="hover:underline">{LINKS.email}</a>
            </li>
            <li>
              <span className="text-accent-soft dark:text-accent">linkedin</span> ·{' '}
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">/in/tu-usuario ↗</a>
            </li>
            <li>
              <span className="text-accent-soft dark:text-accent">github</span> ·{' '}
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/tu-usuario ↗</a>
            </li>
            <li>
              <span className="text-accent-soft dark:text-accent">whatsapp</span> ·{' '}
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="hover:underline">Escribir por WhatsApp ↗</a>
            </li>
          </ul>
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
