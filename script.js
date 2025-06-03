document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        mainNav.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            !mainNav.contains(e.target) &&
            !hamburger.contains(e.target) &&
            mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            hamburger.classList.remove('open');
        }
    });

    const body = document.documentElement
    const icon = document.getElementById("theme-icon");

    const sunIcon = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
    const moonIcon = "https://img.icons8.com/ios-filled/50/moon-symbol.png";

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        icon.src = sunIcon;
    }

    document.getElementById("theme-toggle").addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        icon.src = isDark ? sunIcon : moonIcon;
    });
});
