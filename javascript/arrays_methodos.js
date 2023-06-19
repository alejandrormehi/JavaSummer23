// const array = ["🍏","🍉","🍌","🍍","🍓"];
// array.map(item=>{
//     switch(item){
//     case "🍏":
//         console.log("Manzana");
//         break;
//     case "🍉":
//         console.log("Sandia");
//         break;
//     case "🍌":
//         console.log("Platano");
//         break;

//     case "🍍":
//         console.log("Piña");
//         break;
//     case "🍓":
//         console.log("Fresa");
//     break;
//     default:
//         break;
//     }
// })

/* SI HAY ALGUN ELEMENTO BUSCANDO DENTRO DE LA ARRAYA */
// const array = ["🍏","🍉","🍌","🍍","🍓"];

// array.filter(item=>{
//     if(item=="🍏"){
//         console.log('🍏');
//     };
// });

// const array = ["🍏","🍉","🍌","🍍","🍓"];
// let stock = 0;
// array.find(item=>{
//     if(item == "🍉"){
//         stock++;
//     };
// });
// if(stock!=0){console.log("Aun tenemos "+stock+" 🍉 en el menu")};

// const array = ["🍉","🍌","🍍","🍓","🍏"];

// function isApple (element, index, array){
//     if(element =="🍏"){
//         console.log(array[index]+ " en posicion " +index);
//     }
// }
// array.findIndex(isApple);

// const array = ["🍏","🍉","🍌","🍍","🍓"];
// console.log(array.copyWithin(1,2));
// let noRepeatFruits =[...new Set(array)];
// console.log(noRepeatFruits);

/* METODO SOME Y EVERY */
// const fresas = (currentValue) => currentValue === "🍓";
// const array = ["🍏","🍉","🍌","🍍","🍓"];

// console.log(array.every(fresas));
// console.log(array.some(fresas));

/* METODO REDUCE */

// const array = [1,2,3,4];

// const valorInicial=0;
// const sumWithInitial = array.reduce(
//     (valorPrevio, valorActual) => valorPrevio + valorActual,
//     valorInicial
// );
// console.log(sumWithInitial);

/* EJERCICIO 1 */
// const array = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
//     let pizzaIndex = array.indexOf("🍕");
//     if(pizzaIndex !== -1){
//         console.log(array.fill("🍺",pizzaIndex+1,array.length));
//     }
/* EJERCICIO 2 */
// VER SI HAY PIÑA, retorna valor booleano

// const array = ["🍕","🍕","🍍","🍕","🍕"];
// const piña = (currentValue) => currentValue === "🍍";
// console.log(array.some(piña));

/* EJERCICIO 3 */
//QUITAR PIÑA

// const array = ["🍕","🍕","🍍","🍕","🍕"];

// let quitar = array.filter(item => item !== "🍍");
// console.log(quitar);

/* EJERCICIO 4 */
// BUSCA TODAS LAS FRESAS Y LAS REEMPLAZA POR CHAMPIÑONES
// const array = ["🍓","🍋","🍓","🍋","🍓"];
/*PRIMER METODO*/
// const resultado = array.map(item => item === "🍓" ? 
// "🍄" :item);
/* OTRO METODO: 
const result = array.map(function(item) {
    return item === "🍓" ? "🍄" : item;
});*/
//console.log(resultado);

/* EJERCICIO 5 */
// AÑADE 🥵 DESPUES DE CADA 🌶*/
// const array = ["🌶","🥛","🌶","🥛","🌶","🥛"];
// for (let i=0 ; i<array.length; i++){
//     if(array[i] === "🌶"){
//         array.splice( i + 1, 0, "🥵");
//         i++;
//     }
// };
// console.log(array);

/* EJERCICIO 6 */
// Añadir comodin 
const array = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let comodin = "🃏";
for (let i=0; i<array.length;i++){
    if(array[i]==="🎴" && array[i+1]==="🎴"){
        array.splice( i+1 , 0 ,"🃏");
        i++;
    }
};
console.log(array);