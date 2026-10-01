'use client'

import { useState, type FormEvent } from 'react'
import { LINKS } from '@/content/shared'
import type { Dictionary } from '@/content/types'
import { UiIcon } from '../icons'

// Envía el formulario al webhook del workflow de contacto de n8n
// (n8n/contacto/contacto-portafolio.json). Los nombres de los campos
// (nombre, email, empresa, telefono, tipo, mensaje) son los que espera ese workflow.
// Sin webhook configurado, abre el correo del visitante con el mensaje ya escrito.
const WEBHOOK = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactForm({ t }: { t: Dictionary['contact']['form'] }) {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    if (!WEBHOOK) {
      const body = `Nombre: ${data.nombre}\nEmail: ${data.email}\nEmpresa: ${data.empresa}\nTeléfono: ${data.telefono}\nTipo: ${data.tipo}\n\n${data.mensaje}`
      window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(`${data.tipo} · ${data.nombre || 'Portafolio'}`)}&body=${encodeURIComponent(body)}`
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(WEBHOOK, {
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
    <form className="card c-form reveal" style={{ ['--d' as string]: '.08s' }} onSubmit={onSubmit}>
      <div className="fld">
        <label htmlFor="f-name">{t.name}</label>
        <input id="f-name" name="nombre" autoComplete="name" required />
      </div>
      <div className="fld">
        <label htmlFor="f-email">{t.email}</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="fld">
        <label htmlFor="f-co">{t.company}</label>
        <input id="f-co" name="empresa" autoComplete="organization" />
      </div>
      <div className="fld">
        <label htmlFor="f-ph">{t.phone}</label>
        <input id="f-ph" name="telefono" type="tel" autoComplete="tel" />
      </div>
      <div className="fld full">
        <label htmlFor="f-type">{t.type}</label>
        <select id="f-type" name="tipo" defaultValue={t.types[0].value}>
          {t.types.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="fld full">
        <label htmlFor="f-msg">{t.message}</label>
        <textarea id="f-msg" name="mensaje" required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        <span>{status === 'sending' ? t.sending : t.send}</span>
        <UiIcon name="arrowR" />
      </button>
      <p className="f-status ok" role="status" hidden={status !== 'ok'}>
        {t.ok}
      </p>
      <p className="f-status err" role="alert" hidden={status !== 'error'}>
        {t.error} {LINKS.email}.
      </p>
    </form>
  )
}
