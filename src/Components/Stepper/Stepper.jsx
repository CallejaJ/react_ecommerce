import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default
    function Stepper() {
    return (
        <>
            <div className="container mt-5 mb-5" aria-label="Page navigation example">
                <ul className="pagination justify-content-end gap-5">
                    <li className="page-item"><Link className="button_cesta page-link" to="/cesta">1. Detalles de tu cesta</Link></li>
                    <li className="page-item"><Link className="button_cesta page-link" to="/cesta/pago">2. Formas de pago</Link></li>
                    <li className="page-item"><Link className="button_cesta page-link" to="/cesta/enviar">3. Finalizar compra</Link></li>
                </ul>
            </div >
        </>
    );
}
