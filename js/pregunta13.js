/*Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados*/
const nota1 = parseInt(prompt("Ingrese la nota del alumno 1"));
const nota2 = parseInt(prompt("Ingrese la nota del alumno 2"));
const notaN = parseInt(prompt("Ingrese la nota del alumno N"));

if (nota1 >=11 && nota1 <=20) {
    console.log("Aprobado");
}  else { (nota1 <11) 
    console.log("Desaprobado");
}

if (nota2 >=11 && nota2 <=20) {
    console.log("Aprobado");
}  else { (nota2 <11) 
    console.log("Desaprobado");
}

if (notaN >=11 && notaN <=20) {
    console.log("Aprobado");
}  else { (notaN <11) 
    console.log("Desaprobado");
}

