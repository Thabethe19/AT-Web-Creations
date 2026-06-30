// ==============================
// AT WEB CREATIONS
// Main JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });

    // Header shadow on scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
        }

    });

    // Fade cards in
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = ".6s ease";

        observer.observe(card);

    });

});