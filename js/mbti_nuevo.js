// Grupos de preguntas (16 por dimensión)
const grupo1 = [
    { texto: "En reuniones sociales, me siento con energía.", grupo: 1 }, // E/I
    { texto: "Prefiero interactuar con un grupo grande de personas.", grupo: 1 }, // E/I
    { texto: "Después de socializar, necesito tiempo a solas para recargarme.", grupo: 1 }, // E/I
    { texto: "Me resulta fácil iniciar conversaciones con desconocidos.", grupo: 1 }, // E/I
    { texto: "Disfruto expresando mis ideas abiertamente en grupos.", grupo: 1 }, // E/I
    { texto: "Me considero una persona sociable y extrovertida.", grupo: 1 }, // E/I
    { texto: "En un grupo, tiendo a hablar más que a escuchar.", grupo: 1 }, // E/I
    { texto: "Los ambientes ruidosos y concurridos me energizan.", grupo: 1 }, // E/I
    { texto: "Prefiero actividades que involucren mucha interacción social.", grupo: 1 }, // E/I
    { texto: "Me siento más cómodo en grupos grandes.", grupo: 1 }, // E/I
    { texto: "En un equipo, prefiero asumir un rol activo y participativo.", grupo: 1 }, // E/I
    { texto: "Me comunico mejor a través del diálogo verbal.", grupo: 1 }, // E/I
    { texto: "Me resulta fácil hacer nuevas amistades.", grupo: 1 }, // E/I
    { texto: "Disfruto siendo el centro de atención.", grupo: 1 }, // E/I
    { texto: "Tiendo a pensar en voz alta para organizar mis ideas.", grupo: 1 }, // E/I
    { texto: "Me siento revitalizado al estar rodeado de gente.", grupo: 1 }, // E/I
];

const grupo2 = [
    { texto: "Presto más atención a los detalles concretos.", grupo: 2 }, // S/N
    { texto: "Prefiero información clara y tangible.", grupo: 2 }, // S/N
    { texto: "Me gusta trabajar con hechos y datos verificables.", grupo: 2 }, // S/N
    { texto: "Me considero una persona práctica y realista.", grupo: 2 }, // S/N
    { texto: "Me atraen más las cosas que puedo experimentar con mis sentidos.", grupo: 2 }, // S/N
    { texto: "Prefiero aprender a través de la experiencia práctica.", grupo: 2 }, // S/N
    { texto: "Me gusta seguir instrucciones paso a paso.", grupo: 2 }, // S/N
    { texto: "Confío más en la información que proviene de la experiencia directa.", grupo: 2 }, // S/N
    { texto: "Abordo los problemas de manera metódica y práctica.", grupo: 2 }, // S/N
    { texto: "Me enfoco principalmente en el presente.", grupo: 2 }, // S/N
    { texto: "Al percibir el mundo, confío más en mis sentidos que en la intuición.", grupo: 2 }, // S/N
    { texto: "Recuerdo mejor los detalles específicos de los eventos.", grupo: 2 }, // S/N
    { texto: "Prefiero explicaciones claras y concisas con ejemplos concretos.", grupo: 2 }, // S/N
    { texto: "Me aburren las teorías abstractas sin aplicación práctica.", grupo: 2 }, // S/N
    { texto: "Me siento más cómodo con lo que es real y tangible.", grupo: 2 }, // S/N
    { texto: "Al planificar, me enfoco en los detalles prácticos y los pasos a seguir.", grupo: 2 }, // S/N
];

