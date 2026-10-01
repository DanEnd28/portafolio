import { notFound } from 'next/navigation'
import { getDictionary, isLang } from '@/content'
import { CHAT, SECTIONS } from '@/content/shared'
import Nav, { type NavLink } from '@/components/client/Nav'
import Effects from '@/components/client/Effects'
import ChatWidget from '@/components/client/ChatWidget'
import { About, Contact, Education, Experience, Footer, Frontend, Hero, Process, Projects, Stack, WhatIDo } from '@/components/sections'

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)

  const links: NavLink[] = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    ...(SECTIONS.proyectosAutomatizacion ? [{ href: '#projects', label: t.nav.projects }] : []),
    ...(SECTIONS.proyectosFrontend ? [{ href: '#frontend', label: t.nav.frontend }] : []),
    { href: '#stack', label: t.nav.stack },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <Nav lang={lang} links={links} labels={t.nav} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <WhatIDo t={t} />
        <Process t={t} />
        <Experience t={t} />
        {SECTIONS.proyectosAutomatizacion && <Projects t={t} />}
        {SECTIONS.proyectosFrontend && <Frontend t={t} />}
        <Stack t={t} />
        {SECTIONS.educacion && <Education t={t} />}
        <Contact t={t} />
      </main>
      <Footer t={t} />
      {CHAT.enabled && <ChatWidget t={t.chat} />}
      <Effects lang={lang} />
    </>
  )
}
