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

function loadPageInContainer(filePath) {
  const containerDestino = document.getElementById('contDer');
  if (!containerDestino) return;

  // Cargar el HTML completo en un iframe para preservar scripts, estilos y comportamiento original
  containerDestino.innerHTML = '';
  const frame = document.createElement('iframe');
  frame.id = 'moduleFrame';
  frame.src = filePath;
  frame.style.width = '100%';
  frame.style.height = '640px'; // altura provisoria hasta que cargue y se pueda medir
  frame.style.border = 'none';
  frame.style.minHeight = '640px';
  frame.setAttribute('allow', 'clipboard-read; clipboard-write');

  // Ajusta la altura del iframe a la altura real de su contenido, para que
  // páginas cortas no dejen espacio vacío y páginas largas no queden con
  // scroll interno (en vez de eso, la página completa se desplaza).
  function ajustarAltura() {
    try {
      const doc = frame.contentWindow.document;
      const alto = Math.max(
        doc.documentElement.scrollHeight,
        doc.body ? doc.body.scrollHeight : 0
      );
      frame.style.height = Math.max(alto, 640) + 'px';
    } catch (e) {
      // Si por algún motivo no se puede medir, se mantiene la última altura
    }
  }

  frame.onload = () => {
    // Estilo y scroll independiente
    const prime = frame.contentWindow.document;
    prime.body.style.background = 'transparent';
    prime.documentElement.style.overflowX = 'auto';
    prime.body.style.overflowX = 'auto';
    prime.body.style.minWidth = '100%';

    // Arrancar la herramienta con el mismo tema (claro/oscuro) que ya está
    // elegido en el menú, para que no aparezca en blanco en medio de modo oscuro.
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      prime.documentElement.setAttribute('data-theme', 'dark');
    }

    // Forzar quiebra de contenido muy ancho en el iframe.
    // box-sizing:border-box es clave: sin esto, en páginas que no lo definen
    // por su cuenta, "max-width:100%" + padding propio hace que el elemento
    // termine siendo MÁS ancho que su contenedor (el padding se suma aparte).
    const styleTag = prime.createElement('style');
    styleTag.textContent = `
      * { box-sizing: border-box !important; max-width: 100% !important; overflow-wrap: anywhere !important; }
      input, textarea, select, table { max-width: 100% !important; }
      body { margin: 0 !important; }
    `;
    prime.head.appendChild(styleTag);

    frame.style.width = '100%';
    frame.style.transform = 'none';

    // Medir altura inicial y volver a medir cuando el contenido cambie
    // (nuevas preguntas, resultados, gráficos, etc.)
    ajustarAltura();
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(ajustarAltura);
      ro.observe(prime.documentElement);
    }
    // Red de seguridad por si algo cambia el tamaño sin disparar el observer
    frame.contentWindow.addEventListener('resize', ajustarAltura);
    setTimeout(ajustarAltura, 300);
    setTimeout(ajustarAltura, 1000);
  };

  containerDestino.appendChild(frame);
}

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    const urlBase = enlace.dataset.url;
    const nuevaUrl = darUrl(urlBase);
    const containerDestino = document.getElementById('contDer');

    // Marcar en el menú cuál herramienta está abierta ahora
    enlaces.forEach(e => e.classList.remove('active'));
    enlace.classList.add('active');

    if (containerDestino) {
      loadPageInContainer(urlBase);
      try {
        window.history.replaceState(null, '', nuevaUrl);
      } catch (e) {
        // nuevaUrl apunta siempre al dominio de producción; si se está probando
        // en otro origen (localhost, preview de Netlify, etc.) el navegador
        // bloquea replaceState entre orígenes distintos. No es crítico: solo
        // afecta la URL mostrada en la barra de direcciones, no la navegación.
        console.warn('No se pudo actualizar la URL visible (origen distinto al de producción):', e.message);
      }
    } else {
      window.location.href = nuevaUrl;
    }
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

