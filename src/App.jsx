import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import PrivateRoute from "./Components/Router/PrivateRoute";
import PublicRoute from "./Components/Router/PublicRoute";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import { roles } from "./const/roles";

import Modelos from "./views/Modelos";
import Layout from "./Components/Layout";
import Tecnologias from "./views/Tecnologias";
import Garantia from "./views/Garantia";
import Experiencias from "./views/Experiencias";
import Cesta from "./views/Cesta/Cesta"
import Home from "./views/Home";
import Pago from "./views/Pago";
import Enviar from "./views/Enviar"
import Detalles from "./views/Detalles/Detalles";
import NotFound from "./views/NotFound";
import Admin from "./views/Admin/Admin";
import SuperAdmin from "./views/SuperAdmin/SuperAdmin";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import RegisterFormik from "./views/Registry/RegisterFormik";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import Pasarela from "./views/Pasarela/Pasarela";




export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="modelos">
                  <Route index element={<Modelos />} />
                  <Route path=":id" element={<Detalles />} />
                </Route>
                <Route path="tecnologias" element={<Tecnologias />} />
                <Route path="garantia" element={<Garantia />} />
                <Route path="experiencias" element={<Experiencias />} />
                {/* Rutas públicas */}
                <Route element={<PublicRoute />} >
                  <Route path="login" element={<LoginFormik />} />
                  <Route path="register" element={<RegisterFormik />} />
                </Route>
                <Route path="unauthorized" element={<Unauthorized />} />
              </Route>
              {/* rutas privadas */}
              <Route element={<PrivateRoute allowedRoles={roles.ALL_USERS} />} >
                <Route path="/cesta" >
                  <Route index element={<Cesta />} />
                  <Route path="pago" element={<Pago />} />
                  <Route path="enviar" element={<Enviar />} />
                  <Route path="pasarela" element={<Pasarela />} />

                </Route>
              </Route>
              <Route path="admin"
                element={<PrivateRoute allowedRoles={[roles.ADMIN]} />}
              >
                <Route index element={<Admin />} />
              </Route>
              <Route path="superadmin"
                element={<PrivateRoute allowedRoles={[roles.SUPER_ADMIN]} />}
              >
                <Route index element={<SuperAdmin />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>

    </>
  );
}

