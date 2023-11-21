import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import experience from "../../assets/webp/experience.webp"
import Destacados from "../../Components/Destacados/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop"


let experiencia2 = []
let items = 4
let experienceCard;

while (experiencia2.length < items) {
    experienceCard = experiencia[Math.floor(Math.random() * experiencia.length)];
    if (!repetida(experienceCard, experiencia2)) {
        experiencia2.push(experienceCard);

    }
}

function repetida(experienceCard, experiencias2) {
    for (let i = 0; i < experiencias2.length; i++) {
        if (experiencias2[i] === experienceCard) {
            return true
        }
    }
    return false
}



export default
    function Experiencias() {

    return (
        <>
            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={experience}></img>
            </div>
            <h1 className="container text-primary mb-4"><strong>Experiencias</strong></h1>

            <Experiencia experiencias={experiencia2} />
            <Destacados />
            <Benefits />
            <ScrollToTop />
            <Footer />
        </>
    )
}

