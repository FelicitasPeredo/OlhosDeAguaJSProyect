//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerCollares = document.querySelector("#collares-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
const btnConvertor = document.querySelector("#convertor");

mostrarProductos(filtrarCategoria(listaProductos, "Collares"), containerCollares);

document.querySelector("#filtrar-collares").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrarCategoria(filtrarMaterial(listaProductos, e.target.value), "Collares"), containerCollares) : mostrarProductos(filtrar(listaProductos, "Collares"), containerCollares);
})

btnConvertor.addEventListener("click", () => {
    if (document.querySelector(".card").textContent.includes("USD$")) {
        mostrarProductos(filtrarCategoria(listaProductos, "Collares"), containerCollares);
    } 
    else {
        obtenerDatos();
    }
})