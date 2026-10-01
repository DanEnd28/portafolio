'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Video opcional de un proyecto. Se coloca encima del diagrama (que queda como póster),
 * en bucle y sin sonido, y solo se reproduce mientras la tarjeta está a la vista.
 * Si el visitante pidió reducir el movimiento, no se reproduce.
 */
export default function ProjectVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          if (v.preload === 'none') v.preload = 'auto'
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={on ? 'on' : undefined}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      onPlaying={() => setOn(true)}
    />
  )
}
