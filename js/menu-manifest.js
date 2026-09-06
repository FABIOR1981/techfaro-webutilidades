/*
 * LISTA CENTRAL DE HERRAMIENTAS DEL MENÚ
 * ---------------------------------------
 * Este es el ÚNICO lugar que hay que tocar para que una herramienta nueva
 * aparezca en el menú. No hace falta editar menu.html.
 *
 * Cada renglón es uno de estos dos tipos:
 *
 *   1) Una herramienta (hoja del menú), que carga un archivo de html/:
 *        { nombre: 'Nombre visible', archivo: 'archivo.html', icono: 'nombreIcono' }
 *
 *   2) Una categoría (agrupa varias herramientas o sub-categorías):
 *        { categoria: 'Nombre visible', items: [ ...más renglones... ], icono: 'nombreIcono' }
 *
 * El campo "icono" es opcional: si no se pone, el renglón se muestra sin
 * ícono. Los íconos disponibles están definidos en ICONOS, un poco más
 * abajo — para sumar uno nuevo alcanza con agregar su SVG ahí.
 *
 * Para agregar una herramienta nueva:
 *   1) Copiá html/_plantilla.html y js/_plantilla.js, renombralos.
 *   2) Programá la herramienta.
 *   3) Agregá un renglón acá abajo, dentro de la categoría que corresponda
 *      (o creá una categoría nueva si hace falta).
 * Con esos 3 pasos, la herramienta queda protegida por el login (paso 1,
 * ya viene armado en la plantilla) y visible en el menú (paso 3).
 */
const MENU_MANIFEST = [
  {
    categoria: 'Cuestionarios',
    icono: 'clipboard',
    items: [
     
      {
        categoria: 'Test Vocacional',
        icono: 'compass',
        items: [
          { nombre: 'OVO', archivo: 'ovo.html', icono: 'vocacion' },
         
        ],
      },
      {
        categoria: 'MBTI',
        icono: 'cabeza',
        items: [
          { nombre: 'MBTI Formulario', archivo: 'mbti.html', icono: 'archivoEditar' },
          { nombre: 'MBTI Corrector', archivo: 'data_entry_mbti.html', icono: 'chequeo' },
        ],
      },
    ],
  },
  {
    categoria: 'Bolilleros',
    icono: 'dado',
    items: [
      { nombre: 'Por CI', archivo: 'bolillero.html', icono: 'credencial' },
      { nombre: 'Datos Completo', archivo: 'bolillerocompleto.html', icono: 'personas' },
    ],
  },
  {
    categoria: 'Utilidades',
    icono: 'controles',
    items: [
      { nombre: 'Hash SHA-256', archivo: 'hash_sha256.html', icono: 'numeral' },
    ],
  },
];

// Íconos en SVG, minimalistas y livianos (sin depender de ninguna librería
// externa). Usan stroke="currentColor" para heredar automáticamente el color
// del texto del link (incluido el estado activo, en blanco).
const ICONOS = {
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/><line x1="9" y1="18" x2="13" y2="18"/></svg>',
  cabeza: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
  dado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.1" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.1" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/></svg>',
  controles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="2" fill="currentColor" stroke="none"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="11" cy="18" r="2" fill="currentColor" stroke="none"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5z" fill="currentColor" stroke="none"/></svg>',
  archivoEditar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9.5 15.5 13 14l1 1-3.5 1.5H9.5z"/></svg>',
  chequeo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 12 3 3 5-6"/></svg>',
  credencial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><line x1="14" y1="10" x2="19" y2="10"/><line x1="14" y1="14" x2="19" y2="14"/></svg>',
  personas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.7 14.3c2.5.5 4.3 2.5 4.3 5.7"/></svg>',
  numeral: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="15" y2="21"/><line x1="4" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="20" y2="15"/></svg>',
// --- Nuevos iconos agregados ---
  buscar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  guardar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  eliminar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
  configuracion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  candado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  ojo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  corazon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  estrella: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  recargar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  campana: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  // Encrucijada / Caminos (Enfoque de elección de carrera)
  vocacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="19" r="2"/><path d="M12 17V7"/><path d="M12 7 7 2"/><path d="M12 7l5-5"/></svg>'
};

// Arma el <ul class="menu"> a partir de MENU_MANIFEST y lo inserta en el <nav>.
// Se ejecuta de inmediato (no espera a DOMContentLoaded) porque funcgral.js y
// menu.js, que se cargan justo después en menu.html, necesitan encontrar estos
// elementos ya armados en el DOM apenas se ejecutan.
function renderizarMenu(manifest, nav) {
  if (!nav) return;

  function crearContenidoLink(nombre, icono) {
    const wrapper = document.createElement('span');
    wrapper.className = 'menu-link-content';
    if (icono && ICONOS[icono]) {
      const spanIcono = document.createElement('span');
      spanIcono.className = 'menu-icon';
      spanIcono.innerHTML = ICONOS[icono];
      wrapper.appendChild(spanIcono);
    }
    const spanLabel = document.createElement('span');
    spanLabel.className = 'menu-label';
    spanLabel.textContent = nombre;
    wrapper.appendChild(spanLabel);
    return wrapper;
  }

  function construirLista(items) {
    const ul = document.createElement('ul');
    ul.className = 'submenu';
    items.forEach((item) => {
      const li = document.createElement('li');
      if (item.items) {
        // Es una categoría/sub-categoría: link "vacío" + submenú anidado
        li.className = 'menu-item';
        const a = document.createElement('a');
        a.href = '#';
        a.appendChild(crearContenidoLink(item.categoria, item.icono));
        li.appendChild(a);
        li.appendChild(construirLista(item.items));
      } else {
        // Es una herramienta: link que carga el archivo correspondiente
        const a = document.createElement('a');
        a.href = '#';
        a.dataset.url = item.archivo;
        a.appendChild(crearContenidoLink(item.nombre, item.icono));
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
    return ul;
  }

  const menuRaiz = document.createElement('ul');
  menuRaiz.className = 'menu';
  manifest.forEach((categoria) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    const a = document.createElement('a');
    a.href = '#';
    a.appendChild(crearContenidoLink(categoria.categoria, categoria.icono));
    li.appendChild(a);
    li.appendChild(construirLista(categoria.items));
    menuRaiz.appendChild(li);
  });

  nav.appendChild(menuRaiz);
}

renderizarMenu(MENU_MANIFEST, document.querySelector('nav'));
