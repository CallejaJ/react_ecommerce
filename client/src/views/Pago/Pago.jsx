import Benefits from "../../Components/Benefits/Benefits"
import { useCartContext } from "../../context/CartContext";
import { formatter } from "../../utils/numberFormat";
import Footer from "../../Components/Footer/Footer"
import { Link, Navigate } from "react-router-dom"
import Stepper from "../../Components/Stepper"
import BankCard from "../../Components/BankCard/BankCard";
import { bankCard } from "../../Components/BankCard/BankCardsDummy";
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

export default function Pago() {
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
                                                            <h3 className="mb-1 text-primary">Mis tarjetas</h3>
                                                            <p className="mb-0">Elige entre tus tarjetas o añade una nueva</p>
                                                        </div>
                                                    </div>
                                                    <BankCard bankCards={bankCard} />
                                                    <MDBTypography tag="h5">
                                                        <Link className="btn btn-secondary w-100 mt-4 mb-0" to="/cesta">Volver a la cesta de compra</Link>
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol lg="6">
                                                    <MDBCard className="rounded-3">
                                                        <MDBCardBody>
                                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    Añadir nueva tarjeta bancaria
                                                                </MDBTypography>
                                                                <MDBCardImage src="https://shop.carmen24.es/wp-content/uploads/2020/12/pago-seguro-garantizado.png"
                                                                    fluid className="rounded-3" style={{ width: "195px" }} alt="Avatar" />
                                                            </div>
                                                            <p className="small">Introduzca los datos de su tarjeta bancaria para procesar el pago.</p>


                                                            <form className="mt-4 text-secondary">
                                                                <MDBInput className="mb-2" label="Titular de la tarjeta" type="text" size="lg"
                                                                    placeholder="JOHN DOE" contrast />

                                                                <MDBInput className="mb-2" label="Número de tarjeta" type="text" size="lg"
                                                                    minLength="16" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                                <MDBRow className="mb-4">
                                                                    <MDBCol md="6">
                                                                        <MDBInput className="mb-2" label="Fecha de Validez" type="text" size="lg"
                                                                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                                    </MDBCol>
                                                                    <MDBCol md="6">
                                                                        <MDBInput type="password" className="mb-2" label="CVV" size="lg" minLength="3"
                                                                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
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
                                                                <Link className="btn btn-secondary w-100 mt-4 mb-2" to="/cesta/enviar">Añadir a mis tarjetas</Link>
                                                                <Link className="btn btn-primary w-100 mt-4 mb-2" to="/cesta/enviar">Continuar</Link>
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