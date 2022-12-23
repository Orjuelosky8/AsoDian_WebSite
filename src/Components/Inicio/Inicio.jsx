import "./Inicio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import logoAsodian from "./../../Assets/img/Logo_asodian.jpg";
import fsmImg from "./../../Assets/img/Inicio/FSMLogo.jpg";
import misionImg from "./../../Assets/img/Inicio/Mision.png";
import visionImg from "./../../Assets/img/Inicio/Vision.png";
import galleryImg1 from "./../../Assets/img/Gallery/Asodian1.jpg";
import galleryImg2 from "./../../Assets/img/Gallery/Asodian11.jpeg";
import galleryImg3 from "./../../Assets/img/Gallery/Asodian2.jpg";
import galleryImg4 from "./../../Assets/img/Gallery/Asodian7.jpeg";


export default function mainWindow(){
    
    return(
        <div className="general-window-container">
            {/* <!-- <div id="IncioMainImg">
                <img src="" alt=""/>
            </div> --> */}
            <div id="Inicio-container" className="content-container">
                <div id="inicioHeader">
                    <h1 className="title-section" id ="title-section-inicio">INICIO</h1>
                    <hr className="title-hr"/>
                    <br/>
                    <div id="introductionSection_HeaderInicio">
                        <div id="introductionText_HeaderInicio">
                            <p id="paragraphInicio">
                                Bienvenid@ a la Pagina Web de ASODIAN <br/>
                                <span>¡Gracias por Visitarnos!</span>   
                            </p>
                            {/* <!-- <p id="instruccionesWeb">
                                Para cualquier inconveniente
                                A continuacion tambien encontrará las secciones disponibles en esta pestaña de "Inicio", si quiere ver el indice 

                            </p> --> */}
                        </div>
                        {/* <!-- <div id="tableIndex_Inicio">
                            <div id="titleTableContainer_Inicio">

                            </div>
                            <div id="nameSectionsTableContainer_Inicio">

                            </div>
                        </div> --> */}
                    </div>
                </div>
                <div className="betweenContainers">
                    <div className="buttonhr_Inicio1" onClick={ e => displaySubtitle(0)}>
                        <abbr title="Mostrar Subtitulo">&gt;</abbr>
                    </div>
                    <hr/>
                    <div className="buttonhr_Inicio2" onClick={ e => hideSubtitle(0)}>
                        <abbr title="Ocultar Subtitulo">&lt;</abbr>
                    </div>
                </div>
                <div id="firstSection_Inicio">
                    <div className="titleSection_Inicio">
                        <h3 id="firstTitleSection_I">
                            PREÁMBULO:
                        </h3>
                        {/* <!-- <hr className="hrafterTitleSection_I"> --> */}
                    </div>
                    <div id="preambuloContainer_Inicio">
                        <div className="mainInfoPreambulo_Inicio">
                            <p id="firstParagraphPreambuloInicio">
                                Somos la 
                                <span> Asociacion Sindical de Funcionarios de la </span>
                                <i>Direccion de Impuestos y Aduanas Nacionales</i>, 
                                <span>DIAN</span> Colombia
                            </p>
                            <h2>
                                "ASODIAN"
                            </h2>
                            <img src={logoAsodian} alt="Logo ASODIAN" />
                            <p id="secondParagraphPreambuloInicio">
                                Sindicalismo con Unión y Ética
                            </p>
                        </div>
                        <hr/>
                        <div className="objectiveContainerPreambulo_Inicio">
                            <div className="objectiveHeaderContainer">
                                <div className="titleHeaderContainer">
                                    <h2 className="title_HeaderContainerItem">OBJETIVO</h2>
                                </div>
                                <div className="iconsHeaderContainer">
                                    <abbr title="Leer Objetivos Completos de Nuestra Organizacion">
                                        <a href="/QuienesSomos" rel="noopener noreferrer">
                                            <i className="fas fa-crosshairs fa-lg objectiveIcon"></i>
                                        </a>
                                    </abbr>
                                    {/* <!-- <i className="fas fa-bullseye-arrow"></i>
                                    <i className="fas fa-solid fa-bullseye-arrow fa-lg"></i> --> */}
                                </div>
                            </div>
                            <div className="bodyObjectiveContainer bodyItem">
                                <p className="textBodyObjective">
                                    El principal objetivo de nuestra organización sindical es promover la
                                    capacitación y formación profesional y técnica de nuestros afiliados, suscribir
                                    convenios con entidades educativas formales o informales, nacionales y
                                    extranjeras, para que culminen sus estudios especializados y de esta forma
                                    fortalecer los conocimientos del funcionario, que redundan en un mejor futuro
                                    para ellos y sus familias.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p id="FMSlabel">
                        ¡Estamos Afiliados a la Federacion Sindical Mundial (FSM)!
                    </p>
                </div>
                <div className="betweenContainers" id="betweenContainers_Resumen">
                    <div className="buttonhr_Inicio1" onClick={e => displaySubtitle(1)}>
                        <abbr title="Mostrar Subtitulo">&gt;</abbr>
                    </div>
                    <hr/>
                    <div className="buttonhr_Inicio2" onClick={e => hideSubtitle(1)}>
                        <abbr title="Ocultar Subtitulo">&lt;</abbr>
                    </div>
                </div>
                <div id="secondSection_Inicio">
                    <div className="titleSection_Inicio">
                        <h3 id="SecondtitleSection_I">
                            RESUMEN INFORMACION GENERAL:
                        </h3>
                        {/* <!-- <hr className="hrafterTitleSection_I"> --> */}
                    </div>
                    <div id="summaryItemsContainer_Inicio"> 
                        <div className="SummaryContainerItem">
                            <div className="Header_SummaryContainerItem" id="FirstHeader_SummaryContainerItem">
                                <div className="iconsHeaderContainer iHC_img">
                                    <i className="fas fa-solid fa-image fa-lg iconHeaderItems"  onClick={e => hideShowIcon(0, 1)}></i>
                                    <i className="fas fa-solid fa-eye-slash fa-lg iconHeaderItems" onClick={e => hideShowIcon(1, 1)}></i>
                                </div>
                                <div className="titleHeaderContainer">
                                    <h2 className="title_HeaderContainerItem">MISION</h2>
                                </div>
                                <div className="iconsHeaderContainer iHC_moreLess">
                                    <i className="fas fa-solid fa-plus fa-lg iconHeaderItems" onClick={e => hideShowIcon(2, 2)}></i>
                                    <i className="fas fa-solid fa-minus fa-lg iconHeaderItems" onClick={e => hideShowIcon(3, 2)}></i>
                                </div>
                            </div>
                            <div className="bodyItem">
                                <p className="text_bodyItem">
                                    Defender los derechos constitucionales de nuestros afiliados frente al
                                    empleador, velar por el bienestar social y psicosocial adecuado, la libertad
                                    sindical y promover el mejoramiento de las condiciones laborales.
                                </p>
                                <div className="imgContainer_bodyItem" id="firstImgContainer_bodyItem">
                                    <img src={misionImg} alt="MisionImg"/>
                                </div>
                            </div>
                        </div>
                        <div className="SummaryContainerItem">
                            <div className="Header_SummaryContainerItem" id="SecondHeader_SummaryContainerItem">
                                <div className="iconsHeaderContainer iHC_img">
                                    <i className="fas fa-solid fa-image fa-lg iconHeaderItems" onClick={e => hideShowIcon(4, 1)}></i>
                                    <i className="fas fa-solid fa-eye-slash fa-lg iconHeaderItems" onClick={e =>hideShowIcon(5, 1)}></i>
                                </div>
                                <div className="titleHeaderContainer">
                                    <h2 className="title_HeaderContainerItem"><abbr title="Federacion Sindical Mundial">FSM</abbr></h2>
                                </div>
                                <div className="iconsHeaderContainer iHC_moreLess">
                                    <i className="fas fa-solid fa-plus fa-lg iconHeaderItems" onClick={e => hideShowIcon(6, 2)}></i>
                                    <i className="fas fa-solid fa-minus fa-lg iconHeaderItems"  onClick={e => hideShowIcon(7, 2)}></i>
                                </div>
                            </div>
                            <div className="bodyItem">
                                <p className="text_bodyItem" id="Second_textBodyItem">
                                    La Federación Sindical Mundial (FSM) es una federación internacional de sindicatos fundada el 3 de octubre de 1945 en París. 
                                    Es una de las organizaciones sindicales internacionales más antigua del mundo. 
                                    Sigue la línea del movimiento sindical de clase y lucha contra el capitalismo y el imperialismo, por una sociedad sin explotación del hombre por el hombre.
                                </p>
                                <div className="imgContainer_bodyItem" onMouseEnter={e => showLinkFMS()} onMouseLeave={e => hideLinkFMS()}>
                                    <img src={fsmImg} alt="Logo de la Federacion Sindical Mundial" id="FSMLogo" />
                                    <a href="http://www.wftucentral.org/tag/fsm/page/6/?lang=es" target="_blank" rel="noopener noreferrer" id="FMSLink">http://www.wftucentral.org/?lang=es</a>
                                </div>
                            </div>
                        </div>
                        <div className="SummaryContainerItem">
                            <div className="Header_SummaryContainerItem" id="ThirdHeader_SummaryContainerItem">
                                <div className="iconsHeaderContainer iHC_img">
                                    <i className="fas fa-solid fa-image fa-lg iconHeaderItems" onClick={e => hideShowIcon(8, 1)}></i>
                                    <i className="fas fa-solid fa-eye-slash fa-lg iconHeaderItems" onClick={e => hideShowIcon(9, 1)}></i>
                                </div>
                                <div className="titleHeaderContainer">
                                    <h2 className="title_HeaderContainerItem">VISION</h2>
                                </div>
                                <div className="iconsHeaderContainer iHC_moreLess">
                                    <i className="fas fa-solid fa-plus fa-lg iconHeaderItems" onClick={e => hideShowIcon(10, 2)}></i>
                                    <i className="fas fa-solid fa-minus fa-lg iconHeaderItems"  onClick={e => hideShowIcon(11, 2)}></i>
                                </div>
                            </div>
                            <div className="bodyItem">
                                <p className="text_bodyItem">
                                    Ser una organización sindical moderna, prospera y altruista, creando una
                                    cultura sindical que sea reconocida en el ámbito laboral nacional e
                                    internacional.
                                </p>
                                <div className="imgContainer_bodyItem" id="ThirdImgContainer_bodyItem">
                                    <img src={visionImg} alt="VisionImg" id="VisionImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonMoreInfo_checkGallery_Container">
                        <a href="/QuienesSomos">
                            <button>
                                <div className="insideButtonInfo">
                                    <div id="TextbuttonMoreInfo">
                                        ¡Conoce más acerca de nuestra organizacion!
                                    </div>
                                    <div id="ArrowbuttonMoreInfo">
                                        <i className="fas fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="betweenContainers" id="betweenContainers_Resumen">
                    <div className="buttonhr_Inicio1" onClick={ e => displaySubtitle(2)}>
                        <abbr title="Mostrar Subtitulo">&gt;</abbr>
                    </div>
                    <hr/>
                    <div className="buttonhr_Inicio2" onClick={ e => hideSubtitle(2) }>
                        <abbr title="Ocultar Subtitulo">&lt;</abbr>
                    </div>
                </div>
                <div id="thirdSection_Inicio">
                    <div className="titleSection_Inicio">
                        <h3 id="thirdTitleSection_I">
                            GALERIA:
                        </h3>
                    </div>
                    {/* <div id="galleryContainer">
                        <div className="slidesGallery">
                            <img src="https://scontent.fbog5-1.fna.fbcdn.net/v/t31.18172-8/19983575_116061645689814_4377179297228090729_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHPAIzga6JIegNC8vhYYwv5bW3oVJAplg9tbehUkCmWDxcD9eHaRdAsmEz6LyKSukUIoFaxWL-GlgFFj3NI9zd1&_nc_ohc=ZVwXNMmngqUAX9EeuB3&_nc_ht=scontent.fbog5-1.fna&oh=00_AT9LOSwj0_uvp1gGi9RonblWtk4Jj8uRhYO-J9_kab1zrw&oe=62E43DCA" alt="Paisaje1" />
                        </div>
                        <div className="slidesGallery">
                            <img src="https://w0.peakpx.com/wallpaper/755/450/HD-wallpaper-messi-barcelona-espacio-futbol-leo-messi-planeta-tierra-players-real-space-world.jpg" alt="Paisaje1" />
                        </div>
                        <div className="slidesGallery">
                            <img src="https://secureservercdn.net/192.169.223.13/rmv.20e.myftpupload.com/wp-content/uploads/2021/08/IMG_2514-1024x683.jpg" alt="Paisaje1" />
                        </div>
                        <div className="prev" onClick={e => changeSlides(-1)}>&#10094;</div>
                        <div className="next" onClick={e => changeSlides(1)}>&#10095;</div>

                        <div className="captionContainer">
                            <p id="captionGallery"></p>
                        </div>

                        <div class="row">
                            <div class="column">
                                <img class="demo cursor" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t31.18172-8/19983575_116061645689814_4377179297228090729_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHPAIzga6JIegNC8vhYYwv5bW3oVJAplg9tbehUkCmWDxcD9eHaRdAsmEz6LyKSukUIoFaxWL-GlgFFj3NI9zd1&_nc_ohc=ZVwXNMmngqUAX9EeuB3&_nc_ht=scontent.fbog5-1.fna&oh=00_AT9LOSwj0_uvp1gGi9RonblWtk4Jj8uRhYO-J9_kab1zrw&oe=62E43DCA" onClick={e => currentSlide(1)} alt="Descripcion Imagen 1" />
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t31.18172-8/28699134_173748853254426_5756407226484892665_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFDMSgl0NRrOKRO2hcJppvssbsAOKc_wdSxuwA4pz_B1Nr5ygc5FTz6DdUCcXOn0zRmia2WP5MSLwdLOr4-AFVN&_nc_ohc=DicjQtJ5hrwAX_pQ1Xi&_nc_ht=scontent.fbog5-1.fna&oh=00_AT_SWrReyiaKP0Go_7xLt4z4u1G4dA3XZlsiE_tWk4WI4Q&oe=62E47DBE" onClick={e => currentSlide(2)} alt="Descripcion imagen 2" />
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://secureservercdn.net/192.169.223.13/rmv.20e.myftpupload.com/wp-content/uploads/2021/08/IMG_2514-1024x683.jpg" onClick={e => currentSlide(3)} alt="Descripcion imagen 3" />
                            </div>
                        </div>
                    </div> */}
                    <div id="miniGalleryContainer">
                        <div id="itemsMiniGallery_Container">
                            <div className="itemMiniGallery_Container">
                                <img src={galleryImg1} alt="" />
                                <div className="imagesCaptionMiniGalleryContainer">
                                    <div>Imagen 1 </div> 
                                    <div>&nbsp;:&nbsp;</div>
                                    <div>"Caption Img que estaba en la reunion con el director"</div>
                                </div>
                            </div>
                            <div className="itemMiniGallery_Container">
                                <img src={galleryImg2} alt="" />
                                <div className="imagesCaptionMiniGalleryContainer">
                                    <div>Imagen 2 </div> 
                                    <div>&nbsp;:&nbsp;</div>
                                    <div>""</div>
                                </div>
                            </div>
                            <div className="itemMiniGallery_Container">
                                <img src={galleryImg3}alt="" />
                                <div className="imagesCaptionMiniGalleryContainer">
                                    <div>Imagen 3 </div> 
                                    <div>&nbsp;:&nbsp;</div>
                                    <div>""</div>
                                </div>
                            </div>
                            <div className="itemMiniGallery_Container">
                                <img src={galleryImg4} alt="" />
                                <div className="imagesCaptionMiniGalleryContainer">
                                    <div>Imagen 4 </div> 
                                    <div>&nbsp;:&nbsp;</div>
                                    <div>""</div>
                                </div>
                            </div>
                        </div>
                        <div id="indexMiniGallery_Container">
                            <button className="indexButtonMiniGallery" onClick={e => setSlide(0)}></button>
                            <button className="indexButtonMiniGallery" onClick={e => setSlide(1)}></button>
                            <button className="indexButtonMiniGallery" onClick={e => setSlide(2)}></button>
                            <button className="indexButtonMiniGallery" onClick={e => setSlide(3)}></button>
                        </div>
                        <div id="controlsMiniGallery_Container">
                            <button id="previousItemGallery" onClick={e => setSlide(getCurrentSlide()-1)}>❮</button>
                            <button id="nextItemGallery" onClick={e => setSlide(getCurrentSlide()+1)}>❯</button>
                        </div>
                    </div>
                    <div className="buttonMoreInfo_checkGallery_Container"> 
                        <a href="/Galeria">
                            <button>
                                <div className="insideButtonInfo">
                                    <div id="TextbuttonMoreInfo">
                                        ¡VER GALERIA COMPLETA!
                                    </div>
                                    <div id="galleryButtonContainer">
                                        <FontAwesomeIcon icon={faPhotoFilm} />
                                    </div>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                {/* <div>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                        crossorigin="anonymous"
                    />
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7f6d5e8c735a705c/63939e226250206beaf09020/GettyImages-1448008976.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7f6d5e8c735a705c/63939e226250206beaf09020/GettyImages-1448008976.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7f6d5e8c735a705c/63939e226250206beaf09020/GettyImages-1448008976.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> */}
            </div>
        </div>
    )
}

