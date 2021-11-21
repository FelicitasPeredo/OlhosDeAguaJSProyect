//Jquery

//Creo constante con id de body
const bodyQuery = $("body")

// Functions
//Abro menu
function abroCarrito() {
    $('.js-carrito-container').addClass('is-open');
}
//Cierro menu
function cierroCarrito() {
    $('.js-carrito-container').removeClass('is-open');
}

//Oculto el body 
bodyQuery.hide();

//Selecciono el doc para cuando carguen los recursos externos haya un efecto fade in y abro y cierro el carrito
$("document").ready(() => {
    bodyQuery.fadeIn(2000);
    $('.js-carrito-button').click(function(){
        abroCarrito(); 
    });
    $('.js-carrito-close').click(function(){
        cierroCarrito();
    });
});
