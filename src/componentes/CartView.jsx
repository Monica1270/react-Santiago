import React, {useContext} from 'react'
import {CartContext} from '../context/createContext'
import { Link } from 'react-router-dom'
/* import { BsFillCartCheckFill } from "react-icons/bs"
import { MdDeleteForever } from "react-icons/md" */
const CartView = ()=> {
    const {cart, removoItem, clear, total}= useContext(CartContext)
    return(
        <div>
                <h1> Tu carrito </h1>
        <div>
        {
            cart.map((compra)=>(
                <div key={compra.id} style={{display:'flex', justifyContent:'space-between'}}>
                    <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
                    <span>{compra.name}</span>
                    <span>${compra.precio}</span>
                    <span>cantidad: {compra.quantity}</span>
                    <span>precio final: ${compra.quantity * compra * precio}</span>
                    <button className='btn btn-secundary' onClick={()=> removoItem(compra.id)}></button>
                </div>
            ))
        }
            </div>
            <span>Total a pagar: ${total()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
                <button className='btn btn-danger'onClick={clear}>Vaciar carrito</button>
           <Link className='btn btn-success' to='/checkout'>Terminar</Link>
            </div>
            </div>
    )
}

export default CartView