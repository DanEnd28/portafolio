import { useState, useRef, useEffect } from 'react'
import { CHAT } from '../data/content'
import { FaXmark, FaPaperPlane } from 'react-icons/fa6'

// Widget de chat flotante conectado a un webhook de n8n.
// Envía { message, sessionId, history } por POST y espera una respuesta
// { reply } | { messages: [...] } | { output } | texto plano.
export default function ChatWidget() {
  const webhook = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: CHAT.welcome }])
  const sessionId = useRef(null)
  const endRef = useRef(null)
  const listRef = useRef(null)

  // Session id estable por visitante (persistente en el navegador).
  useEffect(() => {
    let id = localStorage.getItem('chat_session')
    if (!id) {
      id = (crypto.randomUUID?.() || String(Math.random()).slice(2))
      localStorage.setItem('chat_session', id)
    }
    sessionId.current = id
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  if (!CHAT.enabled || !webhook) return null

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
        body: JSON.stringify({ message: text, sessionId: sessionId.current, history }),
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
        /* respuesta en texto plano */
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

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir asistente"
        className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-accent2 text-white shadow-lg shadow-accent2/30 transition-transform hover:scale-105 dark:bg-accent2"
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
          </div>

          {/* Mensajes */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
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

          {/* Input */}
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
        </div>
      )}
    </>
  )
}
