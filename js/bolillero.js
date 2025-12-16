let gruposGenerados;
let cantidadCedulasPorGrupo
let listaFilas;

if(sessionStorage.getItem("verificado")){

		function leerArchivoYObtenerCedulas(archivo) {
		  return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (event) => { // Usamos 'event' en lugar de 'e'
			  const cedulas = event.target.result.split('\n').filter(cedula => cedula.trim());
			  resolve(cedulas);
			};
			reader.onerror = error => reject(error);
			reader.readAsText(archivo);
		  });
		}

		function generarGrupos(cedulas, cantidadCedulasPorGrupo) {
		  // Eliminar duplicados y crear un conjunto de cédulas únicas
		  const cedulasUnicas = [...new Set(cedulas)];
		  const cedulasUsadas = new Set();

		  const grupos = [];
		  while (cedulasUnicas.length > 0) {
			const grupo = [];
			while (grupo.length < cantidadCedulasPorGrupo && cedulasUnicas.length > 0) {
			  // Seleccionar una cédula aleatoria no utilizada
			  const indiceAleatorio = Math.floor(Math.random() * cedulasUnicas.length);
			  const cedula = cedulasUnicas[indiceAleatorio];


				if(validarCedulaUruguaya(cedula)){// Verificar si la cédula sea valida
				  
				  if (!cedulasUsadas.has(cedula)) {// Verificar si la cédula ya ha sido utilizada
					grupo.push(cedula);
					
				  }
				}
				cedulasUsadas.add(cedula);
				cedulasUnicas.splice(indiceAleatorio, 1);
			}
			grupos.push(grupo);
		  }

		  return grupos;
		}

		function mostrarResultados(grupos, listaCedulasElement) {
		  listaCedulasElement.innerHTML = '';
		 
		  grupos.forEach((grupo, index) => {
			const listItem = document.createElement('li');
			listItem.textContent = `Grupo ${index + 1}: ${grupo.join(', ')}`;
			listaCedulasElement.appendChild(listItem);
		  });
		}

	
}else{
	//window.location.href ='https://techfaro-webutilidades.netlify.app';
	//window.location.href ='E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades';
	window.location.href =darUrl('index.html');
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
			const cedulas = await leerArchivoYObtenerCedulas(archivo);
			const grupos = generarGrupos(cedulas, cantidadCedulasPorGrupo);
			mostrarResultados(grupos, listaCedulasElement);
			// Almacenamos los grupos en la variable global
				gruposGenerados = grupos;
		  } catch (error) {
			mensajeDiv.textContent = `Error al leer el archivo: ${error.message}`;
		  }
		}