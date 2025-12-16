
if(sessionStorage.getItem("verificado")){

		 // Array de preguntas
				const preguntas = [
					{texto: "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.",grupo:"Area_IV"},
		{texto: "Criar, cuidar y tratar animales domésticos y de campo",grupo:"Area_V"},
		{texto: "Investigar sobre áreas verdes, medio ambiente y cambios climáticos",grupo:"Area_V"},
		{texto: "Ilustrar, dibujar y animar digitalmente.",grupo:"Area_I"},
		{texto: "Seleccionar, capacitar y motivar al personal de una organización/empresa",grupo:"Area_III"},
		{texto: "Realizar excavaciones para descubrir restos del pasado",grupo:"Area_II"},
		{texto: "Resolver problemas de cálculo para construir un puente.",grupo:"Area_IV"},
		{texto: "Diseñar cursos para enseñar a la gente sobre temas de salud e higiene",grupo:"Area_V"},
		{texto: "Tocar un instrumento y componer música",grupo:"Area_I"},
		{texto: "Planificar cuáles son las metas de una organización pública o privada a mediano y largo plazo.",grupo:"Area_III"},
		{texto: "Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.",grupo:"Area_IV"},
		{texto: "Diseñar logotipos y portadas de una revista",grupo:"Area_I"},
		{texto: "Organizar eventos y atender a sus asistentes.",grupo:"Area_II"},
		{texto: "Atender la salud de personas enfermas.",grupo:"Area_V"},
		{texto: "Controlar ingresos y egresos de fondos y presentar el balance final de una institución.",grupo:"Area_III"},
		{texto: "Hacer experimentos con plantas (frutas, árboles, flores)",grupo:"Area_V"},
		{texto: "Concebir planos para viviendas, edificios y ciudadelas.",grupo:"Area_IV"},
		{texto: "Investigar y probar nuevos productos farmacéuticos.",grupo:"Area_IV"},
		{texto: "Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países.",grupo:"Area_III"},
		{texto: "Pintar, hacer esculturas, ilustrar libros de arte, etcétera.",grupo:"Area_I"},
		{texto: "Elaborar campañas para introducir un nuevo producto al mercado.",grupo:"Area_III"},
		{texto: "Examinar y tratar los problemas visuales",grupo:"Area_V"},
		{texto: "Defender a clientes individuales o empresas en juicios de diferente naturaleza.",grupo:"Area_II"},
		{texto: "Diseñar máquinas que puedan simular actividades humanas.",grupo:"Area_IV"},
		{texto: "Investigar las causas y efectos de los trastornos emocionales",grupo:"Area_II"},
		{texto: "Supervisar las ventas de un centro comercial",grupo:"Area_III"},
		{texto: "Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etcétera.",grupo:"Area_V"},
		{texto: "Prepararse para ser modelo profesional.",grupo:"Area_I"},
		{texto: "Aconsejar a las personas sobre planes de ahorro e inversiones.",grupo:"Area_III"},
		{texto: "Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.",grupo:"Area_IV"},
		{texto: "Diseñar juegos interactivos electrónicos para computadora.",grupo:"Area_I"},
		{texto: "Realizar el control de calidad de los alimentos",grupo:"Area_V"},
		{texto: "Tener un negocio propio de tipo comercial.",grupo:"Area_III"},
		{texto: "Escribir artículos periodísticos, cuentos, novelas y otros.",grupo:"Area_II"},
		{texto: "Redactar guiones y libretos para un programa de televisión",grupo:"Area_I"},
		{texto: "Organizar un plan de distribución y venta de un gran almacén.",grupo:"Area_III"},
		{texto: "Estudiar la diversidad cultural en el ámbito rural y urbano",grupo:"Area_II"},
		{texto: "Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social.",grupo:"Area_II"},
		{texto: "Crear campañas publicitarias",grupo:"Area_I"},
		{texto: "Trabajar investigando la reproducción de peces, camarones y otros animales marinos.",grupo:"Area_V"},
		{texto: "Dedicarse a fabricar productos alimenticios de consumo masivo",grupo:"Area_IV"},
		{texto: "Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación.",grupo:"Area_II"},
		{texto: "Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.",grupo:"Area_I"},
		{texto: "Administrar una empresa de turismo y/o agencias de viaje.",grupo:"Area_III"},
		{texto: "Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diversa índole.",grupo:"Area_V"},
		{texto: "Diseñar ropa para niños, jóvenes y adultos.",grupo:"Area_I"},
		{texto: "Investigar organismos vivos para elaborar vacunas.",grupo:"Area_V"},
		{texto: "Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.",grupo:"Area_IV"},
		{texto: "Estudiar idiomas extranjeros –actuales y antiguos- para hacer traducción.",grupo:"Area_II"},
		{texto: "Restaurar piezas y obras de arte",grupo:"Area_I"},
		{texto: "Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.",grupo:"Area_IV"},
		{texto: "Enseñar a niños de 0 a 5 años",grupo:"Area_II"},
		{texto: "Investigar y/o sondear nuevos mercados.",grupo:"Area_III"},
		{texto: "Atender la salud dental de las personas",grupo:"Area_V"},
		{texto: "Tratar a niños, jóvenes y adultos con problemas psicológicos.",grupo:"Area_II"},
		{texto: "Crear estrategias de promoción y venta de nuevos productos ecuatorianos en el mercado internacional.",grupo:"Area_III"},
		{texto: "Planificar y recomendar dietas para personas diabéticas y/o con sobrepeso.",grupo:"Area_V"},
		{texto: "Trabajar en una empresa petrolera en un cargo técnico como control de la producción.",grupo:"Area_IV"},
		{texto: "Administrar una empresa (familiar, privada o pública)",grupo:"Area_III"},
		{texto: "Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.",grupo:"Area_IV"},
		{texto: "Ejecutar proyectos de extracción minera y metalúrgica.",grupo:"Area_IV"},
		{texto: "Asistir a directivos de multinacionales con manejo de varios idiomas.",grupo:"Area_III"},
		{texto: "Diseñar programas educativos para niños con discapacidad.",grupo:"Area_II"},
		{texto: "Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera.)",grupo:"Area_IV"},
		{texto: "Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social",grupo:"Area_I"},
		{texto: "Trabajar en museos y bibliotecas nacionales e internacionales.",grupo:"Area_II"},
		{texto: "Ser parte de un grupo de teatro.",grupo:"Area_I"},
		{texto: "Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etcétera.",grupo:"Area_I"},
		{texto: "Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.",grupo:"Area_V"},
		{texto: "Conocer las distintas religiones, su filosofía y transmitirlas a la comunidad en general",grupo:"Area_II"},
		{texto: "Asesorar a inversionistas en la compra de bienes/acciones en mercados nacionales e internacionales.",grupo:"Area_III"},
		{texto: "Estudiar grupos étnicos, sus costumbres , tradiciones, cultura y compartir sus vivencias.",grupo:"Area_II"},
		{texto: "Explorar el espacio sideral, los planetas , características y componentes.",grupo:"Area_IV"},
		{texto: "Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas.",grupo:"Area_V"},
		{texto: "Decorar jardines de casas y parques públicos.",grupo:"Area_I"},
		{texto: "Administrar y renovar menúes de comidas en un hotel o restaurante.",grupo:"Area_V"},
		{texto: "Trabajar como presentador de televisión, locutor de radio y televisión, animador de programas culturales y concursos.",grupo:"Area_I"},
		{texto: "Diseñar y ejecutar programas de turismo.",grupo:"Area_II"},
		{texto: "Administrar y ordenar (planificar) adecuadamente la ocupación del espacio físico de ciudades, países etc., utilizando imágenes de satélite, mapas.",grupo:"Area_IV"},
		{texto: "Organizar, planificar y administrar centros educativos",grupo:"Area_III"},

					// ... y así sucesivamente para todas las preguntas
				];

				function generarPreguntas(preguntas) {
					const listaPreguntas = document.getElementById('preguntas');
					listaPreguntas.innerHTML = '';
					preguntas.forEach((pregunta, index) => {
						const li = document.createElement('li');
						li.classList.add('pregunta');
						const input = document.createElement('input');
						input.type = 'checkbox';
						input.id = `pregunta${index+1}`;
						input.name = `pregunta${index+1}`;
						input.value = 'verdadero';
						input.dataset.grupo = pregunta.grupo;

						const label = document.createElement('label');
						label.htmlFor = `pregunta${index+1}`;
						label.textContent = `${index + 1}. ${pregunta.texto}`;

						li.appendChild(input);
						li.appendChild(label);
						listaPreguntas.appendChild(li);
					});
				}

				generarPreguntas(preguntas);

				function contarRespuestas() {
					const checkboxes = document.querySelectorAll('input[type="checkbox"]');
					const respuestas = {Area_I: 0, Area_II: 0, Area_III: 0, Area_IV: 0, Area_V: 0};
					checkboxes.forEach(checkbox => {
						const grupo = checkbox.dataset.grupo;
						if (checkbox.checked) respuestas[grupo]++;
					});

					const labels = Object.keys(respuestas);
					const data = Object.values(respuestas);

					const ctx = document.getElementById('myChart').getContext('2d');
					new Chart(ctx, {
						type: 'bar',
						data: {
							labels: labels,
							datasets: [{
								label: 'Número de respuestas por grupo',
								data: data,
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)'
								],
								borderWidth: 1
							}]
						},
						options: {
							scales: {y: {beginAtZero: true}},
							plugins: {
								title: {display: true, text: 'Resultados O.V.O.'}
							}
						}
					});
