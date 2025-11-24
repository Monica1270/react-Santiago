export const productos = [
/*     {
        id: '01',
        name: "Medias de Argentina",
        descripcion: "Mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
        talle: "adultos",
        precio: 18000,
        desuento: "40%",
        stock: 10,
        categoria: "ropa deportiva",
        img: "../public/imgproductos/mediasdearg.jpg",
    }, */
    {
       // id: '02',
        name: "Medias fútbol Adidas Adi 23",
        descripcion: "Mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
        talle: "adultos",
        precio: 18000,
        desuento: "40%",
        stock: 15,
        img: "../imgproductos/mediasfutboll.jpg",
        categoria: "ropa deportiva",
    },
    {
        //id: '03',
        name: "Top de entrenamiento",
        descripcion: "Top femenimo de entrenamiento",
        talle: "M",
        precio: 50000,
        desuento: "40%",
        stock: 15,
        img: "../imgproductos/topEntrenamiento.png ",
        categoria: "ropa deportiva",
    },
    {
        //id: '04',
        name: "Calzas cortas Adidas Tf Sho Tight deportiva",
        descripcion: "El suave tejido de punto presenta costuras y cortes estratégicamente situados para un ajuste que estiliza la silueta. La cintura de tiro alto proporciona una cobertura total. Tiene CLIMACOOL, que absorbe y dispersa el sudor para lograr mayor rendimiento y frescura, sin distracciones.",
        talle: "M",
        precio: 25000,
        desuento: "40%",
        stock: 10,
        img: "../imgproductos/tfshotightmdelantero.png ",
        categoria: "ropa deportiva",
    },
    {
        //id: '05',
        name: "Botines fútbol Adidas Copa Pure 2 Elite",
        descripcion: "Encontrá tu rapidez para expresarte de verdad en el campo. Sentí la adrenalina con los botines adidas F50, diseñados para la velocidad. Con un llamativo estampado Sprintgrid, la parte superior Fiberskin de estos botines de fútbol League cuenta con un cuello sin cordones adaptable para un ajuste firme y un golpeo limpio. La suela Sprintplate liviana proporciona una gran velocidad en múltiples superficies.",
        talle: "38.5",
        precio: 262000,
        desuento: "40%",
        stock: 25,
        img: "../imgproductos/botinesfútboladidascopapuredos.png",
        categoria: "zapatillas",
    },
    {
        //id: '06',
        name: "Adidas X Crazyfast Messi Elite",
        descripcion: "Placa de la suela que incorpora una imitación de lámina de fibra de carbono.",
        talle: "43",
        precio: 83500,
        desuento: "40%",
        stock: 30,
        img: "../imgproductos/xcrazyfastMessi.png",
        categoria: "zapatillas",
    },
    {
        //id: '07',
        name: "Five Ten Sleuth DLX ",
        descripcion: "Es ideal para ciclistas de MTB con pedales de plataforma que buscan un calzado polivalente para paseos urbanos y recorridos de dificultad media, no para uso agresivo o en terrenos muy técnicos.",
        talle: "42",
        precio: 18000,
        desuento: "40%",
        stock: 5,
        img: "../imgproductos/fivetenSleuthDlx.png ",
        categoria: "zapatillas",
    },
    {
        //id: '08',
        name: "Aerografía mariposas",
        tecnica: "aerografía",
        medida: "Medidas: 30 cm x 24 cm",
        varilla: "Bombé",
        precio: 50000,
        stock: 5,
        img: "../imgproductos/aerografiamariposas.jpg",
        categoria: "cuadros",
    },
    {

        //id: '09',
        name: "Flores Peruana",
        tecnica: "óleo",
        medida: "Medidas: 26 cm x 26 cm",
        varilla: "Bombé",
        precio: 50000,
        stock: 10,
        img: "../imgproductos/floresperuanas2.png ",
        categoria: "cuadros",
    },

    {
        //id: '10',
        name: "Réplica Guayasamin",
        tecnica: "Acrílico",
        medida: "Medidas: 35 cm x 30 cm",
        varilla: "Chata",
        precio: 80000,
        stock: 5,
        img: "../imgproductos/guayasamin.jpg",
        categoria: "cuadros",
    },
    {
        //id: '11',
        name: 'Réplica Guayasamindos',
        tecnica: "óleo",
        medida: "Medidas: 33,80 cm x 28,70 cm",
        varilla: "Chata",
        precio: 80000,
        stock: 5,
        img: 
        "../imgproductos/guayasamindos.jpg",
        categoria: "cuadros",
    },

    {
        //id: '12',
        name: "África algibe",
        tecnica: "Técnica al óleo",
        medida: "Medidas: 76 cm x 40 cm",
        varilla: "Chata",
        precio: 80000,
        stock: 5,
        img: "../imgproductos/africaaljibe.png",
        categoria: "cuadros",
    },
]

export const getProductos = () => {
    let error = false /* con este false el sistema entiende que no hay error
                       va directamente a else para resolver */
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            if (error) {
                console.log('🆘el error existe')
                rejet('🆘, hubo un error')
            } else {
                console.log('No, hay error, se resuelve')
                resolve(productos)
            }

        }, 2000)
    })
}

export const getOneProductos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let prod = productos.find((producto) => producto.id === id)
            resolve(prod)
        }, 2000)
    })
}


