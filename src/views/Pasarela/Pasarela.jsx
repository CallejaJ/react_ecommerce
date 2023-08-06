import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import pagoexito from "../../assets/pagoexito.png"
import "bootstrap/dist/css/bootstrap.css"

import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
} from "mdb-react-ui-kit";



export default function Pasarela() {


    return (
        <>

            <>
                <section className="container h-100 h-custom border border-primary border-2 rounded-4 mt-5" style={{ backgroundColor: "#eee" }}>
                    <MDBContainer className="py-5 h-100">
                        <MDBCard background="light" className=" border-0 rounded-2" >
                            <MDBCardBody className="d-flex align-items-center p-4">
                                <img src={pagoexito}
                                    className="" style={{ width: "495px" }} alt="sucess-payment" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </section>
                <Benefits />
                <Footer />
            </>

        </>
    );
}