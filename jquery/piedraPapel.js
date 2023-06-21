const partidas = document.getElementById("game");


function nombrar (){
    const nombre = document.getElementById("name").value;
    let p = document.getElementById('user');
    p.innerHTML = nombre;
}
document.getElementById("submit").addEventListener("click", nombrar);

function gameMachine (){
    
}