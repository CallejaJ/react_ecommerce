import Benefits from "../../Components/Benefits/Benefits"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../../Components/Footer/Footer"
import { Link } from "react-router-dom"

function Pago() {

    return (

        <>
            <nav>
                <h1>Formas de pago</h1>
                <Link to="/modelos">Seguir comprando</Link>
            </nav>

            <main className="container">
                <div>
                    <h2>Mis tarjetas</h2>
                    <form>
                        <label htmlFor="tarjeta1">
                            <input type="radio" id="tarjeta" name="tarjeta" value="7654 checked" />VISA ...7654</label>
                        <label htmlFor="tarjeta2">
                            <input type="radio" id="tarjeta" name="tarjeta" value="2365" />AMERICAN EXPRESS ...9099</label>
                        <label htmlFor="tarjeta3">
                            <input type="radio" id="tarjeta" name="tarjeta" value="5576" />MASTERCARD ...5576</label>
                        <a href="finalizarcompra.htm">Pagar con esta tarjeta</a>
                    </form>
                </div>

                <div>
                    <h2>Añadir nueva tarjeta</h2>
                    <form>
                        <input type="text" name="tarjeta" placeholder="Número de tarjeta" />
                        <input type="text" name="titular" placeholder="Titular de la tarjeta" />
                        <input type="date" name="caducidad" placeholder="Fecha de caducidad" />
                        <input type="number" name="CVV" placeholder="CVV" min="0" max="3" />
                        <button type="button">Añadir a mis tarjetas</button>
                    </form>
                </div>

            </main>

            <Benefits />
            <Footer />

        </>
    )
}


export default Pago