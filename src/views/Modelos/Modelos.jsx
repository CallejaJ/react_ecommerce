import Benefits from "../../Components/Benefits/Benefits"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"
import Footer from "../../Components/Footer"
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import { Link } from "react-router-dom"
import "../../CSS/style.css"
import Carousel from 'react-bootstrap/Carousel';

function Modelos() {
    return (
        <>
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 1</h3>
                            <p className="text-secondary">Elegance</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-primary">Set 2</h3>
                            <p className="text-secondary">Family</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-primary">Set 3</h3>
                            <p className="text-secondary">Cohousing</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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