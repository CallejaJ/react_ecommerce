import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"

export default function LoginFormikView({ formik }) {

    const { errorMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    const { values, touched, errors, handleChange, handleSubmit } = formik;

    return (

        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="text border border-primary border-2 rounded-4 p-5 align-items-center">

                                <h3>Iniciar sesion</h3>
                                <p>Accede con tus datos anteriores</p>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Type your email"
                                        value={values.email}
                                        onChange={handleChange}
                                    // error={touched.email && Boolean(errors.email)}
                                    // helperText={touched.email && errors.email} 
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Type your password"
                                        value={values.password}
                                        onChange={handleChange}
                                    // {touched.password && Boolean(errors.password)}
                                    // helperText={touched.password && errors.password}
                                    />

                                    {errorMessage ? (
                                        <h6>
                                            {errorMessage}
                                        </h6>
                                    ) : null}
                                    <input
                                        type="submit"
                                        value="Iniciar sesión" />
                                </form>
                                <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>

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
                                    <input type="password" name="password" placeholder="password" />
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