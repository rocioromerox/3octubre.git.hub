/*Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron*/

const nacimiento = prompt("Ingrese el año de su nacimiento");
const actualidad = 2020;

const edad = (parseInt(actualidad) - parseInt(nacimiento));

if (edad>0 && edad<120) {
    console.log("La edad es " + edad);
}

if (edad>120 || edad<0) {
    console.log("Ingrese un año de nacimiento válido");
}

