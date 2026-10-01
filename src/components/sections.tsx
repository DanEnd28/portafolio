import Image from 'next/image'
import { Fragment } from 'react'
import { FRONTEND_PROJECTS, MARQUEE, PROFILE, PROJECTS, SOCIALS, TECH_STACK } from '@/content/shared'
import type { Dictionary, ProfileKey } from '@/content/types'
import { canvasSVG } from '@/lib/canvas'
import { Icon, SocialIcon, UiIcon } from './icons'
import ProfileTabs from './client/ProfileTabs'
import { AboutSwap, HeroSwap, Services } from './client/ProfileViews'
import ProjectVideo from './client/ProjectVideo'
import ContactForm from './client/ContactForm'

type D = { t: Dictionary }

const tabLabels = (t: Dictionary) =>
  Object.fromEntries(Object.entries(t.profiles).map(([k, p]) => [k, p.label])) as Record<ProfileKey, string>

function SecHead({ n, kicker, title, lead }: { n: string; kicker: string; title: string; lead?: string }) {
  return (
    <div className="sec-head reveal">
      <div className="eyebrow">
        <b>{n}</b>
        <span>{kicker}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {lead && <p className="sec-lead">{lead}</p>}
      </div>
    </div>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((x) => (
        <span key={x} className="tag-s">
          {x}
        </span>
      ))}
    </div>
  )
}

