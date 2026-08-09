// O.V.O. Mejorado - TechFaRo

const preguntas = [
    {n:1, t:"Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.", a:4},
    {n:2, t:"Criar, cuidar y tratar animales domésticos y de campo.", a:5},
    {n:3, t:"Investigar sobre áreas verdes, medio ambiente y cambios climáticos.", a:5},
    {n:4, t:"Ilustrar, dibujar y animar digitalmente.", a:1},
    {n:5, t:"Seleccionar, capacitar y motivar al personal de una organización/empresa.", a:3},
    {n:6, t:"Realizar excavaciones para descubrir restos del pasado.", a:2},
    {n:7, t:"Resolver problemas de cálculo para construir un puente.", a:4},
    {n:8, t:"Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.", a:5},
    {n:9, t:"Tocar un instrumento y componer música.", a:1},
    {n:10, t:"Planificar cuáles son las metas de una organización pública o privada a mediano y largo plazo.", a:3},
    {n:11, t:"Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.", a:4},
    {n:12, t:"Diseñar logotipos y portadas de una revista.", a:1},
    {n:13, t:"Organizar eventos y atender a sus asistentes.", a:2},
    {n:14, t:"Atender la salud de personas enfermas.", a:5},
    {n:15, t:"Controlar ingresos y egresos de fondos y presentar el balance final de una institución.", a:3},
    {n:16, t:"Hacer experimentos con plantas (frutas, árboles, flores).", a:5},
    {n:17, t:"Concebir planos para viviendas, edificios y ciudades.", a:4},
    {n:18, t:"Investigar y probar nuevos productos farmacéuticos.", a:4},
    {n:19, t:"Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países.", a:3},
    {n:20, t:"Pintar, hacer esculturas, ilustrar libros de arte, etcétera.", a:1},
    {n:21, t:"Elaborar campañas para introducir un nuevo producto al mercado.", a:3},
    {n:22, t:"Examinar y tratar los problemas visuales.", a:5},
    {n:23, t:"Defender a clientes individuales o empresas en juicios de diferente naturaleza.", a:2},
    {n:24, t:"Diseñar máquinas que puedan simular actividades humanas.", a:4},
    {n:25, t:"Investigar las causas y efectos de los trastornos emocionales.", a:2},
    {n:26, t:"Supervisar las ventas de un centro comercial.", a:3},
    {n:27, t:"Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etcétera.", a:5},
    {n:28, t:"Prepararse para ser modelo profesional.", a:1},
    {n:29, t:"Aconsejar a las personas sobre planes de ahorro e inversiones.", a:3},
    {n:30, t:"Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.", a:4},
    {n:31, t:"Diseñar juegos interactivos electrónicos para computadora.", a:1},
    {n:32, t:"Realizar el control de calidad de los alimentos.", a:5},
    {n:33, t:"Tener un negocio propio de tipo comercial.", a:3},
    {n:34, t:"Escribir artículos periodísticos, cuentos, novelas y otros.", a:2},
    {n:35, t:"Redactar guiones y libretos para un programa de televisión.", a:1},
    {n:36, t:"Organizar un plan de distribución y venta de un gran almacén.", a:3},
    {n:37, t:"Estudiar la diversidad cultural en el ámbito rural y urbano.", a:2},
    {n:38, t:"Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social.", a:2},
    {n:39, t:"Crear campañas publicitarias.", a:1},
    {n:40, t:"Trabajar investigando la reproducción de peces, camarones y otros animales marinos.", a:5},
    {n:41, t:"Dedicarse a fabricar productos alimenticios de consumo masivo.", a:4},
    {n:42, t:"Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación.", a:2},
    {n:43, t:"Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.", a:1},
    {n:44, t:"Administrar una empresa de turismo y/o agencias de viaje.", a:3},
    {n:45, t:"Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diverso índole.", a:5},
    {n:46, t:"Diseñar ropa para niños, jóvenes y adultos.", a:1},
    {n:47, t:"Investigar organismos vivos para elaborar vacunas.", a:5},
    {n:48, t:"Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.", a:4},
    {n:49, t:"Estudiar idiomas extranjeros –actuales y antiguos- para hacer traducción.", a:2},
    {n:50, t:"Restaurar piezas y obras de arte.", a:1},
    {n:51, t:"Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.", a:4},
    {n:52, t:"Enseñar a niños de 0 a 5 años.", a:2},
    {n:53, t:"Investigar y/o sondear nuevos mercados.", a:3},
    {n:54, t:"Atender la salud dental de las personas.", a:5},
    {n:55, t:"Tratar a niños, jóvenes y adultos con problemas psicológicos.", a:2},
    {n:56, t:"Crear estrategias de promoción y venta de nuevos productos ecuatorianos en el mercado internacional.", a:3},
    {n:57, t:"Planificar y recomendar dietas para personas diabéticas y/o con sobrepeso.", a:5},
    {n:58, t:"Trabajar en una empresa petrolera en un cargo técnico como control de la producción.", a:4},
    {n:59, t:"Administrar una empresa (familiar, privada o pública).", a:3},
    {n:60, t:"Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.", a:4},
    {n:61, t:"Ejecutar proyectos de extracción minera y metalúrgica.", a:4},
    {n:62, t:"Asistir a directivos de multinacionales con manejo de varios idiomas.", a:3},
    {n:63, t:"Diseñar programas educativos para niños con discapacidad.", a:2},
    {n:64, t:"Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera.)", a:4},
    {n:65, t:"Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social.", a:1},
    {n:66, t:"Trabajar en museos y bibliotecas nacionales e internacionales.", a:2},
    {n:67, t:"Ser parte de un grupo de teatro.", a:1},
    {n:68, t:"Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etcétera.", a:1},
    {n:69, t:"Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.", a:5},
    {n:70, t:"Conocer las distintas religiones, su filosofía y transmitirlas a la comunidad en general.", a:2},
    {n:71, t:"Asesorar a inversionistas en la compra de bienes/acciones en mercados nacionales e internacionales.", a:3},
    {n:72, t:"Estudiar grupos étnicos, sus costumbres, tradiciones, cultura y comparar sus vivencias.", a:2},
    {n:73, t:"Explorar el espacio sideral, los planetas, características y componentes.", a:4},
    {n:74, t:"Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas.", a:5},
    {n:75, t:"Decorar jardines de casas y parques públicos.", a:1},
    {n:76, t:"Administrar y renovar menús de comidas en un hotel o restaurante.", a:5},
    {n:77, t:"Trabajar como presentador de televisión, locutor de radio y televisión, animador de programas culturales y concursos.", a:1},
    {n:78, t:"Diseñar y ejecutar programas de turismo.", a:2},
    {n:79, t:"Administrar y ordenar (planificar) adecuadamente la ocupación del espacio físico de ciudades, países etc., utilizando imágenes de satélite, mapas.", a:4},
    {n:80, t:"Organizar, planificar y administrar centros educativos.", a:3}
];

