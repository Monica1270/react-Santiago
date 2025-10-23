const productos = [
    {
id:	"1",
name: "Medias de Argentina",
descripcion:"mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
talle:"adultos",
precio: 18.000,
desuento:"40%",
stock:10,
categoria:"ropa deportiva",
img: "../imgproductos/mediasdearg.png",
},
    {
id:	"2",
name: "Medias fútbol Adidas Adi 23",
descripcion:"mezcla de poliéster, nailon y elastano para mayor elasticidad, transpirabilidad y ajuste anatómico.",
talle:"adultos",
precio: 18.000,
desuento:"40%",
stock:15,
img:"../imgproductos/mediasfutboladidasadi23.png",
categoria:"ropa deportiva",
},
{
    id:	"3",
name:"Top de entrenamiento",
descripcion:"Top femenimo de entrenamiento",
talle:"M",
precio:	50.000,
desuento:"40%",
stock:	15,
img: "../imgproductos/ topentrenamiento.png",                                             
categoria:"ropa deportiva",
},
{
    id:"5",
name:"Calzas cortas Adidas Tf Sho Tight deportiva",
descripcion:"El suave tejido de punto presenta costuras y cortes estratégicamente situados para un ajuste que estiliza la silueta. La cintura de tiro alto proporciona una cobertura total. Tiene CLIMACOOL, que absorbe y dispersa el sudor para lograr mayor rendimiento y frescura, sin distracciones.",
talle:	"M",
precio:	25000,
desuento:"40%",
stock:	10,
img: "../public/imgprocuctos/tf sho tight m delantero.png ",             
categoria:"ropa deportiva",
},
{
id:	"6",
name:"Botines fútbol Adidas Copa Pure 2 Elite",
descripcion:"Encontrá tu rapidez para expresarte de verdad en el campo. Sentí la adrenalina con los botines adidas F50, diseñados para la velocidad. Con un llamativo estampado Sprintgrid, la parte superior Fiberskin de estos botines de fútbol League cuenta con un cuello sin cordones adaptable para un ajuste firme y un golpeo limpio. La suela Sprintplate liviana proporciona una gran velocidad en múltiples superficies.",
talle:	38.5,
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
talle:	43,
precio: 83.500,
desuento:"40%",
stock:	30,
img:"../public/imgprocuctos/xcrazyfastMessi.png",                              
categoria:"zapatillas",
},
{
id:	"8",
name:"Five Ten Sleuth DLX ",
descripcion:"Es ideal para ciclistas de MTB con pedales de plataforma que buscan un calzado polivalente para paseos urbanos y recorridos de dificultad media, no para uso agresivo o en terrenos muy técnicos.",
talle:	42,
precio: 18.000,
desuento:"40%",
stock:5,
img:"../ public/imgprocuctos/fivetenSleuthDlx.png ",
categoria:	"zapatillas",
},
{	
id:	"10",
name:"Aerografía mariposas",
tecnica:"Técnica aerografía",
medida:	"30 cm x 24 cm",
varilla:"Varilla Bombé",
precio :	50000,
stock:	1,
img: "../public/imgprocuctos/aerografiamariposas.jpg",
categoria:"cuadros",
},
{	
	
id:	"11",
name:"Flores Peruana",
tecnica:"Óleo",
medida:	"26 cm x 26cm",
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
medida:	"35 cm x 30cm",
varilla:"Varilla Chata",
precio :80000,
stock:	1,
img:"../public/imgprocuctos/guayasamin.jpg",
categoria:"cuadros",
},
{
id:	"13",
name:"Replica Guayasamindos",
tecnica:"Óleo",
medida:	"33,80 cm x 280,70cm",
varilla:"Varilla Chata",
precio :80000,
stock:	1,
img:"../ public/imgprocuctos/guayasamindos.jpg ",
categoria:"cuadros",
	},

    {
id:	"14",
name:"África algibe",
tecnica:"Óleo",
medida:	"76 cm x 40 cm",
varilla:"Chata",
precio :80000,
stock:	1,
img:"../public/imgprocuctos/africaaljibe.png",
categoria:"cuadros",
},
]
export const getProductos = ()=> {
    let error = false /* con este false el sistema entiende que no hay error
                       va directamente a else para resolver */
    return new Promise ((resolve, rejet)=>{
        setTimeout(()=>{
            if(error){
                console.log('🆘el error existe')
                rejet('🆘, hubo un error')
            }else{
                console.log('No, hay error, se resuelve')
                resolve(productos)
            }

        },2000)
    })
}



