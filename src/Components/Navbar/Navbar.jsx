import "../../CSS/style.css"
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="modelos">Modelos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="tecnologias">Tecnologias</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="garantia">Garantia</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" aria-current="page" to="experiencias">Experiencias</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 main-color">
                                <li className="nav-item">
                                    <Link className="nav-link active text-secondary" aria-current="page" to="/">Cerrar sesion</Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </nav >
        </>

    )
}

export default Navbar