function showLinkFMS(){
    let fmsLink = document.getElementById("FMSLink");
    fmsLink.style.display="block";
}
function hideLinkFMS(){
    let fmsLink = document.getElementById("FMSLink");
    fmsLink.style.display="none";
}

function hideShowIcon(x, y) { // Param x for know wich ot the 3 items is and y is for item 1 or 2
    var icbi = document.getElementsByClassName("imgContainer_bodyItem");
    var tbi = document.getElementsByClassName("text_bodyItem");
    var imgicon = document.getElementsByClassName("iconHeaderItems");

    if (x%2 === 0) {
        imgicon[x].style.display = "none";
        imgicon[x+1].style.display = "inline-block";
        if ((x/4) < 1) {
            if(y === 1){
                icbi[0].style.display = "inline-block";
                // mostrarDiv("imgContainer_bodyItem", 0, icbi[0].clientHeight, 'E');
            }else
                tbi[0].style.display = "block";
        } else if((x/4) < 2){
            if(y === 1)
                icbi[1].style.display = "inline-block";
            else
                tbi[1].style.display = "block";
        } else{
            if(y === 1)
                icbi[2].style.display = "inline-block";
            else
                tbi[2].style.display = "block";
        }
    } else{
        imgicon[x].style.display = "none";
        imgicon[x-1].style.display = "inline-block";
        if ((x/4) < 1) {
            switch (y) {
                case 1: 
                    // mostrarDiv("imgContainer_bodyItem", 0, icbi[0].clientHeight, 'R');
                    icbi[0].style.display = "none"; 
                    break;
                case 2: tbi[0].style.display = "none"; break;
                default: break;
            }
        } else if((x/4) < 2){
            switch (y) {
                case 1: icbi[1].style.display = "none"; break;
                case 2: tbi[1].style.display = "none"; break;
                default: break;
            }
        } else{
            switch (y) {
                case 1: icbi[2].style.display = "none"; break;
                case 2: tbi[2].style.display = "none"; break;
                default: break;
            }
        }
    }
}

