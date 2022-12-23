import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Asodian_logo from "./../../Assets/img/Logo_asodian.jpg"

window.onload = setFocus; // Cada vez que se recargue la pagina se sabe en que seccion esta para resaltarla 

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

const tabs = document.getElementsByClassName("inbtnNav");

function setFocus() {
    for (let i = 0; i < tabs.length; i++) {
        let currentSection = "";
        //Recorre cada una de las pestañas para ver cual es la actual acorde con la url.
        for (let j = 0; j < (tabs[i].textContent).length; j++) 
            if (tabs[i].textContent.charCodeAt(j) > 64 && tabs[i].textContent.charCodeAt(j) < 123) 
                currentSection += tabs[i].textContent[j];

        if(window.location.toString().includes(currentSection) || 
            // Condition below is used to check if the current section is Inicio, because without this it doesnt work due to the url of Inicio section doesnt have the word "inicio" in it.
          (window.location.toString()[window.location.toString().length-1] === "/" && currentSection === "Inicio")
        ){
            tabs[i].style.fontWeight = "bold";
            tabs[i].style.textDecoration = "overline";
            // tabs[i].style.backgroundColor = "#00b406";
            tabs[i].style.color = "orange";
        } else{
            tabs[i].style.fontWeight = "500";
            tabs[i].style.textDecoration = "none";
            // tabs[i].style.backgroundColor = "transparent";
            tabs[i].style.color = "white";
        }
    }
}

function hoverTabs(index, mouseOver){
    let currentSection = "";

    for (let i = 0; i < (tabs[index].textContent).length; i++) 
        if (tabs[index].textContent.charCodeAt(i) > 64 && tabs[index].textContent.charCodeAt(i) < 123) 
            currentSection += tabs[index].textContent[i];

    if (mouseOver) {
        tabs[index].style.color = "rgb(255, 230, 87)";
    } else{ // mouseOut
        // Solo pone naranja la seccion actual.
        if (!window.location.toString().includes(currentSection) &&
            // Condition below is used to check if the current section is Inicio, because without this it doesnt work due to the url of Inicio section doesnt have the word "inicio" in it.
            !(window.location.toString()[window.location.toString().length-1] === "/" && currentSection === "Inicio")
        )
            tabs[index].style.color = "white";
        else
            tabs[index].style.color = "orange";
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
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(0, true)} onMouseOut={(e) => hoverTabs(0, false)}>
                        <Link to="/" className="inbtnNav">Inicio</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(1, true)} onMouseOut={(e) => hoverTabs(1, false)}>
                        <Link to="/Historia" className="inbtnNav">Historia</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(2, true)} onMouseOut={(e) => hoverTabs(2, false)}>
                        <Link to="/QuienesSomos" className="inbtnNav">¿Quienes Somos?</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(3, true)} onMouseOut={(e) => hoverTabs(3, false)}>
                        <Link to="/JuntaDirectiva" className="inbtnNav">Junta Directiva</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(4, true)} onMouseOut={(e) => hoverTabs(4, false)}>
                        <Link to="/Galeria" className="inbtnNav">Galeria</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(5, true)} onMouseOut={(e) => hoverTabs(5, false)}>
                        <Link to="/Afiliacion" className="inbtnNav">Afiliacion</Link>
                    </button>
                    <button className="btnNav" onClick={(e) => setFocus()} onMouseOver={(e) => hoverTabs(6, true)} onMouseOut={(e) => hoverTabs(6, false)}>
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