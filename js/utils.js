// Utilidades compartidas para techfaro-webutilidades

function validarCedulaUruguaya(cadena) {
  const numeroLimpio = cadena.replace(/\D/g, '');
  if (numeroLimpio.length !== 8) return false;
  const pesos = [2, 9, 8, 7, 6, 3, 4];
  let suma = 0;
  for (let i = 0; i < 7; i++) {
    suma += pesos[i] * parseInt(numeroLimpio[i], 10);
  }
  const digitoVerificadorCalculado = (10 - (suma % 10)) % 10;
  const digitoVerificadorIngresado = parseInt(numeroLimpio[7], 10);
  return digitoVerificadorCalculado === digitoVerificadorIngresado;
}

function parsearLinea(linea, caracter) {
  const campos = linea.split(caracter);
  return {
    cedula: (campos[0] || '').trim(),
    nombre: (campos[1] || '').trim(),
    apellido: (campos[2] || '').trim(),
    movil: (campos[3] || '').trim(),
    email: (campos[4] || '').trim(),
    direccion: (campos[5] || '').trim()
  };
}

function codificar(param) {
  try {
    return btoa(param);
  } catch (e) {
    console.warn('codificar: fallo al codificar en base64', e);
    return null;
  }
}

function limpiarTexto(texto) {
  if (!texto) return '';
  return texto.replace(/[.,\-_/\\!?'"()\[\]{}@#$%^&*+=~]/g, '');
}

function leerArchivoYObtenerObjeto(archivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const cadena = event.target.result.split('\n').filter(line => line.trim());
      const objeto = [];
      cadena.forEach(linea => {
        objeto.push(parsearLinea(linea, ';'));
      });
      resolve(objeto);
    };
    reader.onerror = error => reject(error);
    reader.readAsText(archivo);
  });
}

// Exponer una referencia global opcional
window.__TF_UTILS__ = {
  validarCedulaUruguaya,
  parsearLinea,
  // Añadimos utilidades MBTI y de impresión compartida
  getCaracteristica: undefined,
  imprimirLo: undefined,
  codificar,
  limpiarTexto,
  leerArchivoYObtenerObjeto
};

// Implementación compartida de getCaracteristica (MBTI)
function getCaracteristica(grupo, netScore) {
  let letra = "";
  let nombre = "";

  switch (grupo) {
    case 1:
      if (netScore > 0) { letra = 'E'; nombre = "Extroversión"; }
      else if (netScore < 0) { letra = 'I'; nombre = "Introversión"; }
      else { letra = '-'; nombre = "Sin preferencia clara"; }
      return { letra, nombre, id: "E/I" };
    case 2:
      if (netScore > 0) { letra = 'S'; nombre = "Sensación"; }
      else if (netScore < 0) { letra = 'N'; nombre = "Intuición"; }
      else { letra = '-'; nombre = "Sin preferencia clara"; }
      return { letra, nombre, id: "S/N" };
    case 3:
      if (netScore > 0) { letra = 'T'; nombre = "Pensamiento"; }
      else if (netScore < 0) { letra = 'F'; nombre = "Sentimiento"; }
      else { letra = '-'; nombre = "Sin preferencia clara"; }
      return { letra, nombre, id: "T/F" };
    case 4:
      if (netScore > 0) { letra = 'J'; nombre = "Juicio"; }
      else if (netScore < 0) { letra = 'P'; nombre = "Percepción"; }
      else { letra = '-'; nombre = "Sin preferencia clara"; }
      return { letra, nombre, id: "J/P" };
    default:
      return { letra: 'X', nombre: 'Desconocido', id: 'X/X' };
  }
}

// Implementación compartida de imprimirLo(divId)
function imprimirLo(divId) {
  const divAImprimir = document.getElementById(divId);
  if (!divAImprimir) return;

  // Si existe un formulario con checkboxes y hay respuestas, exigir nombre/cedula si existen
  try {
    const myForm = document.getElementById('myForm');
    if (myForm) {
      const algunaRespuestaMarcada = myForm.querySelector('input[type="checkbox"]:checked') || myForm.querySelector('input[type="radio"]:checked');
      if (algunaRespuestaMarcada) {
        const nombreEl = document.getElementById('nombre');
        const cedulaEl = document.getElementById('cedula');
        if ((nombreEl || cedulaEl)) {
          const nombre = nombreEl ? limpiarTexto(nombreEl.value) : '';
          const cedula = cedulaEl ? limpiarTexto(cedulaEl.value) : '';
          if (algunaRespuestaMarcada && (!nombre || !cedula)) {
            alert('Por favor ingrese tanto el nombre como la cédula antes de impirmir.');
            return;
          }
        }
      }
    }
  } catch (e) {
    console.warn('imprimirLo: fallo validación previa', e);
  }

  divAImprimir.focus();
  window.print();
}

// Exponer globalmente para compatibilidad con los scripts existentes
window.getCaracteristica = getCaracteristica;
window.imprimirLo = imprimirLo;

// Actualizar objeto __TF_UTILS__ con las nuevas funciones
window.__TF_UTILS__.getCaracteristica = getCaracteristica;
window.__TF_UTILS__.imprimirLo = imprimirLo;
