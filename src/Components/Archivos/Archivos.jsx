import "./Archivos.css";
import BoletinSindical1 from "./../../Assets/pdf/formato_afiliacion_asodian.pdf"
import PreviewBoletinSindical1 from "./../../Assets/img/preview-pdf-boletinsindical2.PNG"


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


export default function footer(){
    return(
        <div className="general-window-container">
            <div id="Archivos-container" className="content-container">
                <div class="title-section" id = "title-section-files">ARCHIVOS</div>
                <hr className="title-hr"/>
                <div className="menu-and-files-container">
                    <div id="menu-container">
                        <div id="div-menu">
                            <div id="title-menu">
                                ¿Deseas ver alguna sección en especifico?
                                <br/>Selecciona aqui la que desees:
                            </div>
                            <div className="options-menu">
                                <ol>
                                    <li><a href="#boletin-sindical-files">Boletin Sindical</a></li>
                                    <li><a href="#asamblea-files">Asamblea</a></li>
                                    <li><a href="#fsm-files">Federacion Sindical Mundial</a></li>
                                    <li><a href="#mesa-negoc-files">Mesa de Negociacion</a></li>
                                    <li>Enero 2022</li>
                                    <li>Febrero 2022</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="all-groups-files-container">
                        <div className="title-group-files" id="boletin-sindical-files"  >
                            <h3><hr/>★ ----  Boletin Sindical  ---- ★<hr/></h3>
                        </div>
                        <div className="group-files-container">
                            <div className="file-container boletin-sindical-file">
                                <div className="main-content-container-file">
                                    <embed src={BoletinSindical1} type="" className="pdf-container"/>
                                    <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #1</h3>
                                    <p>Una aproximación a la realidad actual de los estudiantes universitarios que se vive desde que inicio la pandemia por COVID-19.</p>
                                    <button className="button-download-file">
                                        <a href="./Parcial_3.pdf" target="_blank">Descargar archivo...</a>
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
                            <div className="file-container  boletin-sindical-file">
                                <div className="main-content-container-file">
                                    <div className="file-preview">
                                        <img src={PreviewBoletinSindical1} type="" className="pdf-container" alt=""/>
                                        <button className="view-document-button">
                                            <a href={BoletinSindical1} targer="_blank">
                                                Ver el documento
                                            </a>
                                        </button>
                                    </div>
                                    <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                    <p>La crisis para los empleadores que se esta viviendo en estados unidos: "Nadie quiere trabajar debido a los subsidios que da el gobierno, es suficiente para las personas para vivir bien".
                                    </p>
                                    <button className="button-download-file">
                                        <a href={BoletinSindical1}>Visualizar archivo</a>
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
                            <div className="file-container  boletin-sindical-file">
                                <div className="main-content-container-file">
                                    <div className="file-preview">
                                        <img src={PreviewBoletinSindical1} type="" className="pdf-container" alt=""/>
                                        <button className="view-document-button">
                                            <a href={BoletinSindical1} targer="_blank">
                                                Ver el documento
                                            </a>
                                        </button>
                                    </div>
                                    <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                    <p>La crisis para los empleadores que se esta viviendo en estados unidos: "Nadie quiere trabajar debido a los subsidios que da el gobierno, es suficiente para las personas para vivir bien".
                                    </p>
                                    <button className="button-download-file">
                                        <a href={BoletinSindical1}>Visualizar archivo</a>
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
                            <div className="file-container boletin-sindical-file">
                                <iframe src={BoletinSindical1} frameborder="0" className="iframe-pdf" title="Boletin Sindical 3"/>
                                <h3>Boletin Sindical #1</h3>
                                <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                    <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                                </p>
                                <button className="button-download-file">
                                    <a href="./Parcial_3.pdf">Visualizar archivo</a>
                                </button>
                            </div>
                            <div className="file-container boletin-sindical-file">
                                <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                                <h3>Boletin Sindical #1</h3>
                                <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                    <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                                </p>
                                <button className="button-download-file">
                                    <a href="./Parcial_3.pdf">Visualizar archivo</a>
                                </button>
                            </div>
                            <div className="file-container boletin-sindical-file">
                                <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                                <h3>Boletin Sindical #1</h3>
                                <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                    <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                                </p>
                                <button className="button-download-file">
                                    <a href="./Parcial_3.pdf">Visualizar archivo</a>
                                </button>
                            </div>
                        </div>
                        <div className="title-group-files" id="asamblea-files">
                            <h3>
                                ★ ---- Asambleas ---- ★
                            </h3>
                        </div>
                        <div className="group-files-container">
                        <div className="file-container  boletin-sindical-file">
                            <div className="main-content-container-file">
                                <div className="file-preview">
                                    <img src={PreviewBoletinSindical1} type="" className="pdf-container" alt=""/>
                                    {/* <button className="view-document-button">
                                        <a href={BoletinSindical1} targer="_blank">
                                            Ver el documento
                                        </a>
                                    </button> */}
                                </div>
                                <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                <p>La crisis para los empleadores que se esta viviendo en estados unidos: "Nadie quiere trabajar debido a los subsidios que da el gobierno, es suficiente para las personas para vivir bien".
                                </p>
                                <button className="button-download-file">
                                    <a href={BoletinSindical1}>Visualizar archivo</a>
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
                        <div className="file-container  boletin-sindical-file">
                            <div className="main-content-container-file">
                                <div className="file-preview">
                                    <img src={PreviewBoletinSindical1} type="" className="pdf-container" alt=""/>
                                    {/* <button className="view-document-button">
                                        <a href={BoletinSindical1} targer="_blank">
                                            Ver el documento
                                        </a>
                                    </button> */}
                                </div>
                                <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                <p>La crisis para los empleadores que se esta viviendo en estados unidos: "Nadie quiere trabajar debido a los subsidios que da el gobierno, es suficiente para las personas para vivir bien".
                                </p>
                                <button className="button-download-file">
                                    <a href={BoletinSindical1}>Visualizar archivo</a>
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
                        <div className="file-container  boletin-sindical-file">
                            <div className="main-content-container-file">
                                <div className="file-preview">
                                    <img src={PreviewBoletinSindical1} type="" className="pdf-container" alt=""/>
                                    {/* <button className="view-document-button">
                                        <a href={BoletinSindical1} targer="_blank">
                                            Ver el documentoasda
                                        </a>
                                    </button> */}
                                </div>
                                <h3>↓ - - - - - - - - - - - - ↓ <br/> Boletin Sindical #2</h3>
                                <p>La crisis para los empleadores que se esta viviendo en estados unidos: "Nadie quiere trabajar debido a los subsidios que da el gobierno, es suficiente para las personas para vivir bien".
                                </p>
                                <button className="button-download-file">
                                    <a href={BoletinSindical1}>Visualizar archivo</a>
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
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                    </div>
                    <div className="title-group-files" id="fsm-files">
                        <h3>
                            ★ ---- Federacion Sindical Mundial (FSM) ---- ★
                        </h3>
                    </div>
                    <div className="group-files-container">
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf#view=FitH&toolbar=0" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf" target="_blank">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                        <div className="boletin-sindical-file">
                            <embed src="./Parcial_3.pdf" type="" className="pdf-container"/>
                            <h3>Boletin Sindical #1</h3>
                            <p>Aqui encontrara el boletin Sindical del dia 10/01/2022
                                <br/>Realizado por: <span className="author-file">Manuel Gantiva</span>
                            </p>
                            <button className="button-download-file">
                                <a href="./Parcial_3.pdf">Visualizar archivo</a>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}