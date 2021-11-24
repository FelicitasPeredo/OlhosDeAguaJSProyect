//FETCH .JSON
const obtenerDatosJSON = () => {
    //ir a buscar
    //me devuelve una promesa fullfilled y me trae el resultado
    //imprimo el resultado en la consola y lo inyecto en el html
    fetch("listaProductos.json")
        //el metodo json me convierte la rta a un array
        .then(response => response.json())
        .then(result => {
            let lista = result;
            return lista
        }).catch((error => console.log(error)));
}
obtenerDatosJSON()
console.log(obtenerDatosJSON())
//Filtro la lista unica de productos segun categoria para inyectarla en las distintas paginas
function filtrar(array, dato) {
    return array.filter(e => e.categoria == dato);
}

//Inyecto la lista de productos en el html
function mostrarProductos (array, cont) {
    cont.innerHTML = "";
    array.forEach(e => {
        cont.innerHTML+=`
        <div class="card col-3 m-1">
            <img src="${e.imagenProducto}" class="card-img-top" alt="card-img-top">
            <div class="card-body formato-texto">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">${e.material}</p>
                <p class="card-text">${e.precio}</p>
                <button class="btn-comprar" onclick="capturar(${e.id})">Comprar</button>
            </div>
        </div>`;
    })
}

obtenerDatosJSON()
console.log(obtenerDatosJSON())
// document.querySelector("#filtrar-productos").addEventListener("change", (e)=>{
//     e.target.value != " " ? mostrarProductos(filtrar(listaProductos, e.target.value)) : mostrarProductos(listaProductos);
// })