const grupo3 = [
    { texto: "Al tomar decisiones, priorizo la lógica y el análisis objetivo.", grupo: 3 }, // T/F
    { texto: "Valoro más la objetividad y la imparcialidad.", grupo: 3 }, // T/F
    { texto: "Me considero una persona analítica y racional.", grupo: 3 }, // T/F
    { texto: "En situaciones de conflicto, busco soluciones lógicas y justas.", grupo: 3 }, // T/F
    { texto: "Considero el impacto emocional de mis decisiones en los demás.", grupo: 3 }, // T/F
    { texto: "Prefiero la comunicación directa y honesta, incluso si es incómoda.", grupo: 3 }, // T/F
    { texto: "Me resulta fácil separar mis emociones al tomar decisiones importantes.", grupo: 3 }, // T/F
    { texto: "En las relaciones, valoro la honestidad y la comunicación clara.", grupo: 3 }, // T/F
    { texto: "Me motiva lograr resultados concretos y objetivos.", grupo: 3 }, // T/F
    { texto: "Al dar retroalimentación, me enfoco en los hechos y el rendimiento.", grupo: 3 }, // T/F
    { texto: "Prefiero recibir críticas directas y constructivas.", grupo: 3 }, // T/F
    { texto: "Me cuesta expresar mis sentimientos y emociones.", grupo: 3 }, // T/F
    { texto: "Me influyen más los argumentos lógicos que las consideraciones emocionales.", grupo: 3 }, // T/F
    { texto: "Valoro la cooperación y la armonía en un equipo.", grupo: 3 }, // T/F
    { texto: "Me preocupo por el bienestar de los demás.", grupo: 3 }, // T/F
    { texto: "Me guio por mis valores y convicciones personales.", grupo: 3 }, // T/F
];

const grupo4 = [
    { texto: "Prefiero tener un plan detallado antes de comenzar un proyecto.", grupo: 4 }, // J/P
    { texto: "Me siento más cómodo con la rutina y la estructura.", grupo: 4 }, // J/P
    { texto: "Me gusta terminar las tareas antes de comenzar otras nuevas.", grupo: 4 }, // J/P
    { texto: "Al planificar, me enfoco en cumplir los plazos establecidos.", grupo: 4 }, // J/P
    { texto: "Me resulta fácil organizar mi tiempo y mis tareas.", grupo: 4 }, // J/P
    { texto: "Me gusta tener control sobre mi entorno y mis actividades.", grupo: 4 }, // J/P
    { texto: "Prefiero los ambientes organizados y ordenados.", grupo: 4 }, // J/P
    { texto: "Me siento más productivo cuando tengo un horario fijo.", grupo: 4 }, // J/P
    { texto: "Prefiero abordar las tareas con anticipación.", grupo: 4 }, // J/P
    { texto: "Me siento más cómodo cuando las decisiones ya están tomadas.", grupo: 4 }, // J/P
    { texto: "Me gusta que las cosas estén resueltas y cerradas.", grupo: 4 }, // J/P
    { texto: "Me adapto fácilmente a los cambios inesperados.", grupo: 4 }, // J/P
    { texto: "Me gusta trabajar con listas de tareas y planes escritos.", grupo: 4 }, // J/P
    { texto: "Prefiero la información clara, concisa y sin ambigüedades.", grupo: 4 }, // J/P
    { texto: "En mi espacio de trabajo, valoro el orden y la organización.", grupo: 4 }, // J/P
    { texto: "Tiendo a dejar las cosas para último momento.", grupo: 4}, // J/P
];

// ----------------------------------------------------------------------------------
// FUNCIÓN PARA INTERCALAR PREGUNTAS SEGÚN UN PATRÓN DEFINIDO POR EL USUARIO
// ----------------------------------------------------------------------------------

