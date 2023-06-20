/* Ejercicio 1
const alerta = function (){
    alert("Alejandro")
}

alerta();  */
/*
Ejercicio 2
const alerta2= prompt("introduce tu nombre");

if (alerta2.toLocaleLowerCase()=="Alejandro"){
    alert ("Bienvenido");

}else{
    alert ("Denegado")
}

const nombre = "Ale";
if(true){
    console.log(nombre);
}
nombre = "Jose";
console.log(nombre); */

/*--Ejercicio variables--

const NUM_DNI = "54798778-V";

alert("Tu DNI ES :"+NUM_DNI);*/

/* VAR

var dulces = "vodka";

var pregunta = prompt ("Cual es tu licor favorito?");
if(pregunta.toLocaleLowerCase()===dulces){
    alert("Correcto")
}else {
    alert("No correcto")
} */

/*LET
let alerta = alert("Bienvenido a tu edad en 10 años");

let edad="";

let mensaje = prompt("Introduce tu edad"+edad);

edad =parseInt(mensaje);

let suma = edad + 10;

alert("En 10 años tendrás "+ suma + " años"); */

/* Scope 

const apellido="Ormeño";
let nombre =String;

nombre= "Alejandro";

console.log(nombre);

if(true){
   let nombre="JoseJavier";
    console.log(nombre);
}

console.log(apellido);
console.log(nombre+" "+apellido);*/

/* EJERCICIO 1 
FUNCION ARROW

const nombres = (name, surname1, surname2) =>{
    return name+" "+surname1+" "+surname2; 
}
const respuesta = nombres ("Alejandro", "Ormeño", "Hidalgo");
console.log(respuesta);*/

/* EJERCICIO 2 
FUNCTION WITH NAME AND NO RETURN

function balance (ingresos, gastos){
    balance=ingresos-gastos;
    resultado=true;
    if(balance>0){
        resultado=true;
    }else{
        resultado=false;
    }
    console.log("Has ganado plata? "+resultado+" tenemos "+balance);
};
balance(20,100)*/

/*EJERCICIO 3
 Tipos de barcos */

// const botes = function(...valores){
//     valores.forEach(element=>{
//         console.log(element)
//     });
// };
// botes ('bote', 'acorazado', 'crucero',"submarino"); 


/* FUNCTION WITH NAME AND NO RETURN 

function balance (ingresos, gastos){
    balance=ingresos-gastos;
    resultado=true;
    if(balance>0){
        resultado=true;
    }else{
        resultado=false;
    }
    console.log("Has ganado plata? "+resultado+" tenemos "+balance);
};
balance(20,100)*/

/* EJERCICIOS CONDICIONALES */
/*
function random (max){

    let randomNum = Math.round(Math.random()*max);
    if(randomNum===1){
        console.log("CARA")
    }else{
        console.log("SELLO")
    }
    return randomNum;
}
console.log (random(1));
*/
/*Ejerucicio suma 3 numeros*/
/*
function suma (a,b,c){
    let sumatoria = a+b+c;

    return sumatoria;

}
let respuesta = suma(1,2,3);
console.log(respuesta);

*/

/*Ejericio nombre completo 

const FULLNAME = function(...valores){
    console.log(valores.join(" "));
};
FULLNAME('Victor', 'Alejandro', 'ORMENO', 'HIDALGO');
*/

/* EJERCICIO ACEPTE 2 NUMEROS */

function elegir_mayor(a,b){
    if(a>b){
        console.log("El mayor es "+a)
    }else if (b>a) {
        console.log("El mayor es "+b)
    } else {
        console.log("Son iguales")
    }
}
elegir_mayor(5,5);