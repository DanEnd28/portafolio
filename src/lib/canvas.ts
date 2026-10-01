// Diagramas estilo n8n de los proyectos de automatización (póster de cada tarjeta).
// Genera un SVG como texto en el servidor: nodos, cables bézier y un nodo clave en índigo.
import { IC } from '@/components/icons'
import type { IconName, ProjectSlug } from '@/content/types'

type Brand = 'whatsapp' | 'redis' | 'n8n' | 'claude' | 'sheets' | 'mcp'

const BR: Record<Brand, string> = {
  whatsapp:
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  redis:
    'M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z',
  n8n:
    'M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632',
  claude:
    'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
  sheets:
    'M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z',
  mcp:
    'M13.85 0a4.16 4.16 0 0 0-2.95 1.217L1.456 10.66a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l9.442-9.442a2.49 2.49 0 0 1 3.541 0 2.49 2.49 0 0 1 0 3.541L8.59 12.97l-.1.1a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l.1-.098 7.03-7.034a2.49 2.49 0 0 1 3.542 0l.049.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.755l1.753 1.753a.835.835 0 0 0 1.18 0 .835.835 0 0 0 0-1.18l-1.753-1.753a.266.266 0 0 1 0-.394l8.54-8.54a4.185 4.185 0 0 0 0-5.9l-.05-.05a4.16 4.16 0 0 0-2.95-1.218c-.2 0-.401.02-.6.048a4.17 4.17 0 0 0-1.17-3.552A4.16 4.16 0 0 0 13.85 0m0 3.333a.84.84 0 0 0-.59.245L6.275 10.56a4.186 4.186 0 0 0 0 5.902 4.186 4.186 0 0 0 5.902 0L19.16 9.48a.835.835 0 0 0 0-1.18.835.835 0 0 0-1.18 0l-6.985 6.984a2.49 2.49 0 0 1-3.54 0 2.49 2.49 0 0 1 0-3.54l6.983-6.985a.835.835 0 0 0 0-1.18.84.84 0 0 0-.59-.245',
}

interface CanvasNode {
  id: string
  x: number
  y: number
  t?: 'trig' | 'agent' | 'sub'
  w?: number
  h?: number
  sz?: number
  i?: IconName
  b?: Brand
  l: string
  s?: string
  hl?: boolean
  sa?: boolean
  loop?: boolean
}
type Edge = [string, string, (0 | 1)?, ('sub' | 'side' | 'wrap')?]
interface Canvas {
  lanes?: { y: number; t: string; s: string; a?: boolean }[]
  n: CanvasNode[]
  e: Edge[]
}

