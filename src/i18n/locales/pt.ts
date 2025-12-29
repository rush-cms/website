export default {
    siteTitle: "Rush CMS",

    nav: {
        docs: "Docs",
        ecosystem: "Ecossistema",
    },

    hero: {
        title: "O headless CMS que você controla",
        subtitle: "Plataforma headless com velocidade, segurança e controle total. Sem vendor lock-in.",
        cta: "Começar Agora",
        ctaSecondary: "Ver Ecosystem",
    },

    stats: {
        performanceTitle: "Performance Real",
        metricsTitle: "Métricas que impressionam",
        codeQualityTitle: "Qualidade de Código",
        avgResponse: "Response time médio",
        throughput: "req/s throughput",
        lessQueries: "Menos queries",
        faster: "Mais rápido",
        testsLabel: "testes passando",
        phpstanLabel: "PHPStan",
        pintLabel: "Laravel Pint",
        coverageLabel: "coverage",
        sublabels: {
            avgResponse: "Resposta média da API",
            throughput: "Requisições por segundo",
            lessQueries: "Comparado ao Laravel padrão",
            faster: "Melhoria de velocidade",
        },
    },

    exclusiveAccess: {
        badge: "Plataforma Fechada",
        title: "Disponível exclusivamente para clientes selecionados",
        description: "Rush CMS não é vendido separadamente. Está incluso nos serviços de criação de sites de alta performance oferecidos por Rafhael Marsigli.",
        cta: "Ver serviços disponíveis",
        footer: "Interessado na tecnologia? Entre em contato para saber mais.",
    },

    features: {
        sectionTitle: "Por que Rush CMS?",
        sectionSubtitle: "Ferramentas que você realmente precisa",
        contentEditor: {
            title: "ContentEditor",
            subtitle: "Editor de blocos fluido e moderno",
            description: "Escreva conteúdo de forma intuitiva com blocos arrastáveis. Textos, imagens, vídeos, galerias e código — tudo em uma interface limpa e responsiva.",
            highlights: ["Drag & drop", "Preview em tempo real", "Markdown"],
        },
        blockBuilder: {
            title: "Block Builder",
            subtitle: "30+ tipos de campos",
            description: "Crie estruturas de dados complexas com campos dinâmicos. Repeaters, galerias, selects relacionais, blocos customizados — sem limite de criatividade.",
            highlights: ["Homepage Builder", "Repeater fields", "Custom blocks"],
        },
        database: {
            title: "Database System",
            subtitle: "Listas dinâmicas com cascading",
            description: "Crie bancos de dados relacionais com hierarquia automática. Marcas → Modelos, Estados → Cidades, Categorias → Subcategorias — tudo com cascading dinâmico.",
            highlights: ["Hierarquia pai-filho", "Cascading automático", "Multi-select"],
        },
        formBuilder: { title: "Form Builder", description: "Crie formulários customizados com campos dinâmicos, validação e notificações por email." },
        multiTenancy: { title: "Multi-tenancy", description: "Isolamento completo por website. Cada cliente com seus dados, configurações e permissões." },
        wpImporter: { title: "WordPress Importer", description: "Migre seu site WordPress em minutos. Posts, páginas, categorias e mídia." },
        permissions: { title: "104+ Permissões", description: "Controle granular de acesso. Defina quem pode ver, criar, editar ou deletar cada recurso." },
        templates: { title: "Templates One-click", description: "Institutional, Blog, Vehicle Store, Real Estate — comece com estrutura pronta." },
        api: { title: "RESTful API", description: "API completa com autenticação, rate limiting, cache e analytics por token." },
    },

    ecosystem: {
        sectionTitle: "Open Source",
        title: "Ecossistema Rush",
        subtitle: "Ferramentas open source para acelerar seu workflow",
        viewMore: "Ver mais",
        viewAllGithub: "Ver todos os projetos no GitHub",
        categories: {
            developerTools: {
                label: "Para desenvolvedores",
                description: "Ferramentas para integrar e usar o Rush CMS",
            },
            standaloneTools: {
                label: "Ferramentas standalone",
                description: "Projetos independentes do ecossistema Rush",
            },
        },
        products: {
            sdk: {
                name: "SDK",
                tagline: "Integre Rush CMS em minutos",
            },
            starters: {
                name: "Starters",
                tagline: "Templates prontos para produção",
                badges: ["Next.js", "Astro em breve"],
            },
            audits: {
                name: "Audits",
                tagline: "Relatórios Lighthouse em PDF",
                features: ["Whitelabel", "Async", "Webhooks"],
            },
        },
    },

    techStack: {
        title: "Construído com",
    },

    footer: {
        copyright: "© {year} Rush CMS. Todos os direitos reservados.",
        openSource: "Projeto open source.",
        developedBy: "Desenvolvido por",
    },

    productLayout: {
        resources: "Recursos",
        viewOnGithub: "Ver no GitHub",
        documentation: "Documentação",
        bugOrSuggestion: "Encontrou um bug ou tem uma sugestão?",
        openIssue: "Abrir uma issue no GitHub",
    },

    sdk: {
        title: "Rush SDK",
        tagline: "Integre Rush CMS em minutos",
        description: "SDK oficial para integração com Rush CMS. Type-safe, com React hooks prontos para uso e cache inteligente. Funciona com Next.js, Astro, Remix e qualquer framework JavaScript.",
        features: {
            typeSafe: { title: "Type-safe", description: "SDK totalmente tipado com TypeScript. Autocomplete e validação em tempo de desenvolvimento." },
            reactHooks: { title: "React Hooks", description: "Hooks prontos para usar: useCollection, useEntry, useMedia e mais." },
            cache: { title: "Cache Inteligente", description: "Sistema de cache integrado com invalidação automática. Menos requisições, mais performance." },
            ssr: { title: "SSR Ready", description: "Funciona perfeitamente com Next.js, Astro, Remix e outros frameworks SSR." },
            auth: { title: "Autenticação", description: "Suporte a múltiplos métodos de autenticação: API Token, Bearer, e mais." },
            fast: { title: "Leve e Rápido", description: "Bundle mínimo, sem dependências pesadas. Ideal para sites que precisam de performance." },
        },
    },

    audits: {
        title: "Rush Audits",
        tagline: "Relatórios Lighthouse em PDF, whitelabel",
        description: "Microserviço standalone e headless para geração de relatórios de performance (Lighthouse/PageSpeed) em PDF. 100% assíncrono, orientado a webhooks, e pronto para whitelabel.",
        features: {
            lighthouse: { title: "Relatórios Lighthouse", description: "Gera relatórios completos de performance usando Google Lighthouse/PageSpeed Insights." },
            pdf: { title: "PDF de Alta Fidelidade", description: "Relatórios exportados em PDF profissional, prontos para enviar ao cliente." },
            whitelabel: { title: "Whitelabel", description: "Personalize com sua marca. Logo, cores e informações de contato customizáveis." },
            async: { title: "100% Assíncrono", description: "Processa relatórios em background. Receba via webhook quando estiver pronto." },
            webhooks: { title: "Webhooks", description: "Integre com seu sistema. Receba notificações quando o relatório for gerado." },
            api: { title: "API RESTful", description: "API simples e documentada. Integre facilmente com qualquer stack." },
        },
    },

    starters: {
        title: "Starter Kits",
        tagline: "Templates prontos para produção",
        description: "Inicie seu projeto em minutos com templates pré-configurados. Rush SDK já integrado, TypeScript, Tailwind CSS e melhores práticas de SEO e performance.",
        templatesTitle: "Templates Disponíveis",
        comingSoon: "Em breve",
        availableSoon: "Disponível em breve",
        viewOnGithub: "Ver no GitHub",
        nextjs: { name: "Next.js Starter", description: "Template completo com Next.js, App Router, TypeScript e Rush SDK já configurado." },
        astro: { name: "Astro Starter", description: "Template estático ultra-rápido com Astro 5, Content Collections e Rush SDK." },
        features: {
            production: { title: "Pronto para Produção", description: "Configurações de build, SEO, e performance já otimizadas. É só clonar e começar." },
            sdk: { title: "Rush SDK Integrado", description: "SDK já instalado e configurado. Basta adicionar suas credenciais e começar a consumir conteúdo." },
            typescript: { title: "TypeScript First", description: "Tipagem completa do Rush SDK. Autocomplete e validação em tempo de desenvolvimento." },
            tailwind: { title: "Tailwind CSS", description: "Estilização pronta com Tailwind. Componentes base inclusos para acelerar o desenvolvimento." },
            seo: { title: "SEO Otimizado", description: "Meta tags, Open Graph, JSON-LD e sitemap já configurados. Seu site pronto para indexação." },
            components: { title: "Componentes Base", description: "Header, Footer, Cards e outros componentes reutilizáveis para acelerar o desenvolvimento." },
        },
    },

    languageSwitcher: {
        label: "Idioma",
    },
} as const
