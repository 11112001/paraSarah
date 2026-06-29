// ==========================================
// THEME.JS
// Cambia las variables CSS dinámicamente
// ==========================================

function setTheme(theme) {

    const root = document.documentElement;

    for (const [key, value] of Object.entries(theme)) {

        root.style.setProperty(`--${key}`, value);

    }

}