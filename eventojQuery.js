//Jquery

//Creo constante con id de body
const bodyQuery = $("body");
const logoQuery = $("#logo");

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
    logoQuery.delay(1000).animate({width: "500px",height: "500px", opacity: "0.5"}, "slow").animate({width: "250px",height: "250px", opacity: "1"}, "slow");
    $('.js-carrito-button').click(function(){
        abroCarrito(); 
    });
    $('.js-carrito-close').click(function(){
        cierroCarrito();
    });
});
