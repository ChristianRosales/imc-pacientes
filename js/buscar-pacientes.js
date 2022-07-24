/*
MODULO 5: BUSCANDO PACIENTES CON AJAX
AJAX (J avaScript asincrónico y X ML): es una TÉCNICA de desarrollo web para crear aplicaciones web asíncronas. AJAX permite:
- Leer datos de un servidor web, después de que se haya cargado la página
- Actualizar una página web sin recargar la página
- Enviar datos a un servidor web - en segundo plano

CLASE 1 Conociendo AJAX     (5.1)
CLASE 2 Conectando y cargando los pacientes     (5.2)
CLASE 3 Procesando la respuesta del requerimiento   (5.3)
CLASE 4 Capturando errores de requerimiento     (5.4)
*/
var botonBuscar = document.querySelector("#buscar-paciente");
botonBuscar.addEventListener("click", function(){
//(5.2) Hacer la SOLICITUD (request) de los datos 
//XMLHttpRequest este objeto se puede utilizar para intercambiar datos con un servidor web en segundo plano. 
//Esto significa que es posible actualizar partes de una página web sin recargar toda la página.
//(5.2) Creando un objeto de la requisicion ajax
    var xhr = new XMLHttpRequest;
//(5.2) Abriendo la requisicion
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
//(5.2) Escuchando un evento para cargar la variable respuesta que obtendra los datos del servidor
    xhr.addEventListener("load", function(){
//(5.4) La propiedad de solo lectura status de la interfaz Response contiene el código de estado de la respuesta (ejm., 200 para un éxito).
//si status al cargar la requisicion no es exitoso (!=200) entonces mostrara error a traves de un <span>
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            //(5.3) Los datos del paciente estan en formato JSON, se esta convirtiendo a un array para obtener un arreglo de objetos paciente
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            //(5.3) Iterando todos los pacientes obtenidos y agregandolos a la tabla reutilizando la funcion adicionarPacienteEnLaTabla
            pacientes.forEach(paciente => {
                adicionarPacienteEnLaTabla(paciente);
            });
        } else {
            errorAjax.classList.remove("invisible");
        }
    });
    xhr.send()
});