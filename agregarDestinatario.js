let cupon = "OLHOSESPECIAL"
const listaUsuarios = [];
let productosCarrito = document.querySelector("#productos-carrito");
let listaCarrito = JSON.parse(localStorage.getItem("carrito"));

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
}

const addAlert = (tittle, message, cssClass) => {
    Swal.fire(tittle, message, cssClass);
};

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

    if (
        mailUsuario === "" ||
        nombre === "" ||
        apellido === "" ||
        telefono === "" || 
        calle === "" ||
        altura === "" ||
        dpto === "" ||
        CP === "" ||
        provincia === "" ||
        dni === "" ||
        cuponDesc === ""
      ) {
        return addAlert("Completa los campos vacios!", "", "error");
      } else {
        const nuevoDestinatario = new datosDestinatario(mailUsuario, nombre, apellido, telefono, calle, altura, dpto, CP, provincia, dni, cuponDesc);
        console.log(nuevoDestinatario);

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

        const form = document.querySelector("#form");
        form.reset();
        addAlert("Datos procesados correctamente.", "", "success");
    } 
}

function mostrarCarritoDelDestinatario(array){
    productosCarrito.innerHTML="";
    for (e of array){
        productosCarrito.innerHTML+=`
        <tr>
            <th scope="row">1</th>
            <td>${e.nombre}</td>
            <td>${e.material}</td>
            <td>${e.precio}</td>
        </tr>`
    }
}

function mostrarProductos() {
    if(localStorage.getItem("carrito")){
        //Borro el msj de carrito vacio
        let carritoVacio = document.querySelector("#carritoVacio");
        document.querySelector("#visualCarrito").removeChild(carritoVacio);
        //Reemplazo el carrito vacio por los productos seleccionados
        mostrarCarritoDelDestinatario(listaCarrito);
    }
}

//Defino en una variable el boton que voy a utilizar para disparar el evento
const btnAgregarDestinatario = document.querySelector("#btnAgregarDestinatario");
//Que mi funcion ocurra cuando el usuario hace click en el boton

mostrarProductos();

btnAgregarDestinatario.addEventListener("click", (e) => {
    e.preventDefault();
    agregarNuevoDestinatario();

});







