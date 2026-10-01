'use client'

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from 'react'
import { CHAT } from '@/content/shared'
import type { Dictionary } from '@/content/types'
import { UiIcon } from '../icons'

// Widget de chat flotante conectado a un webhook de n8n.
// Antes de chatear pide nombre + teléfono (lead), y los envía en cada mensaje
// para que n8n registre la conversación por visitante.
// POST { message, sessionId, visitor:{name,phone}, history } → { reply } | { messages } | { output } | texto.
const WEBHOOK = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL

type Texts = Dictionary['chat']
interface Msg {
  role: 'bot' | 'user'
  text: string
  // Mensajes fijos del widget: se muestran en el idioma activo, no en el que se guardaron.
  sys?: 'welcome' | 'thanks'
  name?: string
}
interface Visitor {
  name: string
  phone: string
}

function load<T>(key: string): T | null {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') as T | null
  } catch {
    return null
  }
}
function save(key: string, value: unknown) {
  try {
    if (value === null) localStorage.removeItem(key)
    else localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* sin almacenamiento */
  }
}
function sessionId(): string {
  try {
    let id = localStorage.getItem('chat_session')
    if (!id) {
      id = crypto.randomUUID?.() || String(Math.random()).slice(2)
      localStorage.setItem('chat_session', id)
    }
    return id
  } catch {
    return String(Math.random()).slice(2)
  }
}

// En móvil, el botón aparece al bajar del hero (para no tapar su contenido).
const subscribeScroll = (cb: () => void) => {
  window.addEventListener('scroll', cb, { passive: true })
  return () => window.removeEventListener('scroll', cb)
}
const pastHero = () => window.scrollY > Math.min(560, window.innerHeight * 0.7)

export default function ChatWidget({ t }: { t: Texts }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const scrolled = useSyncExternalStore(subscribeScroll, pastHero, () => false)

  useEffect(() => {
    if (!WEBHOOK && process.env.NODE_ENV !== 'production') {
      console.warn('[chat] Falta NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL: el widget de chat no se muestra.')
    }
  }, [])

  if (!CHAT.enabled || !WEBHOOK) return null

  const toggle = () => {
    setMounted(true)
    setOpen((o) => !o)
  }

  return (
    <>
      <button
        type="button"
        className={`chat-btn${!scrolled && !open ? ' hold' : ''}`}
        aria-expanded={open}
        aria-controls="chatPanel"
        aria-label={t.button}
        onClick={toggle}
      >
        <span className="spk">
          <UiIcon name={open ? 'close' : 'spark'} />
        </span>
        <span className="lbl">{t.button}</span>
      </button>
      {mounted && <ChatPanel t={t} open={open} webhook={WEBHOOK} onClose={() => setOpen(false)} />}
    </>
  )
}

