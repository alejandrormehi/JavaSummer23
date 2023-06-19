/*
    Caso basico eleccion numero

let num = 1;

switch (num){
    case 1 :
        console.log("opcion 1");
        break;
    case 2 :
        console.log("opcion 2");
        break;
    case 3 :
        console.log("opcion 3");
        break;
    default:
        console.error("ERROR: El numero no es 1, 2 o 3");
        break;    
} */

/* Caso dias de la semana, break in and no 

let diaSemana = 7;
switch (diaSemana){
    case 1: console.log ("Laborable"); break;
    case 2: console.log ("Laborable"); break;
    case 3: console.log ("Laborable"); break;
    case 4: console.log ("Laborable"); break;
    case 5: console.log ("Laborable"); break;
    case 6: console.log ("No Laborable"); break;
    case 7: console.log ("No Laborable"); break;
    default:
        console.error("ERROR: No es un dia de la semana (solo del 1 al 7)");
        break;
}
*/
/* Caso sin break 
let diaSemana2 = 2;
switch (diaSemana2){
    case 1: console.log ("Laborable"); 
    case 2: console.log ("Laborable"); 
    case 3: console.log ("Laborable"); 
    case 4: console.log ("Laborable"); 
    case 5: console.log ("Laborable"); 
    case 6: console.log ("No Laborable"); 
    case 7: console.log ("No Laborable"); 
    default:
        console.error("ERROR: No es un dia de la semana (solo del 1 al 7)");
        break;
}*/
/*Caso VARIOS SWITCH DENTRO DE UNO
let desayuno = "chocolate";

switch (desayuno){
    case "palta": case "queso": case "fruta": case "verdura":
        console.log("Es bueno");
        break;
    case "chocolate": case "helado":
        console.log("NO Es bueno");
    break;
    default:
        console.error("No es comida");
        break;
}*/

/*Elercicio 1 switch meses del año
let mes = 11;

switch (mes) {
    case 1:
    console.log("Enero");
    break;
    case 2:
    console.log("Febrero");
    break;
    case 3:
    console.log("Marzo");
    break;
    case 4:
    console.log("Abril");
    break;
    case 5:
    console.log("Mayo");
    break;
    case 6:
    console.log("Junio");
    break;
    case 7:
    console.log("Julio");
    break;
    case 8:
    console.log("Agosto");
    break;
    case 9:
    console.log("Setiembre");
    break;
    case 10:
    console.log("Octubre");
    break;
    case 11:
    console.log("Noviembre");
    break;
    case 12:
    console.log("Diciembre");
    break;
    default:
        console.error("El numero introducido no pertenece a ningun mes");
        break;
}*/
/* EJERCICIO 2 */

let num = "4";

switch (num){
    case "1":
        console.log(1);
        break;
        case "2":
        console.log(2);
        break;
        case "3":
        console.log(3);
        break;
        case "4":
        console.log(4);
        break;
        case "5":
        console.log(5);
        break;
        default:
            console.error("No se puede");
            break;

    }


