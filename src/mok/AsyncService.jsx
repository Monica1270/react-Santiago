const productos = [
    {
id:	"1",
name: "Medias de Argentina",
descripcion:"Mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
talle:" Talle: adultos",
precio: 18000,
desuento:"40%",
stock:10,
categoria:"ropa deportiva",
img: "/imgprodctos/mediasdeArg.png",
},
    {
id:	"2",
name: "Medias fútbol Adidas Adi 23",
descripcion:"Mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
talle:"Talle: adultos",
precio: 18000,
desuento:"40%",
stock:15,
img:"../public/imgproductos/mediasFutbolAdidasadi23.jpg",
categoria:"ropa deportiva",
},
{
    id:	"3",
name:"Top de entrenamiento",
descripcion:"Top femenimo de entrenamiento",
talle:"Talle: M",
precio:	50000,
desuento:"40%",
stock:	15,
img: "../public/imgproductos/topEntrenamiento.png",                                             
categoria:"ropa deportiva",
},
{id:"5",
name:"Calzas cortas Adidas Tf Sho Tight deportiva",
descripcion:"El suave tejido de punto presenta costuras y cortes estratégicamente situados para un ajuste que estiliza la silueta. La cintura de tiro alto proporciona una cobertura total. Tiene CLIMACOOL, que absorbe y dispersa el sudor para lograr mayor rendimiento y frescura, sin distracciones.",
talle:	"Talle: M",
precio:	25000,
desuento:"40%",
stock:	10,
img: "../public/imgprocuctos/tfshotightmdelantero.png ",             
categoria:"ropa deportiva",
},
{
id:	"6",
name:"Botines fútbol Adidas Copa Pure 2 Elite",
descripcion:"Encontrá tu rapidez para expresarte de verdad en el campo. Sentí la adrenalina con los botines adidas F50, diseñados para la velocidad. Con un llamativo estampado Sprintgrid, la parte superior Fiberskin de estos botines de fútbol League cuenta con un cuello sin cordones adaptable para un ajuste firme y un golpeo limpio. La suela Sprintplate liviana proporciona una gran velocidad en múltiples superficies.",
talle:	"Telle: 38.5",
precio:	262000,
desuento:"40%",
stock:	25,
img: "../public/imgprocuctos/botinesfútboladidascopapuredos.png",                                          
categoria:	"zapatillas",
},
{
id:	"7",
name:"Adidas X Crazyfast Messi Elite",
descripcion:"Placa de la suela que incorpora una imitación de lámina de fibra de carbono.",
talle:	"Talle: 43",
precio: 83500,
desuento:"40%",
stock:	30,
img:"../public/imgprocuctos/xcrazyfastMessi.png",                              
categoria:"zapatillas",
},
{
id:	"8",
name:"Five Ten Sleuth DLX ",
descripcion:"Es ideal para ciclistas de MTB con pedales de plataforma que buscan un calzado polivalente para paseos urbanos y recorridos de dificultad media, no para uso agresivo o en terrenos muy técnicos.",
talle:	"Talle: 42",
precio: 18000,
desuento:"40%",
stock:5,
img:"../ public/imgprocuctos/fivetenSleuthDlx.png ",
categoria:	"zapatillas",
},
{	
id:	"10",
name:"Aerografía mariposas",
tecnica:"Técnica aerografía",
medida:	"Medidas: 30 cm x 24 cm",
varilla:"Varilla Bombé",
precio :50000,
stock:	1,
img: "../public/imgprocuctos/aerografiamariposas.jpg",
categoria:"cuadros",
},
{	
	
id:	"11",
name:"Flores Peruana",
tecnica:"Técnica al óleo",
medida:	"Medidas: 26 cm x 26cm",
varilla:"Varilla Bombé",
precio :50000,
stock:1,
img:"../ public/imgprocuctos/floresperuanas2.png ",
categoria:"cuadros",
},

{
id:	"12",
name:"Replica Guayasamin",
tecnica:"Acrílico",
medida:	"Medidas: 35 cm x 30cm",
varilla:"Varilla Chata",
precio :80000,
stock:	1,
img:"../public/imgprocuctos/guayasamin.jpg",
categoria:"cuadros",
},
{
id:	"13",
name:"Replica Guayasamindos",
tecnica:"Técnica al óleo",
medida:	"Medidas: 33,80 cm x 280,70cm",
varilla:"Varilla Chata",
precio :80000,
stock:	1,
img:"../ public/imgprocuctos/guayasamindos.jpg ",
categoria:"cuadros",
	},

{
id:	"14",
name:"África algibe",
tecnica:"Técnica al óleo",
medida:	"Medidas: 76 cm x 40 cm",
varilla:"Varilla chata",
precio :80000,
stock:	1,
img:"../public/imgprocuctos/africaaljibe.png",
categoria:"cuadros",
},
]
 /* export const getProductos = ()=> {
    let error = false /* con este false el sistema entiende que no hay error
                       va directamente a else para resolver */
    /*  return new Promise ((resolve, rejet)=>{
        setTimeout(()=>{
            if(error){
                console.log('🆘el error existe')
                rejet('🆘, hubo un error')
            }else{
                console.log('No, hay error, se resuelve')
                resolve(productos)
            }

        },2000)
    }) */

 export const getOneProductos =(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let productos= productos.find((productos)=>resolve(productos))
        },2000)
    })
}
 

