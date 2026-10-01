import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { InlineScript } from '@/components/client/InlineScript'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { getDictionary, isLang, LANGS } from '@/content'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

// URL pública: NEXT_PUBLIC_SITE_URL o, en Vercel, el dominio de producción.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang)
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    icons: { icon: '/favicon.svg' },
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', es: '/es', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      url: `/${lang}`,
      siteName: 'Danny Endara',
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === 'es' ? 'es_VE' : 'en_US',
      alternateLocale: lang === 'es' ? ['en_US'] : ['es_VE'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0D' },
    { media: '(prefers-color-scheme: light)', color: '#FAFAFB' },
  ],
}

// Tema antes de pintar (evita parpadeo): oscuro por defecto, o el guardado.
const THEME_SCRIPT = `(function(){var t='dark';try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark')t=s}catch(e){}var r=document.documentElement;r.setAttribute('data-theme',t);r.classList.add('js')})()`

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={lang} data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <InlineScript html={THEME_SCRIPT} />
      </head>
      <body>{children}</body>
    </html>
  )
}
