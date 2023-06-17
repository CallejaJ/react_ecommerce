import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login"
import Modelos from "./views/Modelos";
import Layout from "./Components/Layout";
import Tecnologias from "./views/Tecnologias";
import Garantia from "./views/Garantia";
import "bootstrap/dist/css/bootstrap.css"
import NotFound from "./views/NotFound";
import Experiencias from "./views/Experiencias";
import Carrito from "./views/Carrito"
import Home from "./views/Home";
// import Layout_carrito from "./Components/Layout_carrito";
// import Pago from "./views/Pago";
// import Enviar from "./views/Enviar"
import Detalles from "./views/Detalles/Detalles";
// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout withHeader />}>
          <Route index element={<Home />} />

          <Route path="modelos">
            <Route index element={<Modelos />} />
            <Route path=":id" element={<Detalles />} />
          </Route>

          <Route path="tecnologias" element={<Tecnologias />} />
          <Route path="garantia" element={<Garantia />} />
          <Route path="experiencias" element={<Experiencias />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/" element={<Layout />} >
          <Route path="carrito" element={<Carrito />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App