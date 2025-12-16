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


function validarUsuario(usuario, contrasenia,listaUsuarios) {
	
	usuario=limpiarTexto(usuario).toUpperCase();
	
	
	//usuario=usuario.toUpperCase();
	
	
	
    // Validaciones básicas
    if (!usuario || !contrasenia) {
        return "Por favor, ingresa tu usuario y contraseña.";
    }

    // Validaciones más específicas (ejemplo: longitud mínima)
    if (usuario.length < 5) {
        return "El usuario debe tener al menos 5 caracteres.";
    }
    if (contrasenia.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }
	
	usuario=codificar(usuario)
	contrasenia=codificar(contrasenia);
	
	
	
		for (const user of listaUsuarios) {
			if (usuario === user.usuario && contrasenia === user.contrasenia) {
			return true;
			}
		
		}
		return "Usaurio y/o contraseña incorrecto/s";
    
}

