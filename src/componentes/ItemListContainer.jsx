//este es un archivo contenedor a futuro 11-10
// tiene que recibir una props y renderizarla. Este componente lo unico que tiene que retornar 
//una props que sa va a pasar su padre
const ItemListContairner = (props)=> {
    return(
        <div>
            <h1>{props.saludo}</h1>

        </div>
    )
}
export default ItemListContairner