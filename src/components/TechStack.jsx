import Section from './Section'
import { TECH_STACK } from '../data/content'

export default function TechStack() {
  return (
    <Section id="stack" label="// 04 · Herramientas" title="Stack técnico">
      <div className="flex flex-wrap gap-2.5">
        {TECH_STACK.map((tech) => (
          <span key={tech} className="chip text-sm">{tech}</span>
        ))}
      </div>
    </Section>
  )
}
