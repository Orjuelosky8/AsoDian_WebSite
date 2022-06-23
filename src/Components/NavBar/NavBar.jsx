import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Asodian_logo from "./../../Assets/img/Logo_asodian.jpg"

function btn_menu() {
    // document.getElementById("btnMenu").addEventListener("click", () => {
    hideFooter();
    if(document.getElementById("opciones-nav").style.display === "none"){
        document.getElementById("opciones-nav").style.display = "flex";
        document.getElementById("hide-menu-options").style.display = "block";
        document.getElementById("show-menu-options").style.display = "none";
    }else{
        document.getElementById("opciones-nav").style.display = "none";
        document.getElementById("show-menu-options").style.display = "block";
        document.getElementById("hide-menu-options").style.display = "none";
    }
    // })
}

function hideFooter(){
    if(document.getElementById("opciones-nav").style.display === "none"){
        // document.getElementById("Footer-container").style.opacity = 0.25;
        document.getElementById("Footer-container").style.display = "none";
    } else{
        // document.getElementById("Footer-container").style.opacity = 1;
        document.getElementById("Footer-container").style.display = "block";
    }
}

// Aun no se si usarlo aqui
// function setContainerHeight() {
//     var browserHeight = window.innerHeight;
//     var elemFooter = document.getElementById("Footer-container");
//     var footerHeight = elemFooter.clientHeight;
//     var idealHeight = browserHeight - footerHeight - 99; // no 100 para dejar el margen de los decimales y que no se vea ninguna linea blanca abajo.
//     var viewElem = document.getElementsByClassName("general-window-container");

//     for (var i = 0; i < viewElem.length; i++) {
//         viewElem[i].style.minHeight = idealHeight+"px";
//     }
// }

class NavBar extends React.Component {
    render(){
        return( 
            <div className="container-nav">
                <div className="left-side">
                    <img src={Asodian_logo} alt="Logo de ASODIAN" className="Logo"/>
                    <p className="title-container"><span className="title"><Link to="/" className="title">ASODIAN</Link></span> 
                    <br /><span className="Razon-social">Asociacion Sindical de Funcionarios de la DIAN</span></p>
                </div>
                <div id="opciones-nav">
                    <button className="btnNav">
                        <Link to="/" className="inbtnNav">Inicio</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/Historia" className="inbtnNav">Historia</Link>
                    </button>
                    <button className="btnNav">
                        <Link to="/QuienesSomos" className="inbtnNav">¿Quienes Somos?</Link>
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
                <button id="btnMenu" onClick={btn_menu}>
                    <i className="fas fa-bars fa-2x" id="show-menu-options"></i>
                    <i className="fas fa-times fa-2x" id="hide-menu-options"></i>
                </button>
            </div>
    )};
}

export default NavBar;