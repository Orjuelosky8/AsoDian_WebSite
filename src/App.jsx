import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Components/Inicio/Inicio';
import History from './Components/Historia/Historia';
import Nosotros from './Components/AboutUs/AboutUs';
import JuntaDirectiva from './Components/JuntaDirectiva/JuntaDirectiva';
import Galeria from './Components/Galeria/Galeria';
import Afiliacion from './Components/Afiliacion/Afiliacion';
import Archivos from './Components/Archivos/Archivos'
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/Notfound';

// export default class App extends React.Component {
function Front(){
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/Inicio" element={<Navigate  to="/"/>} /> {/* Se usa redirect */}
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Historia" element={<History/>}/>
        <Route path="/QuienesSomos" element={<Nosotros/>}/>
        <Route path="/JuntaDirectiva" element={<JuntaDirectiva/>}/>
        <Route path="/Galeria" element={<Galeria/>}/>
        <Route path="/Afiliacion" element={<Afiliacion/>}/>
        <Route path="/Archivos" element={<Archivos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Front;