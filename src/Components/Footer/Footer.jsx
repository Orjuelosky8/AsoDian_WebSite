import "./Footer.css";
import swal from 'sweetalert';

function display_contactenos_info(){
    if(document.getElementById("info-contacto").style.display === "block"){
        document.getElementById("info-contacto").style.display = "none";
        document.getElementById("show-contact-icon").style.display = "block";
        document.getElementById("hide-contact-icon").style.display = "none";
    }else{
        document.getElementById("info-contacto").style.display = "block";
        document.getElementById("show-contact-icon").style.display = "none";
        document.getElementById("hide-contact-icon").style.display = "block";
    }
}

export default function footer(){
    return(
        <footer id="Footer-container" className="navbar-fixed-bottom">
            <div className="sections-container">
                <div className="contact-container">
                    <div>
                        <h4 className="title-contact">¡Contacténos!
                            <i className="fas fa-eye" id="show-contact-icon" onClick={display_contactenos_info}></i>
                            <i className="fas fa-eye-slash" id="hide-contact-icon" onClick={display_contactenos_info}></i>
                        </h4>
                        <div id="info-contacto">
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-thumbtack contact-icon"></i>{' '}{'\u00A0'} Ubicación: 
                                </div>
                                <div className="description-subtitle-contact" id="city-location-contact">
                                    Bogotá, Colombia
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact" id="adress-title-contact">
                                    <i className="fas fa-map-marked-alt contact-icon"></i>{'\u00A0'}{'\u00A0'}Dirección: 
                                </div>
                                <div className="description-subtitle-contact">
                                    Cra. 7 No. 6C - 54, Piso 7 edificio Sendas - Nivel Central DIAN
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-envelope-open-text contact-icon"></i>{'\u00A0'}{'\u00A0'}Correo:
                                </div>
                                <div className="description-subtitle-contact" id="mail-contact">
                                    presidencia@asodian.org
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-phone contact-icon"></i>{' '}{'\u00A0'}Teléfono: 
                                </div>
                                <div className="description-subtitle-contact">
                                    (+57) 601 7428973 ext 936265
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="hr-1" className="hrFooter"/>
                <div className="main-info-container">
                    <div className="title-footer">
                        <span id="title-letter-a">A</span>
                        <span id="title-letter-s">S</span>
                        <span id="title-letter-o">O</span>
                        <span id="title-letter-d">D</span>
                        <span id="title-letter-i">I</span>
                        <span id="title-letter-a2">A</span>
                        <span id="title-letter-n">N</span>
                    </div>
                    <div className="img-footer"><img src="https://static9.depositphotos.com/1007566/1164/v/600/depositphotos_11647308-stock-illustration-colorful-hands.jpg" alt="" /></div>
                    <div className="description-footer">
                        Asociación Sindical de Funcionarios de la DIAN
                        <br/><span>Unión y Ética Sindical</span>
                    </div>
                </div>
                <hr className="hrFooter"/>
                <div className="social-media-container">
                    <hr id="hr-top-social-media" className="hrFooter"/>
                    <h4>¡Síguenos en Nuestras Redes Sociales!</h4>
                    <div className="icons-media">
                        <a href="https://www.instagram.com/asodian1/" target={"_blank"} rel="noreferrer"><i className="fab fa-instagram fa-2x icon-media"></i></a>
                        <a href="https://www.youtube.com/@Asodian1" target={"_blank"} rel="noreferrer"><i className="fab fa-youtube fa-2x icon-media"></i></a>
                        <a href="#/" target={"_blank"} rel="noreferrer"><i className="fab fa-facebook fa-2x icon-media"></i></a>
                    </div>
                    <p className="link-web-mediaa"><span>Instagram -</span><span>YouTube -</span><span>Facebook</span></p>
                    <p className="link-web-media">www.asodian.org</p>
                </div>
            </div>
            <div id="copyright" onClick={(e) => {
                if(e.detail === 3){
                    // alert("Hello!\nThis is Daniel Orjuela (Developer of this WebSite).\n\nYou've made 3 Clicks on CopyRight Succesfully!\nDeveloper's Info is now displayed at the Bottom of the WebSite :D\n\nContact if you need.");
                    // document.getElementById("developer-copyright").innerHTML = "D\nsa"
                    swal({
                        title: "Developer Information Unlocked!",
                        text: "\nYou've made 3 Clicks on CopyRight Container Succesfully :D\n\nNow you have the option of seeing the contact information of this website's developer.\n\nWant to contact the developer?",
                        icon: "info",
                        buttons: ["I don't", "I do, let me see the contact info!"],
                        timer: 33000,
                        closeOnClickOutside: false,
                        className: "developerFirstAlert",
                      })
                      .then((contact) => {
                        if (contact) {
                          swal({
                            text: "Hi there!, this is Daniel Orjuela, Developer of this Website.\n\nApparently you want to contact me, so here you can see displayed my contact's information:\n\nMail: daniel.orju@gmail.com\nInstagram: daniel.8.orjuela\n\nThis window will close automatically soon!\nHowever, the email information will remain displayed at the bottom of the website in case you need it.",
                            icon: "success",
                            timer: 20000,
                            className: "developerSecondAlert",
                          });
                          document.getElementById("developer-copyright").style.display = "block";
                          document.getElementById("developer-copyright").innerHTML = "Contacto Desarrollador: <em><u>daniel.orju@gmail.com</u></em>";
                        } else {
                          swal("Okay, information not displayed...\n\nHave a good day!", {
                                dangerMode: true,
                                icon: "error",
                                className: "developerThirdAlert",
                            });
                            document.getElementById("developer-copyright").style.display = "none";
                        }
                    });
            }}}> © Derechos Reservados 2023 - ASODIAN</div>
            <div id="developer-copyright"></div>
        </footer>
    )
}