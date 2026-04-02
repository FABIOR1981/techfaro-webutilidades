const menuItems = document.querySelectorAll('.menu-item');

const themeToggle = document.getElementById('themeToggle');
const themeThumb = document.getElementById('themeThumb');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.checked = true;
        if (themeThumb) themeThumb.style.transform = 'translateX(20px)';
        document.body.style.background = '#030b1a';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.checked = false;
        if (themeThumb) themeThumb.style.transform = 'translateX(0)';
        document.body.style.background = '';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        applyTheme(themeToggle.checked ? 'dark' : 'light');
    });
}

if (sessionStorage.getItem('verificado')) {
    menuItems.forEach((item) => {
        const submenu = item.querySelector('.submenu');
        const anchor = item.querySelector(':scope > a');

        if (submenu && anchor) {
            // Permite expandir/contraer submenú en móvil
            anchor.addEventListener('click', (event) => {
                if (window.matchMedia('(max-width: 900px)').matches) {
                    event.preventDefault();
                    item.classList.toggle('open');
                }
            });

            item.addEventListener('blur', () => {
                item.classList.remove('open');
            });
        }
    });
} else {
    window.location.href = darUrl('index.html');
}
