import React, { useEffect, useState } from 'react'
import { getOneProductos } from '../mok/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const [cargando, setCargando]= useState(false)
const {id}=useParams()
useEffect(()=>{
  setCargando(true)
//llamar a la promise
getOneProductos(id)
.then((res)=> setDetalle(res))
.catch((error)=> console.log(error))
.finally(()=> setCargando(false))

},[id])
  return (
   <>
   {/* pregunto si cargando esta en true caso contrario devuelvo item */}
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    </>
)}

export default ItemDetailContainer