const areaInfo = {
    1: { name: "Área I", desc: "Artística", color: "#e11d48" },
    2: { name: "Área II", desc: "Humanística", color: "#2563eb" },
    3: { name: "Área III", desc: "Administrativa", color: "#d97706" },
    4: { name: "Área IV", desc: "Científica-Técnica", color: "#059669" },
    5: { name: "Área V", desc: "Salud-Biológica", color: "#7c3aed" }
};

// ===== INTERPRETACIONES VOCACIONALES =====
// EDITABLE POR EL PROFESIONAL — Modificar los textos según criterio experto
const interpretacionesPerfil = {
    // Interpretación por área dominante (cuando hay un claro ganador)
    dominante: {
        1: {
            titulo: "Perfil Artístico",
            descripcion: "Tienes una marcada inclinación hacia actividades creativas y expresivas. Disfrutas del diseño, la música, las artes visuales y la comunicación audiovisual. Tu creatividad es tu principal fortaleza.",
            carreras: "Diseño gráfico, Bellas Artes, Música, Comunicación Audiovisual, Publicidad, Fotografía, Arquitectura de Interiores, Animación digital.",
            consejo: "Busca espacios donde puedas expresarte libremente. Tu talento artístico puede combinarse con herramientas tecnológicas para ampliar tus posibilidades profesionales."
        },
        2: {
            titulo: "Perfil Humanístico",
            descripcion: "Te motiva comprender al ser humano, sus culturas, lenguajes y comportamientos. Tienes habilidades para la comunicación, la enseñanza y el análisis social.",
            carreras: "Psicología, Derecho, Pedagogía, Sociología, Antropología, Filosofía, Periodismo, Trabajo Social, Traducción e Interpretación.",
            consejo: "Tu sensibilidad social y capacidad de escucha son valiosas. Considera orientaciones que te permitan impactar positivamente en comunidades e individuos."
        },
        3: {
            titulo: "Perfil Administrativo",
            descripcion: "Destacas en la planificación, organización y gestión de recursos. Tienes facilidad para los números, la toma de decisiones estratégicas y el liderazgo.",
            carreras: "Administración de Empresas, Contabilidad, Economía, Marketing, Recursos Humanos, Comercio Internacional, Turismo, Finanzas.",
            consejo: "Tu visión organizativa te permite liderar equipos y proyectos. Desarrolla habilidades blandas para complementar tu perfil técnico-administrativo."
        },
        4: {
            titulo: "Perfil Científico-Técnico",
            descripcion: "Te atrae la resolución de problemas lógicos, el diseño de sistemas y la investigación científica. Disfrutas entender cómo funcionan las cosas.",
            carreras: "Ingeniería (Civil, Sistemas, Mecánica, Electrónica), Arquitectura, Matemáticas, Física, Química, Estadística, Computación.",
            consejo: "Tu pensamiento analítico es una fortaleza clave. Mantente actualizado en tecnologías emergentes y busca proyectos que desafíen tu capacidad de innovación."
        },
        5: {
            titulo: "Perfil Salud-Biológica",
            descripcion: "Te interesa el cuidado de la vida, la salud humana, animal y el medio ambiente. Tienes vocación de servicio y curiosidad por los procesos biológicos.",
            carreras: "Medicina, Enfermería, Odontología, Nutrición, Veterinaria, Biología, Agronomía, Ecología, Farmacia, Fisioterapia.",
            consejo: "Tu vocación de ayuda es admirable. La constancia y la empatía serán fundamentales en tu desarrollo profesional en el área de la salud."
        }
    },
    // Interpretación cuando hay dos áreas empatadas o muy cercanas (perfil mixto)
    mixto: {
        "1-2": {
            titulo: "Perfil Artístico-Humanístico",
            descripcion: "Combinas creatividad con sensibilidad social. Eres capaz de expresar ideas complejas de forma accesible y emocional.",
            carreras: "Comunicación Social, Diseño Editorial, Arteterapia, Docencia en Artes, Producción Cultural, Periodismo especializado."
        },
        "1-3": {
            titulo: "Perfil Artístico-Administrativo",
            descripcion: "Tienes visión creativa y sentido comercial. Puedes transformar ideas artísticas en proyectos viables.",
            carreras: "Dirección de Arte, Branding, Gestión Cultural, Diseño de Producto, Marketing Creativo, Producción Audiovisual."
        },
        "1-4": {
            titulo: "Perfil Artístico-Técnico",
            descripcion: "Fusionas creatividad con precisión técnica. Eres ideal para proyectos que requieren innovación y rigor metodológico.",
            carreras: "Diseño Industrial, Arquitectura, Animación 3D, Desarrollo de Videojuegos, Ingeniería en Diseño, UX/UI."
        },
        "1-5": {
            titulo: "Perfil Artístico-Salud",
            descripcion: "Tu creatividad se orienta al bienestar y la sanación. Tienes una visión holística del cuidado humano.",
            carreras: "Musicoterapia, Arteterapia, Diseño de Espacios Terapéuticos, Estética, Decoración de Ambientes de Salud."
        },
        "2-3": {
            titulo: "Perfil Humanístico-Administrativo",
            descripcion: "Combinas comprensión humana con habilidades de gestión. Eres un puente entre personas y organizaciones.",
            carreras: "Gestión de Talento Humano, Coaching, Consultoría Organizacional, Relaciones Públicas, Dirección de Fundaciones."
        },
        "2-4": {
            titulo: "Perfil Humanístico-Técnico",
            descripcion: "Aplicas el conocimiento técnico con una mirada humanista. Buscas que la tecnología sirva a las personas.",
            carreras: "Ingeniería Social, Ergonomía, Accesibilidad Tecnológica, Docencia en Ciencias Técnicas, Divulgación Científica."
        },
        "2-5": {
            titulo: "Perfil Humanístico-Salud",
            descripcion: "Tu vocación de ayuda se complementa con una profunda comprensión del ser humano. Ideal para atención integral.",
            carreras: "Psicología Clínica, Terapia Ocupacional, Logopedia, Medicina Familiar, Trabajo Social en Salud, Psicopedagogía."
        },
        "3-4": {
            titulo: "Perfil Administrativo-Técnico",
            descripcion: "Eres capaz de gestionar proyectos tecnológicos y optimizar procesos con visión estratégica.",
            carreras: "Gestión de Proyectos TI, Ingeniería Industrial, Logística, Supply Chain, Análisis de Datos, Consultoría Tecnológica."
        },
        "3-5": {
            titulo: "Perfil Administrativo-Salud",
            descripcion: "Puedes gestionar instituciones de salud con eficiencia y sensibilidad hacia el bienestar de pacientes.",
            carreras: "Administración Hospitalaria, Gestión de Servicios de Salud, Salud Pública, Auditoría Médica, Gestión de Calidad en Salud."
        },
        "4-5": {
            titulo: "Perfil Técnico-Salud",
            descripcion: "Aplicas el rigor científico al cuidado de la salud. Eres ideal para la investigación biomédica y tecnología sanitaria.",
            carreras: "Ingeniería Biomédica, Bioinformática, Tecnología Médica, Farmacología, Biotecnología, Ingeniería de Alimentos."
        }
    }
};


