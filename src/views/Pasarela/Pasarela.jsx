import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import pagoexito from "../../assets/pagoexito.png"
import "bootstrap/dist/css/bootstrap.css"

import {
    MDBCard,
    MDBContainer,
} from "mdb-react-ui-kit";



export default function Pasarela() {


    return (
        <>

            <>
                <section className="container h-100 h-custom border border-primary border-2 rounded-4 mt-5" style={{ backgroundColor: "#eee" }}>
                    <MDBContainer className="py-5 h-100">
                        <MDBCard background="light" className="justify-content-center border-0 rounded-2" >
                            <div className="d-flex justify-content-center p-4">
                                <img src={pagoexito}
                                    className="" style={{ width: "495px" }} alt="sucess-payment" />
                            </div>
                        </MDBCard>
                    </MDBContainer>
                </section>
                <Benefits />
                <Footer />
            </>

        </>
    );
}