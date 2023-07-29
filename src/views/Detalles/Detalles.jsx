import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"
import { card } from "../../Components/Card/CardsDummy"
import { Link, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"


export default function Detalles() {

    const { id } = useParams();
    console.log(id);

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
                                    <h3 className="card-title text-secondary mt-2">{modelo.titulo}</h3>
                                    <span className="span texto-grande mt-2">{modelo.precio} <i className="bi bi-currency-euro text-primary"></i></span>
                                </div>

                                <div className="text-black-50">
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill text-primary"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>

                                <p className="card-text text-secondary mt-3 mb-4">{modelo.texto}</p>

                                <div className="d-flex gap-3">
                                    <Link className="btn btn-primary w-40" >Añadir al cesta</Link>
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
            <Footer />

        </>
    );
}
