//JAVASCRIPT: CONSOLIDE SUS CONOCIMIENTOS EN EL LENGUAJE DE LA WEB (ENCAPSULANDO FUNCIONES)
/*
MODULO 1:CLASES Y OBJETOS
MODULO 2: VALIDANDO LOS DATOS DEL FORMULARIO 
- CLASE 1 CREANDO VALIDADORES GENÉRICOS       (2.1)
- CLASE 2 VALIDANDO DATOS DEL FORMULARIO      (2.2)
- CLASE 3 EXHIBIENDO MENSAJE DE ERROR         (2.3)
- CLASE 4 EXIBIENDO LISTA DE ERRORES          (2.4)
- CLASE 5 VALIDANDO EL RESTANTE DE LOS CAMPOS (2.5)
*/

var botonAdicionar = document.querySelector("#adicionar-paciente");
//Evento que se ejecuta al presionar sobre el boton del formulario
botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
//(2.3) 3 - Validar paciente :  Si validarPaciente tiene errores ejecuta exhibirMensajesErrores
    var errores = validarPaciente(paciente);
    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        //este return detiene el evento para que no se ejecuten las instrucciones de agregar paciente a la tabla
        return;
    }
    adicionarPacienteEnLaTabla(paciente);
    //limpia los campos del formulario
    form.reset();
    //(2.5) 2 - limpiando la lista de errores
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = ""
});
//(5.3) Encapsulando la funcionalidad para agregar un paciente a la tabla
function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

/*
MODULO 1 - CLASES Y OBJETOS
La clase: es una abstraccion de un objeto o concepto del mundo real (ejemplo clase Paciente)
Atributos: son las Propiedades/Caracteristicas de la "clase": (ejemplo: paciente {nombre, peso, altura, %gordura} -> atributos)
Objetos:  son las intancias de las clases o la llamada a esa clase representando un objeto del mundo real
(paciente_1{Carlos, 45, 1.50, 18})
*/
function capturarDatosPaciente(form){
//funcion que captura los datos del formulario
//(MODULO 1) 1 - DEFINIENDO CLASE "paciente"
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }    
    return paciente;
}
/*
(MODULO 1) 2 - CREANDO EL OBJETO PACIENTE

    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    console.log(paciente);

*/
/*
(MODULO 1) 3 - FUNCION PARA CONSTRUIR "tr" 
*/
function construirTr(paciente){
    var pacienteTr = document.createElement("tr");
//(MODULO 1) 3.1 - Agregamos al tr (fila) la clase en css "paciente"
    pacienteTr.classList.add("paciente");    
//asignar los elementos td al tr de la tabla
//(MODULO 1) 4.1 al llamar a la funcion consruirTd estamos creamos un td y agregamos los datos del paciente (objeto) como tambien una clase
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
    return pacienteTr;
}
/*
(MODULO 1) 4- FUNCION PARA CONSTRUIR "td"
- construye un elemento td cuando es llamada la funcion
- al mismo tiempo que agrega una clase al td y se agrega un texto/dato que le pasamos a la funcion 
*/
function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}
//(2.2) 1 - Para validar los datos de un paciente antes de entrar a la tabla creamos la siguiente funcion
function validarPaciente(paciente){
    var errores = [];
//(2.3) 2 - Si algun dato de paciente es incorrecto se agrega el mensaje al array errores
//(2.5) 1 - Mandar mensaje de error si los campos estan vacios
    if (paciente.nombre.length == 0) {errores.push("El nombre no puede estar vacío");}
    if (paciente.peso.length == 0) {errores.push("El peso no puede estar vacío");}
    if (paciente.altura.length == 0) {errores.push("La altura no puede estar vacío");}
    if (paciente.gordura.length == 0) {errores.push("El % gordura no puede estar vacío");}


    
    if (!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto");
    } 
    if (!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta");
    }

    return errores;
}
//(2.4) 1-Mostrar errores en el formulario
//Funcion que creará una lista desordenada en el html para mostrar los erroes en los campos del formulario
function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
//(2.5) 2 - reiniciando lista de errores
    ul.innerHTML = "";
//recorre el array errores, por cada elemento/error del arreglo crea un li le agrega el error y el li se lo pone al ul
    errores.forEach(error => {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}