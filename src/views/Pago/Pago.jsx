import Benefits from "../../Components/Benefits/Benefits"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../../Components/Footer/Footer"
import { Link } from "react-router-dom"
import Stepper from "../../Components/Stepper"

import "bootstrap/dist/css/bootstrap.css"

import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";





// <main className="container">
//     <div>
//         <h2>Mis tarjetas</h2>
//         <form>
//             <label htmlFor="tarjeta1">
//                 <input type="radio" id="tarjeta" name="tarjeta" value="7654 checked" />VISA ...7654</label>
//             <label htmlFor="tarjeta2">
//                 <input type="radio" id="tarjeta" name="tarjeta" value="2365" />AMERICAN EXPRESS ...9099</label>
//             <label htmlFor="tarjeta3">
//                 <input type="radio" id="tarjeta" name="tarjeta" value="5576" />MASTERCARD ...5576</label>
//             <a href="finalizarcompra.htm">Pagar con esta tarjeta</a>
//         </form>
//     </div>

//     <div>
//         <h2>Añadir nueva tarjeta</h2>
//         <form>
//             <input type="text" name="tarjeta" placeholder="Número de tarjeta" />
//             <input type="text" name="titular" placeholder="Titular de la tarjeta" />
//             <input type="date" name="caducidad" placeholder="Fecha de caducidad" />
//             <input type="number" name="CVV" placeholder="CVV" min="0" max="3" />
//             <button type="button">Añadir a mis tarjetas</button>
//         </form>
//     </div>





export default function Pago() {
    // const { id } = useParams();
    let id = 1
    console.log(id);

    return (
        <>
            <Stepper />
            {
                id ? (
                    // aqui saco el detalle de la tarjeta elegida
                    <>
                        <section className="container h-100 h-custom border border-primary border-2 rounded-4" style={{ backgroundColor: "#eee" }}>
                            <MDBContainer className="py-5 h-100">
                                <MDBRow className="justify-content-center align-items-center h-100">
                                    <MDBCol>
                                        <MDBCard background="light" className="border-0 rounded-2" >
                                            <MDBCardBody className="p-4">
                                                <MDBRow>
                                                    <MDBCol lg="7">
                                                        <MDBTypography tag="h5">
                                                            <Link className="btn btn-secondary w-40 mt-2 mb-2" to="/modelos">Seguir comprando</Link>
                                                        </MDBTypography>
                                                        <hr />
                                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                                            <div>
                                                                <h3 className="mb-1 text-primary">Mis tarjetas</h3>
                                                                <p className="mb-0">Elige entre tus tarjetas o añade una nueva</p>
                                                            </div>
                                                        </div>
                                                        <MDBCard className="mb-1 mt-1">
                                                            <MDBCardBody >
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <form>
                                                                            <label htmlFor="tarjeta1">
                                                                                <input type="radio" id="tarjeta" name="tarjeta" value="7654 checked" />VISA ... 7654</label>
                                                                        </form>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <button className="btn btn-primary w-100" to="/cesta/enviar">Seleccionar</button>
                                                                        <button className="btn btn-white w-50"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                    </div>
                                                                </div>
                                                            </MDBCardBody>
                                                        </MDBCard>

                                                        <MDBCard className="mb-1 mt-1">
                                                            <MDBCardBody >
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <form>
                                                                            <label htmlFor="tarjeta2">
                                                                                <input type="radio" id="tarjeta" name="tarjeta" value="2365" />AMERICAN EXPRESS ...9099</label>
                                                                        </form>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <button className="btn btn-primary w-100" to="/cesta/enviar">Seleccionar</button>
                                                                        <button className="btn btn-white w-50"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                    </div>
                                                                </div>
                                                            </MDBCardBody>
                                                        </MDBCard>

                                                        <MDBCard className="mb-1 mt-1">
                                                            <MDBCardBody >
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <form>
                                                                            <label htmlFor="tarjeta3">
                                                                                <input type="radio" id="tarjeta" name="tarjeta" value="5576" />MASTERCARD ...5576</label>
                                                                        </form>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <button className="btn btn-primary w-100 " to="/cesta/enviar">Seleccionar</button>
                                                                        <button className="btn btn-white w-50 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                    </div>
                                                                </div>
                                                            </MDBCardBody>
                                                        </MDBCard>

                                                    </MDBCol>

                                                    <MDBCol lg="5">
                                                        <MDBCard className="rounded-3">
                                                            <MDBCardBody>
                                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                                    <MDBTypography tag="h5" className="mb-0">
                                                                        Añadir nueva tarjeta bancaria
                                                                    </MDBTypography>
                                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                                </div>

                                                                <p className="small">Tipo de tarjeta</p>
                                                                <MDBCardImage className="me-2" width="45px"
                                                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                                                    alt="Visa" />
                                                                <MDBCardImage className="me-2" width="45px"
                                                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                                                    alt="American Express" />
                                                                <MDBCardImage className="me-2" width="45px"
                                                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                                                    alt="Mastercard" />
                                                                <MDBCardImage className="me-2" width="45px"
                                                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                                                    alt="PayPal" />

                                                                <form className="mt-4">
                                                                    <MDBInput className="mb-4" label="Titular de la tarjeta" type="text" size="lg"
                                                                        placeholder="JOHN DOE" contrast />

                                                                    <MDBInput className="mb-4" label="Número de tarjeta" type="text" size="lg"
                                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                                    <MDBRow className="mb-4">
                                                                        <MDBCol md="6">
                                                                            <MDBInput className="mb-4" label="Fecha de Validez" type="text" size="lg"
                                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                                        </MDBCol>
                                                                        <MDBCol md="6">
                                                                            <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3"
                                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                                        </MDBCol>
                                                                    </MDBRow>
                                                                </form>

                                                                <hr />

                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Importe total</p>
                                                                    <p className="mb-2">{id.precio}€</p>
                                                                </div>

                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Transporte</p>
                                                                    <p className="mb-2">Gratuito</p>
                                                                </div>

                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Total <strong>(IVA incluido)</strong></p>
                                                                    <p className="mb-2">{id.precio}€</p>
                                                                </div>

                                                                <div className="d-flex gap-3 w-100">
                                                                    <Link className="btn btn-primary w-100 mt-4 mb-2" to="/cesta/enviar">Continuar</Link>
                                                                </div>
                                                                <Link className="btn btn-primary w-100 mt-4 mb-2" to="/cesta/enviar">Continuar</Link>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>
                    </>
                ) : (
                    <p>Cargando...</p>
                )
            }
            <Benefits />
            <Footer />

        </>
    );
}