//es un un componente que tiene que retornar a un carrito de compra
import { MdOutlineAddShoppingCart } from "react-icons/md"
import Badge from "react-bootstrap/Badge"
const CartWidget = ()=>{
    return
    <div>
        <MdOutlineAddShoppingCart fontSize={"2rem"} color="blueviolet"/> 
         <Badge pill bg="secondary" color="black">1</Badge>
    </div>
} 
export default CartWidget
