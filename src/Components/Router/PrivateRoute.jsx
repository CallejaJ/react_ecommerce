import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function PrivateRoute({ allowedRoles }) {
    // Comprobar en el contexto si existe usuario

    const location = useLocation();
    const { user } = useAuthContext();

    return allowedRoles?.includes(user?.userRole) ? (
        <Outlet />
    ) : user ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
}


// import { useAuthContext } from "../../context/AuthContext";
// import { Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute() {

//     // comprobar en el contexto si existe usuario
//     const { user } = useAuthContext();
//     if (!user) {
//         return <Navigate to="/login" />
//     }
//     else {
//         return (
//             <div>
//                 <Outlet />
//             </div>
//         )
//     }
// }

