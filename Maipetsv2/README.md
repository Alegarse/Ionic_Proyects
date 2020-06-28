# Maipetsv2
Aplicación de gestión de mascotas con conexion a Firebase y uso de camara.

## Version 2.0
Implementado el uso multiusuario,con registro a través de email en Firebase.<br/>
La version actual consiste en un muestrario de las mascotas y sus datos más significativos a través de cards,en las que cada mascota puede tener su propia imagen, o en caso deno existir ninguna, se mostrará una imagen predeterminada.<br/>
Incorpora un menú de la aplicación desde el cual se accede al perfil de usuario, a la página de información acerca de la app, y por último, a la posibilidad de hacer logout y salir del perfil de usuario.<br/>
Para cada mascota, mostrada en un card independiente, se puede acceder a las opciones de borrado a través de una ventana modal de confirmación.<br/>
A la hora de añadir o en la edición de los datos de una mascota, accedemos a una nueva pagina, en la que se distingue entre si es unanueva entrada o estamos actualizano datos, a través de la recpción de el id de dicha mascota en caso de su edición; En el caso de no recibirse, el sistema interpreta que es una nueva.<br/>
Creada una página de perfil de usuario, con acceso a la camara, parapoder tomar una fotografía de perfil.<br/>

## Video demostración de uso v2.0
[Clic aqui para abrir el video en Youtube](https://youtu.be/FQEQqtI_aa0). Todos los derechos reservados.

## En próximas versiones
Sustitución del icono del animal por una fotografía de este implementando el uso de la camara. Actualmente la opción disponible es subirla desde galería.<br/>
Perfil de usuario avanzado, con muestrario de los datos y la posibilidad de actualizarlos.<br/>
A la hora de seleccionar la especie, adiccionde un desplegable para su selección.<br/>
Creación de nuevas secciones tales como mascotas perdidas, ubicaciones, posible lectura de datos del chip, calendario de vacunaciones, etc...</br>

### Capturas de pantalla de la aplicación

![Página inicial de la app](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Inicial.png?raw=true)<br/>
Pantalla inicial de la app,con las opciones de logeo, registro y recuperar contraseña.<br/>

![Página registro de usuario](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Registro.png?raw=true)<br/>
Pantalla de registro de nuevo usuario, con los unicos requisitos de email válido (para en un caso necesario poder restaurar la contraseña) y contraseña.<br/>

![Página de recuperación de contraseña](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Recupe.png?raw=true)<br/>
Pantalla de registro de nuevo usuario, con los unicos requisitos de email válido (para en un caso necesario poder restaurar la contraseña) y contraseña.<br/>

![Página de usuario de la app](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Usuario.png?raw=true)<br/>
Pantalla del usuario, donde se mostrará un listado en forma de cards de las mascotas que posee dicho usuario en caso de tener alguna ya guardada, en la que se incluirá la opción de editar sus datos o eliminar dicha mascota, sinó la página permanece vacía y para agregar una mascota existe el icono + en laparte superior derecha para añadirla.<br/>
Para cada mascota se tiene laopción de subir una fotografía personalizada, y en caso deno subirninguna, se mostrará una imagen predeterminada.</br></br>

![Página añadir mascota](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Add.png?raw=true)<br/>
Pantalla a la que se llega desde el botón + de la página usuario, y donde hay un grupo de campos donde introducir los datos de la nueva mascota. Dicho campos en el código del servicio están condicionados a convertirse en mayusculas o minúsculas, dependiendo de cual sea el campo.<br/>
Existe la opción de poder subir una fotografía personalizada para mostrarla con la información de la mascota. En caso de no subir ninguna, el sisitemalepondráuna predeterminada que indica que no hay imagen personalizada almacenada.<br/>
Una vez pulsado el botón guardar, automaticamente volvemos a la página usuario, y a traves del uso de una promesa, se rellenan correctamente todos los datos y muestra incluso el recien introducido.</br></br>

![Página eliminar mascota](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Borrar.png?raw=true)<br/>
Esta no es una página per se, sinó que se trata de un modal que se despliega sobre la pantalla usuario al pulsar la opción de eliminar una mascota.<br/>
En caso afirmativo, se elimina y se recarga la página usuario para mostrar las mascotas restantes, y en caso negativo simplemente cierra el modal.</br></br>

![Página editar mascota](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Editar.png?raw=true)<br/>
A esta página llegamos desde la opción de editar en los cards de las mascotas, pudiendo cambiar cualquier dato y guardarlo.<br/>

![Página de información de la app](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Info.png?raw=true)<br/>
A esta página podemos acceder desde el menú de la aplicación, conteniendo una breve descripción de lo implementado en la app, y mostrando el logo,iamgen y slogan.<br/>

![Página delperfil de usuario](https://github.com/Alegarse/Maipetsv2/blob/master/Capturas/Perfil.png?raw=true)<br/>
A esta página podemos acceder desde el menú de la aplicación, en la cual se ha implementado el uso de la cámara para poder poner una fotografía personalizadasacada directamente desde el dispositivo comoimagen de perfil.<br/>



