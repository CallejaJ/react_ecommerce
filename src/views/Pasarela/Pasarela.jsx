import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Stepper from "../../Components/Stepper"
import pagoexito from "../../assets/pagoexito.png"
import "bootstrap/dist/css/bootstrap.css"

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";



export default function Pasarela() {


    return (
        <>
            <Stepper />

            <>
                <section className="container h-100 h-custom border border-primary border-2 rounded-4" style={{ backgroundColor: "#eee" }}>
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">

                            <MDBCol>

                                <MDBCard background="light" className="border-0 rounded-2" >
                                    <MDBCardBody className="p-4">
                                        <MDBRow>
                                            <img src={pagoexito} />
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

        </>
    );
}