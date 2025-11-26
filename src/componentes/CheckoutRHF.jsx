import React, { useContext, useState } from 'react'
import { CartContext } from '../contex/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase.jsx'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutRHF = () => {
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clear } = useContext(CartContext)
    const {register, handleSubmit, formState:{error}, getValues } = useForm()

    const finalizarCompra = (dataForm) => {

            let order ={
            comprador: {
                name:dataForm.name,
                lastname:dataForm.lastname,
                adress:dataForm.adress,
                email:dataForm.email,
            },
            compras: cart,
            total: total(),
            fecha: serverTimestamp()
            }

        const ventas = collection(db, "orders")
        addDoc(ventas, order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
.catch((error)=>console.log(error))

}    

  if(!cart.length && !orderId){
    return <EmptyCart/>
    } 


    return (
        <>
        {
            orderId
            ? <div>
            <h2>Muchas gracias por su compra</h2>
            <h4>Su orden es: {orderId}</h4>
            <Link className='btn btn-secondary' to='/'>Volver a Home</Link>
            </div>
            :<div>
            <h1>Complete con sus datos</h1>
            
            <form className='p-4 border rounded shadow-sm bg-ligh'oneSubmit={handleSubmit(finalizarCompra)} >
                <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' {...register("name", {required:true, minLength:3})} />
                {error?.name?.type === "required" && <span style={{color:"red", fontWeight:"bold"}}>El nombre es un campo requerido.</span>}
                {error?.name?.type === "minLength" && <span style={{color:"red", fontWeight:"bold"}}>El nombre debe contener al menos 3 caracteres.</span>}
                
                <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido'{...register("lastname", {required:true, minLength:2})}/>
                {error?.lastname?.type === "required" && <span style={{color:"red", fontWeight:"bold"}}>El apellido es un campo requerido.</span>}
                {error?.lastname?.type === "minLength" && <span style={{color:"red", fontWeight:"bold"}}>El apellido debe contener al menos 2 caracteres.</span>}
                
                <input className='form-control' name='adress' type='text' placeholder='Ingresa tu dirección'{...register("adress", {required:true, minLength:9, maxLength:30})}/>
                {error?.adress?.type === "required" && <span style={{color:"red", fontWeight:"bold"}}>La dirección es un campo requerido.</span>}
                {error?.adress?.type === "minLength" && <span style={{color:"red", fontWeight:"bold"}}>La dirección debe contener al menos 9 caracteres.</span>}
                {error?.adress?.type === "maxLength" && <span style={{color:"red", fontWeight:"bold"}}>La dirección es demasiada larga.</span>}
                
                <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo'{...register("email", {required:true})} />
                {error?.email?.type === "required" && <span style={{color:"red", fontWeight:"bold"}}>Por favor complete el campo de mail.</span>}
                
                
                <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo'{...register("secondmail", {required:true, validate:{equalsMails: mail2=> mail2 === getValues().email}})}/>
                {error?.secondemail?.type === "required" && <span style={{color:"red", fontWeight:"bold"}}>Por favor complete el campo de mail.</span>}
                {error?.secondemail?.type === "equalsMails" && <span style={{color:"red", fontWeight:"bold"}}>Los correos no coinciden.</span>}
                <button type='submit' className='btn btn-secondary'>Completar Compra</button>
            </form>
        </div>
        }

        </>
    )
}
export default CheckoutRHF
