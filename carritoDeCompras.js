let containerCarrito = document.querySelector("#carrito-container");
// Lista vacia de subtotales
const precios = [];

function precioTotal(precio, id) {

    // Calculo el subtotal de cada producto en el carrito
    let cantidad = $(`#cantidad${id}`).val();
    let subtotal = cantidad * precio;
    $(`#subtotal${id}`).html("$" + subtotal);

    // Sump los subtotales de los productos del carrito
    precios[id] = subtotal;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total);
}

function mostrarCarrito(array){
    containerCarrito.innerHTML="";
    for (e of array){
        containerCarrito.innerHTML+=`
        <tr>
            <th scope="row">
            <select name="cantidad" id="cantidad${e.id}" onchange="precioTotal(${e.precio}, ${e.id})"class="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </th>
            <td><img class="prod-carrito-img" src="${e.imagenProducto}"></td>
            <td>${e.nombre}</td>
            <td>${e.material}</td>
            <td id="subtotal"><p id="subtotal${e.id}">$${e.precio}</p></td>
            <td><button class="btn btn-danger" onclick="quitar(${e.id})">X</button></td>
        </tr>`
        // Muestro los subtotales y total
        precioTotal(e.precio, e.id)
    }
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
    let productoSeleccionado = listaProductos.find(e => e.id == id);
    //agrego al storage el producto seleccionado en la lista y guardo en el storage el array carrito con el producto seleccionado
    swal("Producto añadido!", "El producto ha sido añadido al carrito de compras.", "success")
    guardarStorage(agregarStorage(productoSeleccionado));
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
}
function quitar(id){
    //Me traigo la lista del carrito del local storage
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let carritoFinal = carrito.filter(e => e.id != id);
    guardarStorage(carritoFinal);
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    // Actualizar precio total cuando elimino un producto
    precios[id] = 0;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)
}

if(localStorage.getItem("carrito")){
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
}

// Si hago click en iniciar compra pero no hay productos seleccionados me tira el pop up
document.querySelector("#btn-iniciar-compra").addEventListener("click", (e) => {
    let carritoVacio = document.querySelector("#precioTotal").innerHTML
    if (carritoVacio == 0) {
        e.preventDefault()
        swal("No ha seleccionado ningun producto", "Deberá seleccionar al menos un producto para iniciar su compra.", "error")
    }
})