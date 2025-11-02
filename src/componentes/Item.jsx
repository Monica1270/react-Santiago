//este componente va a ser el encargado de generar la card
//con esto estamos separando responsabilidades

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({productos}) => {
    return(
    <div>
           <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={productos.img} style={{width: '10rem', height:'10rem'}} />
      <Card.Body>
        <Card.Title>{productos.name}</Card.Title>
        <Card.Text>
          {productos.descripcion} {productos.tecnica}
        </Card.Text>
        <Card.Text>
         ${productos.precio}.-
        </Card.Text>
          <Card.Text>
         {productos.talle}
        </Card.Text>
          <Card.Text>
         {productos.medida} 
        </Card.Text>
        <Link className='btn btn-secondary' to={`/item/${productos.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
   </div>     
    )
}

export default Item