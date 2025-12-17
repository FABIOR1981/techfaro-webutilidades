// VALORES BRUTOS: 1, 2, 3, 4, 5 (Visibles en el HTML y la interfaz)
const RAW_SCORE_VALUES = [1, 2, 3, 4, 5];
// Mapeo interno: 1=-2, 2=-1, 3=0, 4=1, 5=2 (Se calcula como Raw Score - 3)

// Función auxiliar para obtener la característica
function getCaracteristica(grupo, netScore) {
    let letra = "";
    let nombre = "";

    switch (grupo) {
        case 1: // E/I (Positivo = E, Negativo = I)
            if (netScore > 0) { letra = 'E'; nombre = "Extroversión"; } 
            else if (netScore < 0) { letra = 'I'; nombre = "Introversión"; }
            else { letra = '-'; nombre = "Sin preferencia clara"; }
            return { letra: letra, nombre: nombre, id: "E/I" };

        case 2: // S/N (Positivo = S, Negativo = N)
            if (netScore > 0) { letra = 'S'; nombre = "Sensación"; } 
            else if (netScore < 0) { letra = 'N'; nombre = "Intuición"; }
            else { letra = '-'; nombre = "Sin preferencia clara"; }
            return { letra: letra, nombre: nombre, id: "S/N" };

        case 3: // T/F (Positivo = T, Negativo = F)
            if (netScore > 0) { letra = 'T'; nombre = "Pensamiento"; } 
            else if (netScore < 0) { letra = 'F'; nombre = "Sentimiento"; }
            else { letra = '-'; nombre = "Sin preferencia clara"; }
            return { letra: letra, nombre: nombre, id: "T/F" };

        case 4: // J/P (Positivo = J, Negativo = P)
            if (netScore > 0) { letra = 'J'; nombre = "Juicio"; } 
            else if (netScore < 0) { letra = 'P'; nombre = "Percepción"; }
            else { letra = '-'; nombre = "Sin preferencia clara"; }
            return { letra: letra, nombre: nombre, id: "J/P" };
        default:
            return { letra: 'X', nombre: 'Desconocido', id: 'X/X' };
    }
}
    
