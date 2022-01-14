import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Asodian_logo from "./../../Assets/img/Logo_asodian.jpg"

class NavBar extends React.Component {
    render(){
        return( 
            <div className="container-nav">
                <div className="left-side">
                    <img src={Asodian_logo} alt="Logo de ASODIAN" className="Logo"/>
                    <p className="title-container"><span className="title"><Link to="/" className="title">ASODIAN</Link></span> 
                    <br /><span className="Razon-social">Asociacion Sindical de Funcionarios de la DIAN</span></p>
                </div>
                <div className="opciones-nav">
                    <button className="btnNav">
                        <Link to="/" className="inbtnNav">Inicio</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Historia" className="inbtnNav">Historia</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Quienes-Somos" className="inbtnNav">¿Quienes Somos?</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/JuntaDirectiva" className="inbtnNav">Junta Directiva</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Convenios" className="inbtnNav">Convenios</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Afiliacion" className="inbtnNav">Afiliacion</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Archivos" className="inbtnNav">Archivos</Link>
                    </button>
                </div>
                <button class="btnMenu">
                    <i class="fas fa-bars fa-2x"></i>
                </button>
            </div>
    )};
}

export default NavBar;