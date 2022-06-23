import "./Inicio.css";

export default function footer(){
    return(
        <div className="general-window-container">
            <div id="Inicio-container" className="content-container">
                <div id="inicioHeader">
                    <h1 className="title-section" id ="title-section-inicio">INICIO</h1>
                    <hr className="title-hr"/>
                    <p className="paragraphInicio" id ="firstParagraphInicio">Esta es la seccion de Inicio</p>
                </div>
                <div id="inicioSummaryContainerAll">
                    <div className="inicioSummaryContainerOne" id="inicioImageMisionContainer">
                        <h3>NUESTRA MISION</h3>
                        <div className="inicioImageContainer">
                            <img src="https://static.wixstatic.com/media/2dd270_a64da7f8c0e040bb8c565b1da607e480~mv2.png/v1/fill/w_280,h_394,al_c,lg_1,q_85,enc_auto/MISION.png" alt="MisionImg"/>
                        </div>
                    </div>
                    <hr className="iniciohr"/>
                    <div className="inicioSummaryContainerOne" id="inicioFSM">
                        <h5>Afiliados a la Federacion Sindical Mundial</h5>
                        <div>
                            <div className="inicioImageContainer" id="inicioImageFMSContainer">
                                <img src="https://www.trabajadores.cu/wp-content/uploads/2020/09/FSM-750x465-2-408x272.jpg" alt="Logo Federacion Sindical Mundial" id="FSMLogo" />
                                <a href="http://www.wftucentral.org/tag/fsm/page/6/?lang=es" className="InicioTextOverImg">
                                    http://www.wftucentral.org/tag/fsm/page/6/?lang=es
                                </a>
                            </div>
                            <div className="inicioInfoContainer">
                                <p id="InicioFSM_Info">
                                    La Federación Sindical Mundial (FSM) es una federación internacional de sindicatos fundada el 3 de octubre de 1945 en París. 
                                    Es una de las organizaciones sindicales internacionales más antigua del mundo. 
                                    Sigue la línea del movimiento sindical de clase y lucha contra el capitalismo y el imperialismo, por una sociedad sin explotación del hombre por el hombre.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="iniciohr"/>
                    <div className="inicioSummaryContainerOne" id="inicioVision">
                        <h3>NUESTRA VISION</h3>
                        <div className="inicioImageContainer">
                            <img src="https://i0.wp.com/www.laescueladeemprendedores.com/wp-content/uploads/2014/04/Visi%C3%B3n.png?fit=560%2C568&ssl=1" alt="VisionImg" id="VisionImg" />
                        </div>
                    </div>
                </div>
                <br /><br />
                <div id="summaryItemsContainer_Inicio">
                    <div className="SummaryContainerItem">
                        <div className="Header_SummaryContainerItem" id="FirstHeader_SummaryContainerItem">
                            <h2 class="title_HeaderSummaryContainerItem">MISION</h2>
                        </div>
                        <div className="bodyItem">
                            <p className="text_bodyItem">
                                Defender los derechos constitucionales de nuestros afiliados frente al
                                empleador, velar por el bienestar social y psicosocial adecuado, la libertad
                                sindical y promover el mejoramiento de las condiciones laborales.
                            </p>
                            <br />
                        </div>
                    </div>
                    <div className="SummaryContainerItem">
                        <div className="Header_SummaryContainerItem" id="SecondHeader_SummaryContainerItem">
                            <h2 class="title_HeaderSummaryContainerItem">FEDERACION SINDICAL MUNDIAL</h2>
                        </div>
                        <div className="bodyItem">
                            <p className="text_bodyItem" id="Second_textBodyItem">
                                La Federación Sindical Mundial (FSM) es una federación internacional de sindicatos fundada el 3 de octubre de 1945 en París. 
                                Es una de las organizaciones sindicales internacionales más antigua del mundo. 
                                Sigue la línea del movimiento sindical de clase y lucha contra el capitalismo y el imperialismo, por una sociedad sin explotación del hombre por el hombre.
                            </p>
                            <br />
                        </div>
                    </div>
                    <div className="SummaryContainerItem">
                        <div className="Header_SummaryContainerItem" id="ThirdHeader_SummaryContainerItem">
                            <h2 class="title_HeaderSummaryContainerItem">VISION</h2>
                        </div>
                        <div className="bodyItem">
                            <p className="text_bodyItem">
                            Ser una organización sindical moderna, prospera y altruista, creando una
                            cultura sindical que sea reconocida en el ámbito laboral nacional e
                            internacional.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div id="buttonMoreInfoContainer">
                    <a href="/QuienesSomos">
                        <button>
                            <div className="insideButtonInfo">
                                <div id="TextbuttonMoreInfo">
                                    ¡Conoce más acerca de nuestra organizacion!
                                </div>
                                <div id="ArrowbuttonMoreInfo">
                                    <i className="fas fa-solid fa-arrow-right"/>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

// function textOverImg() {
//     document.addEventListener("DOMContentLoaded", function () { 
//         if (document.getElementById("FSMLogo").style.opacity === 0.8) {
//             console.log("fghghf");
//             alert("kdskasd");
//         } else{
//             console.log("jdfsd")
//             alert("jeje");
//         }
//     });
// }
// textOverImg();



// document.addEventListener("DOMContentLoaded", function () { 
//     document.getElementById("FSMLogo").addEventListener('mouseover', function () {
//         document.getElementById("InicioTextOverImg").style.display = "block";
//         document.getElementById("FSMLogo").style.opacity = 0.8;
//     })
// });



// const showDetalles = (event) => {
//     (event.currentTarget).find('.InicioTextOverImg').css({
//       "display": "flex", 
//       "left": `${event.clientX + 20}px`,
//       "top": `${event.clientY + 20}px`
//     });
//   }
  
//   // manejador para mouseleave
//   const hideDetalles = (event) => {
//     (event.currentTarget).find('.InicioTextOverImg').css({"display": "none"});
//   }
  
//   ('#FSMLogo').hover(showDetalles, hideDetalles);