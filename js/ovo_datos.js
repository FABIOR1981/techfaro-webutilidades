// Datos compartidos de O.V.O. (preguntas, áreas y umbral). Usado por ovo.html y ovo_corrector.html.

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
//
// El sistema detecta automáticamente 4 tipos de perfil:
//   1. DOMINANTE     : 1 área claramente por encima de las demás
//   2. MIXTO BINARIO : 2 áreas principales muy cercanas
//   3. MIXTO TRIPLE  : 3 áreas principales muy cercanas
//   4. MULTIPOTENCIAL: 4 o 5 áreas con puntuaciones similares (perfil equilibrado)
//
// Umbral de diferencia para considerar "cercanas": 2 puntos (configurable)
const UMBRAL_MIXTO = 2;
