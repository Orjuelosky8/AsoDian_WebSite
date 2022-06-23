import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){
    return(
        <div className="general-window-container">
            <div className="NotFound-container">
                <div className="NotFound-info-org">
                    <h1>ASODIAN</h1>
                    <h3>Asociacion Sindical de Funcionarios de la DIAN</h3>
                </div>
                <h5>Te informa que:</h5>
                <h2>La pagina que estas buscando no se ha encontrado (ERROR 404)</h2>
                <h4>Verifica el link e intentalo nuevamente.</h4>
                <h4>Tambien puedes usar el menu de navegación para redirigirte a una de las secciones de nuestra web</h4>
                <h4>O puedes dar <Link to="/">click aquí</Link> para ir al inicio.</h4>
                <br /><br /><h1 className="NotFound-bye">¡FELIZ DIA!</h1>
            </div>
        </div>
    );
}

export default NotFound;