import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
function NavbarBS() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
    
      <Container >
        <Navbar.Brand as={NavLink} to='/' >
          <img src="../logo-santiago.jpg" alt="logo" style={{ width: "7rem" }} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/zapatillas' >Zapatillas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/ropa deportiva' >
                Ropa deportiva
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/ropa cuadros' >Cuadros</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
            <CartWidget />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;