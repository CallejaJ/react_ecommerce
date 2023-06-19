import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import tecnology from "../../assets/tecnology.png"
import Destacados from "../../Components/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

export default
    function Tecnologias() {

    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={tecnology}></img>
            </div>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}
