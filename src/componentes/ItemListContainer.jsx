//este es un archivo contenedor que se encarga de tratado de datos llamar a una promesa
//ejucutar useEffect y guardarlo en un estado
// tiene que recibir una props y renderizarla. Este componente lo unico que tiene que retornar 

import { useEffect, useState } from "react"
import{getProductos} from "../mok/AsyncService"
import ItemList from "./itemList"


//una props que sa va a pasar su padre
const ItemListContairner = (props)=> {
    const[data, setData]=useState([])
useEffect(()=>{
    console.log(getProductos())
    getProductos()
    .then((res)=>setData(res))
    .catch((error)=>console.log("error"))
},[]) 
console.log(data,'estado')
 
    return(
        <div>
            <h1>{props.saludo}</h1>
{/* {data.map((produto)=> <p key={produto.id}>{produto.name}</p>)} */} {/* con el map estoy mostrando en pantalla */}
    <ItemList data={data}/>
        </div>
    )
}
export default ItemListContairner