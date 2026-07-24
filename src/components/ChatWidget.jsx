import { useState, useRef, useEffect } from 'react'
import { CHAT } from '../data/content'
import { FaXmark, FaPaperPlane } from 'react-icons/fa6'

// Widget de chat flotante conectado a un webhook de n8n.
// Antes de chatear pide nombre + teléfono (lead), y los envía en cada mensaje
// para que n8n registre la conversación por visitante.
// POST { message, sessionId, visitor:{name,phone}, history } → { reply } | { messages } | { output } | texto.
export default function ChatWidget() {
  const webhook = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [messages, setMessages] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('chat_messages') || 'null')
      if (Array.isArray(saved) && saved.length) return saved
    } catch {
      /* noop */
    }
    return [{ role: 'bot', text: CHAT.welcome }]
  })
  const [visitor, setVisitor] = useState(null) // { name, phone }
  const [form, setForm] = useState({ name: '', phone: '' })
  const sessionId = useRef(null)
  const endRef = useRef(null)

  // Session id + visitante guardados en el navegador.
  useEffect(() => {
    let id = localStorage.getItem('chat_session')
    if (!id) {
      id = crypto.randomUUID?.() || String(Math.random()).slice(2)
      localStorage.setItem('chat_session', id)
    }
    sessionId.current = id
    try {
      const saved = JSON.parse(localStorage.getItem('chat_visitor') || 'null')
      if (saved?.name) setVisitor(saved)
    } catch {
      /* noop */
    }
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, visitor])

  // Persiste la conversación para que sobreviva a recargas.
  useEffect(() => {
    localStorage.setItem('chat_messages', JSON.stringify(messages))
  }, [messages])

  const reset = () => {
    localStorage.removeItem('chat_messages')
    localStorage.removeItem('chat_visitor')
    setVisitor(null)
    setForm({ name: '', phone: '' })
    setMessages([{ role: 'bot', text: CHAT.welcome }])
  }

  if (!CHAT.enabled || !webhook) return null

  const startChat = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const phone = form.phone.trim()
    if (!name || !phone) return
    const v = { name, phone }
    localStorage.setItem('chat_visitor', JSON.stringify(v))
    setVisitor(v)
    setMessages((m) => [...m, { role: 'bot', text: `¡Gracias, ${name}! 🙌 ¿En qué puedo ayudarte sobre Danny?` }])
  }

  const send = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || sending) return

    const history = messages.map((m) => ({ role: m.role, text: m.text }))
    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setSending(true)

    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: sessionId.current, visitor, history }),
      })
      const raw = await res.text()
      let reply = raw
      try {
        const data = JSON.parse(raw)
        reply =
          data.reply ??
          data.output ??
          (Array.isArray(data.messages) ? data.messages.join('\n\n') : null) ??
          data.text ??
          raw
      } catch {
        /* texto plano */
      }
      setMessages((m) => [...m, { role: 'bot', text: String(reply).trim() || '…' }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: 'Ups, no pude conectar ahora mismo. Escríbele a Danny por WhatsApp o email 🙏' },
      ])
    } finally {
      setSending(false)
    }
  }

  const inputCls =
    'w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent2 dark:border-white/15 dark:focus:border-accent2'

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir asistente"
        className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-accent2 text-white shadow-lg shadow-accent2/30 transition-transform hover:scale-105"
      >
        {open ? <FaXmark className="h-5 w-5" /> : <span className="text-2xl">💬</span>}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[90] flex h-[70vh] max-h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0e1626]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-accent2 px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">🤖</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{CHAT.title}</p>
              <p className="truncate text-xs text-white/80">{CHAT.subtitle}</p>
            </div>
            <button
              onClick={reset}
              title="Reiniciar conversación"
              aria-label="Reiniciar conversación"
              className="ml-auto rounded-lg bg-white/15 px-2 py-1 text-sm hover:bg-white/25"
            >
              ↺
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
                    m.role === 'user'
                      ? 'rounded-br-sm bg-accent2 text-white'
                      : 'rounded-bl-sm bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-slate-100'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-sm text-slate-500 dark:bg-white/10">
                  escribiendo…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Formulario previo (lead) o input de chat */}
          {!visitor ? (
            <form onSubmit={startChat} className="space-y-2 border-t border-slate-200 p-3 dark:border-white/10">
              <p className="font-mono text-[11px] text-slate-500">
                Déjame tu nombre y teléfono para que Danny pueda escribirte:
              </p>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Tu nombre"
                required
                className={inputCls}
              />
              <input
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="Tu teléfono / WhatsApp"
                type="tel"
                required
                className={inputCls}
              />
              <button
                type="submit"
                disabled={!form.name.trim() || !form.phone.trim()}
                className="w-full rounded-lg bg-accent2 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-40"
              >
                Empezar a chatear
              </button>
            </form>
          ) : (
            <form onSubmit={send} className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={CHAT.placeholder}
                className="flex-1 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm outline-none focus:border-accent2 dark:border-white/15"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent2 text-white transition-opacity disabled:opacity-40"
              >
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}
