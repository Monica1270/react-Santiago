//este es un archivo contenedor que se encarga de tratado de datos llamar a una promesa
//ejucutar useEffect y guardarlo en un estado
// tiene que recibir una props y renderizarla. Este componente lo unico que tiene que retornar 

import { useEffect, useState } from "react"
import { getOneProductos } from "../mok/AsyncService"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"


//una props que sa va a pasar su padre
const ItemListContairner = (props) => {
    const [data, setData] = useState([])
    const {type}= useParams(typeCategoria)
    
    useEffect(()=>{
        getOneProductos()
            .then((res)=>{
                if(typeCategoria){
                    //si existe la categoria filtra
                setData(res.filter((prod)=> prod.categoria===type))
            }else{
//si no existe la categoria 
setData(res)
            }
        })


            .catch((error) => console.log("error"))
    }, [type])
    /*el type esta atento al cambio de categoria*/
    console.log(data, 'estado')

    return (
        <div>
            <h1>{props.saludo}{type && <span>{type}</span>}</h1>
       {/*     {data.map((produtos)=> <p key={produtos.id}>{produtos.name}</p>)} */}   {/* con el map estoy mostrando en pantalla */}
            <ItemList data={data} />
        </div>
    )
}
export default ItemListContairner