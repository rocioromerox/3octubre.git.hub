/*Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador*/

const tiempoTrabajo = parseInt(prompt("Ingrese los años que ha trabajado para la empresa"));
const bono = 100;
const max = 1000;

if (tiempoTrabajo >= 1 && tiempoTrabajo <= 5) {
    console.log("Recibirá US$" + (tiempoTrabajo * bono));
}

if (tiempoTrabajo > 5) {
    console.log("Recibirá US$" + (max));
}

if (tiempoTrabajo <=0) {
    console.log("Ingrese un número válido");
}
