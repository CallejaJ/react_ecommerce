import "../../CSS/style.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";

export default function Card4({ cards }) {
    const { addToCart } = useCartContext();


    return (
        <>
            <div id="columnas" className="container card-text text-secondary mt-3 mb-4">
                <p>Normalmente los modelos 3D utilizan materiales que van desde las resinas hasta los plásticos.  </p>
                <p>Sin embargo, en la impresión 3D en la construcción se pueden usan acero y hormigón e incluso plásticos sintéticos.</p>
                <p>Los ladrillos inteligentes que se usan en las casas mediante esta tecnología tienen forma de lego y están hechos de hormigón de alta resistencia.</p>
                <p>Te parecerá increible esta tecnología de vanguardia, sostenible y resistente a seismos. ¿Quieres aprender más sobre esta tecnología? Modelamos tu hogar de entre los diferentes modelos y estilos arquitectónicos.</p>
                <p>¿Quieres aprender más sobre esta tecnología? Modelamos tu hogar de entre los diferentes modelos y estilos arquitectónicos.</p>
            </div>
            {cards.map((card, index) => (
                <div key={index} className="container card mb-3">
                    <img src={card.imagen} className="card-img-top mt-3 mb-3" alt={card.titulo} />
                    <div className="card-body">
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

                        <p className="card-text text-secondary mt-3 ">{card.texto1}</p>
                        <div id="columnas" className="container card-text text-secondary mt-2 mb-4">
                            <p className="card-text text-secondary mt-3 mb-4">{card.texto2}</p>
                            <p className="card-text text-secondary mt-3 mb-4">{card.texto3}</p>
                        </div>
                        <div className="d-flex gap-3">
                            <Link addToCart={addToCart} className="btn btn-primary w-50" >Añadir al carrito</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

