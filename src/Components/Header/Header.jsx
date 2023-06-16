import { Link } from 'react-router-dom';
import "../../CSS/style.css"
import logo from "../../assets/logo-sin-fondo.png"
// import header_background from "../../assets/header_background.jpg"

function Header() {
    return (
        <header className="navbar navbar-expand-lg py-5 bg-primary">
            <div className="container gap-3">
                <div className="logo">
                    <img className="navbar-brand" src={logo}></img>
                </div>
                <h1 className="navbar-brand text-light">Proyecto 3DREAMS</h1>

                <form className="d-flex w-100" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className="btn btn-outline-light w-20" type="submit">Buscar</button>


                <button type="button" className="btn btn btn-light position-relative"><Link className="nav-link active text-primary" aria-current="page" to="carrito">Carrito</Link><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span className="visually-hidden">unread messages</span>
                </span>
                </button>

            </div>
        </header>


    )
}

export default Header