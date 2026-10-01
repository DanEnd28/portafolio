import en from './en'
import es from './es'
import { LANGS, type Dictionary, type Lang } from './types'

const DICTIONARIES: Record<Lang, Dictionary> = { en, es }

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value)
}

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang]
}

export * from './types'
