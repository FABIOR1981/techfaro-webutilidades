/*
 * LISTA CENTRAL DE HERRAMIENTAS DEL MENÚ
 * ---------------------------------------
 * Este es el ÚNICO lugar que hay que tocar para que una herramienta nueva
 * aparezca en el menú. No hace falta editar menu.html.
 *
 * Cada renglón es uno de estos dos tipos:
 *
 *   1) Una herramienta (hoja del menú), que carga un archivo de html/:
 *        { nombre: 'Nombre visible', archivo: 'archivo.html' }
 *
 *   2) Una categoría (agrupa varias herramientas o sub-categorías):
 *        { categoria: 'Nombre visible', items: [ ...más renglones... ] }
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
    items: [
      { nombre: 'OVO', archivo: 'ovo.html' },
      {
        categoria: 'MBTI',
        items: [
          { nombre: 'MBTI Formulario', archivo: 'mbti.html' },
          { nombre: 'MBTI Corrector', archivo: 'data_entry_mbti.html' },
        ],
      },
    ],
  },
  {
    categoria: 'Bolilleros',
    items: [
      { nombre: 'Por CI', archivo: 'bolillero.html' },
      { nombre: 'Datos Completo', archivo: 'bolillerocompleto.html' },
    ],
  },
  {
    categoria: 'Utilidades',
    items: [
      { nombre: 'Hash SHA-256', archivo: 'hash_sha256.html' },
    ],
  },
];

// Arma el <ul class="menu"> a partir de MENU_MANIFEST y lo inserta en el <nav>.
// Se ejecuta de inmediato (no espera a DOMContentLoaded) porque funcgral.js y
// menu.js, que se cargan justo después en menu.html, necesitan encontrar estos
// elementos ya armados en el DOM apenas se ejecutan.
function renderizarMenu(manifest, nav) {
  if (!nav) return;

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
        a.textContent = item.categoria;
        li.appendChild(a);
        li.appendChild(construirLista(item.items));
      } else {
        // Es una herramienta: link que carga el archivo correspondiente
        const a = document.createElement('a');
        a.href = '#';
        a.dataset.url = item.archivo;
        a.textContent = item.nombre;
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
    a.textContent = categoria.categoria;
    li.appendChild(a);
    li.appendChild(construirLista(categoria.items));
    menuRaiz.appendChild(li);
  });

  nav.appendChild(menuRaiz);
}

renderizarMenu(MENU_MANIFEST, document.querySelector('nav'));
