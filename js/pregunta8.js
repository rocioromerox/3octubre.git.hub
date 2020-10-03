/*Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano*/

const soles = prompt("Ingrese la cantidad de soles");
const dolar = 3.62

const conversion = (parseFloat(soles)) / parseFloat(dolar);

console.log ("Usted puede adqurir la siguiente cantidad de dólares: " + conversion);

