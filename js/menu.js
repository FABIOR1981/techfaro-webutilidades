const menuItems = document.querySelectorAll('.menu-item');



if(sessionStorage.getItem("verificado")){
	//sessionStorage.removeItem("verificado");
		menuItems.forEach(item => {
		  item.addEventListener('mouseenter', () => {
			item.querySelector('.submenu').style.display = 'block';
		  });

		  item.addEventListener('mouseleave', () => {
			const submenu = item.querySelector('.submenu');
			submenu.addEventListener('click', (event) => {
			  event.stopPropagation();
			});

			// Ocultar el submenú después de un retraso (opcional)
			setTimeout(() => {
			  submenu.style.display = 'none';
			}, 300);
		  });
		});
}else{
	
	
	//window.location.href ='https://techfaro-webutilidades.netlify.app';
	//window.location.href ='E:/Users/FABIOR/Desktop/pruebas/techfaro-webutilidades';
	window.location.href=darUrl('index.html');
}