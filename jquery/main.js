const array = ["🌍", "🗾", "🧭", "🏔️", "🌋", "🗻", "🏕️", "🏖️", "🏜️", "🏝️"];

let arrVacia =[];

let currentIndex = 0;

 function pushArray(){
    if(arrVacia.length >= array.length){
        document.getElementById('push').disabled=true;
    }
    else if(currentIndex < array.length){
    arrVacia.push(array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;

    const p = document.getElementById('result');
    p.innerHTML = arrVacia.join(' ');

    
  }
}

const unshift = document.getElementById('unshift');

   
    unshift.onclick = function(){
    let randomVal = array[Math.floor(array.length*Math.random())];
    arrVacia.unshift(randomVal);
    let p = document.getElementById('result');
    p.innerHTML = arrVacia.join(' ');
    }

