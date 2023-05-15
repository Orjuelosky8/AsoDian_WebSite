import "./Archivos.css";
/* IMGS */ 
//Comunicados
import PreviewCom1 from "./../../Assets/img/Archivos_Preview/Comunicados/c1.png"
import PreviewCom2 from "./../../Assets/img/Archivos_Preview/Comunicados/c2.png"
import PreviewCom3 from "./../../Assets/img/Archivos_Preview/Comunicados/c3.png"
import PreviewCom4 from "./../../Assets/img/Archivos_Preview/Comunicados/c4.png"
import PreviewCom5 from "./../../Assets/img/Archivos_Preview/Comunicados/c5.png"
import PreviewCom6 from "./../../Assets/img/Archivos_Preview/Comunicados/c6.png"
// Boletines Sindicales
import PreviewBS1 from "./../../Assets/img/Archivos_Preview/BoletinesSindicales/bs1.png"
import PreviewBS2 from "./../../Assets/img/Archivos_Preview/BoletinesSindicales/bs2.png"
import PreviewBS3 from "./../../Assets/img/Archivos_Preview/BoletinesSindicales/bs3.png"
import PreviewBS4 from "./../../Assets/img/Archivos_Preview/BoletinesSindicales/bs4.png"
//Asmablea
import PreviewA1 from "./../../Assets/img/Archivos_Preview/Asamblea/borrador.png"
//FSM
import PreviewFSM1 from "./../../Assets/img/Archivos_Preview/FSM/borrador.png"
//Mesa negociacion
import PreviewMn1 from "./../../Assets/img/Archivos_Preview/MesaNegociacion/borrador.png"

/* PDFS */
// Comunicados


// var button_preview  = document.getElementsByClassName("file-preview");
// var number_container = document.getElementsByClassName("view-document-button")

// for (var i = 0; i < number_container.length; i++) {
//     console.log(number_container[i]);
//     console.log("dfaf");
//     button_preview[i].addEventListener("mouseover", function(e) {
//         number_container[i].style.display="block";
//     })
//     button_preview[i].addEventListener("mouseout", function(e) {
//         number_container[i].style.display="none";
//     })
// }


