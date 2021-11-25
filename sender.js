//declaro variables de las entradas del formulario

let nombre = document.getElementById('nombre-contacto');
let telefono = document.getElementById('telefono-contacto');
let email = document.getElementById('email-contacto');
let mensaje = document.getElementById('mensaje-contacto');
const btnEnviar = document.getElementById('btn-contacto');
console.log(btnEnviar);
//declaro funcion para enviar
function sender (nombre, telefono, email, mensaje) {
    Email.send({
        //Token de seguridad para que no quede en el front el usuario y contraseña smtp.js
        SecureToken: 'c46ebdcf-d07d-4bc9-a915-5228a4428cc5',
        To: 'ramirezarquitecturaestudio@gmail.com', //mail al que llega la info del formulario
        From: 'ramirezarquitecturaestudio@gmail.com', //puede ser el mismo mail que el to:, debe ser el mismo con el que genero el token
        Subject: `${nombre} Te envio un mensaje por la web`,
        Body: `
            <p>Nombre: ${nombre} </p>
            <p>Telefono: ${telefono} </p>
            <p>Email: ${email} </p>
            <p>Mensaje: ${mensaje} </p>
        `  
    }).then(
        message => swal("Mensaje enviado exitosamente", "En breve nos podremos en contacto", "success")
    )
    .catch(
        error => swal("Mensaje no enviado", "Vuelva a probar mas tarde", "error"),
    )  
}

//crear un evento para manejar el formulario, cuando hago click en el boton presto atencion
btnEnviar.addEventListener("click", (event) => {
    //detener el refresh de la pagina
    event.preventDefault()
    sender(nombre.value, telefono.value, email.value, mensaje.value)
    form.reset() //blanqueo el formulario
})
