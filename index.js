let containerProductos = document.querySelector("#productos-container");

function mostrarProductos (array) {
    containerProductos.innerHTML = "";
    for(e of array){
        containerProductos.innerHTML+=`
        <div class="card col-4">
            <img src="${e.imagenProducto}" class="card-img-top" alt="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">${e.material}</p>
                <p class="card-text"><small class="text-muted">${e.precio}</small></p>
                <button class="btn btn-primary" onclick="capturar(${e.id})">Comprar</button>
            </div>
        </div>`;
    }
}
function filtrar(array, dato) {
    return array.filter(e => e.categoria == dato);
}
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
mostrarProductos(listaProductos);

document.querySelector("#filtrar-productos").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProductos(filtrar(listaProductos, e.target.value)) : mostrarProductos(listaProductos);
})

document.querySelector("#ordenar-precio").addEventListener("change", (e)=>{
    if (e.target.value == " ") {
        mostrarProductos(listaProductos);
    } else if (e.target.value == "MenorAMayor") {
        ordenar(listaProductos);
        mostrarProductos(listaProductos);
    }
})

