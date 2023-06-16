import Benefits from "../../Components/Benefits/Benefits"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../../Components/Footer/Footer"

function Enviar() {
    return (

        <>

            <nav>
                <h1>Añadir dirección de envío</h1>
                <a href="index.html">Cancelar</a>
            </nav>

            <main className="container">
                <div>
                    <h2>Dirección de envío</h2>
                    <form>
                        <input type="text" name="name" placeholder="Nombre" />
                        <input type="text" name="name" placeholder="Apellidos" />
                        <input type="text" name="phone" placeholder="Teléfono" />
                        <input type="text" name="mail" placeholder="E-mail" />
                        <input type="text" name="street" placeholder="Dirección" />
                        <input type="text" name="st number" placeholder="Detalles dirección" />
                        <input type="text" name="county" placeholder="Provincia" />
                        <input type="text" name="zip code" placeholder="Código postal" />
                        <input type="text" name="country" placeholder="País" />
                    </form>
                    <a href="../HTML/finalizarcompra.html">Añadir dirección de envío</a>
                </div>


            </main>
            <Benefits />
            <Footer />

        </>
    )
}

export default Enviar

