import Benefits from "../../Components/Benefits/Benefits"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../../Components/Footer/Footer"

function Carrito() {
    return (
        <>

            <div className="container">
                <h1>Mi carrito</h1>
                <a href="..//HTML/index.html" className="button">Seguir comprando</a>

                <section className="container">
                    <div className="card">
                        <img src="../assets/images/maqueta1.jpg" alt="maqueta1" width="300" />
                        <h3>Maqueta 1</h3>
                        <p className="price">1790,00<i className="bi bi-currency-euro m-color"></i></p>

                        <div className="rating">
                            <i className="bi bi-star-fill m-color"></i>
                            <i className="bi bi-star-fill m-color" ></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <input type="number" name="cantidad" min="o" max="10" value="1" />
                        <button>Eliminar</button>
                    </div>
                </section>
            </div>

            <Benefits />
            <Footer />
        </>
    )
}

export default Carrito