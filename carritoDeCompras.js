let containerAnillos = document.querySelector("#anillos-container");
let containerCarrito = document.querySelector("#carrito-container");

function mostrarProdAnillos (array) {
    containerAnillos.innerHTML = "";
    for(e of array){
        containerAnillos.innerHTML+=`
        <div class="card">
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
function mostrarCarrito(array){
    containerCarrito.innerHTML="";
    for (e of array){
        containerCarrito.innerHTML+=`
        <tr>
            <th scope="row">1</th>
            <td>${e.nombre}</td>
            <td>${e.material}</td>
            <td>${e.precio}</td>
            <td><button class="btn btn-danger" onclick="quitar(${e.id})">Eliminar</button></td>
        </tr>`
    }
    containerCarrito.innerHTML +=`
        <tr>
            <td class="text-center" colspan="3" >Total</td>
            <td colspan="2">$<span id="totalCarrito">0</span></td>
        </tr>
    ` 
}
function agregarStorage(producto){
    //Verifico si mi local storage esta vacio o si ya existe una lista carrito
    let storage = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    //Agrego producto al array storage
    storage.push(producto);
    //devuelvo el array nuevo o el guardadp con el producto guardado
    return storage;
}
function guardarStorage(array){
    //Guardo en el storage la lista del carrito
    localStorage.setItem("carrito", JSON.stringify(array));
}
function capturar (id) {
    let productoSeleccionado = listaAnillos.find(e => e.id == id);
    //agrego al storage el producto seleccionado en la lista y guardo en el storage el array carrito con el producto seleccionado
    guardarStorage(agregarStorage(productoSeleccionado));
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos();
}
function quitar(id){
    //Me traigo la lista del carrito del local storage
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let carritoFinal = carrito.filter(e => e.id != id);
    guardarStorage(carritoFinal);
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos();
}
function sumarProductos() {
    let suma = 0;
    //Traigo la lista del local storage de los productos del carrito a la variable porductosCarrito
    let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
    //Para cada producto acumulo en suma el precio de los productos
    for (e of productosCarrito) {
        suma += e.precio;
    }
    // inyecto en el total el numero final de suma
    document.querySelector("#totalCarrito").textContent = suma;
}

function filtrar(array, dato) {
    return array.filter(e => e.material == dato);
}

mostrarProdAnillos(listaAnillos);

if(localStorage.getItem("carrito")){
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos(JSON.parse(localStorage.getItem("carrito")));
}

document.querySelector("#filtrar-anillos").addEventListener("change", (e)=>{
    e.target.value != " " ? mostrarProdAnillos(filtrar(listaAnillos, e.target.value)) : mostrarProdAnillos(listaAnillos);
})