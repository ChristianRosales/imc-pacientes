/*
MODULO 2 VALIDANDO LOS DATOS DEL FORMULARIO 
CLASE 1 CREANDO VALIDADORES GENÉRICOS   (2.1)
*/

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i< pacientes.length;i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = paciente.querySelector(".info-imc");
//(2.1) 2 - el resultado de la validacion la guardamos en pesoEsValido o alturaEsValida respectivamente 
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
//(2.1) 3 - En caso de que la validarAltura sea "false" en esta condicional negaremos ese valor
//para ejecutar las instrucciones: mostrar el "dato incorrecto" en el "td" imc, y agregar la clase "paciente incorrecto" al tr que aplica un estilo css que realta la fila
    if(!pesoEsValido){
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(!alturaEsValida){
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
//si ambas validaciones son verdaderas ejecuta el calculo imc
    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}
//funcion que calcula imc
function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
//(2.1) 1 - creando funcion validar peso que retorne verdarero si esta entre cero y mil si no retornar falso
function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}
//(2.1) 1 - funcion que valide la altura retornando un boolean si la altura cumple o no el rango de  0 a 2.9 metros
function validarAltura(altura){
    if(altura >= 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}


 


