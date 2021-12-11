//Declaro e inicializo las variables del DOM en donde voy a mostrar la lista de productos 
let containerAros = document.querySelector("#aros-container");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
const btnConvertor = document.querySelector("#convertor");

mostrarProductos(filtrarCategoria(listaProductos, "Aros"), containerAros);

document.querySelector("#filtrar-aros").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrarCategoria(filtrarMaterial(listaProductos, e.target.value), "Aros"), containerAros) : mostrarProductos(filtrar(listaProductos, "Aros"), containerAros);
})

btnConvertor.addEventListener("click", () => {
    if (document.querySelector(".card").textContent.includes("USD$")) {
        mostrarProductos(filtrarCategoria(listaProductos, "Aros"), containerAros);
    } 
    else {
        obtenerDatos();
    }
})