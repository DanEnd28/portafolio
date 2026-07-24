import Section from './Section'

export default function About() {
  return (
    <Section id="sobre-mi" label="// 01 · Sobre mí" title="Sobre mí">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          Soy ingeniero de automatización con IA. Vengo de un rol reciente en una
          plataforma de agentes de IA con sede en Miami, donde di soporte a más de{' '}
          <span className="font-semibold text-slate-900 dark:text-white">250 clientes activos</span>{' '}
          en rubros muy distintos: salud y estética, bienes raíces, educación, retail
          y logística.
        </p>
        <p>
          Mi trabajo consiste en llevar agentes conversacionales y automatizaciones a
          producción y mantenerlos estables: manejo de errores, reintentos y monitoreo
          para que el sistema siga respondiendo aunque una API externa falle. Tengo
          base sólida de frontend (React, TypeScript, Tailwind), que uso como
          complemento para exponer y visualizar lo que las automatizaciones producen.
        </p>
      </div>
    </Section>
  )
}