const STEP_SIZE = 10;
const TOTAL_STEPS = Math.ceil(preguntas.length / STEP_SIZE);
let currentStep = 0;
let answers = new Array(preguntas.length).fill(null);
let chartInstance = null;

// Datos del evaluado (pueden quedar vacíos)
let evalNombre = '';
let evalCedula = '';
let evalFecha = '';

// ===== AUTH (usuarios exactos del login.js del repo) =====
const usuariosAuth = [
    { usuario: "RkFCSU9S", contrasenia: "MzAwNDE1UkZj", Persona: "Fabio" },
    { usuario: "UklUQU0=", contrasenia: "Q2FuZGVsYXJpYTIwMTU=", Persona: "Rita" },
    { usuario: "Q0FOREVMQVJJQVJN", contrasenia: "MjAxNUNhbmRl", Persona: "Candelaria" }
];

function limpiarTexto(texto) {
    return texto.replace(/[.,_/\\!?'"()[\]{}@#$%^&+*=~-]/g, '');
}

function codificar(param) {
    return btoa(param);
}

function validarUsuario(usuario, contrasenia, listaUsuarios) {
    let usuarioLimpio = limpiarTexto(usuario).toUpperCase();
    let contraseniaLimpia = limpiarTexto(contrasenia);

    if (!usuarioLimpio || !contraseniaLimpia) {
        return "Por favor, ingresa tu usuario y contraseña.";
    }
    if (usuarioLimpio.length < 5) {
        return "El usuario debe tener al menos 5 caracteres.";
    }
    if (contraseniaLimpia.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    let usuarioCodificado = codificar(usuarioLimpio);
    let contraseniaCodificada = codificar(contraseniaLimpia);

    for (const user of listaUsuarios) {
        if (usuarioCodificado === user.usuario && contraseniaCodificada === user.contrasenia) {
            return true;
        }
    }
    return "Usuario y/o contraseña incorrecto/s";
}

// ===== THEME =====
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    localStorage.setItem('ovo-theme', html.getAttribute('data-theme'));
}
(function initTheme() {
    const saved = localStorage.getItem('ovo-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
})();

// ===== DATOS MODAL (antes de empezar) =====
function openDatosModal() {
    document.getElementById('datosModal').classList.remove('hidden');
    document.getElementById('datosNombre').focus();
}

function closeDatosModal() {
    document.getElementById('datosModal').classList.add('hidden');
    document.getElementById('datosError').textContent = '';
}

function guardarDatosYOmitir() {
    evalNombre = document.getElementById('datosNombre').value.trim();
    evalCedula = document.getElementById('datosCedula').value.trim();
    evalFecha = document.getElementById('datosFecha').value.trim();
    closeDatosModal();
    iniciarQuiz();
}

function iniciarQuiz() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    renderDots();
    renderStep();
    updateProgress();
}

// ===== NAVIGATION =====
function startQuiz() {
    openDatosModal();
}

function renderDots() {
    const container = document.getElementById('stepsDots');
    container.innerHTML = '';
    for (let i = 0; i < TOTAL_STEPS; i++) {
        const dot = document.createElement('div');
        dot.className = 'step-dot';
        dot.onclick = () => { currentStep = i; renderStep(); updateProgress(); };
        container.appendChild(dot);
    }
}

function renderStep() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    const start = currentStep * STEP_SIZE;
    const end = Math.min(start + STEP_SIZE, preguntas.length);

    for (let i = start; i < end; i++) {
        const p = preguntas[i];
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.index = i;
        if (answers[i] === true) card.classList.add('answered-yes');
        if (answers[i] === false) card.classList.add('answered-no');
        card.style.animationDelay = ((i - start) * 0.05) + 's';

        card.innerHTML = `
            <span class="q-number">${p.n}</span>
            <span class="q-text">${p.t}</span>
            <div class="q-actions">
                <button class="btn-answer yes-btn ${answers[i] === true ? 'selected' : ''}" onclick="answer(${i}, true)">SI</button>
                <button class="btn-answer no-btn ${answers[i] === false ? 'selected' : ''}" onclick="answer(${i}, false)">NO</button>
            </div>
        `;
        container.appendChild(card);
    }

    document.querySelectorAll('.step-dot').forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i === currentStep) dot.classList.add('active');
        else if (i < currentStep) dot.classList.add('completed');
    });

    document.getElementById('btnPrev').disabled = currentStep === 0;
    const btnNext = document.getElementById('btnNext');
    if (currentStep === TOTAL_STEPS - 1) {
        btnNext.textContent = 'Ver resultados ✓';
    } else {
        btnNext.textContent = 'Siguiente →';
    }
}

