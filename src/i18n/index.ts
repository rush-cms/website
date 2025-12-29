import ptBR from "./locales/pt"
import en from "./locales/en"

export const translations = { "pt-BR": ptBR, en } as const

export type Locale = keyof typeof translations
