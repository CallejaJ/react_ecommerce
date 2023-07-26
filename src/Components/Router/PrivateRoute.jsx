import { useAuthContext } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PrivateRoute() {

    // comprobar en el contexto si existe usuario
    const { user } = useAuthContext();
    if (user) {
        return <Navigate to="/modelos" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
