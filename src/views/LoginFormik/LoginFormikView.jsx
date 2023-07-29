import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Alert from 'react-bootstrap/Alert';

export default function LoginFormikView({ formik }) {

    const { errorMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    return (

        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col mb-5">
                        <div>
                            <div className="text border border-primary border-1 rounded-4 p-5 align-items-center">

                                <h3>Iniciar sesion</h3>
                                <p>Accede con tus datos anteriores</p>

                                <form id="login" onSubmit={handleSubmit}>
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="Escribe tu password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password ? "input-error" : ""}
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                    {errorMessage ? (
                                        <Alert variant='info' >
                                            {errorMessage}
                                        </Alert>
                                    ) : null
                                    }
                                    <input
                                        type="submit"
                                        value="Iniciar sesión" />
                                </form>

                            </div>

                        </div>
                    </div>
                    <div className="col mb-5">
                        <div>
                            <div className="text border border-primary border-1 rounded-4 p-5 align-items-center">

                                <h3>Regístrate</h3>
                                <p>Crea una cuenta en 3DREAMS para guardar tus progresos.</p>

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