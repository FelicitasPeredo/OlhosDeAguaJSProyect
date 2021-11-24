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

function ordenar(array) {
    array.sort((a,b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0
    })
}

document.querySelector("#ordenar-precio").addEventListener("change", (e)=>{
    if (e.target.value == " ") {
        mostrarProductos(listaProductos);
    } else if (e.target.value == "MenorAMayor") {
        ordenar(listaProductos);
        mostrarProductos(listaProductos);
    }
})

mostrarProductos(listaProductos, containerProductos);


