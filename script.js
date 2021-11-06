let cupon = "OLHOSESPECIAL"
let listaUsuarios = [];
class datosDestinatario {
    constructor (mail, nombre, apellido, telefono, calle, altura, dpto, CP, provincia, dni, cuponDesc, descuento) {
        this.mail = mail;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.calle = calle;
        this.altura = altura;
        this.dpto = dpto;
        this.CP = CP;
        this.provincia = provincia;
        this.dni = dni;
        this.cuponDesc = cuponDesc;
        this.descuento = descuento;
    }
    aplicarDescuento() {
        if (this.cuponDesc == cupon) {
            this.descuento = 0.25;
            alert("Con el cupón ingresado obtienes un 25% de descuento en tu compra!")
        }
        else {
            alert("El cupón ingresado no es válido.")
        }
    }
}

const agregarNuevoDestinatario = () => {
    //Utilizo los valores del formulario 
    const mailUsuario = document.getElementById("mail").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const calle = document.getElementById("calle").value;
    const altura = document.getElementById("altura").value;
    const dpto = document.getElementById("dpto").value;
    const CP = document.getElementById("CP").value;
    const provincia = document.getElementById("provincia").value;
    const dni = document.getElementById("dni").value;
    const cuponDesc = document.getElementById("cupon").value;
    //Creo un nuevo objeto con los datos que ingrese el nuevo destinatario
    const nuevoDestinatario = new datosDestinatario(mailUsuario, nombre, apellido, telefono, calle, altura, dpto, CP, provincia, dni, cuponDesc);
    console.log(nuevoDestinatario);
    nuevoDestinatario.aplicarDescuento();

    if (localStorage.getItem("listaUsuarios") == null) {
        //Todavia nunca se guardo en el local storage una lista de los usuarios
        listaUsuarios.push(nuevoDestinatario);
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    }
    else {
        //Creo una nueva lista en donde primero guarde los usuarios ya almacenados anteriormente pero pueda agregar tambien el nuevo ingresado
        let listaUsuariosCompleta = JSON.parse(localStorage.getItem("listaUsuarios"));
        //Agrego a la lista completa el nuevo usuario
        listaUsuariosCompleta.push(nuevoDestinatario);
        //Guardo en el local storeage la lista completa
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuariosCompleta));
    }
}

//Traigo la lista que tengo en mi otro script 
let Productos = JSON.parse(localStorage.getItem("listaProductos"));

Productos.forEach(el => {
    console.log(`El producto es ${el.nombre}, es de ${el.material} y su precio es ${el.precio} pesos.`);
});

//Buscar por precio
let buscaPorPrecio = Productos.filter(obj => obj.precio < 3000);
console.log(buscaPorPrecio);
//Ordenar por precio de menor a mayor
Productos.sort((a,b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0
})
console.log(Productos);

const seleccionarProducto = () => {
    let search = prompt("Que producto desea comprar?");
    let productoBuscado = Productos.find(obj => obj.nombre === search);
    console.log(productoBuscado);
    return productoBuscado;
}
const seleccionarCantidad = (stock) => {
    let cantidad = parseInt(prompt("Ingrese la cantidad que sea adquirir: "));
    do {
        if (cantidad < stock) {
            return cantidad;
        }
        else {

            alert("Existen " + stock + " unidades disponibles de este producto. Vuelva a seleccionar la cantidad que desea adquirir.");
            cantidad = parseInt(prompt("Ingrese la cantidad que sea adquirir: "));
        }
    } while (cantidad > stock)
    return cantidad;
}
const calcularPrecioFinal = (cantidad, precio) => {
    let precioFinal = cantidad * precio;
    return precioFinal;
}

let productoSeleccionado = seleccionarProducto();
let comprar = confirm("Desea comprar el producto?");
if(comprar) {
    sessionStorage.setItem("carritoDeCompras", JSON.stringify(productoSeleccionado))
    let cantidadSeleccionada = seleccionarCantidad(productoSeleccionado.stock);
    let nuevoStock = 0;
    nuevoStock = productoSeleccionado.stock - cantidadSeleccionada;
    console.log(`Quedan ${nuevoStock} unidades del producto.`);
    let precioProductoSeleccionado = productoSeleccionado.precio;
    console.log(precioProductoSeleccionado);
    let precioFinal = calcularPrecioFinal(cantidadSeleccionada, precioProductoSeleccionado);
    console.log(precioFinal);
    //Creo una etiqueta nueva que reemplace el carrito vacio por los productos seleccionados
    let productosEnCarrito = document.createElement("p");
    productosEnCarrito.setAttribute("id", "productosEnCarrito");
    productosEnCarrito.innerHTML = `El valor de su compra seria de ${precioFinal} pesos. Su compra incluiría ${cantidadSeleccionada} unidad/es del producto ${productoSeleccionado.nombre}.`;
    //Borro el msj de carrito vacio
    let carritoVacio = document.querySelector("#carritoVacio");
    document.querySelector("#visualCarrito").removeChild(carritoVacio);
    // Inyecto el nuevo msj del carrito con el producto seleccionado
    document.querySelector("#visualCarrito").appendChild(productosEnCarrito);
}

//Defino en una variable el boton que voy a utilizar para disparar el evento
const btnAgregarDestinatario = document.querySelector("#btnAgregarDestinatario");
//Que mi funcion ocurra cuando el usuario hace click en el boton
btnAgregarDestinatario.addEventListener("click", () => {
    agregarNuevoDestinatario();
})
