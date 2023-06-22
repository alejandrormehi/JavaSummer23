const partidas = document.getElementById("game");

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

const arrayImg = [ ]
const img1 = new Image(100 | 100);
    img1.src = "/jquery/assets/piedra.png";
    img1.alt = "piedra del juego";
    arrayImg.push(img1);
const img2 = new Image(100 | 100); 
    img2.src = "/jquery/assets/papel.png";
    img2.alt = "papel del juego";
    arrayImg.push(img2);
const img3 = new Image(100 | 100);
    img3.src = "/jquery/assets/tijera.png";
    img3.alt = "tijera del juego";
    arrayImg.push(img3);

    const userPoints = 0;
    const machinePoints = 0;

    function gameInit(){
        let p = document.getElementById('maquinaPuntos');
        let p2 = document.getElementById('userPuntos');
        
        if(userValue==machinValue){
            machinePoints;
            userPoints;
            p.innerHTML = machinePoints;
            p2.innerHTML = userPoints;
        
        }else if (userValue==0 && machinValue==3 || userValue==1 && machinValue==0 || userValue==2 && machinValue==1){
            userValue++;
            p2.innerHTML = userPoints;
        }else{
            machinValue++;
            p.innerHTML = machinePoints;
        }
        


    }


function gameUser(){
    let botonClick = "";
    let p = document.getElementById('elecUser');
    let userValue = 0;

    document.getElementById("piedra").addEventListener("click", function(){
        botonClick = "piedra";
        p.innerHTML = '';
        p.appendChild(arrayImg[0]);
        userValue = 0;
    });
    document.getElementById("papel").addEventListener("click", function(){
        botonClick = "papel";
        p.innerHTML = '';
        p.appendChild(arrayImg[1]);
        userValue = 1;
    });
    document.getElementById("tijera").addEventListener("click", function(){
        botonClick = "tijera";
        p.innerHTML = '';
        p.appendChild(arrayImg[2]);
        userValue = 2;
    });
    return userValue;
}
const userValue = gameUser();
const botones = document.getElementsByClassName("boton-game");
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", gameUser);
}
function gameMachine (){
    let stone = 0;
    let paper = 1;
    let scisors = 2;
    let randomVal = Math.floor(Math.random()*3);
    let machinValue = 0;
    

    let p = document.getElementById('elecMach');

    if(randomVal===0){
        randomVal=stone;
        p.innerHTML = '';
        p.appendChild(arrayImg[0]);
        machinValue = 0;

    }else if(randomVal===1){
        randomVal=paper;
        p.innerHTML = '';
        p.appendChild(arrayImg[1]);
        machinValue = 1;
    }else {
        randomVal=scisors;
        p.innerHTML = '';
        p.appendChild(arrayImg[2]);
        machinValue = 2;
    }
    return machinValue;
}
const machinValue = gameMachine();
document.getElementById("submit").addEventListener("click", gameMachine);

/* FUNCION PARA PONER EL NOMBRE */
function nombrar (){
    const nombre = document.getElementById("name").value;
    let p = document.getElementById('user');
    p.innerHTML = nombre;
}
document.getElementById("submit").addEventListener("click", nombrar);