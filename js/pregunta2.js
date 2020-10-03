/*Un estudiante realiza 4 exámenes, calcular el promedio de estos*/

const number1 = prompt("Ingrese la nota 1")
const number2 = prompt("Ingrese la nota 2")
const number3 = prompt("Ingrese la nota 3")
const number4 = prompt("Ingrese la nota 4")
const p = (parseFloat(number1) + parseFloat(number2) + parseFloat(number3) + parseFloat(number4))/4;

console.log("El promedio de las notas es " + p);


