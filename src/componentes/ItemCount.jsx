// Es un componente contador
import {useState,useEffect} from 'react'
//usestate es un hook se utiliza para que se vea en pantalla y aparte sirve para guardar
//de esta forma sabemos cuantos productos quiere comprar la persona
//los hook siembrpe se deben importar
// declarar la constante con el nombre del contenedor
 const ItemCount = ({stock, onAdd}) => {
  //se escribe como destructurin
  const [count, setCount]= useState(1)//puede ir un numero, strings, un array, un objeto un null
 //con la siguiente constante sirve para cuando se ejecute la compra
 //se cambie el estdado
 
  const sumar = ()=>{
    if (count < stock){
  setCount(count + 1)
}
}

const resta = ()=> {
  if(count >0){
  setCount(count-1)
}
  }
 
const ejecutarCompra = ()=>{
  onAdd(count)
}
    
console.log("ItemCount")

return (
  <>
    <div>
        <button className='btn btn-danger'  onClick={resta} disabled={count === 0}>-</button>
        {/* con disabled le estoy diciendo al contador que se detenga en 0 */}
        <span className='btn'>{count}</span> {/*  este span muestra un resultado */}
    
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra} disabled={count === 0 || stock === 0 }>Comprar</button>
    </>
  )

}
export default ItemCount

