const array = ["🌍", "🗾", "🧭", "🏔️", "🌋", "🗻", "🏕️", "🏖️", "🏜️", "🏝️"];

let arrVacia =[];

let currentIndex = 0;
/* METODO PUSH */
 function pushArray(){
    if(arrVacia.length >= array.length){
        document.getElementById('push').disabled=true;
    }
    else if(currentIndex < array.length){
    arrVacia.push(array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;

    const p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
  }
}
/*  METODO UNSHIFT */
const unshift = document.getElementById('unshift');
   
    unshift.onclick = function(){
    let randomVal = array[Math.floor(array.length*Math.random())];
    arrVacia.unshift(randomVal);
    let p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
    }

/* METODO INSERT AT */

function insertar(){  
  let randomVal = array[Math.floor(array.length*Math.random())];
  const input = document.getElementById('inputNum').value;
  console.log(input)
  arrVacia.splice(input,0,randomVal);
  let p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
}
document.getElementById("insert").addEventListener("click",insertar);

/* METODO POP" */

 function popArray(){
    if(arrVacia.length < 1){
        document.getElementById('pop').disabled=true;
    }
    else if(currentIndex < array.length){
    arrVacia.pop(array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;

    const p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
  }
}

/*  METODO SHIFT */
const shift = document.getElementById('shift');
   
    shift.onclick = function(){
    let randomVal = array[Math.floor(array.length*Math.random())];
    arrVacia.shift(randomVal);
    let p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
    }

/* METODO REMOVE AT */

function remove(){  
  let randomVal = array[Math.floor(array.length*Math.random())];
  const input = document.getElementById('removeNum2').value;

  arrVacia.splice(input,1);
  let p = document.getElementById('result');
    p.innerHTML = "[" + arrVacia.join(', ') + "]";
}
document.getElementById("remove").addEventListener("click",remove);