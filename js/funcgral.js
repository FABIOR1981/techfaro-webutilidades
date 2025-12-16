//sessionStorage.setItem('Produccion', false);


function darUrl(cadena, config) {
  try {
    // Configuración con valores por defecto. Se puede sobrescribir mediante:
    // - pasar `config` como segundo parámetro
    // - definir `window.__TF_CONFIG__` como objeto global
    // - guardar JSON en sessionStorage bajo la clave 'TF_CONFIG'
    const defaultConfig = {
      mode: 'production', // 'production' | 'development'
      baseUrls: {
        production: 'https://techfaro-webutilidades.netlify.app/',
        development: 'D:/Cosas/Programacion/Desarrollo/TechFaRo-webUtilidades/'
      }
    };

    let cfg = defaultConfig;
    try {
      if (config && typeof config === 'object') cfg = { ...cfg, ...config };
      else if (window && window.__TF_CONFIG__ && typeof window.__TF_CONFIG__ === 'object') cfg = { ...cfg, ...window.__TF_CONFIG__ };
      else if (sessionStorage.getItem('TF_CONFIG')) cfg = { ...cfg, ...JSON.parse(sessionStorage.getItem('TF_CONFIG')) };
    } catch (e) {
      console.warn('No se pudo parsear TF_CONFIG, usando valores por defecto.', e);
    }

    let ruta = cadena;
    if (cadena !== 'index.html') ruta = 'html/' + cadena;

    const base = (cfg.mode === 'development' || cfg.mode === 'dev') ? (cfg.baseUrls && cfg.baseUrls.development ? cfg.baseUrls.development : cfg.developmentBaseUrl) : (cfg.baseUrls && cfg.baseUrls.production ? cfg.baseUrls.production : cfg.productionBaseUrl);
    if (!base) throw new Error('Base URL no definida en la configuración');

    return base + ruta;
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

				
/* Utilidades comunes movidas a `js/utils.js`.
   Ahora `validarCedulaUruguaya`, `parsearLinea`, `codificar`,
   `limpiarTexto` y `leerArchivoYObtenerObjeto` están disponibles globalmente
   desde `js/utils.js` (y en `window.__TF_UTILS__`). */
function leerArchivoYObtenerObjeto(archivo) {

  return new Promise((resolve, reject) => {
