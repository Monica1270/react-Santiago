import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import Badge from 'react-bootstrap/Badge'
import { BiBorderRadius } from 'react-icons/bi'

const ItemDetail = ({ detalle }) => {
  const { cart, addItem } = useContext(CartContext)
  //purchese significa compra
const [purchase, setPurchese]= useState(false)
  console.log(cart)
  const onAdd = (cantidad) => {
    // lo paso a aca porque compro
    
      console.log(`Agregaste ${cantidad} al carrito`)
      setPurchese(true)
    addItem(detalle, cantidad)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width:'18rem'}}>
      <h1>Detalle de: {detalle.name} </h1>
      <img className="card-img-top" src={detalle.img} alt={detalle.name} />
      <p>{detalle.descripcion}</p>
      <p>Técnica:{detalle.tecnica}</p>
      <p>{detalle.talle} </p>
      <p>{detalle.medida} </p>
      <p>${detalle.precio},00.- </p>
      <p><Badge bg="secondary">Stock disponible: {detalle.stock}</Badge>  </p>
      <p>Tipo de varilla utilizada:{detalle.varilla} </p>
      <p>{detalle.categoria} </p>
      {/* le estoy preguntando si purchase es true que muestre el boton terminar compra caso contrario muestre el detalle de la compra */}
      {purchase ? <button className='btn btn-secondary'>Terminar compra.</button> : <ItemCount stock={detalle.stock} onAdd={onAdd} />}
    </div>
  )
}

export default ItemDetail