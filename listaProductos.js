let listaProductos = [{
        "id": 1,
        "nombre": "Aros Afrika",
        "categoria": "Aros",
        "material": "Oro",
        "precio": 2500,
        "stock": 50
    }, {
        "id": 2,
        "nombre": "Collar Indica",
        "categoria": "Collares",
        "material": "Oro",
        "precio": 3500,
        "stock": 50
    }, {
        "id": 3,
        "nombre": "Anillo Egeo",
        "categoria": "Anillos",
        "material": "Oro",
        "precio": 2000,
        "stock": 50
    }, {
        "id": 4,
        "nombre": "Aros Oceania",
        "categoria": "Aros",
        "material": "Plata",
        "precio": 2700,
        "stock": 50
    }, {
        "id": 5,
        "nombre": "Collar Asia",
        "categoria": "Collares",
        "material": "Plata",
        "precio": 3900,
        "stock": 50,
    }, {
        "id": 6,
        "nombre": "Anillo Artico",
        "categoria": "Anillos",
        "material": "Plata",
        "precio": 2300,
        "stock": 50 
    }
]

localStorage.setItem("listaProductos", JSON.stringify(listaProductos));