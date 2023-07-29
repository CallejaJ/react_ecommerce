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
                    <img height={600} src={card.imagen} className="card-img-top mt-3 mb-3" alt={card.titulo} />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title mb-3 ">{card.titulo}</h4>
                            <span className="texto-grande">{card.precio} <i className="bi bi-currency-euro text-primary"></i></span>
                        </div>

                        <div className="text-black-50">
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>

                        <p className="card-text text-secondary mt-3 mb-4">{card.texto1}</p>
                        <div id="columnas" className="card-text text-secondary mt-3 mb-4">
                            <p className="card-text text-secondary mb-2">{card.texto2}</p>
                            <p className="card-text text-secondary mb-2">{card.texto3}</p>
                            <p className="card-text text-secondary mb-2">{card.texto4}</p>
                            <p className="card-text text-secondary mb-2">{card.texto5}</p>
                        </div>
                        <div className="d-flex gap-3">
                            <Link addToCart={addToCart} className="btn btn-primary w-30" >Añadir a la cesta</Link>
                            <Link className="btn btn-secondary w-20" to="/">Volver</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

