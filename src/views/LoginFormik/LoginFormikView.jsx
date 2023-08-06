import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

export default function LoginFormikView({ formik }) {

    const { loginMessage } = useAuthContext();
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
                                    {loginMessage ? (
                                        <Alert variant='info' >
                                            {loginMessage}
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

                                <h3>Nuevo usuario   </h3>
                                <p>Crea una cuenta en 3DREAMS para guardar tus progresos.</p>
                                <Link className="btn btn-primary w-100 mt-4 mb-2" to="/register"> Ir a registro   </Link>

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