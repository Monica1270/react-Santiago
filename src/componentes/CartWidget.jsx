//es un un componente que tiene que retornar a un carrito de compra
import { MdOutlineAddShoppingCart } from "react-icons/md"
import Badge from "react-bootstrap/Badge"
const CartWidget = ()=>{
    return(
        /* al return no le puse los parentesis y no podia ver el carrito. cuando le puse los parentesis recien ahi pude verlo */
    <div>
        <MdOutlineAddShoppingCart fontSize={"2rem"} color="#136c43ff"/> 
         <Badge pill bg="secondary" color="black">1</Badge>
    </div>
    )
} 
export default CartWidget
