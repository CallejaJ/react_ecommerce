import Benefits from "../../Components/Benefits/Benefits"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"
import Footer from "../../Components/Footer"
import Destacados from "../../Components/Destacados/Destacados"
import { Link } from "react-router-dom"
import "../../CSS/style.css"
import video from "../../assets/video.mp4"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

let card2 = []
let items = 4
let aleatoryCard;

while (card2.length < items) {
    aleatoryCard = card[Math.floor(Math.random() * card.length)];
    if (!repetida(aleatoryCard, card2)) {
        card2.push(aleatoryCard);

    }
}

function repetida(aleatoryCard, card2) {
    for (let i = 0; i < card2.length; i++) {
        if (card2[i] === aleatoryCard) {
            return true
        }
    }
    return false
}


let experiencia3 = []
let item = 2
let experienceCard;

while (experiencia3.length < item) {
    experienceCard = experiencia[Math.floor(Math.random() * experiencia.length)];
    if (!repetidas(experienceCard, experiencia3)) {
        experiencia3.push(experienceCard);
    }
}

function repetidas(experienceCard, experiencia3) {
    for (let i = 0; i < experiencia3.length; i++) {
        if (experiencia3[i] === experienceCard) {
            return true
        }
    }
    return false
}



export default
    function Home() {
    return (
        <>
            <div className="mp4 container mt-5 mb-5">
                <video controls className="container">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="container d-flex justify-content-between align-items-center my-3 mt-4 gap-1">
                <div className='container'>
                    <h2>Diseñamos tu hogar en 3D</h2>
                    <p id="test1">Diseños personalizados, diferentes estilos y estructuras para vivir en el hogar de tus sueños.</p>
                </div>
            </div>
            <Card cards={card2} />
            <Destacados />
            <section className="container d-flex justify-content-between my-5 py-5">
                <div className=" container w-100">
                    <h2>Experiencias de clientes</h2>
                    <p>Clientes internacionales satisfechos con la experiencia 3DREAMS</p>
                    <Link className="btn btn-primary" to="/experiencias">Más experiencias</Link>
                </div>

                <Experiencia experiencias={experiencia3} />

            </section>
            <Benefits />
            <Footer />
        </>
    );
}

