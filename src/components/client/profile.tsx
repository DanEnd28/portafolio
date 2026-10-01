'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { PROFILE_ORDER, type ProfileKey } from '@/content/types'

// El perfil activo vive en la URL (?perfil=ia|frontend|ti), así hero, sobre mí y
// qué hago quedan sincronizados y el enlace se puede compartir.
const EVENT = 'perfilchange'
const DEFAULT: ProfileKey = 'ia'

function read(): ProfileKey {
  const p = new URLSearchParams(window.location.search).get('perfil')
  return (PROFILE_ORDER as readonly string[]).includes(p ?? '') ? (p as ProfileKey) : DEFAULT
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb)
  window.addEventListener('popstate', cb)
  return () => {
    window.removeEventListener(EVENT, cb)
    window.removeEventListener('popstate', cb)
  }
}

// Marca si el usuario ya cambió de perfil (para animar solo los cambios, no la carga).
let switched = false
const readSwitched = () => switched
const serverFalse = () => false

export function useProfile(): [ProfileKey, (p: ProfileKey) => void, boolean] {
  const profile = useSyncExternalStore(subscribe, read, () => DEFAULT)
  const changed = useSyncExternalStore(subscribe, readSwitched, serverFalse)
  const setProfile = useCallback((p: ProfileKey) => {
    if (p === read()) return
    const url = new URL(window.location.href)
    url.searchParams.set('perfil', p)
    window.history.replaceState(window.history.state, '', url)
    switched = true
    window.dispatchEvent(new Event(EVENT))
  }, [])
  return [profile, setProfile, changed]
}
