import "../../CSS/style.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";

export default function Card4({ cards }) {
    const { addToCart } = useCartContext();


    return (
        <>
            <p className="container card-text text-secondary mt-3 mb-4">Para un uso común se utilizan materiales que van desde las resinas hasta los plásticos. Sin embargo, en la impresión 3D en la construcción se pueden usan acero y hormigón e incluso plásticos sintéticos. Los ladrillos inteligentes que se usan en las casas mediante esta tecnología tienen forma de lego y están hechos de hormigón de alta resistencia. Los ladrillos se van instalando poco a poco en una placa de tierra que es la base de la casa, para hacer las paredes utiliza unas guías que sirven como rieles donde un robot coloca los ladrillos poco a poco. Para terminar las paredes, hacen unas capas de acabado que recubren distintos elementos e infraestructuras como tuberías y cables.</p>
            {cards.map((card, index) => (
                <div key={index} className="container card mb-3">
                    <img src={card.imagen} className="card-img-top mt-3 mb-3" alt=".." />
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

                        <p className="card-text text-secondary mt-3 mb-4">{card.texto}</p>

                        <div className="d-flex gap-3">
                            <Link addToCart={addToCart} className="btn btn-primary w-40" >Añadir al carrito</Link>
                            <Link className="btn btn-secondary w-20" to="/modelos">Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

