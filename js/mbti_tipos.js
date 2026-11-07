// Tipos MBTI: apodo en español y descripción breve (orientativa, no diagnóstica).
// Los apodos varían según la fuente: revisar con el criterio profesional antes de usar.
const MBTI_TIPOS = {
    'ISTJ': { apodo: 'Logístico', descripcion: 'Responsable, metódico y realista. Valora el orden, las normas y el cumplimiento de los compromisos. Suele ser confiable y detallista, y prefiere basarse en hechos comprobados.' },
    'ISFJ': { apodo: 'Defensor', descripcion: 'Cálido, leal y atento a las necesidades de los demás. Cuida los detalles prácticos y tiende a mantener las tradiciones. Puede ser discreto y tener dificultades para expresar sus propias necesidades.' },
    'INFJ': { apodo: 'Abogado', descripcion: 'Idealista, perspicaz y comprometido con el bienestar de otros. Busca el sentido profundo de las cosas y actúa con convicción. Puede ser reservado y exigirse mucho a sí mismo.' },
    'INTJ': { apodo: 'Arquitecto', descripcion: 'Estratégico, independiente y orientado a objetivos a largo plazo. Analiza sistemas con lógica y confía en su propio criterio. Puede ser exigente y poco expresivo con sus emociones.' },
    'ISTP': { apodo: 'Virtuoso', descripcion: 'Práctico, observador y hábil con las manos o con las herramientas. Resuelve problemas en el momento y valora la libertad de acción. Puede ser reservado y poco dado a planificar en exceso.' },
    'ISFP': { apodo: 'Aventurero', descripcion: 'Sensible, flexible y artístico. Vive el presente, valora la armonía y expresa sus valores a través de sus actos. Puede evitar los conflictos y ser reacio a los compromisos rígidos.' },
    'INFP': { apodo: 'Mediador', descripcion: 'Idealista, creativo y guiado por sus valores personales. Busca autenticidad y significado en lo que hace. Puede ser muy autocrítico y tomar las críticas de forma personal.' },
    'INTP': { apodo: 'Lógico', descripcion: 'Analítico, curioso e independiente en su pensamiento. Disfruta comprender cómo funcionan las ideas y los sistemas. Puede ser distraído con los detalles prácticos o con las rutinas.' },
    'ESTP': { apodo: 'Emprendedor', descripcion: 'Enérgico, pragmático y orientado a la acción. Se adapta rápido a lo que ocurre y disfruta de los desafíos concretos. Puede priorizar lo inmediato y aburrirse con la teoría.' },
    'ESFP': { apodo: 'Animador', descripcion: 'Sociable, espontáneo y entusiasta. Disfruta de la compañía de otros y de experiencias vividas en el momento. Puede tener dificultades con la planificación a largo plazo y la rutina.' },
    'ENFP': { apodo: 'Activista', descripcion: 'Entusiasta, creativo y abierto a nuevas posibilidades. Conecta fácilmente con las personas y busca un sentido en lo que hace. Puede dispersarse con varios proyectos a la vez.' },
    'ENTP': { apodo: 'Debatidor', descripcion: 'Ingenioso, curioso y ágil para el debate. Disfruta explorar ideas nuevas y cuestionar lo establecido. Puede perder interés una vez resuelto el reto o ser provocador sin querer.' },
    'ESTJ': { apodo: 'Ejecutivo', descripcion: 'Organizado, directo y orientado a resultados. Valora la eficiencia, las normas claras y la responsabilidad. Puede ser demasiado rígido o impaciente con los métodos distintos a los suyos.' },
    'ESFJ': { apodo: 'Cónsul', descripcion: 'Sociable, solidario y atento a la armonía del grupo. Se preocupa por las necesidades de los demás y cumple con sus responsabilidades. Puede ser sensible a la desaprobación y priorizar demasiado la opinión ajena.' },
    'ENFJ': { apodo: 'Protagonista', descripcion: 'Carismático, empático e inspirador. Motiva a otros hacia metas comunes y busca el crecimiento de las personas. Puede asumir demasiadas responsabilidades ajenas y descuidarse a sí mismo.' },
    'ENTJ': { apodo: 'Comandante', descripcion: 'Decidido, estratégico y líder natural. Se enfoca en organizar recursos para alcanzar metas ambiciosas. Puede ser impaciente o dominante si no modera su ritmo y su forma de comunicar.' }
};

// Devuelve el bloque con la descripción del tipo (vacío si la casilla está desactivada).
// Se usa en el corrector (data_entry_mbti.html); el contenedor siempre existe para poder actualizarlo.
function renderDescripcionTipo(tipo) {
    const chk = document.getElementById('chkDescripcionTipo');
    const activa = chk && chk.checked;
    const info = MBTI_TIPOS[tipo];
    if (!activa || !info) return '<div id="descripcionTipo"></div>';
    return `<div id="descripcionTipo" class="descripcion-tipo" style="margin-top:10px; padding:8px 12px; border-left:4px solid #43a047; background:#f1f8f1; border-radius:6px; text-align:left;">
        <p style="margin:4px 0;"><strong>${tipo} es el tipo “${info.apodo}”.</strong></p>
        <p style="margin:4px 0; font-size:0.9em;">${info.descripcion}</p>
        <p style="margin:4px 0; font-size:0.75em; color:#555;"><em>Descripción orientativa; no sustituye una evaluación profesional.</em></p>
    </div>`;
}

// Al cambiar la casilla, actualiza solo el bloque de descripción (sin recalcular).
let ultimoTipoMBTI = null;
function actualizarDescripcionTipo() {
    const cont = document.getElementById('descripcionTipo');
    if (cont && ultimoTipoMBTI) cont.outerHTML = renderDescripcionTipo(ultimoTipoMBTI);
}
