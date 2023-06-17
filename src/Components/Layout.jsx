import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

// const sections = [
//     {
//         label: "Inicio",
//         linkTo: "/",
//     },
//     {
//         label: "Modelos",
//         linkTo: "/modelos",
//     },
//     {
//         label: "Tecnologias",
//         linkTo: "/tecnologias",
//     },
//     {
//         label: "Garantia",
//         linkTo: "/garantia",
//     },
//     {
//         label: "Experiencias",
//         linkTo: "/experiencias",
//     },
//     {
//         label: "Login",
//         linkTo: "/login",
//     },

// ]

function Layout() {
    return (
        <>
            <Header />
            <Navbar existUser />
            <Outlet />
        </>
    )
}

export default Layout