var button1 = document.getElementsByClassName("buttonhr_Inicio1");
var button2 = document.getElementsByClassName("buttonhr_Inicio2");
var subtitles = document.getElementsByClassName("titleSection_Inicio");

function displaySubtitle(x) {
    button1[x].style.display = "none";
    button2[x].style.display = "block";
    subtitles[x].style.display = "block";
    if(x === 1)
        document.getElementById("betweenContainers_Resumen").style.marginBottom ="4px";
}
function hideSubtitle(x) {
    button1[x].style.display = "block";
    button2[x].style.display = "none";
    subtitles[x].style.display = "none";
    if(x === 1)
        document.getElementById("betweenContainers_Resumen").style.marginBottom ="18px";
}


/* ACTUAL GALLERY */

const slides = document.getElementsByClassName("itemMiniGallery_Container");

function setSlide(num){
    // Botones del Index para saber # de imagen actual
    const currentIndex = document.getElementsByClassName("indexButtonMiniGallery");
    if (num < 0) 
        num = slides.length-1;
    else if(num > slides.length-1)
        num = 0;
    
    for (let i = 0; i < slides.length; i++) {
        if (i === num) {
            slides[i].style.display = "block";
            currentIndex[i].style.backgroundColor = "#009004";
        }
        else{
            slides[i].style.display = "none";
            currentIndex[i].style.backgroundColor = "transparent";
        }
    }
}

