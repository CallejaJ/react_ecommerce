import Benefits from "../../Components/Benefits/Benefits"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"
import Footer from "../../Components/Footer"
import Destacados from "../../Components/Destacados/Destacados"
import { Link } from "react-router-dom"
import "../../CSS/style.css"
import video from "../../assets/video.mp4"


export default
    function Home() {
    return (
        <>
            <div className="mp4 container mt-5 mb-5">
                <video controls className="container">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <Card cards={card} />
            <Destacados />
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
                            <cite className="mt-3" title="Source Title">Luis Salgado, Sotogrande</cite>
                            <div className="text-black-50 mt-3">
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
    );
}