function intercalarPreguntasPorPatron(grupos) {
    // ----------------------------------------------------
    // CONSTANTE DE PATRÓN: Define la secuencia de los grupos (1 a 4).
    // Si PATRON_BASE es [0, 0, 0, 0], se devuelve el orden no intercalado (Grupo 1 -> Grupo 2 -> Grupo 3 -> Grupo 4).
    const PATRON_BASE = [0, 0, 0, 0]; // *** MODIFICA ESTE PATRÓN PARA CAMBIAR EL ORDEN ***
    const REPETICIONES = 16; 
    // ----------------------------------------------------
    
    // Verifica si el patrón es el patrón "no intercalado"
    const esPatronNoIntercalado = PATRON_BASE.every(val => val === 0);

    if (esPatronNoIntercalado) {
        // Devuelve los grupos concatenados en orden (Grupo 1, 2, 3, 4)
        return [...grupos[0], ...grupos[1], ...grupos[2], ...grupos[3]];
    }

    // Lógica para intercalar si el patrón no es [0, 0, 0, 0]
    let PATRON_INTERCALADO = [];
    for (let i = 0; i < REPETICIONES; i++) {
        PATRON_INTERCALADO = PATRON_INTERCALADO.concat(PATRON_BASE);
    }

    let preguntasIntercaladas = [];
    let indices = { 1: 0, 2: 0, 3: 0, 4: 0 }; 
    const mapaGrupos = { 1: grupo1, 2: grupo2, 3: grupo3, 4: grupo4 };

    for (const grupoId of PATRON_INTERCALADO) {
        if (mapaGrupos[grupoId] && indices[grupoId] < mapaGrupos[grupoId].length) {
            preguntasIntercaladas.push(mapaGrupos[grupoId][indices[grupoId]]);
            indices[grupoId]++;
        }
    }
    return preguntasIntercaladas;
}

// ----------------------------------------------------------------------------------
// APLICACIÓN DEL PATRÓN
// ----------------------------------------------------------------------------------

const gruposPreguntas = [grupo1, grupo2, grupo3, grupo4];
const preguntas = intercalarPreguntasPorPatron(gruposPreguntas); 
  
const etiquetas = ["NO", "no", "algo", "si", "SI"];
const valores = [-2, -1, 0, 1, 2];

const formulario = document.getElementById('miFormulario');
const preguntasDiv = document.getElementById('preguntas');
const resultadoDiv = document.getElementById('resultado');

preguntas.forEach((pregunta, index) => { // Ahora pregunta es un objeto
    const preguntaDiv = document.createElement('div');
    preguntaDiv.className = 'pregunta';

    const preguntaTitulo = document.createElement('h2');
    preguntaTitulo.textContent = ` ${index + 1}: ${pregunta.texto}`; // Accedemos a pregunta.texto
    preguntaDiv.appendChild(preguntaTitulo);

  for (let j = 0; j < 5; j++) {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `pregunta${index + 1}`;
        radio.value = valores[j];
        label.appendChild(radio);
        label.appendChild(document.createTextNode(etiquetas[j]));
        preguntaDiv.appendChild(label);
    }
	
	 preguntaDiv.style.background = generarGradienteAleatorio(); // Aplica el gradiente

    preguntasDiv.appendChild(preguntaDiv);
});


