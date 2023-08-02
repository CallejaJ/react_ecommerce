import { Link } from 'react-router-dom';
import "../../CSS/style.css"
import { card } from "../../Components/Card/CardsDummy"
import Card from "../../Components/Card/"

let card2 = []
let items = 4
let aleatoryCard;

while (card2.length < items) {
    aleatoryCard = card[Math.floor(Math.random() * card.length)];
    if (!repetida(aleatoryCard, card2)) {
        card2.push(aleatoryCard);
    }
}

function repetida(aleatoryCard, card2) {
    for (let i = 0; i < card2.length; i++) {
        if (card2[i] === aleatoryCard) {
            return true
        }
    }
    return false
}



function Destacados() {
    return (
        <>
            <div className="container d-flex justify-content-evenly my-3 mt-4 gap-1">
                <div className='container'>
                    <h2>Modelos destacados</h2>
                    <p>Diseños en 3D para el diseño personalizable del hogar de tus sueños. </p>
                    <Link className="btn btn-primary" to="/modelos">Ver más</Link>
                </div>
            </div>
            <Card cards={card2} />
        </>
    )
}

export default Destacados

