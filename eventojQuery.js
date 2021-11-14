//Jquery

//Creo constante con id de body
const bodyQuery = $("body")

//Oculto el body 
bodyQuery.hide();

//Selecciono el doc para cuando carguen los recursos externos haya un efecto fade in
$("document").ready(() => {
    bodyQuery.fadeIn(2000);
});