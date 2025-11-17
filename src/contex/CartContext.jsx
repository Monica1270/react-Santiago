//en este archivo va a ir solamente la lógica
//no estilos, no api, nada
//se importa el metodo de reac
import { createContext, useState } from "react";
/* import { Children, createContext, useState } from "react"; */
//lo voy a crear y exportar a la vez el contexto
// es una especie de guardado sin nececidad de estar pasando por props
export const CartContext = createContext()
//segundo crear al proveedor es un componente especial, es el encargado 
// de envolver los componentes de nuestra aplicacion que necesitan acceder al carrito
//cart se refiere al carrito y provider es proveedor
export const CartProvider = ({children})=>{
    //declaro el estado del carrito. El carrito tiene que ser una array

    const [cart, setCart]=useState([])
    
    //funcion para agregar al carrito
    //es una funcion dinamica y le estoy dicendo que reciba los parametros item y qty que significa quantity
    const addItem = (item, qty) =>{
        if(isInCart(item.id)){
            //ya existe sumo cantidades
           /*  console.log(`ya esta en el carrito`) */
           /* sumo cantidades con un map, lo que hace map 
           es recorrer la array me devuelve una nueva array con la condicion que yo le pongo  */
           const carritoActualizado = cart.map((prod)=> {
            if(prod.id === item.id){
                // actualizar con propopereito,la propiedad quantity sale de mas abajo
                //se suma el prod. quantity sale del map+la cantidad nueva qty sale de mas arriba const addItem
                return {...prod, quantity: prod.quantity + qty}
            }else{
                // todos los que restan, los voy a devolver sin modificar
                //prod es el parametro del map
                return prod
            }
           })
           // de esta forma el carrito esta actualizado
           setCart(carritoActualizado)
        }else{
             setCart([...cart, {...item, quantity:qty}])
        }
       /*  unifico en un mismo objeto, se esta creando un objeto y le digo que me traiga todo lo que tenga item
        le estoy creando la propiedad quantity y adentro le voy agregar el valor que venga de qty(significa quantity)
        de esta forma sabemos cuando es un parámetro y cuando lo agregue
        console.log({...item, quantity:qty }) */
        //de esta forma estoy manteniendo el estado actual y el valor de la array 
        // y agrego un item nuevo los tres puntos hace que cart no pise lo que tiene item
    
    }
    // funcion que elimine un item del carrito 
    //le estamos diciendo al sistema por cada producto que hay en la array 
    //se cumple una condicion prod.id sea distinto al id que viene por parametro
    // cuando encuentra uno igual lo saca
    const removeItem = (id) =>{
    setCart(cart.filter((prod)=> prod.id !== id))
    }
    // funcion que limpia el carrito
    // colocando una array vacio le digo al sistema que me vacie el carrito
    const clear = () => {
        setCart([])
    }
    //funcion que devuevuelve un buleano si ese item existe o no en el carrito
    const isInCart = (id) => {
    //el metodo some nos devuelve true o false
    //el prod de la array es comparado por la funcion prod.id se igual al id que viene por parametro 
    //si lo encuentra pone true y si no lo encuentra pone false
    return cart.some((prod)=> prod.id === id)
    }
    return(
        //con esta etiqueta le estoy dando un rol de proveedor de datos. Le estoy diciendo que va a ser el proeeveodr de mi contexto
        // si yo no lo escribo como etiqueta el sistema lo interpreta como un componente
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart }}>
           {children}
        </CartContext.Provider>

    )
}









