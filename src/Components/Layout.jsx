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