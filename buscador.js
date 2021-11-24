//Función de búsqueda
const buscador = () => {

    document.querySelector('#input').addEventListener('keyup', (e) => {      
    
        //Si la palabra/letra del input no coincide con el inner de la card, pasa a hidden la card
        document.querySelectorAll('.card').forEach(el => {
        
            if (el.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                el.setAttribute("style", "display:inline")
            } else {
                el.setAttribute("style", "display:none")
            }
        }) 
    })
}

buscador();