// =================================================================
// FUNCIÓN DE AUTO-COMPLETAR (PARA PRUEBAS)
// =================================================================
function autoCompletar() {
    const totalPreguntas = 100;
            
    for (let i = 1; i <= totalPreguntas; i++) {
        // Generar un índice aleatorio de 0 a 4
        const indiceAleatorio = Math.floor(Math.random() * 5); 
        // Usamos el índice para obtener el valor de RAW_SCORE_VALUES (1 a 5)
        const valorAleatorioRawScore = RAW_SCORE_VALUES[indiceAleatorio]; 
                
        const radios = document.getElementsByName(`pregunta${i}`);
                
        for (let j = 0; j < radios.length; j++) {
            // Comparamos el valor del input (1 a 5)
            if (parseInt(radios[j].value) === valorAleatorioRawScore) {
                radios[j].checked = true;
                        
                // Opcionalmente, quitar el resaltado de error si existe
                const preguntaDiv = radios[j].closest('.pregunta');
                if (preguntaDiv) {
                    preguntaDiv.style.border = '1px solid #C8E6C9';
                }
                        
                break; 
            }
        }
    }
            
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p style='color: green;'>✅ ¡Cuestionario **auto-completado** con respuestas aleatorias! Ahora puedes presionar 'Calcular Resultado'.</p>";
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// =================================================================
// DEFINICIÓN DEL ARRAY DE PREGUNTAS (100 PREGUNTAS: 25 por grupo)
// Los textos y grupos son idénticos a los de tu archivo original.
// =================================================================
const grupo1_EI = [
    { texto: "Me siento lleno de energía después de socializar.", grupo: 1 },
    { texto: "Prefiero participar activamente en conversaciones de grupo.", grupo: 1 },
    { texto: "Me resulta fácil iniciar una conversación con desconocidos.", grupo: 1 },
    { texto: "A menudo busco la compañía de otros.", grupo: 1 },
    { texto: "Me gustan los ambientes ruidosos y concurridos.", grupo: 1 },
    { texto: "Soy más propenso a hablar que a escuchar.", grupo: 1 },
    { texto: "Disfruto expresando mis ideas abiertamente en público.", grupo: 1 },
    { texto: "Me considero una persona sociable y animada.", grupo: 1 },
    { texto: "Necesito mucha interacción social para sentirme bien.", grupo: 1 },
    { texto: "El aislamiento social me cansa rápidamente.", grupo: 1 },
    { texto: "Me adapto fácilmente a nuevos grupos sociales.", grupo: 1 },
    { texto: "Mis amigos me consideran extrovertido.", grupo: 1 },
    { texto: "Tomo la iniciativa en actividades sociales.", grupo: 1 },
    { texto: "Prefiero hacer cosas con mucha gente.", grupo: 1 },
    { texto: "Me gusta ser el centro de atención.", grupo: 1 },
    { texto: "Soy muy accesible para la mayoría de la gente.", grupo: 1 },
    { texto: "Me gusta debatir temas complejos en voz alta.", grupo: 1 },
    { texto: "Las reuniones grandes me resultan energizantes.", grupo: 1 },
    { texto: "Me aburro si estoy solo por mucho tiempo.", grupo: 1 },
    { texto: "Me expreso con facilidad y entusiasmo.", grupo: 1 },
    { texto: "Suelo actuar antes de pensar demasiado.", grupo: 1 },
    { texto: "Soy impulsivo y me gusta la espontaneidad social.", grupo: 1 },
    { texto: "La rutina me agobia; prefiero la novedad y la acción.", grupo: 1 },
    { texto: "Tengo un círculo amplio de conocidos.", grupo: 1 },
    { texto: "Siempre tengo algo que decir.", grupo: 1 }
];

const grupo2_SN = [
    { texto: "Me concentro en los hechos y detalles tal como son.", grupo: 2 },
    { texto: "Confío en la experiencia y los datos verificables.", grupo: 2 },
    { texto: "Me preocupo más por el presente que por las posibilidades futuras.", grupo: 2 },
    { texto: "Soy práctico y me gusta lo concreto.", grupo: 2 },
    { texto: "Prefiero instrucciones claras y directas, paso a paso.", grupo: 2 },
    { texto: "Mi memoria para los detalles es excelente.", grupo: 2 },
    { texto: "Valoro el sentido común y la realidad inmediata.", grupo: 2 },
    { texto: "Busco soluciones que ya han sido probadas.", grupo: 2 },
    { texto: "Me gusta usar métodos y herramientas establecidos.", grupo: 2 },
    { texto: "Disfruto trabajando con datos tangibles.", grupo: 2 },
    { texto: "Encuentro que los temas abstractos son irrelevantes.", grupo: 2 },
    { texto: "Soy observador de lo que sucede a mi alrededor.", grupo: 2 },
    { texto: "Soy muy minucioso en mis tareas.", grupo: 2 },
    { texto: "Me baso en mis cinco sentidos para tomar decisiones.", grupo: 2 },
    { texto: "Prefiero mantener los pies en la tierra.", grupo: 2 },
    { texto: "Las metáforas y analogías me confunden.", grupo: 2 },
    { texto: "Me gusta ver el panorama completo antes de empezar.", grupo: 2 },
    { texto: "Soy bueno siguiendo un plan de trabajo detallado.", grupo: 2 },
    { texto: "Las teorías no me interesan mucho, a menos que sean aplicables.", grupo: 2 },
    { texto: "Tiendo a ser realista sobre mis expectativas.", grupo: 2 },
    { texto: "Recuerdo mejor los procedimientos que las ideas.", grupo: 2 },
    { texto: "Me molesta cuando la gente se va por las ramas.", grupo: 2 },
    { texto: "Tomo las cosas de forma literal.", grupo: 2 },
    { texto: "Busco la certeza en la información.", grupo: 2 },
    { texto: "Me enfoco en un problema a la vez, con atención.", grupo: 2 }
];

const grupo3_TF = [
    { texto: "La lógica y la razón siempre deben guiar mis decisiones.", grupo: 3 },
    { texto: "Me considero una persona objetiva y crítica.", grupo: 3 },
    { texto: "Busco la justicia y la equidad por encima de la armonía grupal.", grupo: 3 },
    { texto: "Prefiero ser honesto aunque hiera sentimientos.", grupo: 3 },
    { texto: "Mi fortaleza reside en el análisis imparcial de los problemas.", grupo: 3 },
    { texto: "Al decidir, me baso en principios y reglas.", grupo: 3 },
    { texto: "Me resulta fácil ver los errores o fallos en un argumento.", grupo: 3 },
    { texto: "Me concentro en la verdad, sin dejarme llevar por la compasión.", grupo: 3 },
    { texto: "Las críticas no suelen afectarme personalmente.", grupo: 3 },
    { texto: "Suelo ser más reservado con mis emociones.", grupo: 3 },
    { texto: "Busco soluciones que sean técnicamente sólidas y eficientes.", grupo: 3 },
    { texto: "Creo que el respeto se gana con competencia.", grupo: 3 },
    { texto: "La eficiencia es crucial en mi trabajo.", grupo: 3 },
    { texto: "Me siento más cómodo debatiendo que consolando.", grupo: 3 },
    { texto: "Pienso que los sentimientos entorpecen las decisiones.", grupo: 3 },
    { texto: "Mantengo la calma en situaciones de conflicto.", grupo: 3 },
    { texto: "Es más importante la verdad que la diplomacia.", grupo: 3 },
    { texto: "Soy capaz de ser duro si la situación lo requiere.", grupo: 3 },
    { texto: "Mis críticas son directas y al grano.", grupo: 3 },
    { texto: "Me enorgullece mi capacidad de razonamiento frío.", grupo: 3 },
    { texto: "Trato a todos de la misma manera, aplicando reglas.", grupo: 3 },
    { texto: "Me es difícil entender reacciones emocionales exageradas.", grupo: 3 },
    { texto: "Soy mejor para solucionar problemas que para mediar.", grupo: 3 },
    { texto: "Me mantengo distante de los conflictos personales.", grupo: 3 },
    { texto: "La lógica es la herramienta más valiosa.", grupo: 3 }
];

const grupo4_JP = [
    { texto: "Soy una persona organizada y planifico mi trabajo con antelación.", grupo: 4 },
    { texto: "Prefiero tener las cosas resueltas y cerradas cuanto antes.", grupo: 4 },
    { texto: "Me gusta seguir un horario y una lista de tareas.", grupo: 4 },
    { texto: "Trabajo mejor cuando tengo fechas límite claras.", grupo: 4 },
    { texto: "No me gusta dejar las decisiones para última hora.", grupo: 4 },
    { texto: "Disfruto terminando proyectos y pasando al siguiente.", grupo: 4 },
    { texto: "Me siento incómodo con los cambios de último momento.", grupo: 4 },
    { texto: "Tengo un plan para casi todo.", grupo: 4 },
    { texto: "Mis espacios de trabajo suelen estar ordenados y limpios.", grupo: 4 },
    { texto: "Busco la estructura, el orden y la previsibilidad.", grupo: 4 },
    { texto: "Creo en hacer el trabajo antes que el ocio (trabajo primero, juego después).", grupo: 4 },
    { texto: "Soy puntual y valoro la puntualidad de los demás.", grupo: 4 },
    { texto: "Cuando viajo, sigo un itinerario detallado.", grupo: 4 },
    { texto: "Me siento mejor una vez que he tomado una decisión final.", grupo: 4 },
    { texto: "Me gusta tener las cosas bajo control.", grupo: 4 },
    { texto: "La improvisación me estresa.", grupo: 4 },
    { texto: "Considero que la planificación es clave para el éxito.", grupo: 4 },
    { texto: "Soy muy responsable con mis compromisos.", grupo: 4 },
    { texto: "Me molesta la ineficiencia y la desorganización.", grupo: 4 },
    { texto: "Prefiero la anticipación a la sorpresa.", grupo: 4 },
    { texto: "Mis metas están definidas y son claras.", grupo: 4 },
    { texto: "Suelo empezar a trabajar mucho antes de la fecha límite.", grupo: 4 },
    { texto: "La ambigüedad me resulta frustrante.", grupo: 4 },
    { texto: "Me siento satisfecho cuando mi entorno está en orden.", grupo: 4 },
    { texto: "Tengo un sistema para organizar mis cosas.", grupo: 4 }
];


// Array principal combinando todos los grupos (100 preguntas)
const preguntas = [...grupo1_EI, ...grupo2_SN, ...grupo3_TF, ...grupo4_JP];


// =================================================================
// FUNCIÓN DE RENDERIZADO (MUESTRA LAS PREGUNTAS EN EL HTML)
// =================================================================

function renderizarPreguntas() {
    const contenedorPreguntas = document.getElementById('preguntas');
    contenedorPreguntas.innerHTML = ''; 

    // Etiquetas completas para las opciones de radio
    const labels = ["1", "2", "3", "4", "5"];

    preguntas.forEach((pregunta, index) => {
        const numeroPregunta = index + 1;
        const divPregunta = document.createElement('div');
        divPregunta.classList.add('pregunta');

        const titulo = document.createElement('h2');
        titulo.textContent = `${numeroPregunta}. ${pregunta.texto}`;
        divPregunta.appendChild(titulo);

        const divOpciones = document.createElement('div');
        divOpciones.classList.add('opciones-radio');

        for (let i = 0; i < 5; i++) { // Iteramos de 0 a 4
            const label = document.createElement('label');
            const valorRawScore = RAW_SCORE_VALUES[i]; // 1, 2, 3, 4, 5
            
            let textoSecundario = '';
            if (valorRawScore === 1) {
                textoSecundario = `<br><span style="font-weight: normal; font-size: 0.75em;">(Muy en desacuerdo)</span>`;
            } else if (valorRawScore === 3) {
                textoSecundario = `<br><span style="font-weight: normal; font-size: 0.75em;">(Neutro)</span>`;
            } else if (valorRawScore === 5) {
                textoSecundario = `<br><span style="font-weight: normal; font-size: 0.75em;">(Muy de acuerdo)</span>`;
            }
            
            label.innerHTML = `
                <input type="radio" name="pregunta${numeroPregunta}" value="${valorRawScore}" required>
                ${labels[i]}
                ${textoSecundario}
            `;
            divOpciones.appendChild(label);
        }
        
        divPregunta.appendChild(divOpciones);
        contenedorPreguntas.appendChild(divPregunta);
    });
}

// =================================================================
// LÓGICA DE CÁLCULO DE RESULTADOS (PUNTUACIÓN NETA: -50 a +50)
// Se aplica la traducción: Net Score = Raw Score - 3
// =================================================================

function calcularResultado() {
    const resultadoDiv = document.getElementById('resultado');
            
    // Máximo de puntuación neta: 25 preguntas * 2 puntos = 50
    let resultadosPorGrupoNet = { 1: 0, 2: 0, 3: 0, 4: 0 }; 
    let preguntaFaltante = -1;
    let tipoMBTI = "";
    const dimensionesTexto = ["Dimensión 1 (E/I)", "Dimensión 2 (S/N)", "Dimensión 3 (T/F)", "Dimensión 4 (J/P)"];
    let letrasFinales = [];


    // 1. Recorrer y validar respuestas y aplicar el Mapeo Interno
    for (let i = 1; i <= preguntas.length; i++) {
        const checkedRadio = document.querySelector(`input[name="pregunta${i}"]:checked`);
                
        // Limpiar estilo de error previo
        if (document.getElementsByName(`pregunta${i}`)[0]) {
            document.getElementsByName(`pregunta${i}`)[0].closest('.pregunta').style.border = '1px solid #C8E6C9';
        }

        if (!checkedRadio) {
            preguntaFaltante = i;
            break; 
        }

        // El valor del input es el RAW SCORE (1 a 5)
        const valorRawScore = parseInt(checkedRadio.value); 
                
        // *** APLICACIÓN DEL MAPEO INTERNO: Net Score = Raw Score - 3 ***
        const valorPreguntaNet = valorRawScore - 3; 
                
        const grupoPregunta = preguntas[i - 1].grupo; 
                
        // Sumamos la puntuación NETA
        resultadosPorGrupoNet[grupoPregunta] += valorPreguntaNet; 
    }

    // 2. Manejar error si falta alguna respuesta
    if (preguntaFaltante !== -1) {
        resultadoDiv.innerHTML = `<p style='color: red;'>❌ Por favor, responde la **pregunta ${preguntaFaltante}** antes de continuar.</p>`;
                
        // Resaltar la pregunta y hacer scroll
        const elementoFaltante = document.getElementsByName(`pregunta${preguntaFaltante}`)[0];
        if (elementoFaltante) {
            elementoFaltante.closest('.pregunta').style.border = '2px solid red';
            elementoFaltante.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // 3. Determinar el MBTI y generar el resumen estructurado
    let resumenResultados = `<h3>Resultados por Dimensión (Puntuación Neta: -50 a +50):</h3>`;
    let grupoContador = 0;

    for (const grupo in resultadosPorGrupoNet) {
        const netScore = resultadosPorGrupoNet[grupo];
        const dim = getCaracteristica(parseInt(grupo), netScore);
                
        // La letra final es la calculada (E, I, S, N, T, F, J, P) o el primer caracter del ID si es neutro.
        const letraFinal = dim.letra === '-' ? dim.id.charAt(0) : dim.letra;
        tipoMBTI += letraFinal;
        letrasFinales.push(dim.letra === '-' ? dim.id.charAt(0) : dim.letra);


        let interpretacion;
        if (netScore > 0) {
            interpretacion = `Preferencia por: **${dim.nombre}**`;
        } else if (netScore < 0) {
            // Cuando la puntuación neta es negativa, la preferencia es por la SEGUNDA letra del par.
            // Por ejemplo, en E/I, netScore < 0 indica I (Introversión).
            // La función getCaracteristica ya maneja esto.
            interpretacion = `Preferencia por: **${dim.nombre}**`;
        } else {
            interpretacion = `Sin preferencia clara.`;
        }

        // FORMATO: **Dimensión X (A/B):** [Net Score] puntos. (Preferencia por: ...)
        resumenResultados += `**${dimensionesTexto[grupoContador]}:** ${netScore} puntos. (${interpretacion})<br>`;
                
        grupoContador++;
    }
            
    // 4. Mostrar el resultado final
    resultadoDiv.innerHTML = `
        ${resumenResultados}
        <hr>
        <h2>🎉 Su Tipo de Personalidad MBTI Sugerido es: <span style="color: #FF0000; font-size: 1.6em;">${tipoMBTI}</span></h2>
        <p>(${letrasFinales.join(' - ')})</p>
    `;
            
    // Desplazar la vista al resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Se asegura que las preguntas se rendericen al cargar la página
document.addEventListener('DOMContentLoaded', renderizarPreguntas);