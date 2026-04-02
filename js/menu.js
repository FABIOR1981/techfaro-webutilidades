const menuItems = document.querySelectorAll('.menu-item');

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
