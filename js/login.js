document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();


	let usuarios = [
		{ usuario: "RkFCSU9S", contrasenia: "MzAwNDE1UkZj",Persona:"Fabio" },
		{ usuario: "UklUQU0=", contrasenia: "Q2FuZGVsYXJpYTIwMTU=",Persona:"Rita" },
		{ usuario: "Q0FOREVMQVJJQVJN", contrasenia: "MjAxNUNhbmRl",Persona:"Candelaria" },
					
		// ... más usuarios
	];



    //const username = document.querySelector('#username').value;
	const username = document.getElementById('username').value;
    //const password = document.querySelector('#password').value;
	const password = document.getElementById('password').value;


		const resultadoValidacion = validarUsuario(username, password,usuarios);

		if (resultadoValidacion === true) {
			// Si la validación es correcta, puedes enviar el formulario al servidor o realizar otra acción
			//alert('Login exitoso!');
			sessionStorage.setItem('verificado', true);
			 //window.location.href ='https://techfaro-webutilidades.netlify.app';
			   //window.location.href ='E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades/html/menu.html';
			   window.location.href =darUrl('menu.html');
			 
			 
		} else {
			alert(resultadoValidacion); // Mostrar el mensaje de error específico
		}
	
});


function validarUsuario(usuario, contrasenia, listaUsuarios) {
    // Limpiar y normalizar
    let usuarioLimpio = limpiarTexto(usuario).toUpperCase();
    let contraseniaLimpia = limpiarTexto(contrasenia);

    // Validaciones básicas
    if (!usuarioLimpio || !contraseniaLimpia) {
        return "Por favor, ingresa tu usuario y contraseña.";
    }

    // Validaciones más específicas (ejemplo: longitud mínima)
    if (usuarioLimpio.length < 5) {
        return "El usuario debe tener al menos 5 caracteres.";
    }
    if (contraseniaLimpia.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    // Codificar para comparar
    let usuarioCodificado = codificar(usuarioLimpio);
    let contraseniaCodificada = codificar(contraseniaLimpia);

    for (const user of listaUsuarios) {
        if (usuarioCodificado === user.usuario && contraseniaCodificada === user.contrasenia) {
            return true;
        }
    }
    return "Usuario y/o contraseña incorrecto/s";
}

