/*
 * PLANTILLA DE JS PARA UNA HERRAMIENTA NUEVA
 * --------------------------------------------
 * Todo el código de tu herramienta va DENTRO del bloque if de acá abajo.
 * Eso es lo que hace que la página no se pueda usar sin haber iniciado
 * sesión: si alguien abre el archivo .html directo por URL sin loguearse,
 * el bloque "else" lo manda de vuelta al login.
 *
 * No hace falta tocar el chequeo en sí, solo escribir tu lógica adentro.
 */

if (sessionStorage.getItem("verificado")) {

    // ---------------------------------------------------------------
    // Escribí acá toda la lógica de tu herramienta.
    // ---------------------------------------------------------------



} else {
    // No hay sesión iniciada: volver al login
    window.location.href = darUrl('index.html');
}
