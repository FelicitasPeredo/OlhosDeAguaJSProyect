//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerCollares = document.querySelector("#collares-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

mostrarProductos(filtrarCategoria(listaProductos, "Collares"), containerCollares);

document.querySelector("#filtrar-collares").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrarCategoria(filtrarMaterial(listaProductos, e.target.value), "Collares"), containerCollares) : mostrarProductos(filtrar(listaProductos, "Collares"), containerCollares);
})