import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import Main from './Paginas/Main/Main';
import Rino from "./Paginas/rino/rino"
import Lipo from "./Paginas/lipo/lipo"
import Blefaroplastia from './Paginas/blefaroplastia/Blefaroplastia';
import Lifting from './Paginas/Lift/Lift';
import AumentoMamario from './Paginas/aumento/Aumento';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Main />}/> 
            <Route path='/Rinoplastia' element={<Rino />}/>
            <Route path='/Aumento-Mamario' element={<AumentoMamario />}/>
            <Route path='/Liposuccion' element={<Lipo />}/>
            <Route path='/Blefaroplastia' element={<Blefaroplastia />}/>
            <Route path='/Lifting' element={<Lifting />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
