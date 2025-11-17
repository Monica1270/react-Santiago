import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', color:'success'}}>
        <Spinner animation="grow" variant="warning" />
    </div>
  )
}

export default LoaderComponent
// este componente da advertencias
