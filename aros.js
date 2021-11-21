//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerAros = document.querySelector("#aros-container");

mostrarProductos(filtrar(listaProductos, "Aros"), containerAros);