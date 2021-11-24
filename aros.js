//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerAros = document.querySelector("#aros-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

mostrarProductos(filtrar(listaProductos, "Aros"), containerAros);
