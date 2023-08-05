import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Alert from 'react-bootstrap/Alert';
import Checkbox from '../Registry/ui/Checkbox';

export default function LoginFormikView({ formik }) {

    const { message } = useAuthContext();
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
                                    {message ? (
                                        <Alert variant='info' >
                                            {message}
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

                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Nombre"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.name && touched.name ? "input-error" : ""}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="error">{errors.name}</p>
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
                                    {errors.email && touched.surname && (
                                        <p className="error">{errors.surname}</p>
                                    )}
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}
                                    <input
                                        type="password"
                                        name="newpassword"
                                        placeholder="Escribe tu contraseña"
                                        value={values.newPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.newPassword && touched.newPassword ? "input-error" : ""}
                                    />
                                    {errors.newPassword && touched.newPassword && (
                                        <p className="error">{errors.newPassword}</p>
                                    )}
                                    <input
                                        type="confirmpassword"
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
                                    {message ? (
                                        <Alert variant='info' >
                                            {message}
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