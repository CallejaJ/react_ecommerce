import { Outlet } from 'react-router-dom';
import Navbar_carrito from './Navbar_carrito';
import Header_carrito from './Header_carrito';

function Layout_carrito() {
    return (
        <>
            <Header_carrito />
            <Navbar_carrito />
            <Outlet />
        </>
    )
}

export default Layout_carrito