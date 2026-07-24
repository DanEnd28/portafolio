import { useState, useEffect, useCallback } from 'react'

const isVideo = (src) => /\.(mp4|webm|mov|ogg)$/i.test(src)

// Carrusel dinámico con soporte de imágenes y video.
//  - 1 solo item: se muestra estático.
//  - varios items: carrusel que avanza SOLO (autoplay) y también con flechas/puntos.
//  - autoplay se pausa al pasar el mouse, con el lightbox abierto o mientras un video reproduce.
//  - click en una imagen (o botón "ampliar") abre el lightbox tipo galería con zoom.
//  - si no hay imágenes, no renderiza nada (sin placeholder).
export default function Gallery({ images = [], title = '' }) {
  const items = images.map((img) => {
    const o = typeof img === 'string' ? { src: img, alt: title } : { alt: title, ...img }
    return { ...o, video: isVideo(o.src) }
  })
  const count = items.length

  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const go = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count])

  // Autoplay del carrusel.
  useEffect(() => {
    if (count < 2 || paused || open || videoPlaying) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000)
    return () => clearInterval(t)
  }, [count, paused, open, videoPlaying])

  // Teclado en el lightbox.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go])

  if (count === 0) return null

  const current = items[index]

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-white/10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {current.video ? (
          <video
            key={current.src}
            src={current.src}
            controls
            muted
            playsInline
            preload="metadata"
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
            onEnded={() => setVideoPlaying(false)}
            className="aspect-video w-full bg-black object-contain"
          />
        ) : (
          <button onClick={() => setOpen(true)} className="block w-full" aria-label="Ampliar imagen">
            <img
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="aspect-video w-full bg-slate-900 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        )}

        {/* Botón ampliar (siempre disponible, también para video) */}
        <button
          onClick={() => setOpen(true)}
          className="absolute right-2 top-2 z-10 rounded-md bg-black/60 px-2 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          ⤢ ampliar
        </button>

        {count > 1 && (
          <>
            <NavBtn side="left" onClick={() => go(-1)} />
            <NavBtn side="right" onClick={() => go(1)} />
            {/* etiqueta de video en el contador */}
            {current.video && (
              <span className="absolute left-2 top-2 rounded bg-accent2/90 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                ▶ VIDEO
              </span>
            )}
          </>
        )}
      </div>

      {/* Indicadores: puntos si son pocos, contador si son muchos */}
      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {count <= 8 ? (
            items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-accent' : 'w-1.5 bg-slate-300 dark:bg-white/20'
                }`}
              />
            ))
          ) : (
            <span className="font-mono text-xs text-slate-400">
              {index + 1} / {count}
            </span>
          )}
        </div>
      )}

      {/* Lightbox / galería */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-4 top-4 z-10 rounded-lg bg-white/10 px-3 py-1.5 font-mono text-sm text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            cerrar ✕
          </button>

          {current.video ? (
            <video
              key={current.src}
              src={current.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
            />
          ) : (
            <img
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          )}

          {count > 1 && (
            <>
              <NavBtn side="left" big onClick={(e) => { e.stopPropagation(); go(-1) }} />
              <NavBtn side="right" big onClick={(e) => { e.stopPropagation(); go(1) }} />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white">
                {index + 1} / {count}
              </span>
            </>
          )}
        </div>
      )}
    </>
  )
}

function NavBtn({ side, big, onClick }) {
  const pos = side === 'left' ? 'left-2' : 'right-2'
  const size = big ? 'h-12 w-12 text-2xl' : 'h-8 w-8 text-lg'
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Anterior' : 'Siguiente'}
      className={`absolute top-1/2 ${pos} z-10 flex ${size} -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80`}
    >
      {side === 'left' ? '‹' : '›'}
    </button>
  )
}
