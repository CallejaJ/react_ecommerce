import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"


function Login() {
    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="text border border-primary border-2 rounded-4 p-5 align-items-center">

                                <h3>Iniciar sesion</h3>
                                <p>Accede con tus datos anteriores</p>

                                <form>
                                    <input type="email" name="email" placeholder="E-mail" />
                                    <input type="password" name="password" placeholder="password" />
                                    <input type="submit" value="Iniciar sesión" />
                                </form>

                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <div className="text border border-primary border-2 rounded-4 p-5 align-items-center">

                                <h3>Regístrate</h3>
                                <p>Crea tu cuenta en 3DREAMS para guardar tus progresos.</p>

                                <form>
                                    <input type="text" name="nombre" placeholder="Nombre" />
                                    <input type="text" name="apellidos" placeholder="Apellidos" />
                                    <input type="email" name="email" placeholder="E-mail" />
                                    <input type="password" name="contraseña" placeholder="Contraseña" />
                                    <input type="submit" value="Crear cuenta ahora" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefits />
            <Footer />

        </>
    )
}

export default Login