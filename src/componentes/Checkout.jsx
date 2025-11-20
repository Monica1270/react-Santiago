import React, { useState } from 'react'

const Checkout= () => {
    const [buyer, setBuyer]= useState({})
    const [secondmail,setSecondMail]= useState('')
    const buyerData= (e)=>{
    setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
    })
console.log(buyer)
    const finalizarCompra = (e)=>{

    }
}

  return (
    <div>
        <h1>Complete con sus datos</h1>
        <form className='p-4 border rounded shadow-sm bg-ligh' onSubmit={finalizarCompra}>
            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' onChange={buyerData}/>
            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' onChange={buyerData}/>
            <input className='form-control' name='adress' type='text' placeholder='Ingresa tu dirección' onChange={buyerData}/>
            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' onChange={buyerData}/>
            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' onChange={(e)=>setSecondMail(e.target.value)}/>
            <button type='submit' className='btn btn-secondary'>Completar Compra</button>
        </form>
    </div>
  )
}

export default Checkout
