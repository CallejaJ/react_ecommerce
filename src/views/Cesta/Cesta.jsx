import Benefits from "../../Components/Benefits/Benefits"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../../Components/Footer/Footer"
import Stepper from "../../Components/Stepper/Stepper"
import { Link } from 'react-router-dom'

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Cesta() {
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
                        <div className="container">

                            <section className="h-100 gradient-custom border border-primary border-2 rounded-4">
                                <MDBContainer className="py-5 h-100">
                                    <MDBRow className="justify-content-center my-4">
                                        <MDBCol md="8">
                                            <MDBCard className="mb-4">
                                                <MDBCardHeader className="py-3">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Detalles de tu cesta
                                                    </MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                            <MDBRipple rippleTag="div" rippleColor="light"
                                                                className="bg-image rounded hover-zoom hover-overlay">
                                                                <img src={id.imagen}
                                                                    className="w-100" />
                                                                <a href="#!">
                                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                                    </div>
                                                                </a>
                                                            </MDBRipple>
                                                        </MDBCol>

                                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                            <p>
                                                                <strong>{id}</strong>
                                                            </p>
                                                            <p>{id.titulo}</p>
                                                            <p>{id.texto1}</p>
                                                        </MDBCol>
                                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                            <div className="d-flex mb-4" style={{ maxHeight: "100px", maxWidth: "300px" }}>
                                                                <MDBInput defaultValue={1} min={0} type="number" label="Cantidad" />
                                                                <button className="btn btn-secondary w-50 mt-2 mb-2 gap-2">Eliminar</button>
                                                            </div>

                                                            <p className="text-start text-md-center">
                                                                <strong>{id.precio}</strong>
                                                            </p>
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
                                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
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
                                                            <span>{id.precio}</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                                                            Envío
                                                            <span>Gratis</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem
                                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                            <div>
                                                                <strong>{id.precio}</strong>
                                                                <strong>
                                                                    <p className="mb-0">(IVA incluido)</p>
                                                                </strong>
                                                            </div>
                                                            <span>
                                                                <strong>{id.precio}</strong>
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
                        </div>
                    </>
                ) : (
                    <>
                        <div className="container">
                            <section className="h-100 gradient-custom">
                                <MDBContainer className="py-5 h-100">
                                    <MDBRow className="justify-content-center my-4">
                                        <MDBCol md="8">
                                            <MDBCard className="mb-4">
                                                <MDBCardHeader className="py-3">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Tu cesta está vacío
                                                    </MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                            <MDBRipple rippleTag="div" rippleColor="light"
                                                                className="bg-image rounded hover-zoom hover-overlay">
                                                                <img src={id.imagen}
                                                                    className="w-100" />
                                                                <a href="#!">
                                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                                    </div>
                                                                </a>
                                                            </MDBRipple>
                                                        </MDBCol>

                                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                            <p>
                                                                <strong>{id}</strong>
                                                            </p>
                                                            <p>{id.texto}</p>
                                                            <p>Size: M</p>

                                                            <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                                title="Remove item">
                                                                <MDBIcon fas icon="trash" />
                                                            </MDBTooltip>

                                                        </MDBCol>
                                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                                <MDBBtn className="px-3 me-2">
                                                                    <MDBIcon fas icon="minus" />
                                                                </MDBBtn>

                                                                <MDBInput defaultValue={1} min={0} type="number" label="Cantidad" />

                                                                <MDBBtn className="px-3 ms-2">
                                                                    <MDBIcon fas icon="plus" />
                                                                </MDBBtn>
                                                            </div>

                                                            <p className="text-start text-md-center">
                                                                <strong>{id.precio}</strong>
                                                            </p>
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <hr className="my-4" />

                                                    <MDBRow>
                                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                            <MDBRipple rippleTag="div" rippleColor="light"
                                                                className="bg-image rounded hover-zoom hover-overlay">
                                                                <img src={id.imagen} className="w-100" />
                                                                <a href="#!">
                                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                                    </div>
                                                                </a>
                                                            </MDBRipple>
                                                        </MDBCol>

                                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                            <p>
                                                                <strong>{id.titulo}</strong>
                                                            </p>
                                                            <p>{id.texto}</p>
                                                            <p>Size: M</p>

                                                            <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                                title="Eliminar">
                                                                <MDBIcon fas icon="trash" />
                                                            </MDBTooltip>


                                                        </MDBCol>
                                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                                <MDBBtn className="px-3 me-2">
                                                                    <MDBIcon fas icon="minus" />
                                                                </MDBBtn>

                                                                <MDBInput defaultValue={1} min={0} type="number" label="Cantidad" />

                                                                <MDBBtn className="px-3 ms-2">
                                                                    <MDBIcon fas icon="plus" />
                                                                </MDBBtn>
                                                            </div>

                                                            <p className="text-start text-md-center">
                                                                <strong>{id.precio}</strong>
                                                            </p>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-4">
                                                <MDBCardBody>
                                                    <p>
                                                        <strong>Fecha de entrega estimada</strong>
                                                    </p>
                                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-4 mb-lg-0">
                                                <MDBCardBody>
                                                    <p>
                                                        <strong>Aceptamos</strong>
                                                    </p>
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
                                                        alt="PayPal acceptance mark" />
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBCard className="mb-4">
                                                <MDBCardHeader>
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Detalles de tu cesta
                                                    </MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBListGroup>
                                                        <MDBListGroupItem
                                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                            Modelo
                                                            <span>{id.precio}</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                                            Envío
                                                            <span>Gratis</span>
                                                        </MDBListGroupItem>
                                                        <MDBListGroupItem
                                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                            <div>
                                                                <strong>{id.precio}</strong>
                                                                <strong>
                                                                    <p className="mb-0">(IVA incluido)</p>
                                                                </strong>
                                                            </div>
                                                            <span>
                                                                <strong>{id.precio}</strong>
                                                            </span>
                                                        </MDBListGroupItem>
                                                    </MDBListGroup>

                                                    <MDBBtn block size="lg">
                                                        Pagar
                                                    </MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </section>
                        </div>
                    </>
                )
            }
            <Benefits />
            <Footer />

        </>
    );
}