import "../../CSS/style.css"
import "bootstrap/dist/css/bootstrap.css"

function Benefits() {
    return (
        <section className="container d-flex mt-5">

            <div className="d-flex gap-5 w-100">
                <i className="bi bi-credit-card-2-back text-primary h1"></i>
                <div>
                    <h5>Pago seguro</h5>
                    <p>Paypal Bizum</p>
                </div>
            </div>

            <div className="d-flex gap-5 w-100">
                <i className="bi bi-truck text-primary h1"></i>
                <div>
                    <h5>Envío gratis</h5>
                    <p>Transporte incluido</p>
                </div>
            </div>

            <div className="d-flex gap-5 w-100">
                <i className="bi bi-patch-question text-primary h1"></i>
                <div>
                    <h5>Servicio 24/7</h5>
                    <p>Atención personalizada</p>
                </div>
            </div>

            <div className="d-flex gap-5 w-100">
                <i className="bi bi-wrench-adjustable text-primary h1"></i>
                <div>
                    <h5>Garantía incluida</h5>
                    <p>5 años</p>
                </div>
            </div>

        </section>
    )
}


export default Benefits