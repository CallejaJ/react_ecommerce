import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import warranty from "../../assets/webp/warranty.webp"
import Destacados from "../../Components/Destacados/Destacados"
import { garantia } from "../../Components/Garantia/garantiasDummy"
import Garantia from "../../Components/Garantia/Garantia"

export default
    function Garantias() {
    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={warranty}></img>
            </div>
            <h1 className="container text-primary mb-4"><strong>Garantía</strong></h1>

            <Garantia garantias={garantia2} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}


let garantia2 = []
let items = 4
let warrantyCard;

while (garantia2.length < items) {
    warrantyCard = garantia[Math.floor(Math.random() * garantia.length)];
    if (!repetida(warrantyCard, garantia2)) {
        garantia2.push(warrantyCard);
    }
}

function repetida(warrantyCard, garantia2) {
    for (let i = 0; i < garantia2.length; i++) {
        if (garantia2[i] === warrantyCard) {
            return true
        }
    }
    return false
}



