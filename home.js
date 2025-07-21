// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

function showMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
}

function hideMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
}

mobileMenuButton.addEventListener('click', showMobileMenu);
closeMobileMenuButton.addEventListener('click', hideMobileMenu);

// Hide mobile menu when a link inside it is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', hideMobileMenu);
});

// Note: The fade-in animations are handled directly in CSS using @keyframes and Tailwind utility classes.
// For more complex animations, you could integrate a library like AOS (Animate On Scroll) here.