document.getElementById('resultados').style.display = 'block';
					mostrarResultadosTabla(respuestas);
					
					// Ocultar la tabla después de mostrar los resultados
		  document.getElementById('tablaResultados').style.display = 'none';
		  document.getElementById('btnContarRespuestas').style.display = 'none';
		  
				}

				function mostrarResultadosTabla(respuestas) {
					const tbody = document.getElementById('tbodyResultados');
					tbody.innerHTML = '';
					Object.keys(respuestas).forEach(grupo => {
						const row = tbody.insertRow();
						row.insertCell(0).textContent = grupo;
						row.insertCell(1).textContent = respuestas[grupo];
					});
				}

				// Uso de `imprimirLo(divId)` proporcionado por `js/utils.js`.
				






			
				
				
		
				
			function setearFechaIngreso() {
			const fechaIngreso = document.getElementById('fechaingreso');
			const hoy = new Date();
			const año = hoy.getFullYear();
			const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Meses van de 0 a 11
			const dia = hoy.getDate().toString().padStart(2, '0');
			fechaIngreso.value = `${año}-${mes}-${dia}`;
		}

		// Llamamos a la función al inicio para setear la fecha
		setearFechaIngreso();
}else{
		//window.location.href ='https://techfaro-webutilidades.netlify.app';
	//window.location.href ='E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades';
	window.location.href=darUrl('index.html');
}