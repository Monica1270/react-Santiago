//este componente va a ser el encargado de generar la card
//con esto estamos separando responsabilidades

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
    return(
    <div>
           <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={producto.img} style={{width: '10rem', height:'10rem'}} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.descripcion} {producto.tecnica}
        </Card.Text>
        <Card.Text>
         ${producto.precio}.-
        </Card.Text>
          <Card.Text>
         {producto.talle}
        </Card.Text>
          <Card.Text>
         {producto.medida} 
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
   </div>     
    )
}

export default Item