function getCurrentSlide(){
    for (let i = 0; i < slides.length; i++)
        if (slides[i].style.display !== "none")
            return i
    return 0; // Not possible, just handling exception and in any case it does this, this will show the first or last slide without problems
}







// /* GALLERY */
// let slideIndex = 1;
// // showSlides(slideIndex);

// // Next/previous controls
// function changeSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slidesGallery");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("captionGallery");
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
// }
///***************************************** */

// var heightDiv, classNameName, heightVar = 0, nIndex;
// function mostrarDiv(classNameN, n, height, x){
//     alert("Los valores que llegaron: "+classNameN+" - "+n+" - "+height+".")
//     classNameName=classNameN;
//     heightDiv=height;
//     nIndex = n;
//     if(x == 'E'){
//         document.getElementsByClassName(classNameName)[n].style.height=heightVar+"px";
//         document.getElementsByClassName(classNameName)[n].style.display='block';
//         console.log("Entro expandir");
//         expandir();
//     } else{
//         console.log("Entro reducir");
//         document.getElementsByClassName(classNameName)[n].style.height=heightDiv+"px";
//         document.getElementsByClassName(classNameName)[n].style.display='none';
//         reducir();
//     }
// }
// function expandir(){
//     if(heightVar++<heightDiv){
//         document.getElementsByClassName(classNameName)[nIndex].style.height=heightVar+"px";
//         if((heightVar*100/heightDiv)>75){
//             window.setTimeout ("expandir();", 20);
//         }else{
//             window.setTimeout ("expandir();", 5);
//         }
//     }
// }
// function reducir(){
//     if(heightDiv-->heightVar){
//         document.getElementsByClassName(classNameName)[nIndex].style.height=heightVar+"px";
//         if((heightVar*100/heightDiv)>75){
//             window.setTimeout ("reducir();", 20);
//         }else{
//             window.setTimeout ("reducir();", 5);
//         }
//     }
// }

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