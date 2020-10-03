/*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)*/

const number1 = prompt("Ingrese la medida de la tela en metros");
const number2 = 0.0254;
const number3 = 1;

const conversion = (parseInt(number3) * parseFloat(number1)) / parseFloat(number2);

console.log ("Usted debe pedir la siguiente cantidad de tela en pulgadas: " + conversion);
