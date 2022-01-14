import "./Footer.css";

export default function footer(){
    return(
        <div className="Footer-container">
            <div className="sections-container">
                <div className="contact-container">
                    <div>
                        <h4 className="title-contact">¡Contacténos!
                            <i className="fas fa-eye" id="show-contact-icon"></i>
                            <i className="fas fa-eye-slash" id="hide-contact-icon"></i>
                        </h4>
                        <p className="info-contacto">
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-thumbtack contact-item contact-icon"></i>&nbsp Ubicación: 
                                </div>
                                <div className="description-subtitle-contact" id="city-location-contact">
                                    Bogotá, Colombia
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact" id="adress-title-contact">
                                    <i className="fas fa-map-marked-alt contact-icon"></i>&nbsp Dirección: 
                                </div>
                                <div className="description-subtitle-contact">
                                    Cra. 7 No. 6C - 54, Piso 7 edificio Sendas - Nivel Central DIAN
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-envelope-open-text contact-icon"></i>&nbsp Correo:
                                </div>
                                <div className="description-subtitle-contact" id="mail-contact">
                                    presidencia@asodian.org
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="subtitle-contact">
                                    <i className="fas fa-phone contact-icon"></i>&nbsp Teléfono: 
                                </div>
                                <div className="description-subtitle-contact">
                                    (+57) 601 7428973 ext 936265
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <hr id="hr-1"/>
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
                <hr/>
                <div className="social-media-container">
                    <hr id="hr-top-social-media"/>
                    <h4>¡Síguenos en Nuestras Redes Sociales!</h4>
                    <div className="icons-media">
                        <i className="fab fa-instagram fa-2x icon-media"></i>
                        <i className="fab fa-youtube fa-2x icon-media"></i>
                        <i className="fab fa-facebook fa-2x icon-media"></i>
                    </div>
                    <p className="link-web-mediaa"><span>Instagram -</span><span>YouTube -</span><span>Facebook</span></p>
                    <p className="link-web-media">www.asodian.org</p>
                </div>
            </div>
            <div className="copyright"> © Derechos Reservados 2022 - ASODIAN</div>
        </div>
    )
}