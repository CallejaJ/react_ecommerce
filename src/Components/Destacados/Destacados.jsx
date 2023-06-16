import "../../CSS/style.css"
import { Link } from 'react-router-dom';


function Destacados() {
    return (
        <div className="container d-flex justify-content-between align-items-center my-3 mt-5">
            <div>
                <h2>Modelos destacados</h2>
                <p>Diseños personalizados, diferentes estilos y estructuras para vivir en el hogar de tus sueños. </p>
            </div>
            <Link className="btn btn-primary" to="/modelos/detalles">Todos los modelos</Link>
        </div>
    )
}

export default Destacados

