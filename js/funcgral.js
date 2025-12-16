//sessionStorage.setItem('Produccion', false);


function darUrl(cadena) {
	const modo=true;


 // URLs base para producción y desarrollo
  const URL_PRODUCCION = 'https://techfaro-webutilidades.netlify.app/';
  //const URL_DESARROLLO = 'E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades/';
  const URL_DESARROLLO = 'D:/Cosas/Programacion/Desarrollo/TechFaRo-webUtilidades/';
  
  
 

  try {
    
	if(cadena!='index.html'){
		cadena='html/'+cadena;
	}

    // Construir la URL según el modo	
    if (modo) {
		
      return URL_PRODUCCION + cadena;
    } else {
		
      return URL_DESARROLLO + cadena;
    }
  } catch (error) {
    console.error('Error al construir la URL:', error);
    return 'URL inválida';
  }
}


// Seleccionar todos los enlaces con el atributo data-url
const enlaces = document.querySelectorAll('a[data-url]');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    const urlBase = enlace.dataset.url;
    const nuevaUrl = darUrl(urlBase);
    window.location.href = nuevaUrl;
	//document.getElementById('contDer').innerHTML =nuevaUrl;
	
	/*fetch(nuevaUrl)
       .then(response => response.text())
      .then(data => {
        document.getElementById('contDer').innerHTML = data;
      })
      .catch(error => {
        console.error('Error al cargar el contenido:', error);
        // Puedes mostrar un mensaje de error al usuario
      });*/
	
	
	
	
  });
});




function validarCedulaUruguaya(cadena) {
	
	
		  // Limpiamos la cédula para asegurarnos de que solo contenga números
		  const numeroLimpio = cadena.replace(/\D/g, '');

		  // Verificamos si la cédula tiene exactamente 8 dígitos
		  if (numeroLimpio.length !== 8) {
			return false;
		  }

		  // Calculamos el dígito verificador esperado
		  const pesos = [2, 9, 8, 7, 6, 3, 4];
		  let suma = 0;
		  for (let i = 0; i < 7; i++) {
			suma += pesos[i] * parseInt(numeroLimpio[i]);
		  }
		  const digitoVerificadorCalculado = (10 - (suma % 10)) % 10;

		  // Extraemos el dígito verificador de la cédula ingresada
		  const digitoVerificadorIngresado = parseInt(numeroLimpio[7]);

		  // Comparamos ambos dígitos verificadores
		  return digitoVerificadorCalculado === digitoVerificadorIngresado;
	
}


function parsearLinea(linea,caracter) {
  const campos = linea.split(caracter);
  return {
    cedula: campos[0].trim(),
    nombre: campos[1].trim(),
    apellido: campos[2].trim(),
    movil: campos[3].trim(),
    email: campos[4].trim(),
    direccion: campos[5].trim()
  };
}

function codificar(param) {
            const textoCodificado = param;
            const texto = btoa(textoCodificado);
    return  texto;
}



function limpiarTexto(texto) {
	return texto.replace(/[.,\-_/\\!?'"()[\]{}@#$%^&*+=~]/g, '');
}

				




function leerArchivoYObtenerObjeto(archivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const cadena = event.target.result.split('\n').filter(cedula => cedula.trim());
      const objeto = [];
      cadena.forEach(linea => {
        objeto.push(parsearLinea(linea,';'));
      });
      resolve(objeto);
    };
    reader.onerror = error => reject(error);
    reader.readAsText(archivo);
  });
}

