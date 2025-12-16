# Índice de funciones — techfaro-webutilidades

Este documento lista las funciones públicas/nombradas encontradas en la carpeta `js/` y una breve descripción.

- js/bolillero.js
  - `leerArchivoYObtenerCedulas(archivo)` : Lee un archivo de texto y devuelve un array de cédulas.
  - `generarGrupos(cedulas, cantidadCedulasPorGrupo)` : Genera grupos aleatorios de cédulas únicas.
  - `mostrarResultados(grupos, listaCedulasElement)` : Renderiza la lista de grupos en el DOM.
  - `generarListas()` : Función async que orquesta la lectura y generación de grupos.

- js/bolillerodatos.js
  - `generarGrupos(personas, cantidadPersonasPorGrupo)` : Genera grupos a partir de objetos persona.
  - `mostrarResultados(grupos, listaCedulasElement)` : Renderiza tablas con los grupos y sus miembros.
  - `generarListas()` : Orquesta lectura/parseo y muestra resultados.

- js/data_entry_mbti.js
  - `getCaracteristica(grupo, netScore)` : Devuelve letra/nombre para una dimensión MBTI.
  - `generateInterpretation(netScore, dim)` : Interpreta la intensidad de la preferencia.
  - `renderDataEntryInputs()` : Renderiza inputs para entrada manual (modo 2).
  - `imprimirResultado()` : Prepara e imprime el resultado MBTI.
  - `calcularResultadoDirecto()` : Calcula resultado a partir de valores directos (modo 1).
  - `calcularResultadoManual()` : Calcula resultado desde inputs manuales (modo 2).

- js/funcgral.js
  - `darUrl(cadena[, config])` : Construye URL relativa usando configuración (refactorizada para ser configurable).
  - `validarCedulaUruguaya(cadena)` : Valida una cédula uruguaya.
  - `parsearLinea(linea, caracter)` : Parseo de una línea CSV/; en objeto persona.
  - `codificar(param)` : Codifica texto en base64 (usa `btoa`).
  - `limpiarTexto(texto)` : Elimina signos/puntuación del texto.
  - `leerArchivoYObtenerObjeto(archivo)` : Lee un archivo y devuelve array de objetos parseados.

- js/login.js
  - `validarUsuario(usuario, contrasenia, listaUsuarios)` : Valida credenciales contra una lista codificada.

- js/mbti.js
  - `getCaracteristica(grupo, netScore)` : Similar a la de data_entry_mbti (función utilitaria para MBTI).
  - `autoCompletar()` : Auto-llena el cuestionario con respuestas aleatorias (para pruebas).
  - `renderizarPreguntas()` : Renderiza las 100 preguntas en el DOM.
  - `calcularResultado()` : Calcula resultado MBTI desde inputs tipo radio.

- js/mbti_nuevo.js
  - `intercalarPreguntasPorPatron(grupos)` : Intercala preguntas según un patrón.
  - `generarPreguntas(preguntas)` : Inserta preguntas en el DOM.
  - `generarGradienteAleatorioFuertes()` : Genera gradiente aleatorio (fuertes).
  - `generarGradienteAleatorioPastel()` : Genera gradiente aleatorio (pastel).
  - `generarGradienteAleatorio()` : Genera gradiente aleatorio con reglas.
  - `calcularResultado()` : Calcula resultado según este otro flujo MBTI.
  - `imprimirLo(divId)` : Imprime el contenido de un div.

- js/menu.js
  - (no declara funciones nombradas; añade listeners para mostrar/ocultar submenus)

- js/ovo.js
  - `generarPreguntas(preguntas)` : Genera lista de preguntas en el DOM.
  - `contarRespuestas()` : Cuenta respuestas y muestra gráfico (Chart.js).
  - `mostrarResultadosTabla(respuestas)` : Renderiza tabla con resultados.
  - `imprimirLo(divId)` : Imprime un div (también usado en otros módulos).
  - `setearFechaIngreso()` : Asigna fecha actual en el campo `#fechaingreso`.


Notas:
- Existen nombres de función duplicados entre archivos (`calcularResultado`, `getCaracteristica`, `imprimirLo`) — son independientes por archivo.
- `js/funcgral.js` ahora espera configuración en `window.__TF_CONFIG__` o `sessionStorage` (si se define).

Si quieres, puedo:
- Añadir descripciones más detalladas para cada función.
- Extraer y documentar parámetros/ejemplos de salida.
- Generar un archivo `js/index.js` que exporte utilidades comunes.

``` 
Archivo generado automáticamente.
```