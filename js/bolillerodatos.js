let gruposGenerados;
let cantidadCedulasPorGrupo;
let listaFilas;




function generarGrupos(personas, cantidadPersonasPorGrupo) {
  // Crear una copia del arreglo de personas para no modificar el original
  const personasCopia = [...personas];
  const grupos = [];
  const cedulasUsadas = new Set();
  const personasNoAsignadas = [];
  

  while (personasCopia.length > 0) {
    const grupo = [];
    while (grupo.length < cantidadPersonasPorGrupo && personasCopia.length > 0) {
      // Seleccionar una persona aleatoria
      const indiceAleatorio = Math.floor(Math.random() * personasCopia.length);
      const persona = personasCopia.splice(indiceAleatorio, 1)[0];

      // Validar cédula y verificar si ya ha sido utilizada
      if (validarCedulaUruguaya(persona.cedula) && !cedulasUsadas.has(persona.cedula)) {
        cedulasUsadas.add(persona.cedula);
        grupo.push(persona);
      } else {
        personasNoAsignadas.push(persona);
      }
    }
    grupos.push(grupo);
  }

  return grupos;
}



function mostrarResultados(grupos, listaCedulasElement) {
    listaCedulasElement.innerHTML = '';

    grupos.forEach((grupo, indexGrupo) => {
        const tabla = document.createElement('table');
        const encabezado = document.createElement('thead');
        const cuerpo = document.createElement('tbody');

        // Crear encabezado de la tabla
        const filaEncabezado = document.createElement('tr');
        const columnasEncabezado = ['Grupo', 'Cédula', 'Nombre', 'Apellido', 'Móvil', 'Email', 'Dirección'];
        columnasEncabezado.forEach(columna => {
            const celdaEncabezado = document.createElement('th');
            celdaEncabezado.textContent = columna;
            filaEncabezado.appendChild(celdaEncabezado);
        });
        encabezado.appendChild(filaEncabezado);

        // Crear filas para cada persona
        grupo.forEach((persona, indexPersona) => {
            const fila = document.createElement('tr');

            // Agregar celda del grupo solo en la primera fila
            if (indexPersona === 0) {
                const celdaGrupo = document.createElement('td');
                celdaGrupo.rowSpan = grupo.length;
                celdaGrupo.textContent = `${indexGrupo + 1}`;
                fila.appendChild(celdaGrupo);
            }
			
			// Agregar la cédula en todas las filas
        const celdaCedula = document.createElement('td');
        celdaCedula.textContent = persona.cedula;
        fila.appendChild(celdaCedula);

            // Agregar las demás celdas de la persona, empezando desde la segunda columna
            const columnas = Object.values(persona);
            for (let i = 1; i < columnas.length; i++) {
                const celda = document.createElement('td');
                celda.textContent = columnas[i];
                fila.appendChild(celda);
            }
            cuerpo.appendChild(fila);
        });

        tabla.appendChild(encabezado);
        tabla.appendChild(cuerpo);
        listaCedulasElement.appendChild(tabla);
    });
}


async function generarListas() {
  const archivo = document.getElementById('archivoCedulas').files[0];
  cantidadCedulasPorGrupo = parseInt(document.getElementById('cantidadCedulasPorGrupo').value);
  const listaCedulasElement = document.getElementById('listaCedulas');
  const mensajeDiv = document.getElementById('mensaje');

  if (!archivo) {
    mensajeDiv.textContent = 'Por favor, seleccione un archivo.';
    return;
  }

  try {
    const personas = await leerArchivoYObtenerObjeto(archivo);
    const grupos = generarGrupos(personas, cantidadCedulasPorGrupo);
    mostrarResultados(grupos, listaCedulasElement);
  } catch (error) {
    mensajeDiv.textContent = `Error al leer el archivo: ${error.message}`;
  }
}