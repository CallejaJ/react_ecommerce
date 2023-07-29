import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import PrivateRoute from "./Components/Router/PrivateRoute";
import PublicRoute from "./Components/Router/PublicRoute";
import AuthContextProvider from "./context/AuthContext";

import Modelos from "./views/Modelos";
import Layout from "./Components/Layout";
import Tecnologias from "./views/Tecnologias";
import Garantia from "./views/Garantia";
import NotFound from "./views/NotFound";
import Experiencias from "./views/Experiencias";
import Cesta from "./views/Cesta/Cesta"
import Home from "./views/Home";
import Pago from "./views/Pago";
import Enviar from "./views/Enviar"
import Detalles from "./views/Detalles/Detalles";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"




export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginFormik />} />
              {/* Rutas públicas */}
              <Route element={<PublicRoute />} >
                <Route path="modelos">
                  <Route index element={<Modelos />} />
                  <Route path=":id" element={<Detalles />} />
                </Route>
                <Route path="tecnologias" element={<Tecnologias />} />
                <Route path="garantia" element={<Garantia />} />
                <Route path="experiencias" element={<Experiencias />} />
              </Route>
            </Route>
            {/* rutas privadas */}
            <Route element={<PrivateRoute />} >
              <Route path="/cesta" >
                <Route index element={<Cesta />} />
                <Route path="pago" element={<Pago />} />
                <Route path="enviar" element={<Enviar />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>

    </>
  );
}

