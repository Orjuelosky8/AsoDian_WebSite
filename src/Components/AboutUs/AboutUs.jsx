import "./AboutUs.css";

export default function aboutUs(){
    return(
        <div className="general-window-container">
            <div id="AboutUs-container" className="content-container">
                <h1 className="title-section" id ="title-section-aboutus">¿QUIENES SOMOS?</h1>
                <hr className="title-hr"/>
                <div id="AboutUsContent">
                <div className="outerSCAU-left">
                    <div className="singularCardAboutUs leftSCAU" id="historiaCardAU">
                        <div className="contentCardAU">
                            <div className="titleCardAU"><h3>NUESTRA HISTORIA...</h3></div>
                            <div className="descriptionCardAU">
                                <ul id="itemsHistoryAU">
                                    <li>
                                        El 17 de diciembre de 2016, mediante acta de constitución y fundación, 28
                                        funcionarios de la U.A.E. Dian, creamos la Asociación Sindical de
                                        funcionarios DIAN “ASODIAN”, se elegio la junta directiva y se aprobaron
                                        los estatutos, a partir de ese momento nuestro sindicato goza de personería
                                        jurídica.
                                    </li>
                                    <li>
                                        El 21 de diciembre de 2016, nuestro sindicato quedo registrado ante el
                                        Ministerio de Trabajo con Registro Sindical N° I-62.
                                    </li>
                                    <li>
                                        El 14 de febrero de 2017, &quot;ASODIAN&quot; adquirió el NIT 901.053.421-3 como
                                        entidad sin ánimo de lucro.
                                    </li>
                                    <li>
                                        El 30 de marzo 2017 en Asamblea general extraordinaria, por unanimidad se
                                        aprobaron los estatutos y la elección de Junta Directiva Nacional.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="imgCardAU">
                            <img src="https://cdn-icons-png.flaticon.com/512/2201/2201580.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="outerSCAU-right">
                    <div className="singularCardAboutUs rightSCAU" id="objetivoCardAU">
                        <div className="contentCardAU">
                            <div className="titleCardAU"><h3>NUESTRO OBJETIVO...</h3></div>
                            <div className="descriptionCardAU">
                                El principal objetivo de nuestra organización sindical es promover la
                                capacitación y formación profesional y técnica de nuestros afiliados, suscribir
                                convenios con entidades educativas formales o informales, nacionales y
                                extranjeras, para que culminen sus estudios especializados y de esta forma
                                fortalecer los conocimientos del funcionario, que redundan en un mejor futuro
                                para ellos y sus familias.
                
                                Estructurar una organización sindical, representativa y fuerte, para defender
                                los derechos de nuestros asociados y velar permanentemente por el cabal
                                cumplimiento de las normas nacionales e internacionales.
                            </div>
                        </div>
                        <div className="imgCardAU">
                            <img src="https://cdn.pixabay.com/photo/2017/02/16/10/20/target-2070972_960_720.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="outerSCAU-left">
                    <div className="singularCardAboutUs leftSCAU" id="misionCardAU">
                        <div className="contentCardAU">
                            <div className="titleCardAU"><h3>NUESTRA MISIÓN...</h3></div>
                            <div className="descriptionCardAU">
                                Defender los derechos constitucionales de nuestros afiliados frente al
                                empleador, velar por el bienestar social y psicosocial adecuado, la libertad
                                sindical y promover el mejoramiento de las condiciones laborales. Asesorar a
                                los asociados en la defensa de sus derechos como servidores públicos,
                                prestarles colaboración en caso de enfermedad, invalidez o calamidad, laboral
                                y negociar pliegos de peticiones que recojan la conquista de reivindicaciones
                                laborales y hagan posible una vida digna de los funcionarios Dian y
                                su familia.
                            </div>
                        </div>
                        <div className="imgCardAU">
                            <img src="https://cdn-icons-png.flaticon.com/512/1207/1207808.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="outerSCAU-right">
                    <div className="singularCardAboutUs rightSCAU" id="visionCardAU">
                        <div className="contentCardAU">
                            <div className="titleCardAU"><h3>NUESTRA VISIÓN...</h3></div>
                            <div className="descriptionCardAU">
                                Ser una organización sindical moderna, prospera y altruista, creando una
                                cultura sindical que sea reconocida en el ámbito laboral nacional e
                                internacional.
                            </div>
                        </div>
                        <div className="imgCardAU">
                            <img src="https://cdn-icons-png.flaticon.com/512/417/417045.png" alt=""/>
                            {/* <img src="https://eltallerdehector.com/wp-content/uploads/2022/06/63caa-stitch-tierno-png.png" alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}