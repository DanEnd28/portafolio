'use client'

import { useLayoutEffect, useRef, type KeyboardEvent } from 'react'
import { PROFILE_ORDER, type ProfileKey } from '@/content/types'
import { useProfile } from './profile'

interface Props {
  labels: Record<ProfileKey, string>
  ariaLabel: string
  small?: boolean
}

/** Pestañas de perfil con indicador deslizante (todas las instancias van sincronizadas). */
export default function ProfileTabs({ labels, ariaLabel, small }: Props) {
  const [profile, setProfile] = useProfile()
  const box = useRef<HTMLDivElement>(null)
  const ind = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const place = () => {
      const on = box.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]')
      if (!on || !ind.current) return
      ind.current.style.width = on.offsetWidth + 'px'
      ind.current.style.transform = `translateX(${on.offsetLeft}px)`
    }
    place()
    window.addEventListener('resize', place)
    document.fonts?.ready.then(place)
    return () => window.removeEventListener('resize', place)
  }, [profile, labels])

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const i = PROFILE_ORDER.indexOf(profile)
    const next = PROFILE_ORDER[(i + (e.key === 'ArrowRight' ? 1 : PROFILE_ORDER.length - 1)) % PROFILE_ORDER.length]
    setProfile(next)
    box.current?.querySelector<HTMLButtonElement>(`[data-p="${next}"]`)?.focus()
  }

  return (
    <div ref={box} className={`tabs${small ? ' sm' : ''}`} role="tablist" aria-label={ariaLabel}>
      <span ref={ind} className="ind" aria-hidden="true" />
      {PROFILE_ORDER.map((k) => (
        <button
          key={k}
          type="button"
          role="tab"
          data-p={k}
          aria-selected={k === profile}
          tabIndex={k === profile ? 0 : -1}
          onClick={() => setProfile(k)}
          onKeyDown={onKey}
        >
          {labels[k]}
        </button>
      ))}
    </div>
  )
}
