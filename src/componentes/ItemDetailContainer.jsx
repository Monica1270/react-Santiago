import React, { useEffect, useState } from 'react'
import { getOneProductos } from '../mok/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})

useEffect(()=>{
//llamar a la promise
getOneProductos("2")
.then((res)=>setDetalle(res))
.catch((error)=>console.log(error)
)},[])
  return (
   <>
    <ItemDetail detalle={detalle}/>
    </>
)}

export default ItemDetailContainer