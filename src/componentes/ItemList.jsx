import React from 'react'
import Item from './Item'
function ItemList({data}) {
  //a data no lo encerre entre las llaves y estuve una hora buscando el error
  //OJO CON ESTO!!!!
    return (
    <div>
        {data.map((productos)=> <Item key={productos.id} producto={productos} />)}
    </div>
  )
}

export default ItemList