import Benefits from "../../Components/Benefits/Benefits"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"
import Footer from "../../Components/Footer"
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import { Link } from "react-router-dom"
import "../../CSS/style.css"


function Modelos() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
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
                            <p className="h4 text-primary">Diseño personalizado</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="maqueta3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h1 text-primary">Set 3</h5>
                            <p className="h4 text-primary">Construimos tus sueños</p>
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


            <Card cards={card} />
            <section className="container d-flex justify-content-between my-5 py-5">
                <div className="w-100">
                    <h2>Experiencias de clientes</h2>
                    <p>Clientes internacionales satisfechos con la experiencia 3DREAMS</p>
                    <Link className="btn btn-primary" to="/experiencias">Más experiencias</Link>
                </div>

                <div className="w-100">
                    <figure className="text-end border border-primary border-2 rounded-4 p-5 align-items-center">
                        <blockquote className="blockquote">
                            <p>Justo lo que les pedí y en sólo 2 meses estuvo lista.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title">Luis Salgado, Sotogrande</cite>
                            <div className="text-black-50">
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                            </div>


                        </figcaption>
                    </figure>
                </div>

            </section>


            <Benefits />
            <Footer />
        </>
    )
}

export default Modelos