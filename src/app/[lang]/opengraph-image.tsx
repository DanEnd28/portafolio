import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getDictionary, isLang, LANGS } from '@/content'

// Imagen para redes (OpenGraph / Twitter) por idioma, en el estilo del sitio.
export const alt = 'Danny Endara, AI Automation & Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

const FONTS = join(process.cwd(), 'node_modules/geist/dist/fonts')

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : 'en'
  const t = getDictionary(lang)
  const [sans, sansMed, mono] = await Promise.all([
    readFile(join(FONTS, 'geist-sans/Geist-SemiBold.ttf')),
    readFile(join(FONTS, 'geist-sans/Geist-Medium.ttf')),
    readFile(join(FONTS, 'geist-mono/GeistMono-Medium.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0B0B0D',
          backgroundImage: 'radial-gradient(circle at 88% 8%, rgba(110,107,255,.30), rgba(11,11,13,0) 55%)',
          color: '#EDEDF0',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: '#EDEDF0',
                color: '#0B0B0D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Geist Mono',
                fontSize: 22,
              }}
            >
              DE
            </div>
            <div style={{ fontSize: 26, fontWeight: 500 }}>Danny Endara</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 18px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,.14)',
              background: '#121216',
              fontFamily: 'Geist Mono',
              fontSize: 20,
              color: '#A3A3AD',
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 999, background: '#3DD68C' }} />
            {t.hero.available}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Geist Mono', fontSize: 26, color: '#8E8BFF', marginBottom: 18 }}>n8n · AI Agents · MCP · React</div>
          <div style={{ fontSize: 136, lineHeight: 0.92, letterSpacing: '-0.055em', fontWeight: 600 }}>Danny</div>
          <div style={{ fontSize: 136, lineHeight: 0.92, letterSpacing: '-0.055em', fontWeight: 600, color: '#9A9AA4' }}>Endara</div>
          <div style={{ display: 'flex', marginTop: 34, fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em' }}>{t.meta.ogRole}</div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 160, borderRadius: 3, background: '#6E6BFF' }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: sans, weight: 600, style: 'normal' },
        { name: 'Geist', data: sansMed, weight: 500, style: 'normal' },
        { name: 'Geist Mono', data: mono, weight: 500, style: 'normal' },
      ],
    },
  )
}
