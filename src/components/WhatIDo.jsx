import Section from './Section'
import { WHAT_I_DO } from '../data/content'

export default function WhatIDo() {
  return (
    <Section id="que-hago" label="// 02 · Servicios" title="Qué hago">
      <div className="grid gap-4 sm:grid-cols-2">
        {WHAT_I_DO.map((item, i) => (
          <div key={item.title} className="card group relative overflow-hidden">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="flex items-center justify-between">
              <div className="text-2xl">{item.icon}</div>
              <span className="font-mono text-xs text-slate-300 dark:text-slate-600">
                0{i + 1}
              </span>
            </div>
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
