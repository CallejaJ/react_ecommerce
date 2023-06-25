import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import warranty from "../../assets/webp/warranty.webp"
import Destacados from "../../Components/Destacados/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

export default
    function Garantia() {
    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={warranty}></img>
            </div>
            <h1 className="container text-primary mb-4"><strong>Garantía</strong></h1>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}

