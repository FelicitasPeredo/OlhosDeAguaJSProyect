let productosAnillos = JSON.parse(localStorage.getItem("listaAnillos"));
//console.log(productosAnillos);

//Muestro productos de manera dinamica, solamente para anillos.html
productosAnillos.forEach(el => {
    let card = document.createElement("div");
    card.setAttribute("class","card col-md-4");
    card.innerHTML = 
        `<img src="${el.imagenProducto}" class="card-img-top" alt="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${el.nombre}</h5>
            <p class="card-text">${el.precio}</p>
            <p class="card-text"><small class="text-muted">${el.material}</small></p>`;
    document.querySelector(".cards-row").appendChild(card);
});
