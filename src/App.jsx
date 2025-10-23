
import './App.css'
import NavbarBs from './componentes/NavbarBS'
import ItemListContairner from "./componentes/ItemListContainer"
import ItemCount from "./componentes/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

console.log("App")
  return (
    <>
   <NavbarBs/>
   <ItemListContairner saludo="Bien venido a la app de Santiago"/>
   <ItemCount stock={7}/>  
    </>
  )
}

export default App
