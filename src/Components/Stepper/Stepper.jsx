import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default
    function Stepper() {
    return (
        <>
            <nav className="container mt-5 mb-5" aria-label="Page navigation example">
                <ul className="pagination justify-content-end gap-5">

                    <li className="page-item"><Link className="button_carrito page-link" to="/carrito"><i className="bi bi-basket-fill text-primary"></i>Detalles carrito</Link></li>
                    <li className="page-item"><Link className="button_carrito page-link" to="/pago"><i className="bi bi-credit-card-fill align-items-center text-primary"></i>Formas de pago</Link></li>
                    <li className="page-item"><Link className="button_carrito page-link" to="/enviar"><i className="bi bi-send-fill align-items-center text-primary"></i>Finalizar compra</Link></li>

                </ul>
            </nav>
        </>
    );
}
