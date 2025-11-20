//es un un componente que tiene que retornar a un carrito de compra
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { Badge } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../contex/CartContext"

const CartWidget = ()=>{
    const {cartQuantity}= useContext(CartContext)
   
    return(
        /* al return no le puse los parentesis y no podia ver el carrito. cuando le puse los parentesis recien ahi pude verlo */
    <>
        <MdOutlineAddShoppingCart   className="cart-widget " fontSize={"2rem"} color="#2c32c5ff"/> 
  <Badge pill bg="secondary" color="black">{cartQuantity()}</Badge>
    </>
    )
} 
export default CartWidget
