import React, { useEffect, useState } from 'react'
import { getOneProductos } from '../mok/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const {id}=useParams()
useEffect(()=>{
//llamar a la promise
getOneProductos(id)
.then((res)=> setDetalle(res))
.catch((error)=> console.log(error)
)},[id])
  return (
   <>
    <ItemDetail detalle={detalle}/>
    </>
)}

export default ItemDetailContainer