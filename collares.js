//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerCollares = document.querySelector("#collares-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

mostrarProductos(filtrar(listaProductos, "Collares"), containerCollares);