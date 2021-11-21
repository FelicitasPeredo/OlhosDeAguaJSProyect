//Filtro la lista unica de productos segun categoria para inyectarla en las distintas paginas
function filtrar(array, dato) {
    return array.filter(e => e.categoria == dato);
}
//Inyecto la lista de productos en el html
function mostrarProductos (array, cont) {
    cont.innerHTML = "";
    for(e of array){
        cont.innerHTML+=`
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

// document.querySelector("#filtrar-productos").addEventListener("change", (e)=>{
//     e.target.value != " " ? mostrarProductos(filtrar(listaProductos, e.target.value)) : mostrarProductos(listaProductos);
// })