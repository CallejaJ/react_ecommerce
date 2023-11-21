import { useAuthContext } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PublicRoute() {

    // comprobar en el contexto si existe usuario
    const { user } = useAuthContext();
    if (user) {
        return <Navigate to="/cesta" />
    }
    else {
        return (
            <div>
                <Outlet />
            </div>
        )
    }
}
