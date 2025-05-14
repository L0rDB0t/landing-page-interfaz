document.addEventListener('DOMContentLoaded', () => {
    // Animación SVG del logo
    const logoPath = document.querySelector('.logo-path');
    if (logoPath) {
        const pathLength = logoPath.getTotalLength();
        logoPath.style.strokeDasharray = pathLength;
        logoPath.style.strokeDashoffset = pathLength;
        
        gsap.to(logoPath, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut"
        });
    }

    // Efecto botón CTA
    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', () => {
            gsap.to(".arrow", { x: 5, duration: 0.3 });
        });
        
        ctaBtn.addEventListener('mouseleave', () => {
            gsap.to(".arrow", { x: 0, duration: 0.3 });
        });

        // Mostrar contenido al hacer clic
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            gsap.to(".hero", {
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    document.getElementById('main-content').classList.add('show-content');
                    gsap.from("#main-content", {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        ease: "elastic.out(1, 0.5)"
                    });
                }
            });
        });
    }

    // ScrollReveal
    ScrollReveal().reveal('.hidden', {
        delay: 300,
        distance: '30px',
        origin: 'bottom',
        interval: 200
    });

    // Rellax (efectos parallax)
    new Rellax('.rellax', {
        speed: 1,
        center: true
    });
});