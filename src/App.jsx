
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './componentes/NavbarBS';
import ItemListContairner from "./componentes/ItemListContainer";
 import ItemCount from "./componentes/ItemCount" 
 import withLogging from './hoc/withLogging' 
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './componentes/Error';
/* componente padre y nos da la funcionalidad de navegar, routes es el agrupador de rutas,
route es el hijo de routes y es para una sola ruta
*/
function App() {
  // utilizacion del hoc
  const ContadorConHoc = withLogging(ItemCount)
  console.log("App")
  return (
    <BrowserRouter>
      <NavbarBs /> {/* de este orden tiene que ir, asi despues se ve de esta forma en el dom */}
      <Routes>
        <Route path='/' element={<ItemListContairner saludo='Bien venido a la app de Santiago'/>} />{/*le estoy diciendo al sistema
        que lo primero que muestre es el listContainer por eso se pone la barra sola*/}
        <Route path='/catergoria/:typeCategoria' element={<ItemListContairner saludo='Bien venido a la app de Santiago'/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} /> {/*en esta ruta le estoy diciendo al sistema
        que muestre cuando el usuario  */}
      <Route path='*' element={<Error/>} />
      </Routes>
    
       <ItemCount stock={7}/>  
   <ContadorConHoc/>
    </BrowserRouter> /* esto seria  como un div
 se recomienda hacerlo en la app y no en main como dice chat
 envolviendo con brow le doy permiso a los tres componentes para realizar la 
 navegacion*/
  )
}

export default App
