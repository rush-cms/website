import ptBR from "./locales/pt"
import en from "./locales/en"

export const translations = { "pt-BR": ptBR, en } as const

export type Locale = keyof typeof translations

export function getLangFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split("/")
    if (lang === "en") return "en"
    return "pt-BR"
}

export function useTranslations(lang: Locale) {
    return translations[lang]
}

export function getLocalizedPath(path: string, lang: Locale): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`

    if (lang === "pt-BR") {
        return cleanPath.replace(/^\/en/, "") || "/"
    }

    if (cleanPath === "/" || cleanPath === "") {
        return "/en"
    }

    if (cleanPath.startsWith("/en")) {
        return cleanPath
    }

    return `/en${cleanPath}`
}

export function getCurrentPath(url: URL): string {
    const path = url.pathname

    if (path.startsWith("/en")) {
        return path.replace(/^\/en/, "") || "/"
    }

    return path
}
