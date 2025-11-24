import React, { useEffect, useState } from 'react'
/* import { getOneProductos } from '../mok/AsyncService' */
import ItemDetail from './ItemDetail'
import {Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../service/firebase'



const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const [cargando, setCargando]= useState(false)
const [invalid, setInvalid]= useState(null)
const {id}=useParams()

useEffect(()=>{
  setCargando(true)
  //creamos una referencia de un documento
  const docRef = doc(db, "productos", id)
  //traemos el documento
  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      setDetalle({id:res.id, ...res.data()})
    }else{
      setInvalid(true)
    }
  })
  .catch((error)=> console.log(error))
  .finally(()=> setCargando(false))
},[id])

if(invalid){
  return <div>
<h1>El producto no existe</h1>
<Link className='btn btn-secondary' to='/'>Volver a home</Link>
  </div>

}

  return (
   <>
   {/* pregunto si cargando esta en true caso contrario devuelvo item */}
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    </>
)}

export default ItemDetailContainer