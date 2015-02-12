Test para el cargo de Front-end en SocialH4ck.

Realizar un app a partir de la anterior data indicada en el archivo JSON, no modificar, solo leer desde ese endpoint:

	* Listar clientes activos y no activos.
	* Mostrar sus datos personales y extras que puedan tener.
	* Listar Amigos de los clientes.
	* Implementar Mapa con las coordenadas indicadas.

Proceso de trabajo:
	*Primero hice un inventario del contenido entregado (data.json) para saber qué datos iba a mostrar. 

	*Luego realice unos wireframe en papel de referencia para saber cómo iba a fluir el contenido, en qué orden de jerarquía se deben colocar los elementos. 

	*Luego realice una estructura del contenido para tener visibles los flujos de navegación. 

	*Seleccione el layout y guía de estilo, para esto utilice la librería Twitter Bootstrap (stylesheet / layout / responsive)

	*Fui agregando los componentes en el index.html, verificando y ajustando las fuentes y espacios en blancos, los colores en relación con la interacción, agregando las texturas como elementos decorativos o formas como los glyphicon.

	*Usando la técnica Mobile first, verifique y ajuste el posicionamiento de los elementos en el layout. Primero para que quedaran bien posicionados en vista Mobile y luego en varios Breakpoints de mayor tamaño.

	* Otras de las librerías utilizadas son: 
		* JQuery, para la manipulación del DOM
		* Underscore, manipulación de listas
		* Gmaps, implementación de Google Maps con las coordenadas indicadas
		* HandlebarsJS, Motor de Plantillas
		* Routie, Enrutamientos con Hash-URL
		* app.js, donde se genera los códigos para la conexión con la data y así mostrar las tareas requeridas para este test. 

	*Este Front fue probado en los navegadores:
		* Chrome (Desktop y Mobile)
		* Mozilla (Desktop y Mobile)
		* Internet Explorer (Desktop)
		* Safari en dispositivo móvil iPhone 5S