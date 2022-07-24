/*
MODULO 3: Eliminación, delegación y animación
- CLASE 1 Eliminando Pacientes      (3.1)
- CLASE 2 Propagando Eventos        (3.2)
- CALSE 3 Animaciones en la remoción del paciente (3.3)

*/
/*
//(3.1) 1_  Obtenemos todos los objetos paciente de la tabla
var pacientes = document.querySelectorAll(".paciente");
//(3.1) 2_ Recorrer pacientes (filas) para capturar el evento si se hace doble clic sobre una fila
pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(){
//(3.1) 3_ Eliminar el elemento actual
        this.remove();
    });
});
*/

//(3.2) Event bubbling: es un metodo de propagaicon de eventos en la API HTML DOM
//En el burbujeo de eventos, el evento primero es capturado y manejado por el elemento más interno y luego se propaga a los elementos externos.
var tabla = document.querySelector("#tabla-pacientes");
//(3.2) Captura el evento al hacer doble clic sobre el tbody
tabla.addEventListener("dblclick", function(event){
//(3.2) La propiedad target del evento, obtiene el elemento en el que ocurrió originalmente el evento
        //la propiedad parentNode devuelve el nodo principal de un elemento
        //remove elimina un elemento del document
//(3.3)Agrega clase css a la fila, setTimeOut detiene la ejecucion del remove 0.5 segundos mientras se aplica el estilo css y luego elimina la fila
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
});