function answer(index, value) {
    answers[index] = value;
    const card = document.querySelector(`.question-card[data-index="${index}"]`);
    card.classList.remove('answered-yes', 'answered-no');
    card.classList.add(value ? 'answered-yes' : 'answered-no');
    card.querySelector('.yes-btn').classList.toggle('selected', value === true);
    card.querySelector('.no-btn').classList.toggle('selected', value === false);
    updateProgress();

    const start = currentStep * STEP_SIZE;
    const end = Math.min(start + STEP_SIZE, preguntas.length);
    let allAnswered = true;
    for (let i = start; i < end; i++) {
        if (answers[i] === null) { allAnswered = false; break; }
    }
    if (allAnswered && currentStep < TOTAL_STEPS - 1) {
        setTimeout(() => { currentStep++; renderStep(); updateProgress(); }, 400);
    }
}

function updateProgress() {
    const answered = answers.filter(a => a !== null).length;
    const pct = Math.round((answered / preguntas.length) * 100);
    document.getElementById('progressText').textContent = `Pregunta ${Math.min(answered + 1, 80)} de 80`;
    document.getElementById('progressPercent').textContent = pct + '%';
    document.getElementById('progressFill').style.width = pct + '%';
}

function nextStep() {
    if (currentStep < TOTAL_STEPS - 1) {
        currentStep++;
        renderStep();
        updateProgress();
    } else {
        showLoginForResults();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
        updateProgress();
    }
}

