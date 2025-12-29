export interface EcosystemProduct {
    name: string
    slug: string
    tagline: string
    href: string
    github: string
    icon: string | null
    badges?: string[]
    features?: string[]
}

export interface EcosystemCategory {
    label: string
    description: string
    products: EcosystemProduct[]
}

export const ecosystemProducts: Record<string, EcosystemCategory> = {
    developerTools: {
        label: "Para desenvolvedores",
        description: "Ferramentas para integrar e usar o Rush CMS",
        products: [
            {
                name: "SDK",
                slug: "sdk",
                tagline: "Integre Rush CMS em minutos",
                href: "/sdk",
                github: "https://github.com/rush-cms/sdk",
                icon: null,
            },
            {
                name: "Starters",
                slug: "starters",
                tagline: "Templates prontos para produção",
                href: "/starters",
                github: "https://github.com/rush-cms/nextjs-starter",
                icon: null,
                badges: ["Next.js", "Astro em breve"],
            },
        ],
    },
    standaloneTools: {
        label: "Ferramentas standalone",
        description: "Projetos independentes do ecossistema Rush",
        products: [
            {
                name: "Audits",
                slug: "audits",
                tagline: "Relatórios Lighthouse em PDF",
                href: "/audits",
                github: "https://github.com/rush-cms/audits",
                icon: null,
                features: ["Whitelabel", "Async", "Webhooks"],
            },
        ],
    },
}

export const navLinks = [
    { label: "GitHub", href: "https://github.com/rush-cms", external: true },
]

export const getAllProducts = (): EcosystemProduct[] => {
    return Object.values(ecosystemProducts).flatMap((category) => category.products)
}
