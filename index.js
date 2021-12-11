document.addEventListener("DOMContentLoaded", function(){
    //me devuelve una promise con un status y la data encuentra
    fetch("listaProductos.json")
        //el metodo json me convierte la rta a un array
        .then(response => response.json())
        //
        .then(data => {
            localStorage.setItem("listaProductos", JSON.stringify(data))
        })
})

//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos
let containerProductos = document.querySelector("#productos-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
//Declaro e inicializo las variables del DOM para el tipo de cambio del precio
const btnConvertor = document.querySelector("#convertor");

mostrarProductos(listaProductos, containerProductos);

document.querySelector("#ordenar-precio").addEventListener("change", (e)=>{
    if (e.target.value == " ") {
        mostrarProductos(listaProductos, containerProductos);
    } else if (e.target.value == "MenorAMayor") {
        ordenarMenorAMayor(listaProductos);
        mostrarProductos(listaProductos, containerProductos);
    } else if (e.target.value == "MayorAMenor") {
        ordenarMayorAMenor(listaProductos);
        mostrarProductos(listaProductos, containerProductos);
    }
})

document.querySelector("#filtrar-productos").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrarCategoria(listaProductos, e.target.value), containerProductos) : mostrarProductos(listaProductos, containerProductos);
})

btnConvertor.addEventListener("click", () => {
    if (document.querySelector(".card").textContent.includes("USD$")) {
        mostrarProductos(listaProductos, containerProductos);
    } 
    else {
        obtenerDatos();
    }
})