const CV: Record<ProjectSlug, Canvas> = {
  'ai-booking-agent-dental': {
    n: [
      { id: 'wa', x: 30, y: 76, t: 'trig', b: 'whatsapp', l: 'WhatsApp', s: 'new message' },
      { id: 'ag', x: 136, y: 72, t: 'agent', w: 160, i: 'bot', l: 'AI Agent', s: 'Claude / GPT', hl: true },
      { id: 'if', x: 346, y: 76, i: 'split', l: 'Sensitive?', s: 'pain · claims' },
      { id: 'rp', x: 470, y: 30, i: 'send', l: 'Reply' },
      { id: 'hm', x: 470, y: 128, i: 'users', l: 'Human team' },
      { id: 't1', x: 104, y: 238, t: 'sub', i: 'list', l: 'Services' },
      { id: 't2', x: 180, y: 238, t: 'sub', i: 'cal', l: 'Slots' },
      { id: 't3', x: 256, y: 238, t: 'sub', i: 'user', l: 'Patient ID' },
      { id: 't4', x: 332, y: 238, t: 'sub', i: 'shield', l: 'Book', s: '3 checks', sa: true },
      { id: 'api', x: 470, y: 232, i: 'db', l: 'Clinic API' },
    ],
    e: [['wa', 'ag', 1], ['ag', 'if', 1], ['if', 'rp'], ['if', 'hm'], ['ag', 't1', 0, 'sub'], ['ag', 't2', 0, 'sub'], ['ag', 't3', 0, 'sub'], ['ag', 't4', 0, 'sub'], ['t4', 'api', 0, 'side']],
  },
  'multichannel-messaging-backend': {
    n: [
      { id: 'wh', x: 30, y: 46, t: 'trig', i: 'zap', l: 'CRM webhook', s: 'WA · IG · FB · SMS' },
      { id: 'nm', x: 150, y: 46, i: 'code', l: 'Normalize' },
      { id: 'ix', x: 262, y: 46, i: 'split', l: 'Indexed?', s: 'retry ×4', loop: true },
      { id: 'md', x: 374, y: 46, i: 'mic', l: 'Media → text' },
      { id: 'rd', x: 30, y: 190, b: 'redis', l: 'Redis buffer', s: 'last one wins', hl: true, sa: true },
      { id: 'ag', x: 150, y: 190, i: 'bot', l: 'AI Agent' },
      { id: 'sz', x: 262, y: 190, i: 'text', l: 'Sanitize', s: 'split per channel' },
      { id: 'sd', x: 374, y: 190, i: 'send', l: 'Send via CRM' },
      { id: 'rt', x: 482, y: 190, i: 'refresh', l: 'Retry', s: 'no provider id' },
    ],
    e: [['wh', 'nm'], ['nm', 'ix'], ['ix', 'md'], ['md', 'rd', 1, 'wrap'], ['rd', 'ag', 1], ['ag', 'sz'], ['sz', 'sd'], ['sd', 'rt']],
  },
  'ghl-scheduling-tools': {
    n: [
      { id: 'fs', x: 30, y: 44, t: 'trig', i: 'zap', l: 'free_slots', s: 'headers: token, cal' },
      { id: 'gc', x: 158, y: 44, i: 'globe', l: 'Get calendar' },
      { id: 'gs', x: 278, y: 44, i: 'cal', l: 'Free slots' },
      { id: 'ft', x: 398, y: 44, i: 'text', l: 'Readable days' },
      { id: 'bk', x: 30, y: 176, t: 'trig', i: 'zap', l: 'book', s: 'same headers' },
      { id: 'nz', x: 158, y: 176, i: 'code', l: 'Normalize date' },
      { id: 'q', x: 278, y: 176, i: 'split', l: 'Slot free?', s: 'anti-hallucination', hl: true, sa: true },
      { id: 'ok', x: 440, y: 138, i: 'check', l: 'Book' },
      { id: 'no', x: 440, y: 228, i: 'refresh', l: 'Alternatives' },
    ],
    e: [['fs', 'gc'], ['gc', 'gs'], ['gs', 'ft'], ['bk', 'nz', 1], ['nz', 'q', 1], ['q', 'ok', 1], ['q', 'no']],
  },
  'mcp-multitenant-clinic': {
    n: [
      { id: 'a1', x: 30, y: 40, t: 'trig', i: 'bot', l: 'Patient agent' },
      { id: 'a2', x: 30, y: 138, t: 'trig', i: 'users', l: 'Staff assistant' },
      { id: 'a3', x: 30, y: 236, t: 'trig', i: 'code', l: 'Custom app' },
      { id: 'gt', x: 160, y: 138, i: 'shield', l: 'Gate', s: '4 access levels', hl: true, sa: true },
      { id: 'sv', x: 272, y: 138, b: 'mcp', l: 'McpServer', s: 'new per request' },
      { id: 'tl', x: 384, y: 82, i: 'wrench', l: 'Tools', s: '23–54 by level' },
      { id: 'api', x: 492, y: 82, i: 'db', l: 'Clinic API' },
      { id: 'al', x: 384, y: 212, i: 'alert', l: 'n8n alert', s: 'error modes only' },
    ],
    e: [['a1', 'gt', 1], ['a2', 'gt', 1], ['a3', 'gt', 1], ['gt', 'sv', 1], ['sv', 'tl'], ['tl', 'api'], ['sv', 'al']],
  },
  'n8n-error-handler': {
    lanes: [
      { y: 38, t: 'LANE 1', s: 'real time', a: true },
      { y: 130, t: 'LANE 2', s: 'digest' },
      { y: 222, t: 'LANE 3', s: 'weekly' },
    ],
    n: [
      { id: 'et', x: 126, y: 48, sz: 38, t: 'trig', i: 'alert', l: 'Error Trigger', hl: true },
      { id: 'ex', x: 232, y: 48, sz: 38, i: 'code', l: 'Extract info' },
      { id: 'lg', x: 338, y: 48, sz: 38, b: 'sheets', l: 'Error log' },
      { id: 'em', x: 444, y: 48, sz: 38, i: 'mail', l: 'Email alert' },
      { id: 'c2', x: 126, y: 140, sz: 38, t: 'trig', i: 'clock', l: 'Cron 2×/day' },
      { id: 'rp', x: 232, y: 140, sz: 38, i: 'list', l: 'Read period' },
      { id: 'dg', x: 338, y: 140, sz: 38, i: 'send', l: 'Digest' },
      { id: 'c3', x: 126, y: 232, sz: 38, t: 'trig', i: 'clock', l: 'Cron weekly' },
      { id: 'sm', x: 232, y: 232, sz: 38, i: 'chart', l: 'Summary + CSV' },
      { id: 'sl', x: 338, y: 232, sz: 38, i: 'send', l: 'Email + Slack' },
      { id: 'cl', x: 444, y: 232, sz: 38, i: 'trash', l: 'Clean old rows' },
    ],
    e: [['et', 'ex', 1], ['ex', 'lg', 1], ['lg', 'em'], ['c2', 'rp'], ['rp', 'dg'], ['c3', 'sm'], ['sm', 'sl'], ['sl', 'cl']],
  },
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** SVG del diagrama de un proyecto, como texto. */
export function canvasSVG(key: ProjectSlug, label: string): string {
  const c = CV[key]
  const W = 560
  const H = 315
  const out: string[] = []
  const wires: string[] = []
  const nodes: string[] = []
  const dots: string[] = []
  const idx: Record<string, Required<Pick<CanvasNode, 'w' | 'h'>> & CanvasNode> = {}
  const pre = 'w-' + key.replace(/[^a-z0-9]/g, '')

  c.n.forEach((n0) => {
    const s = n0.sz || 48
    const w = n0.t === 'agent' ? n0.w || 150 : n0.t === 'sub' ? 40 : s
    const h = n0.t === 'agent' ? 56 : n0.t === 'sub' ? 40 : s
    idx[n0.id] = { ...n0, w, h }
  })

  c.lanes?.forEach((ln) => {
    out.push(`<rect class="lane" x="10" y="${ln.y}" width="540" height="86" rx="10"/>`)
    out.push(`<text class="lane-t${ln.a ? ' acc' : ''}" x="24" y="${ln.y + 38}">${ln.t}</text>`)
    out.push(`<text class="sl" x="24" y="${ln.y + 53}">${ln.s}</text>`)
  })

  c.e.forEach((e, i) => {
    const a = idx[e[0]]
    const b = idx[e[1]]
    const live = !!e[2]
    const type = e[3] || 'main'
    let d: string
    if (type === 'sub') {
      const sx = a.x + a.w / 2, sy = a.y + a.h, tx = b.x + b.w / 2, ty = b.y
      d = `M${sx} ${sy} C${sx} ${sy + 46} ${tx} ${ty - 46} ${tx} ${ty}`
      wires.push(`<path class="wire sub" d="${d}"/>`)
      dots.push(`<circle class="port" cx="${sx}" cy="${sy}" r="3.2"/>`)
      return
    }
    const ax = a.x + a.w, ay = a.y + a.h / 2, bx = b.x, by = b.y + b.h / 2
    if (type === 'wrap') {
      const mid = (a.y + a.h + b.y) / 2 + 6, r = 12
      d = `M${ax} ${ay} H${ax + 14} q${r} 0 ${r} ${r} V${mid - r} q0 ${r} -${r} ${r} H${bx - 14} q-${r} 0 -${r} ${r} V${by - r} q0 ${r} ${r} ${r} H${bx}`
    } else if (type === 'side') {
      const k = Math.max(30, (bx - ax) / 2)
      d = `M${ax} ${ay} C${ax + k} ${ay} ${bx - k} ${by} ${bx} ${by}`
    } else {
      const k2 = Math.max(26, (bx - ax) / 2)
      d = `M${ax} ${ay} C${ax + k2} ${ay} ${bx - k2} ${by} ${bx} ${by}`
    }
    const pid = `${pre}-${i}`
    wires.push(`<path id="${pid}" class="wire${live ? ' live' : ''}" d="${d}"/>`)
    if (live) wires.push(`<circle class="pulse" r="3"><animateMotion dur="2.2s" repeatCount="indefinite" begin="${(i * 0.35).toFixed(2)}s"><mpath href="#${pid}"/></animateMotion></circle>`)
    dots.push(`<circle class="port${live ? ' live' : ''}" cx="${ax}" cy="${ay}" r="3.2"/>`)
    dots.push(`<rect class="port${live ? ' live' : ''}" x="${bx - 2.5}" y="${by - 5}" width="5" height="10" rx="1.5"/>`)
  })

  c.n.forEach((n0) => {
    const n = idx[n0.id]
    const g: string[] = []
    const cx = n.x + n.w / 2, cy = n.y + n.h / 2
    const isz = n.t === 'agent' ? 22 : n.t === 'sub' ? 17 : Math.round(n.w * 0.46)
    if (n.hl) g.push(`<rect class="hl-glow" x="${n.x - 6}" y="${n.y - 6}" width="${n.w + 12}" height="${n.h + 12}" rx="18"/>`)
    if (n.t === 'sub') {
      g.push(`<circle class="nd" cx="${cx}" cy="${cy}" r="20"/>`)
    } else if (n.t === 'trig') {
      const rr = n.h / 2, r2 = 10
      g.push(`<path class="nd" d="M${n.x + rr} ${n.y} H${n.x + n.w - r2} q${r2} 0 ${r2} ${r2} V${n.y + n.h - r2} q0 ${r2} -${r2} ${r2} H${n.x + rr} a${rr} ${rr} 0 0 1 0 -${n.h}z"/>`)
    } else {
      g.push(`<rect class="nd" x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="${n.t === 'agent' ? 12 : 11}"/>`)
    }
    if (n.hl) g.push(`<rect class="hl-ring" x="${n.x - 3}" y="${n.y - 3}" width="${n.w + 6}" height="${n.h + 6}" rx="14"/>`)
    const ix = n.t === 'agent' ? n.x + 16 : cx - isz / 2, iy = cy - isz / 2
    if (n.b) {
      g.push(`<svg x="${ix}" y="${iy}" width="${isz}" height="${isz}" viewBox="0 0 24 24"><path class="brand-ic" d="${BR[n.b]}"/></svg>`)
    } else if (n.i) {
      g.push(`<svg class="nd-ic" x="${ix}" y="${iy}" width="${isz}" height="${isz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${IC[n.i]}</svg>`)
    }
    if (n.t === 'agent') {
      g.push(`<text class="lb" x="${n.x + 48}" y="${cy - 2}">${esc(n.l)}</text>`)
      g.push(`<text class="sl" x="${n.x + 48}" y="${cy + 14}">${esc(n.s || '')}</text>`)
    } else {
      const ly = n.y + n.h + 17
      g.push(`<text class="lb" text-anchor="middle" x="${cx}" y="${ly}">${esc(n.l)}</text>`)
      if (n.s) g.push(`<text class="sl${n.sa ? ' acc' : ''}" text-anchor="middle" x="${cx}" y="${ly + 14}">${esc(n.s)}</text>`)
    }
    if (n.loop) {
      g.push(`<path class="wire" d="M${n.x + n.w} ${n.y + 14} c18 0 18 -28 -${n.w / 2 - 6} -28 c-22 0 -26 14 -${n.w / 2 + 2} 28" style="stroke-dasharray:3 3"/>`)
    }
    if (n.hl) {
      const bx2 = n.x + n.w - 4, by2 = n.y + 4
      g.push(`<circle class="badge" cx="${bx2}" cy="${by2}" r="7"/><path class="badge-ck" d="M${bx2 - 3} ${by2} l2 2 l4 -4"/>`)
    }
    nodes.push(`<g class="${n.hl ? 'hl' : ''}">${g.join('')}</g>`)
  })

  return `<svg class="cv" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(label)}">${out.join('')}${wires.join('')}${dots.join('')}${nodes.join('')}</svg>`
}