export default function files(){
    return(
        <div className="general-window-container">
            <div id="Archivos-container" className="content-container">
                <div className="title-section" id = "title-section-files">ARCHIVOS</div>
                <hr className="title-hr"/>
                <div className="menu-and-files-container">
                    <div id="menu-container">
                        <div id="div-menu">
                            <div id="title-menu">
                                <span>
                                    ¿Deseas dirigirte a revisar alguna sección en especifico?
                                </span>
                                <br/>Selecciona aquí la categoría que desees:
                            </div>
                            <div id="options-menu">
                                <ol>
                                    <li><a href="#comunicados" onClick={(e) => generatePadding(0)}>Comunicados</a></li>
                                    <li><a href="#boletinesSindicales" onClick={(e) => generatePadding(1)}>Boletin Sindical</a></li>
                                    <li><a href="#asambleas" onClick={(e) => generatePadding(2)}>Asamblea</a></li>
                                    <li><a href="#fsm" onClick={(e) => generatePadding(3)}>Federacion Sindical Mundial</a></li>
                                    <li><a href="#mesaNegociacion" onClick={(e) => generatePadding(4)}>Mesa de Negociacion</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="all-groups-files-container">
                        <div className="groupFilesContainer" id="comunicados">
                            <div className="title-group-files">
                                <h3><hr/>★ ----  COMUNICADOS  ---- ★<hr/></h3>
                            </div>
                            <div className="allFilesGroup">
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #1</h3>
                                            <p>
                                                Una aproximación a la realidad actual de los estudiantes universitarios que se vive desde que inicio la pandemia por COVID-19.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="c.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom2} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #2</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./Parcial_3.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom3} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #3</h3>
                                            <p>
                                                
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./Parcial_3.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom4} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #4</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./Parcial_3.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom5} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #5</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./Parcial_3.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewCom6} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - ↓ <br/> Comunicado #6</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./Parcial_3.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="groupFilesContainer" id="boletinesSindicales">
                            <div className="title-group-files">
                                <h3><hr/>★ ----  BOLETINES SINDICALES  ---- ★<hr/></h3>
                            </div>
                            <div className="allFilesGroup">
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewBS1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #1</h3>
                                            <p>
                                                Una aproximación a la realidad actual de los estudiantes universitarios que se vive desde que inicio la pandemia por COVID-19.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewBS2} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewBS3} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewBS4} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="groupFilesContainer" id="asambleas">
                            <div className="title-group-files">
                                <h3><hr/>★ ---- ASAMBLEAS ---- ★<hr/></h3>
                            </div>
                            <div className="allFilesGroup">
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewA1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - ↓ <br/>Asamblea #1</h3>
                                            <p>
                                                Una aproximación a la realidad actual de los estudiantes universitarios que se vive desde que inicio la pandemia por COVID-19.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewA1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - ↓ <br/>Asamblea #2</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="groupFilesContainer" id="fsm">
                            <div className="title-group-files">
                                <h3><hr/>★ ---- FEDERACION SINDICAL MUNDIAL (FSM) ---- ★<hr/></h3>
                            </div>
                            <div className="allFilesGroup">
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewFSM1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - ↓ <br/> FSM #1</h3>
                                            <p>
                                                Una aproximación a la realidad actual de los estudiantes universitarios que se vive desde que inicio la pandemia por COVID-19.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                        <div className="groupFilesContainer" id="mesaNegociacion">
                            <div className="title-group-files">
                                <h3><hr/>★ ---- MESA DE NEGOCIACION ---- ★<hr/></h3>
                            </div>
                            <div className="allFilesGroup">
                                <div className="file-container">
                                    <div className="main-content-container-file">
                                        <div className="file-preview">
                                            <img src={PreviewMn1} type="" alt=""/>
                                        </div>
                                        <div className="file-summary">
                                            <h3>↓ - - - - - - - - - - - - - - ↓ <br/>Mesa de Negociacion #1</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro dolores, maxime possimus hic ab neque eaque aspernatur explicabo, itaque aliquid, illo repellat corrupti deserunt voluptatum minus reprehenderit quos natus!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fileContainer-footer">
                                        <div className="file-download">
                                            <button className="button-download-file">
                                                <a href="./1Plan_Estudios_Nuevo.pdf" target="_blank">DESCARGAR<br/>ARCHIVO</a>
                                            </button>
                                        </div>
                                        <div className="bibliografia-document">
                                            <ol>
                                                <li>
                                                    <abbr title="Autor del documento" className="author-file">Manuel Gantiva</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Fecha del Documento" className="date-file">12/01/2021</abbr>
                                                </li>
                                                <hr className="separador-bibliografia"/>
                                                <li>
                                                    <abbr title="Número de páginas" className="pages-file">3 páginas</abbr>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

// w

// window.onload = () => {
    
//     // const archivosXgrupo = document.getElementsByClassName("allFilesGroup");

//     // for (let i = 0; i < archivosXgrupo.length; i++) {
//     //     if (archivosXgrupo[i].childElementCount === 0) {
//     //         archivosXgrupo[i].textContent = "No hay archivos para mostrar en esta seccion...";
//     //         archivosXgrupo[i].style.display = "block";
//     //         archivosXgrupo[i].style.color = "red";
//     //         archivosXgrupo[i].style.fontSize = "15px";
//     //         archivosXgrupo[i].style.fontStyle = "oblique";
//     //         archivosXgrupo[i].style.fontFamily = "cursive";
//     //         archivosXgrupo[i].style.margin = "8px auto 8px auto";
//     //         archivosXgrupo[i].style.padding = "8px";
//     //         archivosXgrupo[i].style.borderRadius = "10px";
//     //         archivosXgrupo[i].style.backgroundColor = "beige";
//     //         archivosXgrupo[i].style.width = "40%";
//     //         archivosXgrupo[i].style.textAlign = "center";
//     //     }
//     // }
    
//     // Se agregan EventListeners a los items del Menu
//     // const itemsMenu = document.getElementById("options-menu").children[0];
    
//     // for (let i = 0; i < itemsMenu.childElementCount; i++) {
//     //     itemsMenu.children[i].children[0].addEventListener("click", () => {generatePadding(i)}, false)
//     // }

//     // dowcument.getElementById("Archivos-container").addEventListener("scroll", () => {generatePadding(-1)}, false);
// }

function generatePadding(index){
    const groupsFiles = document.getElementsByClassName("groupFilesContainer");

    for (let i = 0; i < groupsFiles.length; i++) {
        if (i === index) {
            groupsFiles[i].style.paddingTop = "80px";
            groupsFiles[i].style.paddingBottom = "20px";
        } else{
            groupsFiles[i].style.paddingTop = "0px";
            groupsFiles[i].style.paddingBottom = "0px";
        }
    }
}