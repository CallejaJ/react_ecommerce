import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import warranty from "../../assets/warranty.jpg"
import Destacados from "../../Components/Destacados/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

export default
    function Garantia() {
    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={warranty} loading="lazy"></img>
            </div>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}

