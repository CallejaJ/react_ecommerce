import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"
// import { card } from "../../Components/Card/CardsDummy"
import { useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"


export default
    function Detalles() {

    const { id } = useParams();
    console.log(id);

    // tenemos que buscar el id del producto en la url con el hook useParam
    // hacer un fetch  para traerme el producto con la id "x"
    // renderizar mi jsx con el resultado del fetch
    let modelo = null;
    // fetch("localhost:3000/tarjetas/id")

    return (
        <>
            {
                modelo ? (
                    // aqui saco el detalle de todas la tarjeta elegida
                    <div className="card">
                        <img src={modelo.imagen} className="card-img-top" alt=".." />
                        <div className="card-body">
                            <h5 className="card-title">{modelo.titulo}</h5>
                            <p className="card-text">{modelo.text}</p>
                        </div>
                    </div>
                ) : (
                    <h1> El id del modelo elegido es {id} </h1>
                )
            }
            <Benefits />
            <Footer />

        </>
    );
}

{/* <h1 className="container text-secondary mt-3 mb-3">Detalle de producto</h1>


<Card cards={card} />
 */}