// ===== KEYBOARD =====
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz').classList.contains('hidden')) return;
    const start = currentStep * STEP_SIZE;
    const end = Math.min(start + STEP_SIZE, preguntas.length);
    const firstUnanswered = answers.findIndex((a, i) => i >= start && i < end && a === null);
    const targetIndex = firstUnanswered !== -1 ? firstUnanswered : start;

    if (e.key === '1') answer(targetIndex, true);
    if (e.key === '2') answer(targetIndex, false);
    if (e.key === 'ArrowRight') nextStep();
    if (e.key === 'ArrowLeft') prevStep();
});

// ===== LOGIN MODAL (solo para ver resultados) =====
function showLoginForResults() {
    const unanswered = answers.filter(a => a === null).length;
    if (unanswered > 0) {
        alert(`Faltan ${unanswered} preguntas por responder. Completa el cuestionario antes de ver los resultados.`);
        return;
    }
    document.getElementById('loginModal').classList.remove('hidden');
    document.getElementById('modalUser').focus();
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('modalError').textContent = '';
    document.getElementById('modalUser').value = '';
    document.getElementById('modalPass').value = '';
}

function checkLoginAndShow() {
    const user = document.getElementById('modalUser').value;
    const pass = document.getElementById('modalPass').value;
    const errorDiv = document.getElementById('modalError');

    const resultado = validarUsuario(user, pass, usuariosAuth);

    if (resultado === true) {
        closeLoginModal();
        mostrarResultadosFinales();
    } else {
        errorDiv.textContent = resultado;
        document.getElementById('modalPass').value = '';
        document.getElementById('modalPass').focus();
    }
}

// ===== IMPRIMIR (sin login) =====
function imprimirCuestionario() {
    generarPDF(evalNombre, evalCedula, evalFecha);
}

