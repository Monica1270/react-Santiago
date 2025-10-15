// Es un componente contador
import {useState} from 'react'
//usestate es un hook se utiliza para que se vea en pantalla y aparte sirve para guardar
//de esta forma sabemos cuantos productos quiere comprar la persona
//los hook siembrpe se deben importar
// declarar la constante con el nombre del contenedor
 const ItemCount = () => {
  //se escribe como destructurin
  
    return (
    <div>
        <button className='btn btn-danger'>-</button>
        <span className='btn'></span> {/*  este span muestra un resultado */}
    
        <button className='btn btn-succes'>+</button>
    </div>
  )
}
export default ItemCount

