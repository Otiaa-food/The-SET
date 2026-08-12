/* ============================================================
   THE SET – Scripts
   Subtle scroll reveals, no heavy libraries.
   ============================================================ */

(function () {
    'use strict';

    // ---------- SCROLL REVEAL ----------
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveals() {
        const windowHeight = window.innerHeight;
        const revealThreshold = 80; // px from bottom of viewport

        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - revealThreshold) {
                el.classList.add('visible');
            }
        });
    }

    // Check on load, scroll, and resize
    window.addEventListener('load', checkReveals);
    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals, { passive: true });

    // Initial check (in case some elements are already visible)
    checkReveals();

    // ---------- NEWSLETTER FORM (placeholder) ----------
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value.trim()) {
                // Placeholder: in production, connect to your backend
                const originalText = this.querySelector('button').textContent;
                this.querySelector('button').textContent = 'Eingetragen ✓';
                this.querySelector('button').style.background = 'rgba(224, 221, 216, 0.15)';
                this.querySelector('button').style.color = '#e0ddd8';
                input.value = '';

                setTimeout(() => {
                    this.querySelector('button').textContent = originalText;
                    this.querySelector('button').style.background = '';
                    this.querySelector('button').style.color = '';
                }, 3000);
            }
        });
    }

})();