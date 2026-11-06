// OVO corrector: carga rápida de las respuestas desde el cuestionario en papel.
// Usa las mismas preguntas y áreas que OVO (ovo_datos.js) y entrega las respuestas
// a ovo.html, que calcula el resultado igual que cuando se responde en pantalla.

if (!sessionStorage.getItem('verificado')) {
    window.location.href = darUrl('index.html');
} else {
    iniciarCorrector();
}

function iniciarCorrector() {
    const total = preguntas.length;
    const respuestas = new Array(total).fill(null);
    let activa = 0;

    const lista = document.getElementById('cLista');
    const progreso = document.getElementById('cProgreso');
    const porArea = document.getElementById('cPorArea');
    const inputIr = document.getElementById('cIr');
    const mensaje = document.getElementById('cMensaje');

    function mostrarMensaje(texto) {
        mensaje.textContent = texto;
    }

    // Filas creadas una sola vez; cada una guarda sus botones para actualizarlos
    const filas = preguntas.map((p, i) => {
        const fila = document.createElement('div');
        fila.className = 'corr-fila';

        const num = document.createElement('span');
        num.className = 'corr-num';
        num.textContent = (i + 1) + '.';

        const texto = document.createElement('div');
        texto.className = 'corr-texto';
        texto.textContent = p.t;
        const area = document.createElement('div');
        area.className = 'corr-area-tag';
        area.textContent = areaInfo[p.a].name + ' · ' + areaInfo[p.a].desc;
        texto.appendChild(area);

        const botones = document.createElement('div');
        botones.className = 'corr-botones';
        const bSi = crearBoton('SÍ', true);
        const bNo = crearBoton('NO', false);
        botones.append(bSi, bNo);

        function crearBoton(label, valor) {
            const b = document.createElement('button');
            b.type = 'button';
            b.textContent = label;
            b.setAttribute('aria-pressed', 'false');
            b.addEventListener('click', (e) => {
                e.stopPropagation();
                marcar(i, valor);
            });
            return b;
        }

        fila.append(num, texto, botones);
        fila.addEventListener('click', () => setActiva(i));
        fila._botones = { si: bSi, no: bNo };
        lista.appendChild(fila);
        return fila;
    });

    function actualizarFila(i) {
        const fila = filas[i];
        const r = respuestas[i];
        fila.classList.toggle('si', r === true);
        fila.classList.toggle('no', r === false);
        fila._botones.si.setAttribute('aria-pressed', String(r === true));
        fila._botones.no.setAttribute('aria-pressed', String(r === false));
    }

    function actualizarResumen() {
        const respondidas = respuestas.filter(r => r !== null).length;
        progreso.textContent = respondidas + ' de ' + total + ' respondidas';

        const conteo = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
        preguntas.forEach((p, i) => { if (respuestas[i] === true) conteo[p.a]++; });
        porArea.innerHTML = '';
        Object.keys(conteo).forEach(area => {
            const chip = document.createElement('span');
            chip.className = 'corr-area';
            chip.style.background = areaInfo[area].color;
            chip.textContent = areaInfo[area].desc + ': ' + conteo[area] + '/16';
            porArea.appendChild(chip);
        });
    }

    function marcar(i, valor) {
        respuestas[i] = valor;
        actualizarFila(i);
        actualizarResumen();
        mostrarMensaje('');
        setActiva(Math.min(i + 1, total - 1));
    }

    function setActiva(i) {
        if (i < 0 || i >= total) return;
        filas[activa].classList.remove('activa');
        activa = i;
        filas[activa].classList.add('activa');
        filas[activa].scrollIntoView({ block: 'nearest' });
    }

    // Atajos de teclado (no actúan mientras se escribe en un campo de texto)
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        const tecla = e.key.toLowerCase();
        if (tecla === 's') { e.preventDefault(); marcar(activa, true); }
        else if (tecla === 'n') { e.preventDefault(); marcar(activa, false); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); setActiva(activa + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActiva(activa - 1); }
    });

    inputIr.addEventListener('change', () => {
        const n = parseInt(inputIr.value, 10);
        if (n >= 1 && n <= total) setActiva(n - 1);
        inputIr.value = '';
    });

    document.getElementById('cAplicarCadena').addEventListener('click', () => {
        const limpio = document.getElementById('cCadena').value.toUpperCase().replace(/[\s,;.\-]/g, '');
        if (limpio.length !== total) {
            mostrarMensaje('La cadena tiene ' + limpio.length + ' letras; deben ser ' + total + '.');
            return;
        }
        if (/[^SN]/.test(limpio)) {
            mostrarMensaje('La cadena solo puede tener las letras S y N.');
            return;
        }
        for (let i = 0; i < total; i++) {
            respuestas[i] = limpio[i] === 'S';
            actualizarFila(i);
        }
        actualizarResumen();
        mostrarMensaje('Cadena aplicada. Revisá la lista antes de ver los resultados.');
        setActiva(0);
    });

    document.getElementById('cLimpiar').addEventListener('click', () => {
        if (!confirm('¿Borrar todas las respuestas cargadas?')) return;
        respuestas.fill(null);
        for (let i = 0; i < total; i++) actualizarFila(i);
        actualizarResumen();
        mostrarMensaje('');
        setActiva(0);
    });

    document.getElementById('cVer').addEventListener('click', () => {
        const faltan = respuestas.indexOf(null);
        if (faltan !== -1) {
            const cantidad = respuestas.filter(r => r === null).length;
            mostrarMensaje('Faltan ' + cantidad + ' preguntas por responder.');
            setActiva(faltan);
            return;
        }
        sessionStorage.setItem('ovoCorrectorResultados', JSON.stringify({
            respuestas,
            nombre: document.getElementById('cNombre').value.trim(),
            cedula: document.getElementById('cCedula').value.trim(),
            fecha: document.getElementById('cFecha').value.trim()
        }));
        window.location.href = darUrl('ovo.html');
    });

    // Estado inicial
    for (let i = 0; i < total; i++) actualizarFila(i);
    actualizarResumen();
    setActiva(0);
}
