import { useEffect, useState } from 'react'
import { PROFILES } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Projects from './components/Projects'
import FrontendProjects from './components/FrontendProjects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [profile, setProfile] = useState('ia')

  // Tema: preferencia guardada o del sistema.
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(saved || (prefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // Perfil inicial desde ?perfil=ia|frontend|ti (para compartir enlaces).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('perfil')
    if (p && PROFILES[p]) setProfile(p)
  }, [])

  const changeProfile = (p) => {
    setProfile(p)
    const url = new URL(window.location)
    url.searchParams.set('perfil', p)
    window.history.replaceState({}, '', url)
  }

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero profile={profile} onChangeProfile={changeProfile} />
        <About profile={profile} onChangeProfile={changeProfile} />
        <WhatIDo profile={profile} onChangeProfile={changeProfile} />
        <Experience />
        <Projects />
        <FrontendProjects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
