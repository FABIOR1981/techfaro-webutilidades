// mbti_core.js
// Módulo centralizado para lógica de MBTI: validación, cálculo y utilidades

// Constantes
const RAW_SCORE_VALUES = [1, 2, 3, 4, 5];
const TOTAL_PREGUNTAS_POR_GRUPO = 25;
const TOTAL_PREGUNTAS = 100;

// Obtener característica MBTI por grupo y netScore
export function getCaracteristica(grupo, netScore) {
    let letra = "";
    let nombre = "";
    switch (grupo) {
        case 1:
            if (netScore > 0) { letra = 'E'; nombre = "Extroversión"; }
            else if (netScore < 0) { letra = 'I'; nombre = "Introversión"; }
            else { letra = 'E/I'; nombre = "Sin preferencia clara"; }
            return { letra, nombre, id: "E/I" };
        case 2:
            if (netScore > 0) { letra = 'S'; nombre = "Sensación"; }
            else if (netScore < 0) { letra = 'N'; nombre = "Intuición"; }
            else { letra = 'S/N'; nombre = "Sin preferencia clara"; }
            return { letra, nombre, id: "S/N" };
        case 3:
            if (netScore > 0) { letra = 'T'; nombre = "Pensamiento"; }
            else if (netScore < 0) { letra = 'F'; nombre = "Sentimiento"; }
            else { letra = 'T/F'; nombre = "Sin preferencia clara"; }
            return { letra, nombre, id: "T/F" };
        case 4:
            if (netScore > 0) { letra = 'J'; nombre = "Juicio"; }
            else if (netScore < 0) { letra = 'P'; nombre = "Percepción"; }
            else { letra = 'J/P'; nombre = "Sin preferencia clara"; }
            return { letra, nombre, id: "J/P" };
        default:
            return { letra: 'X', nombre: 'Desconocido', id: 'X/X' };
    }
}

// Interpretación del netScore
export function generateInterpretation(netScore, dim) {
    if (dim.letra === '-') return "Sin preferencia clara";
    const absScore = Math.abs(netScore);
    if (absScore >= 20) return `Fuerte preferencia por **${dim.nombre}**`;
    if (absScore >= 10) return `Preferencia moderada por **${dim.nombre}**`;
    if (absScore > 0) return `Ligera preferencia por **${dim.nombre}**`;
    return "Sin preferencia clara";
}

// Validar respuestas (array de 100 valores)
export function validarRespuestas(respuestas) {
    if (!Array.isArray(respuestas) || respuestas.length !== TOTAL_PREGUNTAS) return false;
    return respuestas.every(v => RAW_SCORE_VALUES.includes(v));
}

// Calcular netScores por grupo
export function calcularNetScores(respuestas) {
    let resultados = { 1: 0, 2: 0, 3: 0, 4: 0 };
    for (let i = 0; i < TOTAL_PREGUNTAS; i++) {
        const grupo = Math.floor(i / TOTAL_PREGUNTAS_POR_GRUPO) + 1;
        resultados[grupo] += respuestas[i] - 3;
    }
    return resultados;
}

// Obtener tipo MBTI final
export function obtenerTipoMBTI(resultados) {
    let tipo = '';
    let buffer = '';
    for (let grupo = 1; grupo <= 4; grupo++) {
        const letra = getCaracteristica(grupo, resultados[grupo]).letra;
        if (letra.includes('/')) {
            if (buffer.length > 0) {
                tipo += buffer + '-';
                buffer = '';
            }
            tipo += letra;
        } else {
            buffer += letra;
        }
    }
    if (buffer.length > 0) tipo += buffer;
    return tipo;
}

// Exportar constantes si se requiere
export { RAW_SCORE_VALUES, TOTAL_PREGUNTAS_POR_GRUPO, TOTAL_PREGUNTAS };
