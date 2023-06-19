/*
let palabra = "HolaComoEstanLosMaquinas";
console.log(palabra.length);
console.log(palabra[1]);
console.log(palabra.includes('Maquinas'));
console.log(palabra.indexOf('Los'));
console.log(palabra.startsWith('Hola'));
console.log(palabra.endsWith("Maquinas"));
console.log(palabra.slice(0,7));
console.log(palabra.slice(9));
console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());
console.log(palabra.replace("Maquinas", 'MARICONES'));
console.log('abc'.repeat(5));
console.log("Hola como estan los maquinas  ".trim());
console.log('a,b,c,d,e'.split(','));*/

/*EJERCICIO STRING 1*/
function string(palabra){
    console.log(palabra.replace(/o/g,"i"))
}
string( "Mi mono me mima");


// EJERCICIO STRING 2 

// const comprobar = function(...valores){
//     valores.forEach(element => {
//    console.log(element.includes('aca'))
//     });
// };
// comprobar('academia','escuela','mandamiento','acantilado');


// EJERCICIO 3 

// function repetir (palabra){
//     console.log(palabra.repeat(3));
// };
// repetir("hola");