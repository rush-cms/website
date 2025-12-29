export default {
    siteTitle: "Rush CMS",

    nav: {
        docs: "Docs",
        ecosystem: "Ecosystem",
    },

    hero: {
        title: "The headless CMS you control",
        subtitle: "Headless platform with speed, security and full control. No vendor lock-in.",
        cta: "Get Started",
        ctaSecondary: "View Ecosystem",
    },

    stats: {
        performanceTitle: "Real Performance",
        metricsTitle: "Metrics that impress",
        codeQualityTitle: "Code Quality",
        avgResponse: "Average response time",
        throughput: "req/s throughput",
        lessQueries: "Less queries",
        faster: "Faster",
        testsLabel: "passing tests",
        phpstanLabel: "PHPStan",
        pintLabel: "Laravel Pint",
        coverageLabel: "coverage",
        sublabels: {
            avgResponse: "API average response",
            throughput: "Requests per second",
            lessQueries: "Compared to standard Laravel",
            faster: "Page speed improvement",
        },
    },

    exclusiveAccess: {
        badge: "Closed Platform",
        title: "Available exclusively for selected clients",
        description: "Rush CMS is not sold separately. It is included in high-performance website creation services offered by Rafhael Marsigli.",
        cta: "View available services",
        footer: "Interested in the technology? Contact us to know more.",
    },

    features: {
        sectionTitle: "Why Rush CMS?",
        sectionSubtitle: "Tools you actually need",
        contentEditor: {
            title: "ContentEditor",
            subtitle: "Smooth and modern block editor",
            description: "Write content intuitively with draggable blocks. Texts, images, videos, galleries and code — all in a clean and responsive interface.",
            highlights: ["Drag & drop", "Real-time preview", "Markdown"],
        },
        blockBuilder: {
            title: "Block Builder",
            subtitle: "30+ field types",
            description: "Create complex data structures with dynamic fields. Repeaters, galleries, relational selects, custom blocks — no creativity limits.",
            highlights: ["Homepage Builder", "Repeater fields", "Custom blocks"],
        },
        database: {
            title: "Database System",
            subtitle: "Dynamic lists with cascading",
            description: "Create relational databases with automatic hierarchy. Brands → Models, States → Cities, Categories → Subcategories — all with dynamic cascading.",
            highlights: ["Parent-child hierarchy", "Auto cascading", "Multi-select"],
        },
        formBuilder: { title: "Form Builder", description: "Create custom forms with dynamic fields, validation and email notifications." },
        multiTenancy: { title: "Multi-tenancy", description: "Complete isolation per website. Each client with their own data, settings and permissions." },
        wpImporter: { title: "WordPress Importer", description: "Migrate your WordPress site in minutes. Posts, pages, categories and media." },
        permissions: { title: "104+ Permissions", description: "Granular access control. Define who can view, create, edit or delete each resource." },
        templates: { title: "One-click Templates", description: "Institutional, Blog, Vehicle Store, Real Estate — start with a ready structure." },
        api: { title: "RESTful API", description: "Complete API with authentication, rate limiting, cache and analytics per token." },
    },

    ecosystem: {
        sectionTitle: "Open Source",
        title: "Rush Ecosystem",
        subtitle: "Open source tools to speed up your workflow",
        viewMore: "View more",
        viewAllGithub: "View all projects on GitHub",
        categories: {
            developerTools: {
                label: "For developers",
                description: "Tools to integrate and use Rush CMS",
            },
            standaloneTools: {
                label: "Standalone tools",
                description: "Independent projects from Rush ecosystem",
            },
        },
        products: {
            sdk: {
                name: "SDK",
                tagline: "Integrate Rush CMS in minutes",
            },
            starters: {
                name: "Starters",
                tagline: "Production-ready templates",
                badges: ["Next.js", "Astro soon"],
            },
            audits: {
                name: "Audits",
                tagline: "Lighthouse PDF reports",
                features: ["Whitelabel", "Async", "Webhooks"],
            },
        },
    },

    techStack: {
        title: "Built with",
    },

    footer: {
        copyright: "© {year} Rush CMS. All rights reserved.",
        openSource: "Open source project.",
        developedBy: "Developed by",
    },

    productLayout: {
        resources: "Features",
        viewOnGithub: "View on GitHub",
        documentation: "Documentation",
        bugOrSuggestion: "Found a bug or have a suggestion?",
        openIssue: "Open an issue on GitHub",
    },

    sdk: {
        title: "Rush SDK",
        tagline: "Integrate Rush CMS in minutes",
        description: "Official SDK for Rush CMS integration. Type-safe, with ready-to-use React hooks and intelligent cache. Works with Next.js, Astro, Remix and any JavaScript framework.",
        features: {
            typeSafe: { title: "Type-safe", description: "Fully typed SDK with TypeScript. Autocomplete and validation at development time." },
            reactHooks: { title: "React Hooks", description: "Ready-to-use hooks: useCollection, useEntry, useMedia and more." },
            cache: { title: "Smart Cache", description: "Integrated cache system with automatic invalidation. Less requests, more performance." },
            ssr: { title: "SSR Ready", description: "Works perfectly with Next.js, Astro, Remix and other SSR frameworks." },
            auth: { title: "Authentication", description: "Support for multiple authentication methods: API Token, Bearer, and more." },
            fast: { title: "Light and Fast", description: "Minimal bundle, no heavy dependencies. Ideal for sites that need performance." },
        },
    },

    audits: {
        title: "Rush Audits",
        tagline: "Lighthouse PDF reports, whitelabel",
        description: "Standalone and headless microservice for generating performance reports (Lighthouse/PageSpeed) in PDF. 100% async, webhook-oriented, and ready for whitelabel.",
        features: {
            lighthouse: { title: "Lighthouse Reports", description: "Generates complete performance reports using Google Lighthouse/PageSpeed Insights." },
            pdf: { title: "High Fidelity PDF", description: "Professional PDF reports, ready to send to clients." },
            whitelabel: { title: "Whitelabel", description: "Customize with your brand. Logo, colors and contact info customizable." },
            async: { title: "100% Async", description: "Processes reports in background. Receive via webhook when ready." },
            webhooks: { title: "Webhooks", description: "Integrate with your system. Receive notifications when the report is generated." },
            api: { title: "RESTful API", description: "Simple and documented API. Easily integrate with any stack." },
        },
    },

    starters: {
        title: "Starter Kits",
        tagline: "Production-ready templates",
        description: "Start your project in minutes with pre-configured templates. Rush SDK already integrated, TypeScript, Tailwind CSS and SEO and performance best practices.",
        templatesTitle: "Available Templates",
        comingSoon: "Coming soon",
        availableSoon: "Available soon",
        viewOnGithub: "View on GitHub",
        nextjs: { name: "Next.js Starter", description: "Complete template with Next.js, App Router, TypeScript and Rush SDK already configured." },
        astro: { name: "Astro Starter", description: "Ultra-fast static template with Astro 5, Content Collections and Rush SDK." },
        features: {
            production: { title: "Production Ready", description: "Build, SEO, and performance configurations already optimized. Just clone and start." },
            sdk: { title: "Rush SDK Integrated", description: "SDK already installed and configured. Just add your credentials and start consuming content." },
            typescript: { title: "TypeScript First", description: "Complete Rush SDK typing. Autocomplete and validation at development time." },
            tailwind: { title: "Tailwind CSS", description: "Ready styling with Tailwind. Base components included to speed up development." },
            seo: { title: "SEO Optimized", description: "Meta tags, Open Graph, JSON-LD and sitemap already configured. Your site ready for indexing." },
            components: { title: "Base Components", description: "Header, Footer, Cards and other reusable components to speed up development." },
        },
    },

    languageSwitcher: {
        label: "Language",
    },
} as const
