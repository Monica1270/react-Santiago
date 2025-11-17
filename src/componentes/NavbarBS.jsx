import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import"../css/Navega.css"
import { NavLink } from 'react-router-dom';  


function NavbarBs() {
  return (
    <Nav className='navbar' 
      /* activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} */ /*también recomendaría quitar el evento onSelect del navbar con el alert porque hace que la app se recargue, */
    >
      <Nav.Item className='nav-item'>
        <Nav.Link as={NavLink} to='/'>
        <img src="../logo-santiago.jpg" alt="logo" style={{width:"7rem"}} className="logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item'>
        <Nav.Link as={NavLink} to='/categoria/zapatillas'  className=' nav-pills '>Zapatillas</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item'>
        <Nav.Link as={NavLink} to='/categoria/ropa deportiva'  className='nav-pills'>Ropa deportiva</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item'>
        <Nav.Link s={NavLink} to='/categoria/ropa cuadros' className='nav-pills'>Cuadros</Nav.Link>
      </Nav.Item>
      <div className='cart-widget'>
      <CartWidget/>
      </div>
  
    </Nav>
  );
}


export default NavbarBs;