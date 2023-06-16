import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import Destacados from "../../Components/Destacados/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"

function Experiencias() {

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="slider1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h1 text-primary">Set 1</h5>
                            <p className="h4 text-primary">Tu sueño hecho realidad</p>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="slider2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h1 text-primary">Set 2</h5>
                            <p className="h4 text-primary">Diseño 3D personalizado</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={slider3} className="d-block w-100" alt="maqueta3" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5 className="h1 text-primary">Set 3</h5>
                            <p className="h4 text-primary">Construimos tus sueños</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}

export default Experiencias