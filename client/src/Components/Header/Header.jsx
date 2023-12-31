import { Link } from 'react-router-dom';
import "../../CSS/style.css"
import logo from "../../assets/webp/logo-sin-fondo.webp"
import { useCartContext } from '../../context/CartContext';

function Header() {
    let { totalItems } = useCartContext()
    return (
        <header className="navbar navbar-expand-lg py-5 bg-primary">
            <div className="container gap-3">
                <div className="logo">
                    <img className="navbar-brand" src={logo}></img>
                </div>
                <h1 className="navbar-brand text-light">3DREAMS</h1>

                <form className="d-flex w-100" role="search">
                    <input className="form-control me-2" type="search" placeholder="Introduce tu búsqueda" aria-label="Search" />
                </form>
                <button className="btn btn-outline-light w-20" type="submit">Buscar</button>


                <Link className="nav-link active text-primary" aria-current="page" to="cesta">
                    <button id="test2" type="button" className="btn btn btn-light position-relative">
                        Cesta
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>

            </div>
        </header>


    )
}

export default Header