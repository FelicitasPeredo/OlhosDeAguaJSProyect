//Filtro la lista unica de productos segun categoria para inyectarla en las distintas paginas
function filtrarCategoria(array, dato) {
    return array.filter(e => e.categoria == dato);
}

function filtrarMaterial(array, dato) {
    return array.filter(e => e.material == dato);
}

function ordenarMenorAMayor(array) {
    array.sort((a,b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0
    })
}

function ordenarMayorAMenor(array) {
    array.sort((a,b) => {
        if (a.precio < b.precio) {
            return 1;
        }
        if (a.precio > b.precio) {
            return -1;
        }
        return 0
    })
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
                <p class="card-text" id="precioProd">${e.precio}</p>
                <button class="btn-comprar" onclick="capturar(${e.id})">Comprar</button>
            </div>
        </div>`;
    })
}