/* ---------- Hero ---------- */
export function Hero({ t }: D) {
  const socials = SOCIALS.filter((s) => s.key !== 'email')
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-top">
              <ProfileTabs labels={tabLabels(t)} ariaLabel={t.profileTabsLabel} />
              <span className="avail">
                <i aria-hidden="true" />
                <span>{t.hero.available}</span>
              </span>
            </div>
            <HeroSwap profiles={t.profiles} />
            <div className="loc">
              <UiIcon name="pin" />
              <span>{t.hero.location}</span>
            </div>
            <div className="ctas">
              <a href="#contact" className="btn btn-primary">
                <span>{t.hero.cta}</span>
                <UiIcon name="arrowR" />
              </a>
              <a href={PROFILE.cv} download className="btn">
                <UiIcon name="download" />
                <span>{t.hero.cv}</span>
              </a>
              <span className="div" aria-hidden="true" />
              {socials.map((s) => (
                <a key={s.key} className="btn soc" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <SocialIcon name={s.key} />
                </a>
              ))}
            </div>
          </div>
          <div className="photo">
            <span className="photo-tag">~/danny</span>
            <div className="seal" aria-hidden="true">
              <svg className="seal-ring" viewBox="0 0 108 108">
                <defs>
                  <path id="sealPath" d="M54,54 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                </defs>
                <text>
                  <textPath href="#sealPath" textLength="248" lengthAdjust="spacing">
                    {t.hero.seal}
                  </textPath>
                </text>
              </svg>
              <span className="core">
                <UiIcon name="arrowUR2" />
              </span>
            </div>
            <div className="photo-frame">
              <Image src={PROFILE.photo} alt={PROFILE.name} fill preload sizes="(max-width: 860px) 300px, 400px" />
              <div className="photo-cap">
                <span className="dot">
                  <Icon name="flow" />
                </span>
                <span>
                  <b>{PROFILE.headline}</b>
                  <small>{t.hero.caption}</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-meta reveal">
          {t.hero.meta.map((m) => (
            <div key={m.value}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Marquee label={t.hero.marqueeLabel} />
    </section>
  )
}

function Marquee({ label }: { label: string }) {
  const row = (hidden: boolean) =>
    MARQUEE.map((m) => (
      <Fragment key={(hidden ? 'h-' : '') + m.name}>
        <span className="mq-item" aria-hidden={hidden || undefined}>
          {m.logo && <Image src={`/logos/${m.logo}.svg`} alt="" width={22} height={22} unoptimized />}
          {m.name}
        </span>
        <span className="mq-sep" aria-hidden="true" />
      </Fragment>
    ))
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="mq-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

/* ---------- Sobre mí ---------- */
export function About({ t }: D) {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <SecHead n="01" kicker={t.sections.about.kicker} title={t.sections.about.title} />
        <div className="sec-body">
          <div className="sub-tabs reveal">
            <ProfileTabs labels={tabLabels(t)} ariaLabel={t.profileTabsLabel} small />
          </div>
          <AboutSwap profiles={t.profiles} />
        </div>
      </div>
    </section>
  )
}

/* ---------- Qué hago ---------- */
export function WhatIDo({ t }: D) {
  return (
    <section className="sec" id="what">
      <div className="wrap">
        <SecHead n="02" kicker={t.sections.what.kicker} title={t.sections.what.title} lead={t.sections.what.lead} />
        <div className="sub-tabs reveal">
          <ProfileTabs labels={tabLabels(t)} ariaLabel={t.profileTabsLabel} small />
        </div>
        <Services profiles={t.profiles} cta={t.servicesCta} />
      </div>
    </section>
  )
}

/* ---------- Experiencia ---------- */
export function Experience({ t }: D) {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <SecHead n="03" kicker={t.sections.experience.kicker} title={t.sections.experience.title} />
        <div className="xp">
          {t.experience.map((e) => (
            <article key={e.role + e.period} className="xp-row">
              <div className="xp-when">
                <span>{e.period}</span>
                {e.current && (
                  <span className="now">
                    <i aria-hidden="true" />
                    {t.experienceNow}
                  </span>
                )}
              </div>
              <div>
                <h3>{e.role}</h3>
                <div className="xp-co">{e.company}</div>
              </div>
              <div>
                <p>{e.desc}</p>
                <Tags items={e.tags} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Proyectos de automatización ---------- */
export function Projects({ t }: D) {
  return (
    <section className="sec band" id="projects">
      <div className="wrap">
        <SecHead n="04" kicker={t.sections.projects.kicker} title={t.sections.projects.title} lead={t.sections.projects.lead} />
        <div className="bento">
          {PROJECTS.map((p, i) => {
            const x = t.projects[p.slug]
            return (
              <article key={p.slug} className={`card spot pj${p.featured ? ' feat' : ''}`}>
                <div className="media">
                  <div className="media-bar">
                    <span className="wf-name">
                      <i aria-hidden="true" />
                      {p.wf}
                    </span>
                    <span className="play">
                      <svg viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1.5 1v8l7-4z" />
                      </svg>
                      {t.projectLabels.animation}
                    </span>
                  </div>
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: canvasSVG(p.slug, `${t.projectLabels.diagram}: ${x.title}`) }} />
                  {p.video && <ProjectVideo src={p.video} label={x.title} />}
                </div>
                <div className="pj-body">
                  <div className="pj-kick">
                    <b>0{i + 1}</b>
                    <span>{x.kicker}</span>
                  </div>
                  <h3>{x.title}</h3>
                  <div className="pr">
                    <div>
                      <span>{t.projectLabels.problem}</span>
                      <p style={{ margin: 0 }}>{x.problem}</p>
                    </div>
                    <div className="res">
                      <span>{t.projectLabels.result}</span>
                      <p style={{ margin: 0 }}>{x.result}</p>
                    </div>
                  </div>
                  <Tags items={p.stack} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Proyectos frontend ---------- */
export function Frontend({ t }: D) {
  return (
    <section className="sec" id="frontend">
      <div className="wrap">
        <SecHead n="05" kicker={t.sections.frontend.kicker} title={t.sections.frontend.title} />
        <div className="fe-grid">
          {FRONTEND_PROJECTS.map((f) => {
            const x = t.frontendProjects[f.id]
            return (
              <article key={f.id} className="fe-card">
                <div className="fe-img">
                  {f.image ? (
                    <Image src={f.image} alt={x.title} fill sizes="(max-width: 860px) 100vw, 600px" />
                  ) : (
                    <div className="fe-ph">
                      <div>
                        <Icon name="bag" />
                        {t.frontendNoShot}
                      </div>
                    </div>
                  )}
                </div>
                <div className="fe-body">
                  <div className="fe-meta">
                    {f.company} · {x.role}
                  </div>
                  <h3>{x.title}</h3>
                  <p>{x.desc}</p>
                  <Tags items={f.stack} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Stack ---------- */
export function Stack({ t }: D) {
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <SecHead n="06" kicker={t.sections.stack.kicker} title={t.sections.stack.title} />
        <div className="card stack reveal">
          {TECH_STACK.map((g) => {
            const x = t.stack.groups[g.id]
            return (
              <div key={g.id} className="st-col">
                <h3>{x.title}</h3>
                <div>
                  <div className="logos">
                    {g.logos.map((l) => (
                      <div key={l.name} className="lg">
                        <Image src={`/logos/${l.logo}.svg`} alt="" width={17} height={17} unoptimized />
                        {l.name}
                      </div>
                    ))}
                  </div>
                  <div className="also">
                    {x.also.map((a) => (
                      <span key={a}>{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Educación ---------- */
export function Education({ t }: D) {
  const e = t.education
  return (
    <section className="sec" id="education">
      <div className="wrap">
        <SecHead n="07" kicker={t.sections.education.kicker} title={t.sections.education.title} />
        <div className="edu-grid">
          <div className="card spot edu">
            <div className="eyebrow">{e.degreeLabel}</div>
            <h3 style={{ marginTop: 14 }}>{e.degree}</h3>
            <div className="place">{e.place}</div>
            <div className="per">{e.period}</div>
            <span className="note">{e.note}</span>
            <div className="blk">
              <div className="eyebrow">{e.certsLabel}</div>
              <ul className="list">
                {e.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card spot edu">
            <div className="eyebrow">{e.langsLabel}</div>
            <ul className="list">
              {e.langs.map((l) => (
                <li key={l.name}>
                  <b>{l.name}</b>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
            <div className="blk">
              <div className="eyebrow">{e.setupLabel}</div>
              <ul className="list">
                {e.setup.map((s) => (
                  <li key={s.name}>
                    <b>{s.name}</b>
                    <span>{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Contacto ---------- */
export function Contact({ t }: D) {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <SecHead n="08" kicker={t.sections.contact.kicker} title={t.sections.contact.title} />
        <div className="contact">
          <div className="card spot c-left reveal">
            <h3>{t.contact.title}</h3>
            <p>{t.contact.text}</p>
            <div className="channels">
              {SOCIALS.map((s) => (
                <a key={s.key} className="ch" href={s.href} {...(s.key === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}>
                  <span className="ci">
                    <SocialIcon name={s.key} />
                  </span>
                  <span className="cl">{s.label}</span>
                  <span className="cv2">{s.key === 'upwork' ? t.contact.upworkValue : s.value}</span>
                  <Icon name="arrowUR" />
                </a>
              ))}
            </div>
          </div>
          <ContactForm t={t.contact.form} />
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
export function Footer({ t }: D) {
  return (
    <footer>
      <div className="wrap">
        <div className="f-in">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">DE</span>
              {PROFILE.name}
            </a>
            <p>{t.footer.text}</p>
          </div>
          <div className="f-soc">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                className="btn soc"
                href={s.href}
                aria-label={s.label}
                title={s.label}
                {...(s.key === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </div>
        <div className="f-copy">© {new Date().getFullYear()} {PROFILE.name}</div>
      </div>
    </footer>
  )
}

