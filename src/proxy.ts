import { NextResponse, type NextRequest } from 'next/server'
import { DEFAULT_LANG, LANGS, type Lang } from './content/types'

// "/" (o cualquier ruta sin idioma) → /en o /es.
// Prioridad: idioma elegido antes en el selector (cookie) → Accept-Language → inglés.
function pickLang(req: NextRequest): Lang {
  const isLang = (v?: string | null): v is Lang => !!v && (LANGS as readonly string[]).includes(v)
  const saved = req.cookies.get('NEXT_LOCALE')?.value
  if (isLang(saved)) return saved
  const header = req.headers.get('accept-language') || ''
  const prefs = header
    .split(',')
    .map((part) => {
      const [tag, ...rest] = part.trim().split(';')
      const q = rest.find((r) => r.trim().startsWith('q='))
      return { lang: tag.toLowerCase().split('-')[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 }
    })
    .filter((p) => p.lang)
    .sort((a, b) => b.q - a.q)
  return prefs.map((p) => p.lang).find(isLang) ?? DEFAULT_LANG
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (LANGS.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return
  const url = req.nextUrl.clone()
  url.pathname = `/${pickLang(req)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Todo menos archivos estáticos, internos de Next y rutas de API.
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
