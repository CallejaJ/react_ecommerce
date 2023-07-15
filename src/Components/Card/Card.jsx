/* eslint-disable react/prop-types */
import "../../CSS/style.css"
import { Link } from "react-router-dom"

function Card({ cards }) {
    return (
        <>

            <div className="container d-flex justify-content-evenly my-3 mt-4 gap-1">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img width={250} height={150} src={card.imagen} className="card-img-top" alt="imagen modelo" />

                        <div className="card-body gap-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="card-title">{card.titulo}</h6>
                                <span>{card.precio} <i className="bi bi-currency-euro text-primary"></i></span>
                            </div>

                            <div className="text-black-50">
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <p className="card-text">{card.text}</p>

                            <div className="d-flex gap-3">
                                <Link className="btn btn-primary w-100" >Reservar</Link>
                                <Link className="btn btn-secondary w-20" to={`/modelos/${card.id}`}>Ver</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card