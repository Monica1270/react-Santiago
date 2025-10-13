import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

function NavbarBs() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
        <img src="../logo-santiago.jpg" alt="logo" style={{width:"7rem"}} className="rounded-5" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='nav nav-pills nav-fill'>Zapatillas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='nav nav-pills nav-fill'>Ropa deportiva</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" className='nav nav-pills nav-fill'>
          Cuadros
        </Nav.Link>
      </Nav.Item>
      <CartWidget/>
    </Nav>
  );
}


export default NavbarBs;