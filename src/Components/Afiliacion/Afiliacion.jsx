import "./Afiliacion.css";
import FormatoAfiliacion from "./../../Assets/pdf/formato_afiliacion_asodian.pdf";
import EstatutosAsoDian from "./../../Assets/pdf/formato_afiliacion_asodian.pdf";

export default function afiliation(){
    return(
        <div className="general-window-container">
            <div id="Afiliacion-container"  className="content-container">
                <h1 className="title-section" id ="title-section-afiliation">AFILIACION</h1>
                <hr className="title-hr"/>
                <p className="afiliation-text">
                    ¿Deseas conocer mas acerca del proceso de afiliacion para nuestra organizacion sindical?
                    <br />A continuación encontrarás el archivo correspondiente al "Formato de afiliacion y autorizacion de descuento":
                </p>
                <iframe id="preview-formato-afiliacion" src={FormatoAfiliacion} frameBorder="0" title="Formato de Afiliacion"/>
                <div id="case-error-preview">
                    <div className="afiliation-text">
                        <hr id="hr-afterPreview"/>
                        <span id="afiliationWarning">
                            Antes de llenar el formato (en caso de hacerlo), no olvides primero leer el documento donde reposan los estatutos de nuestra organizacion
                            <br />Para ver el documento haz click aqui: <b><a href={EstatutosAsoDian} target="_blank" rel="noreferrer" id="redirectEstatutos">'Quiero ver los Estatutos de ASODIAN'</a></b>
                        </span>
                        <hr id="hr-afterPreview"/>
                        <br/>¿Tiene problemas con la visualizacion del archivo? Pulse  
                        <a href={FormatoAfiliacion}><b><u> AQUÍ </u></b></a>
                        para visualizarlo/descargarlo en su dispositivo.
                    </div>
                </div>
            </div>
        </div>
    )
}