// menu-accesible.js
// Menú lateral accesible: soporte teclado, click/tap, ARIA y animaciones

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  if (!menu) return;

  // Soporte click/tap y teclado para abrir/cerrar submenús
  menu.querySelectorAll('a[aria-haspopup="true"]').forEach(trigger => {
    // Click/tap para abrir/cerrar
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      closeAllSubmenus();
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        this.parentElement.classList.add('open');
        // Enfocar primer subitem
        const submenu = this.parentElement.querySelector('.submenu');
        if (submenu) {
          const firstItem = submenu.querySelector('a[role="menuitem"]');
          if (firstItem) firstItem.focus();
        }
      }
    });

    // Teclado: Enter/Espacio abre/cierra, Flechas navegan
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        openAndFocusFirst(this);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        openAndFocusLast(this);
      }
    });
  });

  // Navegación con flechas y Escape en submenús
  menu.querySelectorAll('.submenu a[role="menuitem"]').forEach(item => {
    item.addEventListener('keydown', function (e) {
      const items = Array.from(this.closest('.submenu').querySelectorAll('a[role="menuitem"]'));
      const idx = items.indexOf(this);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = items[idx + 1] || items[0];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = items[idx - 1] || items[items.length - 1];
        prev.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeAllSubmenus();
        // Volver al trigger
        const parentTrigger = this.closest('li.menu-item').querySelector('a[aria-haspopup="true"]');
        if (parentTrigger) parentTrigger.focus();
      } else if (e.key === 'ArrowLeft') {
        // Cerrar submenú anidado
        const parentTrigger = this.closest('li.menu-item').querySelector('a[aria-haspopup="true"]');
        if (parentTrigger) {
          closeAllSubmenus();
          parentTrigger.focus();
        }
      }
    });
  });

  // Cerrar submenús al hacer click fuera
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) {
      closeAllSubmenus();
    }
  });

  // Utilidades
  function closeAllSubmenus() {
    menu.querySelectorAll('a[aria-haspopup="true"]').forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.parentElement.classList.remove('open');
    });
  }
  function openAndFocusFirst(trigger) {
    closeAllSubmenus();
    trigger.setAttribute('aria-expanded', 'true');
    trigger.parentElement.classList.add('open');
    const submenu = trigger.parentElement.querySelector('.submenu');
    if (submenu) {
      const firstItem = submenu.querySelector('a[role="menuitem"]');
      if (firstItem) firstItem.focus();
    }
  }
  function openAndFocusLast(trigger) {
    closeAllSubmenus();
    trigger.setAttribute('aria-expanded', 'true');
    trigger.parentElement.classList.add('open');
    const submenu = trigger.parentElement.querySelector('.submenu');
    if (submenu) {
      const items = submenu.querySelectorAll('a[role="menuitem"]');
      if (items.length) items[items.length - 1].focus();
    }
  }
});
