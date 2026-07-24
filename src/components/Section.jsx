// Contenedor reutilizable para cada sección de la página.
export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-20 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        {label && <p className="section-label">{label}</p>}
        {title && (
          <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
