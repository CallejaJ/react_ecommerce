import { Link, Navigate } from "react-router-dom"
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
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
import { formatter } from "../../utils/numberFormat"
import { useCartContext } from "../../context/CartContext"



export default function Enviar() {
    const { items, totalAmount, taxesAmount } = useCartContext();


    return (
        <>
            <Stepper />

            {items.length > 0 ? (
                // aqui saco el detalle de la tarjeta elegida
                <>
                    <section className="container h-100 h-custom border border-primary border-2 rounded-4" style={{ backgroundColor: "#eee" }}>
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">

                                <MDBCol>
                                    <MDBCard background="light" className="border-0 rounded-2" >
                                        <MDBCardBody className="p-4">
                                            <MDBRow>
                                                <MDBCol lg="6">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <h3 className="mb-1 text-primary">Dirección de envío</h3>
                                                            <p className="mb-0">Selecciona entre las siguientes direcciones disponibles.</p>
                                                        </div>
                                                    </div>

                                                    <MDBCard className="mb-3">
                                                        <MDBCardBody >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div className="ms-3">
                                                                        <MDBTypography tag="h5">
                                                                        </MDBTypography>
                                                                        <p className="small mb-0">Roberto Benavent</p>
                                                                        <p className="small mb-0">Paseo de la Castellana 136, 5ºH</p>
                                                                        <p className="small mb-0">28880 - Madrid</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <button className="btn btn-primary w-70" to="/cesta/enviar">Elegir</button>
                                                                    <button className="btn btn-white w-50 mt-2 mb-2 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                </div>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <MDBCard className="mb-3">
                                                        <MDBCardBody >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div className="ms-3">
                                                                        <MDBTypography tag="h5">

                                                                        </MDBTypography>
                                                                        <p className="small mb-0">María Luisa Salgado</p>
                                                                        <p className="small mb-0">Urbanización Doña Casilda 9-2 2ªD</p>
                                                                        <p className="small mb-0">11205 - Cádiz</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <button className="btn btn-primary w-70" to="/cesta/enviar">Elegir</button>
                                                                    <button className="btn btn-white w-50 mt-2 mb-2 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                </div>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>

                                                    <MDBCard className="mb-3">
                                                        <MDBCardBody >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div className="ms-3">
                                                                        <MDBTypography tag="h5">

                                                                        </MDBTypography>
                                                                        <p className="small mb-0">María Luisa Salgado</p>
                                                                        <p className="small mb-0">Avenida de Los Álamos, 37</p>
                                                                        <p className="small mb-0">08880 - San Cugat del Vallés</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <button className="btn btn-primary w-70" to="/cesta/enviar">Elegir</button>
                                                                    <button className="btn btn-white w-50 mt-2 mb-2 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                </div>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>

                                                    <MDBCard className="mb-3">
                                                        <MDBCardBody >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div className="ms-3">
                                                                        <MDBTypography tag="h5">

                                                                        </MDBTypography>
                                                                        <p className="small mb-0">Juan Luis Benavent</p>
                                                                        <p className="small mb-0">Paseo de la Castellana 136, 5ºH</p>
                                                                        <p className="small mb-0">28880 - Madrid</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <button className="btn btn-primary w-70" to="/cesta/enviar">Elegir</button>
                                                                    <button className="btn btn-white w-50 mt-2 mb-2 gap-2"><i className="bi bi-trash text-primary w-100 mt-2 mb-2 gap-2"></i></button>
                                                                </div>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <MDBTypography tag="h5">
                                                        <Link className="btn btn-secondary w-100 mt-4 mb-0" to="/cesta">Volver a la cesta de compra</Link>
                                                    </MDBTypography>
                                                </MDBCol>

                                                <MDBCol lg="6">
                                                    <MDBCard className="rounded-3">
                                                        <MDBCardBody>
                                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    Añadir nueva dirección de envío
                                                                </MDBTypography>

                                                                <MDBCardImage src="https://www.shareicon.net/download/2016/10/18/844008_package.ico"
                                                                    fluid className="text-primary rounded-5" style={{ width: "45px" }} alt="delivery-address" />
                                                            </div>

                                                            <p className="small">Introduzca sus datos personales y nosotros nos encargaremos del resto.</p>


                                                            <form className="mt-4 text-secondary">
                                                                <MDBInput className="mb-2" label="Nombre completo" type="text" size="lg"
                                                                    placeholder="JOHN DOE" contrast />

                                                                <MDBInput className="mb-2" label="Dirección" type="text" size="lg"
                                                                    minLength="16" maxLength="19" placeholder="CALLE MARMOLES Nº2" contrast />

                                                                <MDBRow className="mb-2 text-secondary">
                                                                    <MDBCol md="6">
                                                                        <MDBInput className="mb-2" label="Número" type="text" size="lg"
                                                                            minLength="9" maxLength="13" placeholder="Nº2 - 1ºB" contrast />
                                                                    </MDBCol>
                                                                    <MDBCol md="6">
                                                                        <MDBInput className="mb-2" label="C.P." type="text" size="lg" minLength="5"
                                                                            maxLength="6" placeholder="28880" contrast />
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <MDBRow className="mb-2 text-secondary">
                                                                    <MDBCol md="6">
                                                                        <MDBInput className="mb-2 " label="Población" type="text" size="lg"
                                                                            minLength="3" maxLength="13" placeholder="Madrid" contrast />
                                                                    </MDBCol>
                                                                    <MDBCol md="6">
                                                                        <MDBInput className="mb-2" label="Teléfono" type="text" size="lg"
                                                                            minLength="9" maxLength="13" placeholder="632 657 789" contrast />
                                                                    </MDBCol>
                                                                </MDBRow>
                                                            </form>

                                                            <hr className="mt-5" />

                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-2">Importe total</p>
                                                                <p className="mb-2">{(formatter.format(totalAmount))}</p>
                                                            </div>

                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-2">Transporte</p>
                                                                <p className="mb-2">Gratuito</p>
                                                            </div>

                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-2">Total <strong>(IVA incluido)</strong></p>
                                                                <p className="mb-2"><strong>{(formatter.format(taxesAmount))}</strong></p>
                                                            </div>

                                                            <div className="d-flex gap-3 w-100">
                                                                <Link className="btn btn-secondary w-50 mt-4 mb-2" to="/cesta/enviar">Añadir</Link>
                                                                <Link className="btn btn-primary w-50 mt-4 mb-2" to="/cesta/pasarela">Pasarela de pago</Link>
                                                            </div>
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
                    <Benefits />
                    <Footer />
                </>
            ) : (
                <Navigate to="/cesta" />
            )
            }
        </>
    );
}


            // <nav className="container">
            //     <h1>Añadir dirección de envío</h1>
            //     <a href="index.html">Cancelar</a>
            // </nav>

            // <main className="container">
            //     <div>
            //         <h2>Dirección de envío</h2>
            //         <form>
            //             <input type="text" name="name" placeholder="Nombre" />
            //             <input type="text" name="name" placeholder="Apellidos" />
            //             <input type="text" name="phone" placeholder="Teléfono" />
            //             <input type="text" name="mail" placeholder="E-mail" />
            //             <input type="text" name="street" placeholder="Dirección" />
            //             <input type="text" name="st number" placeholder="Detalles dirección" />
            //             <input type="text" name="county" placeholder="Provincia" />
            //             <input type="text" name="zip code" placeholder="Código postal" />
            //             <input type="text" name="country" placeholder="País" />
            //         </form>
            //         <a href="../HTML/finalizarcompra.html">Añadir dirección de envío</a>
            //     </div>



