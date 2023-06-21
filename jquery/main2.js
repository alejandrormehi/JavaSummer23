$().ready(() => {
    $("#query").click(function(){
        $(".text").toggleClass("hotpink");
    })
})

const boton = document.querySelector("#java");
/* USAMOS EL QUERYSELECTORALL para seleccionar todas los elementos con esa misma clase*/
const textos = document.querySelectorAll(".text");


boton.onclick = function(){
    textos.forEach((texto)=>{
        texto.classList.toggle("azul");
    });
};