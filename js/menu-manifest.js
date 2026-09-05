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
      { nombre: 'OVO', archivo: 'ovo.html', icono: 'compass' },
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
