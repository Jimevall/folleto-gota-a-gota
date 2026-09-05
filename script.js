// =====================
// FUNCIONALIDADES DEL FOLLETO
// =====================

// Descargar como PDF
function downloadPDF() {
    window.print();
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.page').forEach(page => {
    observer.observe(page);
});

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Detección de navegador para PDF
function detectBrowser() {
    const ua = navigator.userAgent;
    if (ua.indexOf('Chrome') > -1) return 'chrome';
    if (ua.indexOf('Firefox') > -1) return 'firefox';
    if (ua.indexOf('Safari') > -1) return 'safari';
    return 'other';
}

// Log de información
console.log('Folleto de Gota a Gota cargado correctamente');
console.log('Para descargar como PDF: Usa Ctrl+P o Cmd+P');
