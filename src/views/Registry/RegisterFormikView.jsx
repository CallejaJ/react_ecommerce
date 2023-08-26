import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Alert from 'react-bootstrap/Alert';
import Checkbox from './utils/ui/Checkbox';
import { Link } from 'react-router-dom';

export default function RegisterFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { registerMessage } = useAuthContext();

    return (

        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col mb-5">
                        <div className="text border border-primary border-1 rounded-4 p-5 align-items-center">

                            <h3>¿Tienes cuenta en 3DREAMS?</h3>
                            <p>Inicia sesión para guardar tus progresos.</p>
                            <Link className="btn btn-primary w-100 mt-4 mb-2" to="/login">Iniciar sesión</Link>

                        </div>
                    </div>
                    <div className="col mb-5">
                        <div>
                            <div className="text border border-primary border-1 rounded-4 p-5 align-items-center">

                                <h3>Formulario de registro</h3>
                                <p>Crea una cuenta en 3DREAMS para guardar tus progresos.</p>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Nombre"
                                        value={values.username}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.username && touched.username ? "input-error" : ""}
                                    />
                                    {errors.username && touched.username && (
                                        <p className="error">{errors.username}</p>
                                    )}
                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Apellidos"
                                        value={values.surname}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.surname && touched.surname ? "input-error" : ""}
                                    />
                                    {errors.surname && touched.surname && (
                                        <p className="error">{errors.surname}</p>
                                    )}
                                    <input
                                        type="email"
                                        name="newEmail"
                                        placeholder="E-mail"
                                        value={values.newEmail}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.newEmail && touched.newEmail ? "input-error" : ""}
                                    />
                                    {errors.newEmail && touched.newEmail && (
                                        <p className="error">{errors.newEmail}</p>
                                    )}
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Escribe tu contraseña"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.password && touched.password ? "input-error" : ""}
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Repite tu contraseña"
                                        value={values.confirmPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <p className="error">{errors.confirmPassword}</p>
                                    )}
                                    <div><Checkbox type="checkbox" name="acceptedTC" /></div>
                                    {registerMessage ? (
                                        <Alert variant='info' >
                                            {registerMessage}
                                        </Alert>
                                    ) : null
                                    }
                                    <input
                                        type="submit"
                                        value="Crear cuenta ahora"
                                    />
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