function generarGradienteAleatorioFuertes() {
    // Genera colores hexadecimales aleatorios
    const color1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function generarGradienteAleatorioPastel() {
    // Genera valores RGB en un rango que produce colores pastel (150-255)
    const r1 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255
    const g1 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255
    const b1 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255

    const r2 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255
    const g2 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255
    const b2 = Math.floor(Math.random() * 106) + 150; // Rango: 150-255

    // Convierte a hexadecimal y crea el gradiente
    const color1 = `#${r1.toString(16)}${g1.toString(16)}${b1.toString(16)}`;
    const color2 = `#${r2.toString(16)}${g2.toString(16)}${b2.toString(16)}`;
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function generarGradienteAleatorio() {
       let r, g, b;
    let baseColor;
    let intentos = 0; // Para evitar bucles infinitos en casos extremos

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        // Evitar grises (R, G y B similares)
        const diferenciaMaxima = 30; // Ajusta este valor para controlar cuan "gris" se considera un color
        if (Math.abs(r - g) < diferenciaMaxima && Math.abs(r - b) < diferenciaMaxima && Math.abs(g - b) < diferenciaMaxima) {
            continue; // Reintenta
        }

        // Evitar colores oscuros (ajustar umbrales según sea necesario)
        const luminosidadMinima = 100; // Ajusta este valor para controlar la luminosidad mínima
        if (r < luminosidadMinima || g < luminosidadMinima || b < luminosidadMinima) {
            continue; // Reintenta
        }

        // Evitar marrones (alto rojo, bajo verde y azul)
        if (r > 150 && g < 100 && b < 100) {
            continue; // Reintenta
        }

        // Evitar violetas oscuros y azules marinos
        if ((r < 100 && g < 100 && b > 50) || (r < 100 && g > 50 && b > 100) ) {
            continue;
        }

        baseColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        intentos++;
    } while (!baseColor && intentos < 100); // Reintenta hasta encontrar un color válido o hasta 100 intentos

    if (!baseColor) {
        // Si no se encuentra un color válido después de varios intentos, se usa un color por defecto
        baseColor = "#a0e8af"; // Un verde claro como valor por defecto
    }

    // Calcula una versión MÁS clara del color base (mismo código que antes)
    const factorClaridad = 0.5;

    const rClaro = Math.min(255, Math.floor(r + (255 - r) * factorClaridad));
    const gClaro = Math.min(255, Math.floor(g + (255 - g) * factorClaridad));
    const bClaro = Math.min(255, Math.floor(b + (255 - b) * factorClaridad));

    const colorClaro = `#${rClaro.toString(16).padStart(2, '0')}${gClaro.toString(16).padStart(2, '0')}${bClaro.toString(16).padStart(2, '0')}`;

    return `linear-gradient(to bottom, ${baseColor}, ${colorClaro})`;
}

// ----------------------------------------------------------------------------------
// FUNCIÓN ACTUALIZADA PARA CALCULAR Y MOSTRAR SOLO LA PUNTUACIÓN NETA (-32 a +32)
// ----------------------------------------------------------------------------------
function calcularResultado() {
    const resultadosPorGrupo = { 1: 0, 2: 0, 3: 0, 4: 0 }; // Objeto para almacenar la Puntuación Neta

    for (let i = 1; i <= preguntas.length; i++) {
        const radios = document.getElementsByName(`pregunta${i}`);
        let preguntaRespondida = false;
        let valorPregunta = 0
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                valorPregunta = parseInt(radios[j].value);
                preguntaRespondida = true;
                break;
            }
        }
        if (!preguntaRespondida) {
            alert("Por favor, responde todas las preguntas.");
            return;
        }

        const grupoPregunta = preguntas[i - 1].grupo;
        resultadosPorGrupo[grupoPregunta] += valorPregunta; // Sumamos la Puntuación Neta
    }

    // Definición de las dimensiones para determinar la letra final
    let tipoMBTI = "";
    const dimensiones = {
        1: { id: "E/I", positivo: "E (Extraversión)", negativo: "I (Introversión)", opuesta: "I" },
        2: { id: "S/N", positivo: "S (Sensación)", negativo: "N (Intuición)", opuesta: "N" },
        3: { id: "T/F", positivo: "T (Pensamiento)", negativo: "F (Sentimiento)", opuesta: "F" },
        4: { id: "J/P", positivo: "J (Juicio)", negativo: "P (Percepción)", opuesta: "P" }
    };

    // Mostrar resultados por grupo
    resultadoDiv.innerHTML = "<h2>Resultados por Dimensión (Puntuación Neta: -32 a +32)</h2>";
    
    for (const grupo in resultadosPorGrupo) {
        const score = resultadosPorGrupo[grupo];
        const dim = dimensiones[grupo];
        let letra = "";
        let interpretacion = "";

        if (score > 0) {
            letra = dim.positivo.charAt(0); // E, S, T, J
            interpretacion = `Preferencia por: ${dim.positivo}`;
        } else if (score < 0) {
            letra = dim.opuesta; // I, N, F, P
            interpretacion = `Preferencia por: ${dim.negativo}`;
        } else {
            letra = "X";
            interpretacion = `Sin preferencia clara.`;
        }

        tipoMBTI += letra;
        
        // Muestra la puntuación neta y la interpretación
        resultadoDiv.innerHTML += `<div style="margin-bottom: 10px;">
            <strong>${dim.id}: ${score} puntos.</strong> (${interpretacion})
        </div>`;
    }

    resultadoDiv.innerHTML += `<hr>
        <h3>Su Tipo de Personalidad MBTI Neto Sugerido es: 
            <span style="color:red; font-size: 1.5em;">${tipoMBTI}</span>
        </h3>`;
}

// Uso de `imprimirLo(divId)` proporcionado por `js/utils.js`.