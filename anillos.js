//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerAnillos = document.querySelector("#anillos-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

mostrarProductos(filtrar(listaProductos, "Anillos"), containerAnillos);