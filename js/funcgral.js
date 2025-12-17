// ===============================
// FUNCIÓN UNIFICADA DE IMPRESIÓN Y PDF
// ===============================
// Uso: imprimirElemento({ selector, modo, titulo, pdfNombre })
// selector: string (CSS selector del elemento a imprimir)
// modo: 'print' | 'pdf' | 'preview' (por defecto 'print')
// titulo: string opcional para encabezado
// pdfNombre: nombre del archivo PDF (solo modo 'pdf')
async function imprimirElemento({ selector, modo = 'print', titulo = '', pdfNombre = 'documento.pdf' }) {
  const elemento = document.querySelector(selector);
  if (!elemento) {
    alert('No se encontró el contenido a imprimir.');
    return;
  }

  // Clonar el nodo para no alterar el DOM original
  const contenido = elemento.cloneNode(true);
  let wrapper = document.createElement('div');
  wrapper.style.padding = '24px';
  wrapper.style.fontFamily = 'Arial, sans-serif';
  wrapper.style.background = '#fff';
  wrapper.style.color = '#222';
  wrapper.style.maxWidth = '900px';
  wrapper.style.margin = '0 auto';
  if (titulo) {
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    h2.style.textAlign = 'center';
    h2.style.marginBottom = '16px';
    wrapper.appendChild(h2);
  }
  wrapper.appendChild(contenido);

  if (modo === 'preview') {
    // Abrir vista previa en nueva ventana
    const win = window.open('', '_blank');
    win.document.write('<html><head><title>Vista previa</title><style>body{background:#f2f2f2;} .preview-content{background:#fff;padding:24px;margin:24px auto;max-width:900px;box-shadow:0 2px 12px #0002;}</style></head><body><div class="preview-content">');
    win.document.body.appendChild(wrapper);
    win.document.write('</div></body></html>');
    win.document.close();
    return;
  }

  if (modo === 'pdf') {
    // Requiere jsPDF y html2canvas cargados globalmente
    if (!window.jspdf || !window.html2canvas) {
      alert('jsPDF o html2canvas no están cargados.');
      return;
    }
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'pt', 'a4');
    await window.html2canvas(wrapper, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = canvas.height * pageWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(pdfNombre);
    });
    return;
  }

  // Modo impresión estándar
  const originalBody = document.body.innerHTML;
  document.body.innerHTML = '';
  document.body.appendChild(wrapper);
  window.print();
  document.body.innerHTML = originalBody;
}
//sessionStorage.setItem('Produccion', false);



function darUrl(cadena) {
  // Detectar si estamos en Netlify y en qué rama
  let baseUrl = '';
  const host = window.location.hostname;
  // Si es Netlify branch deploy (rama1--techfaro-webutilidades.netlify.app)
  if (host.endsWith('.netlify.app')) {
    baseUrl = window.location.origin + '/';
  } else {
    // Local/dev fallback
    // const URL_DESARROLLO = 'E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades/';
    baseUrl = 'D:/Cosas/Programacion/Desarrollo/TechFaRo-webUtilidades/';
  }
  try {
    if (cadena !== 'index.html') {
      cadena = 'html/' + cadena;
    }
    return baseUrl + cadena;
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

