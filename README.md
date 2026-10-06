# WebUtilidades (TechFaRo)

Conjunto de herramientas web de apoyo para el trabajo de evaluación y selección: cuestionarios, correctores, sorteos y utilidades. Se entra con usuario y contraseña, y las herramientas se eligen desde un menú lateral.

Sitio publicado: https://techfaro-webutilidades.netlify.app

## Herramientas

| Herramienta | Qué hace |
|---|---|
| **OVO (Orientación Vocacional)** | Cuestionario vocacional paso a paso, con gráfico de resultados y detección del tipo de perfil (dominante, mixto o multipotencial). Se puede imprimir el cuestionario solo o junto con los resultados. Para ver los resultados se pide usuario y contraseña. |
| **MBTI Formulario** | Cuestionario MBTI en pantalla, más versiones para imprimir en A4. |
| **MBTI Corrector** | Carga de las respuestas de un cuestionario en papel y cálculo del resultado con su interpretación. |
| **Bolillero por CI** | Arma grupos al azar a partir de un archivo de cédulas, sin repetir y validando el dígito verificador uruguayo. |
| **Bolillero Datos Completo** | Igual que el anterior, pero a partir de un archivo con todos los datos de cada postulante. |
| **Hash SHA-256** | Calcula el hash de un texto, por ejemplo para preparar contraseñas. |

En `archivospruebas/` hay archivos de ejemplo para probar los bolilleros.

## Cómo se usa

1. Entrá al sitio e iniciá sesión.
2. Elegí la herramienta en el menú. Se abre dentro de la misma página.
3. Con **Cerrar sesión** salís.

## Agregar una herramienta nueva

Está explicado paso a paso en [html/COMO_AGREGAR_UNA_HERRAMIENTA.md](html/COMO_AGREGAR_UNA_HERRAMIENTA.md). En resumen:

1. Copiá `html/_plantilla.html` y `js/_plantilla.js`.
2. Escribí la herramienta.
3. Sumala al menú en `js/menu-manifest.js`.

## Ejecutar localmente

No necesita instalación ni build. Serví la carpeta con cualquier servidor estático (por ejemplo `npx serve`) y abrí `index.html`.

## Estructura

```
index.html               Login
html/                    Menú y herramientas (OVO, MBTI, bolilleros, hash)
js/                      Lógica de cada herramienta, login y menú (menu-manifest.js)
css/                     Estilos
imagenes/                Fondos
archivospruebas/         Archivos de ejemplo para los bolilleros
```
