import Section from './Section'
import { WHAT_I_DO } from '../data/content'

export default function WhatIDo() {
  return (
    <Section id="que-hago" label="// 02 · Servicios" title="Qué hago">
      <div className="grid gap-4 sm:grid-cols-2">
        {WHAT_I_DO.map((item) => (
          <div key={item.title} className="card">
            <div className="text-2xl">{item.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.desc}
            </p>
            <p className="mt-4 font-mono text-xs text-accent-soft dark:text-accent">
              {item.tag}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