function generarPDF(nombre, cedula, fecha) {
    const nombreDisplay = nombre || '';
    const cedulaDisplay = cedula || '';
    const fechaDisplay = fecha || '';

    let preguntasHTML = '';
    preguntas.forEach((p, i) => {
        const siMarcado = answers[i] === true ? '<span style="font-weight:700;font-size:10pt;">✕</span>' : '';
        const noMarcado = answers[i] === false ? '<span style="font-weight:700;font-size:10pt;">✕</span>' : '';
        preguntasHTML += `
        <div style="display:flex;align-items:flex-start;gap:8px;padding:5px 0;border-bottom:1px dotted #bbb;page-break-inside:avoid;">
            <span style="font-weight:700;font-size:10.5pt;min-width:22px;text-align:right;flex-shrink:0;">${p.n}.</span>
            <span style="flex:1;padding-top:1px;font-size:10.5pt;">${p.t}</span>
            <div style="display:flex;gap:10px;align-items:center;flex-shrink:0;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:1px;">
                    <span style="width:14px;height:14px;border:1.5px solid #000;border-radius:50%;display:flex;align-items:center;justify-content:center;">${siMarcado}</span>
                    <span style="font-size:7pt;font-weight:700;">SI</span>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:1px;">
                    <span style="width:14px;height:14px;border:1.5px solid #000;border-radius:50%;display:flex;align-items:center;justify-content:center;">${noMarcado}</span>
                    <span style="font-size:7pt;font-weight:700;">NO</span>
                </div>
            </div>
        </div>`;
    });

    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>O.V.O. - ${nombreDisplay || 'Cuestionario'}</title>
<style>
@page { size: A4; margin: 14mm 16mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 10.5pt;
    line-height: 1.3;
    color: #000;
    background: #fff;
    padding: 10mm;
}
.header {
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    margin-bottom: 10px;
}
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
}
.header-top h1 {
    font-size: 20pt;
    letter-spacing: 3px;
    margin: 0;
}
.header-top .version {
    font-size: 8pt;
    color: #444;
    text-align: right;
}
.header-sub {
    font-size: 9pt;
    color: #333;
    margin-bottom: 8px;
}
.datos {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 8px;
}
.campo {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: baseline;
    gap: 4px;
}
.campo label {
    font-size: 7.5pt;
    text-transform: uppercase;
    font-weight: 700;
    white-space: nowrap;
}
.campo .line {
    flex: 1;
    border-bottom: 1px solid #000;
    min-width: 60px;
    height: 16px;
    padding-left: 4px;
    font-size: 10pt;
}
.instrucciones {
    background: #f5f5f5;
    border-left: 3px solid #000;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: 9pt;
}
.footer {
    margin-top: 10px;
    text-align: center;
    font-size: 7.5pt;
    color: #555;
    border-top: 1px solid #ccc;
    padding-top: 5px;
}
</style>
</head>
<body>
    <div class="header">
        <div class="header-top">
            <h1>O.V.O.</h1>
            <div class="version">Versión Imprimible<br>TechFaRo © 2024</div>
        </div>
        <div class="header-sub">Orientación Vocacional y Ocupacional — Cuestionario de Intereses</div>
        <div class="datos">
            <div class="campo"><label>Nombre completo</label><div class="line">${nombreDisplay}</div></div>
            <div class="campo"><label>Cédula de identidad</label><div class="line">${cedulaDisplay}</div></div>
            <div class="campo"><label>Fecha</label><div class="line">${fechaDisplay}</div></div>
        </div>
    </div>
    <div class="instrucciones">
        <strong>Instrucciones:</strong> Lee cada actividad y marca con una <strong>X</strong> dentro del círculo si te <strong>gustaría</strong> realizarla (SI), o déjalo en blanco si <strong>no te interesa</strong> (NO). No hay respuestas correctas ni incorrectas. Sé honesto/a contigo mismo/a.
    </div>
    ${preguntasHTML}
    <div class="footer">
        O.V.O. — Orientación Vocacional y Ocupacional | TechFaRo © 2024
    </div>
    <script>window.onload = function() { setTimeout(function() { window.print(); }, 500); };</script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const w = window.open(url, '_blank');
    if (!w) {
        const a = document.createElement('a');
        a.href = url;
        a.download = `OVO_${(nombreDisplay || 'cuestionario').replace(/\s+/g, '_')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// ===== RESULTS =====
function mostrarResultadosFinales() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    const counts = {1:0, 2:0, 3:0, 4:0, 5:0};
    preguntas.forEach((p, i) => {
        if (answers[i] === true) counts[p.a]++;
    });

    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = '';
    const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
    sorted.forEach(([area, count]) => {
        const info = areaInfo[area];
        const pct = Math.round((count / 16) * 100);
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div class="area-name" style="color:${info.color}">${info.name} — ${info.desc}</div>
            <div class="area-desc">${count} de 16 respuestas positivas</div>
            <div class="result-bar-bg">
                <div class="result-bar-fill" style="background:${info.color};width:0%"></div>
            </div>
            <div class="result-stats">
                <span style="color:${info.color}">${count}/16</span>
                <span style="color:${info.color}">${pct}%</span>
            </div>
        `;
        grid.appendChild(card);
        setTimeout(() => {
            card.querySelector('.result-bar-fill').style.width = pct + '%';
        }, 200);
    });

    const ctx = document.getElementById('resultsChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Área I\nArtística', 'Área II\nHumanística', 'Área III\nAdministrativa', 'Área IV\nCientífica-Téc.', 'Área V\nSalud-Biológica'],
            datasets: [{
                label: 'Respuestas SI',
                data: [counts[1], counts[2], counts[3], counts[4], counts[5]],
                backgroundColor: ['#e11d48', '#2563eb', '#d97706', '#059669', '#7c3aed'],
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1200, easing: 'easeOutQuart' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.raw} de 16 (${Math.round(ctx.raw/16*100)}%)`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 16,
                    ticks: { stepSize: 2, color: getComputedStyle(document.body).getPropertyValue('--text-light') },
                    grid: { color: getComputedStyle(document.body).getPropertyValue('--border') }
                },
                x: {
                    ticks: { color: getComputedStyle(document.body).getPropertyValue('--text') },
                    grid: { display: false }
                }
            }
        }
    });
}


// ===== NUEVAS FUNCIONES: Volver, Imprimir cuestionario, Imprimir completo =====

function volverAlCuestionario() {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    renderStep();
    updateProgress();
}

function imprimirCuestionarioDesdeResultados() {
    imprimirCuestionario();
}

function imprimirCompleto() {
    const nombreDisplay = evalNombre || '';
    const cedulaDisplay = evalCedula || '';
    const fechaDisplay = evalFecha || '';

    // ===== CALCULAR RESULTADOS =====
    const counts = {1:0, 2:0, 3:0, 4:0, 5:0};
    preguntas.forEach((p, i) => {
        if (answers[i] === true) counts[p.a]++;
    });
    const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
    const [area1, count1] = sorted[0];
    const [area2, count2] = sorted[1];
    const diff = count1 - count2;

    // ===== DETERMINAR PERFIL =====
    let perfilInterpretado = null;
    let tipoPerfil = '';

    // Si hay un claro dominante (diferencia >= 3 puntos)
    if (diff >= 3) {
        tipoPerfil = 'dominante';
        perfilInterpretado = interpretacionesPerfil.dominante[area1];
    } else {
        // Perfil mixto — ordenar las dos áreas para la clave
        const key = [area1, area2].sort().join('-');
        tipoPerfil = 'mixto';
        perfilInterpretado = interpretacionesPerfil.mixto[key] || interpretacionesPerfil.dominante[area1];
    }

    // ===== HTML DEL CUESTIONARIO =====
    let preguntasHTML = '';
    preguntas.forEach((p, i) => {
        const siMarcado = answers[i] === true ? '<span style="font-weight:700;font-size:10pt;">✕</span>' : '';
        const noMarcado = answers[i] === false ? '<span style="font-weight:700;font-size:10pt;">✕</span>' : '';
        preguntasHTML += `
        <div style="display:flex;align-items:flex-start;gap:8px;padding:5px 0;border-bottom:1px dotted #bbb;page-break-inside:avoid;">
            <span style="font-weight:700;font-size:10.5pt;min-width:22px;text-align:right;flex-shrink:0;">${p.n}.</span>
            <span style="flex:1;padding-top:1px;font-size:10.5pt;">${p.t}</span>
            <div style="display:flex;gap:10px;align-items:center;flex-shrink:0;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:1px;">
                    <span style="width:14px;height:14px;border:1.5px solid #000;border-radius:50%;display:flex;align-items:center;justify-content:center;">${siMarcado}</span>
                    <span style="font-size:7pt;font-weight:700;">SI</span>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:1px;">
                    <span style="width:14px;height:14px;border:1.5px solid #000;border-radius:50%;display:flex;align-items:center;justify-content:center;">${noMarcado}</span>
                    <span style="font-size:7pt;font-weight:700;">NO</span>
                </div>
            </div>
        </div>`;
    });

    // ===== HTML DE RESULTADOS (barras) =====
    let resultadosHTML = '';
    sorted.forEach(([area, count]) => {
        const info = areaInfo[area];
        const pct = Math.round((count / 16) * 100);
        resultadosHTML += `
        <div style="margin-bottom:12px;page-break-inside:avoid;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-weight:700;font-size:11pt;color:${info.color}">${info.name} — ${info.desc}</span>
                <span style="font-weight:700;font-size:11pt;">${count}/16 (${pct}%)</span>
            </div>
            <div style="width:100%;height:18px;background:#e5e7eb;border-radius:99px;overflow:hidden;">
                <div style="width:${pct}%;height:100%;background:${info.color};border-radius:99px;"></div>
            </div>
        </div>`;
    });

    // ===== HTML DE INTERPRETACIÓN =====
    const infoDominante = areaInfo[area1];
    const infoSecundaria = areaInfo[area2];
    const pctDominante = Math.round((count1 / 16) * 100);
    const pctSecundaria = Math.round((count2 / 16) * 100);

    const interpretacionHTML = `
    <div class="interpretacion-box">
        <div class="interp-header">
            <div class="interp-badge" style="background:${infoDominante.color}20;color:${infoDominante.color};border:2px solid ${infoDominante.color};">
                ${tipoPerfil === 'dominante' ? 'Perfil Dominante' : 'Perfil Mixto'}
            </div>
            <h2 style="font-size:18pt;margin:10px 0 4px 0;color:${infoDominante.color};">${perfilInterpretado.titulo}</h2>
            <p style="font-size:9pt;color:#666;margin:0;">
                ${tipoPerfil === 'dominante'
                    ? `Área dominante: <strong>${infoDominante.name} — ${infoDominante.desc}</strong> (${count1}/16 — ${pctDominante}%)`
                    : `Áreas combinadas: <strong>${infoDominante.name}</strong> (${count1}/16) + <strong>${infoSecundaria.name}</strong> (${count2}/16)`
                }
            </p>
        </div>

        <div class="interp-section">
            <h3>📝 Descripción del Perfil</h3>
            <p>${perfilInterpretado.descripcion}</p>
        </div>

        <div class="interp-section">
            <h3>🎓 Orientaciones Profesionales Sugeridas</h3>
            <p>${perfilInterpretado.carreras}</p>
        </div>

        <div class="interp-section consejo">
            <h3>💡 Recomendación</h3>
            <p>${perfilInterpretado.consejo}</p>
        </div>

        <div class="interp-nota">
            <strong>Nota del profesional:</strong> Esta interpretación es una guía orientativa basada en los resultados del test.
            Se recomienda una entrevista personalizada para una orientación vocacional más precisa.
        </div>
    </div>`;

    // ===== HTML COMPLETO =====
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>O.V.O. Completo — ${nombreDisplay || 'Resultados'}</title>
<style>
@page { size: A4; margin: 14mm 16mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 10.5pt;
    line-height: 1.4;
    color: #000;
    background: #fff;
    padding: 10mm;
}
.header {
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    margin-bottom: 10px;
}
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
}
.header-top h1 {
    font-size: 20pt;
    letter-spacing: 3px;
    margin: 0;
}
.header-top .version {
    font-size: 8pt;
    color: #444;
    text-align: right;
}
.header-sub {
    font-size: 9pt;
    color: #333;
    margin-bottom: 8px;
}
.datos {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 8px;
}
.campo {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: baseline;
    gap: 4px;
}
.campo label {
    font-size: 7.5pt;
    text-transform: uppercase;
    font-weight: 700;
    white-space: nowrap;
}
.campo .line {
    flex: 1;
    border-bottom: 1px solid #000;
    min-width: 60px;
    height: 16px;
    padding-left: 4px;
    font-size: 10pt;
}
.section-title {
    font-size: 14pt;
    font-weight: 700;
    margin: 20px 0 10px 0;
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
}
.results-section {
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
}
.interpretacion-box {
    background: #fff;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    page-break-inside: avoid;
}
.interp-header {
    text-align: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #ddd;
}
.interp-badge {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 99px;
    font-size: 9pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.interp-section {
    margin-bottom: 14px;
}
.interp-section h3 {
    font-size: 11pt;
    font-weight: 700;
    margin-bottom: 6px;
    color: #1a1a2e;
}
.interp-section p {
    font-size: 10pt;
    color: #333;
    text-align: justify;
}
.interp-section.consejo {
    background: #f0f9ff;
    border-left: 4px solid #0ea5e9;
    padding: 10px 14px;
    border-radius: 0 8px 8px 0;
}
.interp-nota {
    font-size: 8.5pt;
    color: #666;
    font-style: italic;
    text-align: center;
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid #eee;
}
.instrucciones {
    background: #f5f5f5;
    border-left: 3px solid #000;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: 9pt;
}
.footer {
    margin-top: 10px;
    text-align: center;
    font-size: 7.5pt;
    color: #555;
    border-top: 1px solid #ccc;
    padding-top: 5px;
}
.page-break {
    page-break-before: always;
}
</style>
</head>
<body>
    <!-- PORTADA / DATOS -->
    <div class="header">
        <div class="header-top">
            <h1>O.V.O.</h1>
            <div class="version">Informe Completo<br>TechFaRo © 2024</div>
        </div>
        <div class="header-sub">Orientación Vocacional y Ocupacional — Cuestionario de Intereses</div>
        <div class="datos">
            <div class="campo"><label>Nombre completo</label><div class="line">${nombreDisplay}</div></div>
            <div class="campo"><label>Cédula de identidad</label><div class="line">${cedulaDisplay}</div></div>
            <div class="campo"><label>Fecha</label><div class="line">${fechaDisplay}</div></div>
        </div>
    </div>

    <!-- RESULTADOS GRÁFICOS -->
    <div class="section-title">📊 Resultados por Área</div>
    <div class="results-section">
        ${resultadosHTML}
    </div>

    <!-- INTERPRETACIÓN PROFESIONAL -->
    <div class="section-title">🎯 Interpretación del Perfil</div>
    ${interpretacionHTML}

    <!-- CUESTIONARIO -->
    <div class="page-break"></div>
    <div class="section-title">📋 Cuestionario de Intereses</div>
    <div class="instrucciones">
        <strong>Instrucciones:</strong> Lee cada actividad y marca con una <strong>X</strong> dentro del círculo si te <strong>gustaría</strong> realizarla (SI), o déjalo en blanco si <strong>no te interesa</strong> (NO). No hay respuestas correctas ni incorrectas.
    </div>
    ${preguntasHTML}

    <div class="footer">
        O.V.O. — Orientación Vocacional y Ocupacional | TechFaRo © 2024
    </div>
    <script>window.onload = function() { setTimeout(function() { window.print(); }, 500); };</script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const w = window.open(url, '_blank');
    if (!w) {
        const a = document.createElement('a');
        a.href = url;
        a.download = `OVO_Completo_${(nombreDisplay || 'resultados').replace(/\s+/g, '_')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
