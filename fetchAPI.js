// FETCH API

const obtenerDatos = () => {
    fetch('https://api.exchangerate.host/convert?from=ARS&to=USD')
        .then((response) => response.json())
        .then((data) => {
            document.querySelectorAll("#precioProd").forEach(e => {
                let TC = parseFloat(data.result)
                let ARSPrecio = e.innerHTML
                let USDPrice = ARSPrecio * TC
                e.innerHTML = `${USDPrice.toFixed(2)} USD$`
            });
        }
        )
        .catch((error) => console.log(error))
}