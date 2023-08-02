import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import Benefits from "../../Components/Benefits/Benefits"
import Stepper from "../../Components/Stepper/Stepper"
import Footer from "../../Components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.css"

import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Cesta() {

    const { items, removeFromCart } = useCartContext();

    return (
        <>
            <Stepper />
            {items ? (
                // aqui saco el detalle de las tarjetas elegidas
                <>
                    <section className="container h-100 h-custom border border-primary border-2 rounded-4" style={{ backgroundColor: "#eee" }}>
                        {items.map((item, index) => (
                            <>
                                <MDBContainer key={index} className="py-5 h-100">
                                    <MDBRow className="justify-content-center my-4">
                                        <MDBCol md="8">
                                            <MDBCard className="mb-4">
                                                <MDBCardHeader className="py-3">
                                                    <MDBTypography tag="h3" className="text-primary mb-0">
                                                        Resumen de tu cesta
                                                    </MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                            <MDBRipple rippleTag="div" rippleColor="light"
                                                                className="bg-image rounded hover-zoom hover-overlay">
                                                                <img src={item.imagen}
                                                                    className="w-100" />
                                                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                                </div>

                                                            </MDBRipple>
                                                        </MDBCol>

                                                        <MDBCol lg="5" md="6" className="mt-2 mb-lg-0">

                                                            <p>Modelo elegido: <strong> {item.id}</strong></p>
                                                            <p>{item.texto1}</p>

                                                        </MDBCol>
                                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0 gap-4">
                                                            <div className="d-flex gap-3 w-100 align-items-center">
                                                                Total:<strong>{item.precio}</strong>

                                                                {/* <MDBInput defaultValue={1} min={0} type="number" /> */}
                                                                <button onClick={() => removeFromCart(item.id)} className="btn btn-white w-50 mt-2 mb-2 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                            </div>

                                                        </MDBCol>
                                                    </MDBRow>

                                                    <hr className="my-4" />


                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-4">
                                                <MDBCardBody>
                                                    <p>
                                                        <strong>Fecha de entrega estimada</strong>
                                                    </p>
                                                    <p className="mb-0">12/10/2023 - 14/10/2023</p>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-4 mb-lg-0">
                                                <MDBCardBody>
                                                    <p>
                                                        <strong>Aceptamos las siguientes formas de pago</strong>
                                                    </p>
                                                    <MDBCardImage className="me-2" width="45px"
                                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                                        alt="Visa" />
                                                    <MDBCardImage className="me-2" width="45px"
                                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                                        alt="American Express" />
                                                    <MDBCardImage className="me-2" width="45px"
                                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/masteritem.svg"
                                                        alt="Mastercard" />
                                                    <MDBCardImage className="me-2" width="45px"
                                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                                        alt="PayPal acceptance mark" />
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBCard className="mb-4">
                                                <MDBCardHeader>
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Resumen de tu compra
                                                    </MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBListGroup>
                                                        <MDBListGroupItem
                                                            className="d-flex justify-content-between align-items-center border-0 px-0">
                                                            Importe
                                                            <span>{item.precio}</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                                                            Envío
                                                            <span>Gratis</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem
                                                            className="d-flex justify-content-between align-items-center border-0 px-0">
                                                            Total<strong>(IVA incluido)</strong>
                                                            <span>
                                                                <strong>{item.precio}</strong>
                                                            </span>
                                                        </MDBListGroupItem>
                                                    </MDBListGroup>

                                                    <div className="d-flex gap-3 w-100 mt-3">
                                                        <Link className="btn btn-primary w-50 mt-2 mb-2" to="/cesta/pago">Continuar</Link>
                                                        <Link className="btn btn-secondary w-100 mt-2 mb-2" to="/modelos">Seguir comprando</Link>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </>
                        ))}
                    </section>
                </>
            ) : (
                <>
                    <section className="container h-100 h-custom border border-primary border-2 rounded-4" style={{ backgroundColor: "#eee" }}>
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center my-4">
                                <MDBCol md="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardHeader className="py-3">
                                            <MDBTypography tag="h3" className="text-primary mb-0">
                                                Resumen de tu cesta
                                            </MDBTypography>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol lg="5" md="6" className="text-secondary mb-4 mb-lg-0">
                                                    <h5 className="align-items-center">
                                                        <strong >Tu cesta está vacía</strong>
                                                    </h5>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <p>
                                                <strong>Fecha de entrega estimada</strong>
                                            </p>
                                            <p className="mb-0">12/10/2023 - 14/10/2023</p>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4 mb-lg-0">
                                        <MDBCardBody>
                                            <p>
                                                <strong>Aceptamos las siguientes formas de pago</strong>
                                            </p>
                                            <MDBCardImage className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                                alt="Visa" />
                                            <MDBCardImage className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                                alt="American Express" />
                                            <MDBCardImage className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/masteritem.svg"
                                                alt="Mastercard" />
                                            <MDBCardImage className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                                alt="PayPal acceptance mark" />
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBCard className="mb-4">
                                        <MDBCardHeader>
                                            <MDBTypography tag="h5" className="mb-0">
                                                Resumen de tu compra
                                            </MDBTypography>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBListGroup>
                                                <MDBListGroupItem
                                                    className="d-flex justify-content-between align-items-center border-0 px-0">
                                                    Modelos elegidos
                                                    <span>0</span>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                                                    Envío
                                                    <span>Gratis</span>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem
                                                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                    <div>
                                                        <p>Total</p>
                                                        <strong>
                                                            <p className="mb-0">(IVA incluido)</p>
                                                        </strong>
                                                    </div>
                                                    <span>
                                                        <strong>0</strong>
                                                    </span>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                            <div className="d-flex gap-3 w-100">
                                                <Link className="btn btn-primary w-50 mt-2 mb-2" to="/cesta/pago">Continuar</Link>
                                                <Link className="btn btn-secondary w-100 mt-2 mb-2" to="/modelos">Seguir comprando</Link>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </>
            )
            }
            <Benefits />
            <Footer />

        </>
    );
}