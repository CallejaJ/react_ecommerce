import { Link } from "react-router-dom"
import "../../CSS/style.css"

import Benefits from "../../Components/Benefits/Benefits"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/webp/slider1.webp'
import slider2 from '../../assets/webp/slider2.webp'
import slider3 from '../../assets/webp/slider3.webp'
import slider4 from '../../assets/webp/slider4.webp'
import slider5 from '../../assets/webp/slider5.webp'
import slider6 from '../../assets/webp/slider6.webp'
import slider7 from '../../assets/webp/slider7.webp'
import slider8 from '../../assets/webp/slider8.webp'
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"
import Footer from "../../Components/Footer"


let experiencia3 = []
let item = 2
let experienceCard;

while (experiencia3.length < item) {
    experienceCard = experiencia[Math.floor(Math.random() * experiencia.length)];
    if (!repetidas(experienceCard, experiencia3)) {
        experiencia3.push(experienceCard);
        console.log(experienceCard);
        console.log(experiencia3);
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




function Modelos() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 1</h3>
                            <p className="text-secondary">Cottage</p>
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

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 4</h3>
                            <p className="text-secondary">Elegance</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider5}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 5</h3>
                            <p className="text-secondary">Urban</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider6}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 6</h3>
                            <p className="text-secondary">Diversity</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider7}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 7</h3>
                            <p className="text-secondary">Happiness</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider8}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary">Set 8</h3>
                            <p className="text-secondary">Fantasy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1 className="container text-primary mb-4"><strong>Modelos</strong></h1>


            <Card cards={card} />

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
    )
}

export default Modelos