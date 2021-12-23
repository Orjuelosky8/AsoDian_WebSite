import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Components/Inicio/Inicio';
import History from './Components/Historia/Historia';
import Nosotros from './Components/Nosotros/Nosotros';
import JuntaDirectiva from './Components/JuntaDirectiva/JuntaDirectiva';
import Convenios from './Components/Convenios/Convenios';
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
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Historia" element={<History/>}/>
        <Route path="/Quienes-Somos" element={<Nosotros/>}/>
        <Route path="/JuntaDirectiva" element={<JuntaDirectiva/>}/>
        <Route path="/Convenios" element={<Convenios/>}/>
        <Route path="/Afiliacion" element={<Afiliacion/>}/>
        <Route path="/Archivos" element={<Archivos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Front;