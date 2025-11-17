import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  //a data no lo encerre entre las llaves y estuve una hora buscando el error
  //OJO CON ESTO!!!!
    return (
    <div  style={{display:'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
        {data.map((productos)=><Item key={productos.id} productos={productos}/>)}

 </div>)
} 

export default ItemList