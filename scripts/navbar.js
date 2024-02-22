const currentLocation = window.location.pathname;
const navbar = document.querySelector('.navbar');

const megaMenus = document.querySelectorAll('.mega-menu');
megaMenus.forEach(megaMenu => {
    megaMenu.addEventListener("mouseover", (e) => {
        const carretDown = megaMenu.querySelector('i');
        const contentWrapper = megaMenu.querySelector('.mega-menu-content-wrapper');

        carretDown.classList.add('mega-menu-hover-icon');
        contentWrapper.classList.add('mega-menu-content-wrapper-hover');
        contentWrapper.style.display = "flex";

        e.preventDefault();
    });
    megaMenu.addEventListener("mouseleave", (e) => {
        const carretDown = megaMenu.querySelector('i');
        const contentWrapper = megaMenu.querySelector('.mega-menu-content-wrapper');

        carretDown.classList.remove('mega-menu-hover-icon');
        contentWrapper.classList.remove('mega-menu-content-wrapper-hover');
        if (!contentWrapper.matches(':hover') && !megaMenu.matches(':hover'))
            contentWrapper.style.display = "none";

        e.preventDefault();
    });

    const contentWrapper = megaMenu.querySelector('.mega-menu-content-wrapper');
    contentWrapper.addEventListener('mouseleave', (e) => {
        contentWrapper.style.display = "none";
        e.preventDefault();
    });
});