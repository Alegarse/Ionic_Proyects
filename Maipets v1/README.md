# Maipets
Gestión de mascotas realizado bajo Ionic con angular

## Video demostración de uso
[Clis aqui para abrir el video en Youtube](https://youtu.be/NTXp5AEM3MY). Todos los derechos reservados.

## Version 1.0
Uni usuario<br/>
Incluye muestario de las mas cotas que se poseen a través de cards, con distincion de icono para el tipo de animal que sea, limitado actualmente a 8 animales.<br/>
Cada uno de ello spuede ser borrado a través de un modal, o editado, enviando así su id para la edición.
A la hora de agregar una mascota, se han realizado modificaciones de código en el servicio para que algunos datos se conviertana a minusculas, excepto el nombre, que se convierte a mayúsculas.<br/>
Actualización en tiempo real.<br/>

En próximas versiones:<br/>
Multi usuario<br/>
Sustitución del icono del animal por una fotografía de este implementando el uso de la camara.<br/>
Perfil de usuario.<br/>
Posiblidad de elegir de desplegable los animales, y en caso de no constar,poder agregar una nueva especie.<br/>
Creación de nuevas secciones tales como mascotas perdidas, ubicaciones, posible lectura de datos del chip, 
calendario de vacunaciones, etc...</br>

### Capturas de pantalla

![Página inicial de la app](https://github.com/Alegarse/Maipets/blob/master/imgs/Inicio.PNG)<br/>
Pantalla inicial donde se muestra el logo y el slogan de la app, y que consta se un único boton de acceso.<br/>

![Página de usuario de la app](https://github.com/Alegarse/Maipets/blob/master/imgs/Usuario.PNG)<br/>
Pantalla del usuario, donde se mostrará un listado en forma de cards de las mascotas que posee dicho usuario en caso de tener alguna ya guardada, en la que se incluirá la opción de editar sus datos o eliminar dicha mascota, sinó la página permanece vacía y para agregar una mascota existe el icono + en laparte superior derecha para añadirla.<br/>
En caso de existir mascotas, el programa distingue actualmente entre 8 especies de animales, y dependiendo de cual sea, muestra su icono apropiado</br></br>

![Página añadir mascota](https://github.com/Alegarse/Maipets/blob/master/imgs/AddMasc.PNG)<br/>
Pantalla a la que se llega desde el botón + de la página usuario, y donde hay un grupo de campos donde introducir los datos de la nueva mascota. Dicho campos en el código del servicio están condicionados a convertirse en mayusculas o minúsculas, dependiendo de cual sea el campo.<br/>
Una vez pulsado el botón guardar, automaticamente volvemos a la página usuario, y a traves del uso de una promesa, se rellenan correctamente todos los datos y muestra incluso el recien introducido.</br></br>

![Página eliminar mascota](https://github.com/Alegarse/Maipets/blob/master/imgs/ElimMasc.PNG)<br/>
Esta no es una página per se, sinó que se trata de un modal que se despliega sobre la pantalla usuario al pulsar la opción de eliminar una mascota.<br/>
En caso afirmativo, se elimina y se recarga la página usuario para mostrar las mascotas restantes, y en caso negativo simplemente cierra el modal.</br></br>

![Página editar mascota](https://github.com/Alegarse/Maipets/blob/master/imgs/EditMasc.PNG)<br/>
A esta página llegamos desde la opción de editar en los cards de las mascotas, pudiendo cambiar cualquier dato y guardarlo.<br/>
