'use client'

import type { Dictionary } from '@/content/types'
import { Icon } from '../icons'
import { useProfile } from './profile'

type Profiles = Dictionary['profiles']

/** Texto del hero que cambia con el perfil. */
export function HeroSwap({ profiles }: { profiles: Profiles }) {
  const [profile, , changed] = useProfile()
  const p = profiles[profile]
  return (
    <div key={profile} className={changed ? 'swap' : undefined}>
      <p className="tagline">{p.tagline}</p>
      <h1 className="name">
        Danny<span>Endara</span>
      </h1>
      <p className="roles">
        <span>{p.roles[0]}</span>
        <span className="plus" aria-hidden="true">+</span>
        <span>{p.roles[1]}</span>
      </p>
      <p className="intro">{p.intro}</p>
    </div>
  )
}

/** Frase destacada: resalta cifras como "300+". */
function Lead({ text }: { text: string }) {
  const parts = text.split(/(\d+\+)/g)
  return <>{parts.map((x, i) => (i % 2 ? <em key={i}>{x}</em> : x))}</>
}

/** Sobre mí: frase destacada + texto + tarjeta de rubros y cifras. */
export function AboutSwap({ profiles }: { profiles: Profiles }) {
  const [profile, , changed] = useProfile()
  const p = profiles[profile]
  const cls = changed ? 'swap' : undefined
  return (
    <>
      <p key={'l' + profile} className={`about-lead ${cls ?? ''}`}>
        <Lead text={p.about[0]} />
      </p>
      <div key={'g' + profile} className={`about-grid ${cls ?? ''}`}>
        <div className="about-text">
          {p.about.slice(1).map((x) => (
            <p key={x}>{x}</p>
          ))}
        </div>
        <aside className="card spot about-side">
          <div className="eyebrow">{p.chipsLabel}</div>
          <div className="chips">
            {p.chips.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          {p.stats && (
            <div className="stats">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <b>
                    {s.value}
                    <em>{s.suffix}</em>
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </>
  )
}

/** Qué hago: tarjetas de servicios del perfil + tarjeta final con CTA. */
export function Services({ profiles, cta }: { profiles: Profiles; cta: Dictionary['servicesCta'] }) {
  const [profile, , changed] = useProfile()
  const p = profiles[profile]
  return (
    <div key={profile} className={`svc-grid ${changed ? 'swap' : ''}`}>
      {p.services.map((s) => (
        <article key={s.title} className="card spot svc">
          <div className="ico">
            <Icon name={s.icon} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div className="tag">{s.tag}</div>
        </article>
      ))}
      <article className="card spot svc cta">
        <h3>{cta.title}</h3>
        <a className="btn" href="#contact">
          {cta.button} <Icon name="arrowUR" />
        </a>
      </article>
    </div>
  )
}
