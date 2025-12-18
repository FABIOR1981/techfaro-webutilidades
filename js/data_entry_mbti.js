// Importar funciones centrales desde mbti_core.js
import { RAW_SCORE_VALUES, TOTAL_PREGUNTAS, TOTAL_PREGUNTAS_POR_GRUPO, calcularNetScores, getCaracteristica, generateInterpretation, validarRespuestas, obtenerTipoMBTI } from './mbti_core.js';

if(sessionStorage.getItem("verificado")){
	// =================================================================
	// FUNCIÓN DE RENDERIZADO DE LOS CAMPOS DE ENTRADA MANUAL (MODO 2)
	// =================================================================
	function renderDataEntryInputs() {
		const contenedor = document.getElementById('dataInputs');
		contenedor.innerHTML = '';
		const dimensionNombres = ["E/I (Extroversión/Introversión)", "S/N (Sensación/Intuición)", "T/F (Pensamiento/Sentimiento)", "J/P (Juicio/Percepción)"];

		for (let g = 1; g <= 4; g++) { // Iterar sobre los 4 grupos
			const divGroup = document.createElement('div');
			divGroup.classList.add('data-group');
			divGroup.innerHTML = `<h3>Dimensión ${g}: ${dimensionNombres[g-1]} (Preguntas ${((g - 1) * TOTAL_PREGUNTAS_POR_GRUPO) + 1} - ${g * TOTAL_PREGUNTAS_POR_GRUPO})</h3>`;

			const divGrid = document.createElement('div');
			divGrid.classList.add('input-grid');

			const inicio = (g - 1) * TOTAL_PREGUNTAS_POR_GRUPO + 1;
			const fin = g * TOTAL_PREGUNTAS_POR_GRUPO;

			for (let i = inicio; i <= fin; i++) {
				const input = document.createElement('input');
				input.setAttribute('type', 'number');
				input.setAttribute('id', `q${i}`);
				input.setAttribute('min', '1');
				input.setAttribute('max', '5');
				input.setAttribute('placeholder', `P${i}`);
				input.setAttribute('required', 'true');
				input.setAttribute('data-grupo', g); // Asignar el grupo para el cálculo
				input.setAttribute('title', 'Ingrese un valor del 1 (Muy en desacuerdo) al 5 (Muy de acuerdo)');

				// Validación visual en tiempo real
				input.addEventListener('input', function() {
					if (this.value === '' || this.value < 1 || this.value > 5) {
						this.style.border = '2px solid #e74c3c';
						this.setCustomValidity('Debe ingresar un número entre 1 y 5');
					} else {
						this.style.border = '1px solid #2ecc40';
						this.setCustomValidity('');
					}
				});

				divGrid.appendChild(input);
			}

			divGroup.appendChild(divGrid);
			contenedor.appendChild(divGroup);
		}
	}


	// =================================================================
	// FUNCIÓN DE IMPRESIÓN DE RESULTADOS (UNIFICADA)
	// =================================================================
	function imprimirResultado() {
		const resultadoDiv = document.getElementById('resultado');
		const contenidoAImprimir = resultadoDiv.innerHTML;
		if (!contenidoAImprimir || !contenidoAImprimir.includes('Tipo de Personalidad Sugerido')) {
			alert("Primero, debe calcular un resultado (Modo 1 o Modo 2) para poder imprimirlo.");
			return;
		}
		// Usar la función global unificada
		imprimirElemento({ selector: '#resultado', modo: 'print', titulo: 'Resultado MBTI (Entrada Manual)' });
	}


	// =================================================================
	// LÓGICA DE CÁLCULO DE RESULTADOS PARA ENTRADA DIRECTA (MODO 1)
	// =================================================================
	function calcularResultadoDirecto() {
		const resultadoDiv = document.getElementById('resultado');
		
		// 0. Obtener datos de identificación de los campos GLOBALES
		const nombre = document.getElementById('nombreGlobal').value.trim();
		const cedula = document.getElementById('cedulaGlobal').value.trim();

		const dimensiones = ['netEI', 'netSN', 'netTF', 'netJP'];
		const dimensionesTexto = ["E/I (Extroversión/Introversión)", "S/N (Sensación/Intuición)", "T/F (Pensamiento/Sentimiento)", "J/P (Juicio/Percepción)"];
		let resultadosPorGrupoNet = {};
		let tipoMBTI = "";
		let tablaDimensionesHTML = '';

		// 1. Recorrer los 4 campos de entrada directa y calcular/validar
		for (let i = 0; i < dimensiones.length; i++) {
			const inputId = dimensiones[i];
			const input = document.getElementById(inputId);
			
			// Validación omitida por brevedad
			if (!input || input.value === "" || isNaN(parseInt(input.value)) || parseInt(input.value) < -50 || parseInt(input.value) > 50) {
				// Manejo de error
				resultadoDiv.innerHTML = `<p style='color: red;'>❌ Por favor, revise el valor de la dimensión ${dimensionesTexto[i]}. Debe ser un número entre -50 y +50.</p>`;
				if(input) { input.focus(); input.style.border = '2px solid red'; }
				return;
			}

			input.style.border = '1px solid #ccc'; // Limpiar error
			resultadosPorGrupoNet[i + 1] = parseInt(input.value); 
		}

		// 2. Generar la tabla de resultados y determinar el MBTI
		let grupoContador = 0;
		
		tablaDimensionesHTML += `<table style="width: 100%; border-collapse: collapse; margin-top: 5px; font-size: 0.9em;">
			<thead style="background-color: #e9e9e9;">
				<tr>
					<th style="padding: 5px; border: 1px solid #ddd;">Dimensión</th>
					<th style="padding: 5px; border: 1px solid #ddd; text-align: center;">Puntaje (±50)</th>
					<th style="padding: 5px; border: 1px solid #ddd; text-align: center;">Letra Resultante</th>
					<th style="padding: 5px; border: 1px solid #ddd;">Interpretación de Preferencia</th>
				</tr>
			</thead>
			<tbody>`;


		for (const grupo in resultadosPorGrupoNet) {
			const netScore = resultadosPorGrupoNet[grupo];
			const dim = getCaracteristica(parseInt(grupo), netScore);
			// *** AQUÍ USAMOS LA FUNCIÓN DE INTERPRETACIÓN DETALLADA ***
			const interpretacionCompleta = generateInterpretation(netScore, dim);
			const letraFinal = dim.letra === '-' ? dim.id.charAt(0) : dim.letra;
			tablaDimensionesHTML += `
				<tr>
					<td style="padding: 5px; border: 1px solid #ddd;">${dimensionesTexto[grupoContador]}</td>
					<td style="padding: 5px; border: 1px solid #ddd; text-align: center;">${netScore}</td>
					<td style="padding: 5px; border: 1px solid #ddd; font-weight: bold; color: #1c4e7f; text-align: center;">${letraFinal}</td>
					<td style="padding: 5px; border: 1px solid #ddd;">${interpretacionCompleta.replace('**', '<strong>').replace('**', '</strong>')}</td>
				</tr>
			`;
			grupoContador++;
		}
		// Usar la función obtenerTipoMBTI para el perfil final correctamente formateado
		tipoMBTI = obtenerTipoMBTI(resultadosPorGrupoNet);
		
		tablaDimensionesHTML += `</tbody></table>`;
				
		// 3. Mostrar el resultado final con formato de informe (Compacto)
		resultadoDiv.innerHTML = `
			<div class="informe-mbti-resultado" style="padding: 10px; border: 2px solid #1c4e7f; border-radius: 8px; background-color: #f0f8ff; font-family: Arial, sans-serif;">
				
				<h2 style="text-align: center; color: #1c4e7f; margin-top: 0; margin-bottom: 10px; font-size: 1.4em; border-bottom: 1px solid #1c4e7f; padding-bottom: 5px;">INFORME DE PERFIL DE PERSONALIDAD MBTI</h2>
				
				<section style="border: 1px solid #ccc; padding: 8px; margin-bottom: 10px; background-color: white; border-radius: 5px;">
					<h3 style="margin-top: 0; color: #333; border-bottom: 1px solid #eee; padding-bottom: 3px; font-size: 1em;">Datos del Candidato</h3>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Nombre Completo:</strong> ${nombre || 'N/A'}</p>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Cédula/DNI:</strong> ${cedula || 'N/A'}</p>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Documento generado el:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
				</section>

				<section style="margin-bottom: 15px;">
					<h3 style="color: #4CAF50; font-size: 1em;">Resultados por Dimensión (Puntuación Neta)</h3>
					${tablaDimensionesHTML}
				</section>

				<section style="text-align: center; padding: 10px; background-color: #d9edf7; border: 1px solid #bce8f1; border-radius: 5px;">
					<h3 style="color: #31708f; margin-top: 0; font-size: 1.1em;">Tipo de Personalidad Sugerido</h3>
					<p style="font-size: 0.9em; margin: 5px 0;">El perfil resultante es:</p>
					<h2><span style="color: #c0392b; font-size: 2.5em; font-weight: bold; letter-spacing: 4px;">${tipoMBTI}</span></h2>
				</section>
			</div>
		`;
				
		// Desplazar la vista al resultado
		resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}


	// =================================================================

	// LÓGICA DE CÁLCULO DE RESULTADOS PARA ENTRADA MANUAL (MODO 2)
	// =================================================================
	function calcularResultadoManual() {
		const resultadoDiv = document.getElementById('resultado');
		const respuestas = [];
		for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
			const input = document.getElementById(`q${i}`);
			if (!input.value || parseInt(input.value) < 1 || parseInt(input.value) > 5) {
				resultadoDiv.innerHTML = `<p style='color: red;'>❌ Por favor, revisa la **pregunta ${i}**. El valor debe ser entre 1 y 5.</p>`;
				input.focus();
				input.style.border = '2px solid red';
				return;
			}
			input.style.border = '1px solid #ccc';
			respuestas.push(parseInt(input.value));
		}
		if (!validarRespuestas(respuestas)) {
			resultadoDiv.innerHTML = `<p style='color: red;'>❌ Hay respuestas inválidas. Verifica los valores ingresados.</p>`;
			return;
		}
		const resultadosPorGrupoNet = calcularNetScores(respuestas);
		let tipoMBTI = obtenerTipoMBTI(resultadosPorGrupoNet);
		const dimensionesTexto = ["E/I (Extroversión/Introversión)", "S/N (Sensación/Intuición)", "T/F (Pensamiento/Sentimiento)", "J/P (Juicio/Percepción)"];
		let grupoContador = 0;
		let tablaDimensionesHTML = `<table style=\"width: 100%; border-collapse: collapse; margin-top: 5px; font-size: 0.9em;\"><thead style=\"background-color: #e9e9e9;\"><tr><th style=\"padding: 5px; border: 1px solid #ddd;\">Dimensión</th><th style=\"padding: 5px; border: 1px solid #ddd; text-align: center;\">Net Score (±50)</th><th style=\"padding: 5px; border: 1px solid #ddd; text-align: center;\">Letra Resultante</th><th style=\"padding: 5px; border: 1px solid #ddd;\">Interpretación de Preferencia</th></tr></thead><tbody>`;
		for (const grupo in resultadosPorGrupoNet) {
			const netScore = resultadosPorGrupoNet[grupo];
			const dim = getCaracteristica(parseInt(grupo), netScore);
			const interpretacionCompleta = generateInterpretation(netScore, dim);
			const letraFinal = dim.letra === '-' ? dim.id.charAt(0) : dim.letra;
			tablaDimensionesHTML += `<tr><td style=\"padding: 5px; border: 1px solid #ddd;\">${dimensionesTexto[grupoContador]}</td><td style=\"padding: 5px; border: 1px solid #ddd; text-align: center;\">${netScore}</td><td style=\"padding: 5px; border: 1px solid #ddd; font-weight: bold; color: #1c4e7f; text-align: center;\">${letraFinal}</td><td style=\"padding: 5px; border: 1px solid #ddd;\">${interpretacionCompleta.replace('**', '<strong>').replace('**', '</strong>')}</td></tr>`;
			grupoContador++;
		}
		tablaDimensionesHTML += `</tbody></table>`;
		const nombre = document.getElementById('nombreGlobal').value.trim();
		const cedula = document.getElementById('cedulaGlobal').value.trim();
		resultadoDiv.innerHTML = `
			<div class="informe-mbti-resultado" style="padding: 10px; border: 2px solid #1c4e7f; border-radius: 8px; background-color: #f0f8ff; font-family: Arial, sans-serif;">
				<h2 style="text-align: center; color: #1c4e7f; margin-top: 0; margin-bottom: 10px; font-size: 1.4em; border-bottom: 1px solid #1c4e7f; padding-bottom: 5px;">INFORME DE PERFIL DE PERSONALIDAD MBTI</h2>
				<section style="border: 1px solid #ccc; padding: 8px; margin-bottom: 10px; background-color: white; border-radius: 5px;">
					<h3 style="margin-top: 0; color: #333; border-bottom: 1px solid #eee; padding-bottom: 3px; font-size: 1em;">Datos del Candidato</h3>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Nombre Completo:</strong> ${nombre || 'N/A'}</p>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Cédula/DNI:</strong> ${cedula || 'N/A'}</p>
					<p style="margin: 3px 0; font-size: 0.85em;"><strong>Documento generado el:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
				</section>
				<section style="margin-bottom: 15px;">
					<h3 style="color: #4CAF50; font-size: 1em;">Resultados por Dimensión (Puntuación Neta)</h3>
					${tablaDimensionesHTML}
				</section>
				<section style="text-align: center; padding: 10px; background-color: #d9edf7; border: 1px solid #bce8f1; border-radius: 5px;">
					<h3 style="color: #31708f; margin-top: 0; font-size: 1.1em;">Tipo de Personalidad Sugerido</h3>
					<p style="font-size: 0.9em; margin: 5px 0;">El perfil resultante es:</p>
					<h2><span style="color: #c0392b; font-size: 2.5em; font-weight: bold; letter-spacing: 4px;">${tipoMBTI}</span></h2>
				</section>
			</div>
		`;
		resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	// Asegura que los campos de entrada se rendericen al cargar la página
	document.addEventListener('DOMContentLoaded', renderDataEntryInputs);
	// Exponer funciones al scope global para el HTML
	window.calcularResultadoDirecto = calcularResultadoDirecto;
	window.calcularResultadoManual = calcularResultadoManual;
}else{
		//window.location.href ='https://techfaro-webutilidades.netlify.app';
	//window.location.href ='E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades';
	window.location.href=darUrl('index.html');
}