function ChatPanel({ t, open, webhook, onClose }: { t: Texts; open: boolean; webhook: string; onClose: () => void }) {
  const welcome: Msg = { role: 'bot', text: t.welcome, sys: 'welcome' }
  const [messages, setMessages] = useState<Msg[]>(() => {
    const saved = load<Msg[]>('chat_messages')
    if (!Array.isArray(saved) || !saved.length) return [welcome]
    // Conversaciones guardadas antes de existir "sys": el primer mensaje siempre es la bienvenida.
    return saved.map((m, i) => (i === 0 && m.role === 'bot' && !m.sys ? { ...m, sys: 'welcome' } : m))
  })
  const shown = (m: Msg) =>
    m.sys === 'welcome' ? t.welcome : m.sys === 'thanks' ? t.thanks.replace('{name}', m.name ?? '') : m.text
  const [visitor, setVisitor] = useState<Visitor | null>(() => {
    const v = load<Visitor>('chat_visitor')
    return v?.name ? v : null
  })
  const [form, setForm] = useState<Visitor>({ name: '', phone: '' })
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const sid = useRef<string>('')
  const body = useRef<HTMLDivElement>(null)
  const field = useRef<HTMLInputElement>(null)

  useEffect(() => {
    sid.current = sessionId()
  }, [])

  // Persiste la conversación para que sobreviva a recargas.
  useEffect(() => {
    save('chat_messages', messages)
  }, [messages])

  useEffect(() => {
    const b = body.current
    if (b) b.scrollTop = b.scrollHeight
  }, [messages, sending, open, visitor])

  useEffect(() => {
    if (open) field.current?.focus()
  }, [open, visitor])

  const reset = () => {
    save('chat_messages', null)
    save('chat_visitor', null)
    setVisitor(null)
    setForm({ name: '', phone: '' })
    setMessages([welcome])
  }

  const startChat = (e: FormEvent) => {
    e.preventDefault()
    const name = form.name.trim()
    const phone = form.phone.trim()
    if (!name || !phone) return
    const v = { name, phone }
    save('chat_visitor', v)
    setVisitor(v)
    setMessages((m) => [...m, { role: 'bot', text: t.thanks.replace('{name}', name), sys: 'thanks', name }])
  }

  const send = async (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || sending) return
    const history = messages.map((m) => ({ role: m.role, text: shown(m) }))
    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setSending(true)
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: sid.current, visitor, history }),
      })
      const raw = await res.text()
      let reply: string = raw
      try {
        const data = JSON.parse(raw)
        reply =
          data.reply ?? data.output ?? (Array.isArray(data.messages) ? data.messages.join('\n\n') : null) ?? data.text ?? raw
      } catch {
        /* texto plano */
      }
      setMessages((m) => [...m, { role: 'bot', text: String(reply).trim() || '…' }])
    } catch {
      setMessages((m) => [...m, { role: 'bot', text: t.error }])
    } finally {
      setSending(false)
    }
  }

  return (
    <div id="chatPanel" className={`chat-panel${open ? ' open' : ''}`} role="dialog" aria-label={t.title} inert={!open}>
      <div className="cp-head">
        <span className="spk-static">
          <span className="spk">
            <UiIcon name="spark" />
          </span>
        </span>
        <div>
          <b>{t.title}</b>
          <small>{t.subtitle}</small>
        </div>
        <div className="cp-tools">
          <button type="button" className="icon-btn" onClick={reset} aria-label={t.reset} title={t.reset} tabIndex={open ? 0 : -1}>
            <UiIcon name="reset" />
          </button>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t.close} title={t.close} tabIndex={open ? 0 : -1}>
            <UiIcon name="close" />
          </button>
        </div>
      </div>
      <div className="cp-body" ref={body} aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === 'user' ? 'me' : 'ai'}`}>
            {shown(m)}
          </div>
        ))}
        {sending && <div className="msg ai typing">{t.typing}</div>}
      </div>
      {!visitor ? (
        <form className="cp-lead" onSubmit={startChat}>
          <p>{t.leadPrompt}</p>
          <input
            ref={field}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder={t.namePlaceholder}
            aria-label={t.namePlaceholder}
            autoComplete="name"
            required
            tabIndex={open ? 0 : -1}
          />
          <input
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder={t.phonePlaceholder}
            aria-label={t.phonePlaceholder}
            type="tel"
            autoComplete="tel"
            required
            tabIndex={open ? 0 : -1}
          />
          <button type="submit" className="btn btn-primary" disabled={!form.name.trim() || !form.phone.trim()} tabIndex={open ? 0 : -1}>
            {t.start}
          </button>
        </form>
      ) : (
        <form className="cp-in" onSubmit={send}>
          <input
            ref={field}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            autoComplete="off"
            tabIndex={open ? 0 : -1}
          />
          <button type="submit" className="btn btn-primary" aria-label={t.send} disabled={sending || !input.trim()} tabIndex={open ? 0 : -1}>
            <UiIcon name="arrowR" />
          </button>
        </form>
      )}
    </div>
  )
}
