import { Link, useParams } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";

import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"
import { card } from "../../Components/Card/CardsDummy"
import "bootstrap/dist/css/bootstrap.css"
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';



export default function Detalles() {

    const { id } = useParams();
    const { addToCart } = useCartContext();


    // tenemos que buscar el id del producto en la url con el hook useParam
    // hacer un fetch  para traerme el producto con la id "x"
    // renderizar mi jsx con el resultado del fetch
    let modelo = null;

    for (let i = 0; i < card.length; i++) {
        if (card[i].id == id) {
            modelo = card[i]
        }
    }
    // fetch("localhost:3000/tarjetas/id")

    return (
        <>
            {
                modelo ? (
                    // aqui saco el detalle de la tarjeta elegida
                    <>
                        <h1 className="container text-primary mt-5 mb-5"><strong>Detalles</strong></h1>
                        <div className="container card">
                            <img src={modelo.imagen} className="card-img-top mt-3" alt={modelo.id} />
                            <div className="card-body">

                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mb-3 ">{modelo.titulo}</h4>
                                    <span className="texto-grande mt-2">{modelo.precio} <i className="bi bi-currency-euro text-primary"></i></span>
                                </div>


                                <div className="text-black-50">
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="card-text text-secondary mt-3 mb-4">{modelo.texto1}</p>
                                <div id="columnas" className="card-text text-secondary mt-3 mb-4">
                                    <p className="card-text text-secondary mb-2">{modelo.texto2}</p>
                                    <p className="card-text text-secondary mb-2">{modelo.texto3}</p>
                                    <p className="card-text text-secondary mb-2">{modelo.texto4}</p>
                                    <p className="card-text text-secondary mb-2">{modelo.texto5}</p>

                                </div>
                                <div className="d-flex gap-3">
                                    <button onClick={() => addToCart({ id })} className="btn btn-primary w-40" >Añadir a la cesta</button>
                                    <Link className="btn btn-secondary w-20" to="/modelos">Ver más</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1> Cargando.... </h1>
                )
            }
            <Benefits />
            <ScrollToTop />
            <Footer />
        </>
    );
}
