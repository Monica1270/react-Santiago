// Es un componente contador
import {useState} from 'react'
//usestate es un hook se utiliza para que se vea en pantalla y aparte sirve para guardar
//de esta forma sabemos cuantos productos quiere comprar la persona
//los hook siembrpe se deben importar
// declarar la constante con el nombre del contenedor
 const ItemCount = ({stock}) => {
  //se escribe como destructurin
  const [count, setCount]= useState(1)//puede ir un numero, strings, un array, un objeto un null
  const sumar = ()=>{
    if (count < stock){
  setCount(count + 1)
}
}
console.log("item count")
const resta = () => {
  setCount(count-1)
}

   
return (
    <div>
        <button className='btn btn-danger'  onClick={resta} disabled={count === 0}>-</button>
        {/* con disabled le estoy diciendo al contador que se detenga en 0 */}
        <span className='btn'>{count}</span> {/*  este span muestra un resultado */}
    
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
  )
}
export default ItemCount

