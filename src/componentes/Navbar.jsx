import "../componentes/CSS/Navbar.css" 
/* hasta que no puse import no podía ver la decoracion del css */
import CartWidget from "./CartWidget"

const Navbar = ()=> {
    return(
        <nav className="nav-Conatainer">
            
            <a className= "a-nav" href="">
            <img className="logo" src="../logo-santiago.jpg" alt="logo" />
            </a>
            <a className="a-nav" href="">Zapatillas</a>
            <a className="a-nav" href="">Ropa deportiva</a>
            <a className="a-nav" href="">Cuadros</a>
            <CartWidget/>
        </nav>
        
        
    )
}
export default Navbar