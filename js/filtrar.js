/*
MODULO 4: FILTRANDO UNA TABLA
CLASE 1 Filtrando los pacientes de la tabla     (4.1)
CLASE 2 Iterando los pacientes para comparar    (4.2)
CLASE 3 Creando logia de filtros                (4.3)
CLASE 4 iltrando con Expresiones Regulares      (4.4)
*/
//(4.1) Seleccionar input de filtrar-tabla
var  campoFiltro = document.querySelector("#filtrar-tabla");
//(4.1) Capturar evento input
campoFiltro.addEventListener("input", function(){
//(4.2) Seleccionar todos los pacientes, recorrerlos con un for, acceder al nombre del paciente al ingresar una lera en el campo
var pacientes = document.querySelectorAll(".paciente");
//(4.3) Si el input no esta vacio, inicia el filtrado
if(campoFiltro.value.length > 0){
//(4.2)Recorrer con un for todas las filas, acceder al nombre del paciente al ingresar letras en el input
    for(let i=0; i<pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNombre = paciente.querySelector(".info-nombre");
        var nombre = tdNombre.textContent;
//(4.4) Creando expresion regular
//i es un modificador (modifica la búsqueda para que no distinga entre mayúsculas y minúsculas).
        var expresion = new RegExp(this.value, "i");
//(4.4) Verificar si la expresion regular esta dentro del nombre utilizando la funcion test
        if(!expresion.test(nombre)){
            paciente.classList.add("invisible");
        }else{
            paciente.classList.remove("invisible");
        }
    }
//(4.3) Si el input esta vacio, recorre las filas y elimina la clase que las oculta, vuelve a mostrar la tabla
}else{
    for(let i=0; i<pacientes.length; i++){
        var paciente = pacientes[i];
        paciente.classList.remove("invisible");
    }
}
    
});