# Cómo agregar una herramienta nueva al menú

Esto es lo único que hay que saber para sumar "material de trabajo" nuevo
al proyecto, sin romper nada de lo que ya funciona.

## Pasos

1. **Copiá las plantillas:**
   - `html/_plantilla.html` → `html/tu-herramienta.html`
   - `js/_plantilla.js` → `js/tu-herramienta.js`

2. **Editá el HTML:** cambiá el `<title>` y el `<h1>`, y armá el contenido
   dentro del `<div class="container">`. Si necesitás estilos propios,
   creá `css/tu-herramienta.css` y enlazalo en el `<head>`.

3. **Editá el JS:** escribí la lógica de tu herramienta dentro del bloque
   `if (sessionStorage.getItem("verificado")) { ... }` que ya trae la
   plantilla. No hace falta armar el chequeo de sesión: ya viene puesto.

4. **Sumala al menú:** abrí `js/menu-manifest.js` y agregá un renglón
   dentro de la categoría que corresponda (o creá una categoría nueva):

   ```js
   { nombre: 'Tu Herramienta', archivo: 'tu-herramienta.html' },
   ```

   Ese es el **único** archivo que hay que tocar para que aparezca en el
   menú — no hace falta editar `menu.html`.

5. **Probala:** abrí `menu.html`, buscá tu herramienta en el menú y
   verificá que cargue bien.

## Errores típicos a evitar

Estos son bugs reales que aparecieron en este proyecto por herramientas
armadas "a mano" sin plantilla — por eso existe esta plantilla:

- **Olvidarse de `funcgral.js`**: si tu script usa `darUrl(...)`, tiene
  que estar cargado `<script src="../js/funcgral.js">` ANTES que tu
  propio `<script>`.
- **Armar tu propio menú lateral (`id="contIzq"`)**: no hace falta, la
  página ya se carga dentro del menú principal, que tiene el suyo.
- **Olvidarse de agregarla al manifest**: la herramienta queda "invisible",
  solo accesible escribiendo la URL a mano.
- **Nombres de archivo con mayúsculas inconsistentes** entre el `href`/
  `src` y el archivo real (ej. `FuncGral.js` vs `funcgral.js`): funciona
  en Windows pero se rompe en Netlify, que sí distingue mayúsculas.
