// This script handles the mobile navigation menu and the collapsible DAX sections.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}


document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }

    // Collapsible DAX Measures
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');

            // Toggle the visibility of the content
            content.classList.toggle('hidden');
            
            // Rotate the chevron icon
            icon.classList.toggle('rotate-180');
        });
    });
});
