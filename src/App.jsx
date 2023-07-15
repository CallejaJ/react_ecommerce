import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import PublicRoute from './components/Router/PublicRoute';
import PrivateRoute from "./Components/Router/PrivateRoute";
import AuthContextProvider from "./context/AuthContext";

import Modelos from "./views/Modelos";
import Layout from "./Components/Layout";
import Tecnologias from "./views/Tecnologias";
import Garantia from "./views/Garantia";
import NotFound from "./views/NotFound";
import Experiencias from "./views/Experiencias";
import Carrito from "./views/Carrito"
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
            <Route path="/" element={<Layout withHeader />}>
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
              <Route path="/carrito" >
                <Route index element={<Carrito />} />
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

