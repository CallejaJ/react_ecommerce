import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";


export default function BankCard({ bankCards }) {

    return (
        <>
            {bankCards.map((bankCard, index) => (
                <div key={index}>
                    <MDBCard className="mb-3 mt-3">
                        <MDBCardBody >
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center mt-2">
                                    <h6 className="text-secondary">{bankCard.numberID}</h6>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <button className="btn btn-primary w-70" to="/cesta/enviar">Elegir</button>
                                    <button className="btn btn-white w-50"><i className="bi bi-trash text-primary w-100 mt-1 mb-1 gap-2"></i></button>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </>
    )
}