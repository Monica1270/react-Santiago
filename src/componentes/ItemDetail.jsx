import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import Badge from 'react-bootstrap/Badge'
import { BiBorderRadius } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ detalle }) => {
  const { cart, addItem,itemQuantity } = useContext(CartContext)
  //purchese significa compra
  const [purchase, setPurchese] = useState(false)
  console.log(cart)
  const onAdd = (cantidad) => {
    // lo paso a aca porque compro

    console.log(`Agregaste ${cantidad} al carrito`)
    setPurchese(true)
    addItem(detalle, cantidad)
    Swal.fire({
      position: "top-end",
  icon: "success",
  title: 'Agregaste ${detalle.cantidad} al carrito',
  showConfirmButton: false,
  showCancelButton: false,
  timer: 1500
    })
  }
  const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '18rem' }}>
      <h1>Detalle de: {detalle.name}</h1>
      <img className="card-img-top" src={detalle.img} alt={detalle.name} />
      <p>{detalle.descripcion}</p>
      <p>Técnica:{detalle.tecnica}</p>
      <p>Talle:{detalle.talle} </p>
      <p>Medidas: {detalle.medida} </p>
      <p>${detalle.precio},00.- </p>
      <p><Badge bg="secondary">Stock disponible: {detalle.stock}</Badge>  </p>
      <p>Stock disponible: {stockActualizado}</p>
      <p>Categoria:{detalle.categoria} </p>
      {/* le estoy preguntando si purchase es true que muestre el boton terminar compra caso contrario muestre el detalle de la compra */}
      {purchase ? <Link className='btn btn-secondary' to='/cart'>Terminar compra.</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd} />}
    </div>
  )
}

export default ItemDetail