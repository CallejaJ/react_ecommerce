import { Link } from 'react-router-dom';
import "../../CSS/style.css"
import logo from "../../assets/webp/logo-sin-fondo.webp"



function Footer() {
    return (
        <>

            <section className="mt-3">
                <footer className="p-3 mb-2 bg-secondary text-white">
                    <div className="container d-flex">
                        <div className="w-100">

                            <div className="d-flex gap-3 mt-3">
                                <div className="logo">
                                    <img className="navbar-brand" src={logo}></img>
                                </div>
                                <p className="navbar-brand text-light">Proyecto 3DREAMS</p>
                                <ul>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="privacidad">Política de privacidad</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="devluciones">Politica de devoluciones</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="cookies">Politica de cookies</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="legal">Aviso legal</Link></li>
                                </ul>
                                <ul>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="blog">Blog</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="suppliers">Proveedores</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="oficinas">Red</Link></li>
                                    <li><Link className="nav-link active text-white h1" aria-current="page" to="contacto">Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="navbar-brand text-light mt-3 mb-3">¿Quieres recibir las últimas novedades?</div>
                            <div className="d-flex mb-3 gap-3">
                                <input type="text" className="form-control" placeholder="Escribe tu e-mail"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" type="button" id="button-addon2">Listo</button>
                            </div>
                            <form>
                                <label htmlFor="politicadeprivacidad">
                                    Acepto la política de privacidad
                                </label>
                            </form>
                            <div className="d-flex mb-0 mt-2 gap-3">
                                <p>Síguenos en redes</p>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-youtube"></i>
                                <i className="bi bi-pinterest"></i>
                                <i className="bi bi-linkedin"></i>

                            </div>
                        </div>
                    </div>
                </footer>
            </section>


        </>
    )
}

export default Footer
