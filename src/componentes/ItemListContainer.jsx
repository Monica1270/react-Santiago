//este es un archivo contenedor que se encarga de tratado de datos llamar a una promesa
//ejucutar useEffect y guardarlo en un estado
// tiene que recibir una props y renderizarla. Este componente lo unico que tiene que retornar 

import { useEffect, useState } from "react"
import { getProductos } from "../mok/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"


//una props que sa va a pasar su padre
const ItemListContairner = (props) => {
    const [data, setData] = useState([])
    const [loader, setLoader]= useState(false)
    const {typeCategoria}= useParams()
    
    useEffect(()=>{
        // enciendo el loader(cree un componente de advertencias)
        setLoader(true)
        // se ejecuta la logica
        getProductos()
            .then((res)=>{
                if(typeCategoria){
                    //si existe la categoria filtra
                setData(res.filter((prod)=> prod.categoria===typeCategoria))
            }else{
//si no existe la categoria 
setData(res)
            }
        })

            .catch((error) => console.log("error"))
            // si cae en el then o en catch apagamos el loader con false
            .finally(()=>setLoader(false))
    }, [typeCategoria])
    /*el type esta atento al cambio de categoria*/
    console.log(data, 'estado')

    return (
        <>
        {
            loader
            ? <LoaderComponent/>
            :<div>
            <h1>{props.saludo}{typeCategoria && <span>{typeCategoria}</span>}</h1>
       {/*     {data.map((produtos)=> <p key={produtos.id}>{produtos.name}</p>)} */}   {/* con el map estoy mostrando en pantalla */}
            <ItemList data={data} />
        </div>
}
 </>
    )
}
   
export default ItemListContairner