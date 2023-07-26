import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';



function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout



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