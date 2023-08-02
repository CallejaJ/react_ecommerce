import { useNavigate } from 'react-router-dom'
import unauthorizedView from '../../assets/unauthorizedView.jpg'
import Footer from '../../Components/Footer/Footer'
import "bootstrap/dist/css/bootstrap.css"
import "../../CSS/style.css"


export default function Unauthorized() {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (

        <>
            <div className="container mt-5">
                <section>
                    <h1 className='text-secondary'>No autorizado</h1>
                    <p>No tienes permisos para ver la página solicitada.</p>
                    <div className="flexGrow">
                        <button className='btn btn-secondary w-40 mt-2 mb-2' onClick={goBack}>Volver</button>
                    </div>
                </section>
                <div className="align-items-center" >
                    <img className="mt-3 mb-3" src={unauthorizedView}></img>
                </div>

            </div>
            <Footer />
        </>
    )
}

