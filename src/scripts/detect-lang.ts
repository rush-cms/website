// Detects user language and redirects if necessary
// This script is small enough to be inlined in the head

if (typeof window !== "undefined") {
    const hasDetected = localStorage.getItem("rush_cms_lang_detected");

    if (!hasDetected) {
        const browserLang = navigator.language || navigator.userLanguage;
        const currentPath = window.location.pathname;

        // Se a preferência for inglês e não estivermos numa rota /en, redireciona
        if (browserLang.startsWith("en") && !currentPath.startsWith("/en")) {
            localStorage.setItem("rush_cms_lang_detected", "true");
            window.location.href = `/en${currentPath === "/" ? "" : currentPath}`;
        } else {
            // Marca como detectado para não rodar novamente
            localStorage.setItem("rush_cms_lang_detected", "true");
        }
    }
}
