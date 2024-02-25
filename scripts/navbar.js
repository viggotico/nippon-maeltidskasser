const currentLocation = window.location.pathname;
const navbar = document.querySelector('.navbar');

const subMenus = document.querySelectorAll('.sub-menu');
subMenus.forEach(subMenu => {
    let contentClassName = subMenu.classList.contains('sub-mega-menu') ? 'mega-menu-content-wrapper' : 'sub-menu-items';
    subMenu.addEventListener("mouseover", (e) => {
        const carretDown = subMenu.querySelector('i');
        const contentWrapper = subMenu.querySelector(`.${contentClassName}`);

        carretDown.classList.add('sub-menu-hover-icon');
        contentWrapper.classList.add(`${contentClassName}-hover`);
        contentWrapper.style.setProperty('display', 'flex', 'important');

        e.preventDefault();
    });
    subMenu.addEventListener("mouseleave", (e) => {
        const carretDown = subMenu.querySelector('i');
        const contentWrapper = subMenu.querySelector(`.${contentClassName}`);

        carretDown.classList.remove('sub-menu-hover-icon');
        contentWrapper.classList.remove(`${contentClassName}-hover`);
        if (!contentWrapper.matches(':hover') && !subMenu.matches(':hover'))
            contentWrapper.style.setProperty('display', 'none', 'important');

        e.preventDefault();
    });

    const contentWrapper = subMenu.querySelector(`.${contentClassName}`);
    contentWrapper.addEventListener('mouseleave', (e) => {
        contentWrapper.style.setProperty('display', 'none', 'important');
        e.preventDefault();
    });
});