import { useState, useEffect, useCallback } from 'react'

// Carrusel dinámico basado en datos. Recibe un array de imágenes (rutas o
// { src, alt }). Si está vacío, muestra un placeholder. Al hacer click en la
// imagen se abre un lightbox a pantalla completa con navegación.
export default function Gallery({ images = [], title = '' }) {
  const items = images.map((img) =>
    typeof img === 'string' ? { src: img, alt: title } : { alt: title, ...img },
  )
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const count = items.length
  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

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

  // Sin imágenes → placeholder.
  if (count === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 dark:border-white/10 dark:bg-white/5">
        <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
          [ imagen / gif por completar ]
        </span>
      </div>
    )
  }

  const current = items[index]

  return (
    <>
      {/* Imagen principal (click → lightbox) */}
      <div className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-white/10">
        <button
          onClick={() => setOpen(true)}
          className="block w-full"
          aria-label="Ampliar imagen"
        >
          <img
            src={current.src}
            alt={current.alt}
            loading="lazy"
            className="aspect-video w-full bg-slate-900 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">
            ⤢ ampliar
          </span>
        </button>

        {/* Flechas (si hay más de una) */}
        {count > 1 && (
          <>
            <NavBtn side="left" onClick={() => go(-1)} />
            <NavBtn side="right" onClick={() => go(1)} />
          </>
        )}
      </div>

      {/* Puntos indicadores */}
      {count > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-accent' : 'w-1.5 bg-slate-300 dark:bg-white/20'
              }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-4 top-4 rounded-lg bg-white/10 px-3 py-1.5 font-mono text-sm text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            cerrar ✕
          </button>

          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

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
