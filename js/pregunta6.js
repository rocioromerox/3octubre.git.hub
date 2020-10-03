/*Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre*/

const number1 = prompt("Horas trabajada en una semana");
const number2 = prompt("Pago por hora trabajada en soles");

const sueldo = (parseFloat(number1) * parseFloat(number2));

console.log ("El sueldo semanal es S/ " + sueldo);
