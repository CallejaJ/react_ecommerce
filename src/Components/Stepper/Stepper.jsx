import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default
    function Stepper() {
    return (
        <>
            <nav className="container mt-5 mb-5" aria-label="Page navigation example">
                <ul className="pagination justify-content-end">

                    <i className="bi bi-basket-fill text-primary h3"></i><li className="page-item"><Link className=" page-link" to="/">Detalles carrito</Link></li>
                    <li className="page-item"><Link className="page-link" to="/pago">Formas de pago</Link></li>
                    <li className="page-item"><Link className="page-link" to="/enviar">Finalizar compra</Link></li>

                </ul>
            </nav>
        </>
    );
}
