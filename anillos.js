//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerAnillos = document.querySelector("#anillos-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
const btnConvertor = document.querySelector("#convertor");

mostrarProductos(filtrarCategoria(listaProductos, "Anillos"), containerAnillos);

document.querySelector("#filtrar-anillos").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrarCategoria(filtrarMaterial(listaProductos, e.target.value), "Anillos"), containerAnillos) : mostrarProductos(filtrar(listaProductos, "Anillos"), containerAnillos);
})

btnConvertor.addEventListener("click", () => {
    if (document.querySelector(".card").textContent.includes("USD$")) {
        mostrarProductos(filtrarCategoria(listaProductos, "Anillos"), containerAnillos);
    } 
    else {
        obtenerDatos();
    }
})
