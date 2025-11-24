//este es un archivo contenedor que se encarga de tratado de datos llamar a una promesa
//ejucutar useEffect y guardarlo en un estado
// tiene que recibir una props y renderizarla. Este componente lo unico que tiene que retornar 

import { useEffect, useState } from "react"
import { getProductos, productos } from "../mok/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc} from "firebase/firestore"
import {db} from '../service/firebase'


//una props que sa va a pasar su padre
const ItemListContairner = (props) => {
    const [data, setData] = useState([])
    const [loader, setLoader]= useState(false)
    const {typeCategoria}= useParams()
   
   
    //FIREBASE
    useEffect(()=>{
        setLoader(true)
        //conectarnos con nuestra coleccion y la hacemos condicional 
        //si existe la categoriaque me filtre si ?type existe si no : existe
        //where si miro el console dice query , el metodo where le dice al sistema que vaya a un campo especial en este caso es categoria
        const productsCollection = typeCategoria
    ? query(collection(db, "productos"), where("categoria","==", typeCategoria))
     :collection(db,"productos")   
        // pido documentos de firebase
        getDocs(productsCollection)
        .then((res)=>{
            //console.log(res.docs)
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()

                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[typeCategoria])
/*     useEffect(()=>{
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
    }, [typeCategoria]) */
    /*el type esta atento al cambio de categoria*/
    //console.log(data, 'estado')
const subirData = ()=>{
   console.log('subiendo data!!') 
   const prodSubir = collection(db, 'productos')
   productos.map((prod)=> addDoc(prodSubir,prod))
}
    return (
        <>
{/*         este boton se usa una sola vez no debe presentarse en el final  */}
        <button onClick={subirData}>Subir data</button>
        {
            loader
            ? <LoaderComponent/>
            :<div>
            <h1>{props.saludo}{typeCategoria && <span style={{textTransform:'capitalize'}}>{typeCategoria}</span>}</h1>
       {/*     {data.map((produtos)=> <p key={produtos.id}>{produtos.name}</p>)} */}   {/* con el map estoy mostrando en pantalla */}
            <ItemList data={data} />
        </div>
}
 </>
    )
}
   
export default ItemListContairner