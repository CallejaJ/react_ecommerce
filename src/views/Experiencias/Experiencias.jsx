import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import experience from "../../assets/experience.png"
import Destacados from "../../Components/Destacados/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

export default
    function Experiencias() {

    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={experience} loading="lazy"></img>
            </div>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}

