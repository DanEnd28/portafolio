'use client'

// Script inline que corre antes del primer pintado (guía oficial de Next 16:
// "Preventing flash before hydration"). En el servidor es ejecutable; en el
// cliente se marca como texto para que React no avise por renderizar <script>.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
