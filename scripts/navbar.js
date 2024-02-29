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

const navLinks = [
    // left
    "nav_hjem",
    "nav_måltidskasser",
    "nav_sfd",
    "nav_priser",
    "nav_levering",
    // right
    "nav_omos",
    "nav_opskriftsblog",
    "nav_faq",
    "nav_vision",
    "nav_kontakt",
    "nav_login",
    "nav_brugerprofil",
    "nav_planlæg",
    "cart",
    // logo
    "nav_logo",
    // måltidskasser
    "nav_m_tilpas",
    "nav_m_vegansk",
    "nav_m_børnevenlige",
    "nav_m_luksus",
    "nav_m_sunde"
];
navLinks.forEach(navlink => {
    switch (navlink) {
        // left
        case "nav_hjem": navigate(navlink, ''); break;
        case "nav_måltidskasser": navigate(navlink, 'kasser'); break;
        case "nav_sfd": navigate(navlink, 'saedan-fungerer-det'); break;
        case "nav_priser": navigate(navlink, 'priser'); break;
        case "nav_levering": navigate(navlink, 'levering'); break;
        // right
        case "nav_omos": navigate(navlink, 'om-os'); break;
        case "nav_opskriftsblog": navigate(navlink, 'opskriftsblog'); break;
        case "nav_faq": navigate(navlink, 'faq'); break;
        case "nav_vision": navigate(navlink, 'vision'); break;
        case "nav_kontakt": navigate(navlink, 'kontakt'); break;
        case "nav_login": navigate(navlink, 'login'); break;
        case "nav_brugerprofil": navigate(navlink, 'profil'); break;
        case "nav_planlæg": navigate(navlink, 'planlæg'); break;
        case "cart": navigate(navlink, 'checkout'); break;
        // logo
        case "nav_logo": navigate(navlink, ''); break;
        // måltidskasser
        case "nav_m_tilpas": navigate(navlink, 'tilpas'); break;
        case "nav_m_vegansk": navigate(navlink, 'kasser/vegansk'); break;
        case "nav_m_børnevenlige": navigate(navlink, 'kasser/family'); break;
        case "nav_m_luksus": navigate(navlink, 'kasser/luksus'); break;
        case "nav_m_sunde": navigate(navlink, 'kasser/sunde'); break;
    };
});
function navigate(id, url) {
    const nav = document.getElementById(id);
    nav.style.cursor = "pointer";
    nav.classList.add('navitem');
    switch (id) {
        case "nav_hjem":
        case "nav_kontakt":
        case "nav_måltidskasser":
        case "nav_sfd":
        case "nav_omos":
        case "nav_login":
            nav.classList.add('navitem-2');
            break;
    }
    nav.onclick = () => {
        const origin = window.location.origin.includes('localhost') || window.location.origin.includes('0.0') ? window.location.origin : `${window.location.origin}/nippon-maeltidskasser`;
        const errorPage = `${origin}/404`;
        const targetUrl = `${origin}/${url}`;
        fetch(targetUrl)
        .then(res => {
            console.log("res:", res);
            window.location.href = res.status == 404 ? errorPage : targetUrl;
        })
        .catch(err => { window.location.href = errorPage; });
    };
}