const array = ["🌍", "🗾", "🧭", "🏔️", "🌋", "🗻", "🏕️", "🏖️", "🏜️", "🏝️"];

let arrVacia =[];

let currentIndex = 0;

 function pushArray(){
    if(currentIndex < array.length){
    arrVacia.push(array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;

    const p = document.getElementById('result');
    p.innerHTML = arrVacia.join(' ');

    if(arrVacia.length === array.length){
        document.getElementById('push').disabled=true;
    }
  }
}

