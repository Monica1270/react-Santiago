import React from 'react'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h1>Detalle de: {detalle.name} </h1>
        <img src= {detalle.img} alt={detalle.name}/>
        <p>{detalle.descripcion}</p>
        <p>{detalle.tecnica}</p>
        <p>{detalle.talle} </p>
        <p>{detalle.medida} </p>
<p>${detalle.precio},00.- </p>
<p>{detalle.stock} </p>
<p>{detalle.varilla} </p>
<p>{detalle.categoria} </p>
{/* <ItemCount stock={detalle.stock}/>   */}
    </div>
  )
}

export default ItemDetail