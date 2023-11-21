import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer/Footer"
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';


export default function LoginFormikView({ formik }) {

    const { loginMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    setTimeout(() => {
        loginMessage
    }, 4000)


    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    return (

        <>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <h2 className="fw-bold mb-2 text-center">Iniciar sesión</h2>
                                <p className="text-blue-50 text-center p-3 mt-6 mb-3">Accede con tus datos anteriores</p>
                                <form id="login" onSubmit={handleSubmit}>
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        id='email'
                                        type='email'
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}
                                        size="lg"
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        id='password'
                                        type='password'
                                        placeholder="Escribe tu contraseña"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password ? "input-error" : ""}
                                        size="lg"
                                    />
                                    <MDBCheckbox
                                        name='flexCheck'
                                        id='flexCheckDefault'
                                        className='mb-4 mt-1 ml-1 p-2'
                                        label='Recordar contraseña'
                                    />
                                    {loginMessage ? (
                                        <Alert severity="info" >
                                            {loginMessage}
                                        </Alert>
                                    ) : null}
                                    <MDBBtn
                                        type='submit'
                                        size="lg"
                                        noRipple="true"
                                    >
                                        Iniciar sesión
                                    </MDBBtn>
                                </form>
                                <hr className="my-4" />
                                <MDBBtn
                                    className="mb-2 w-100"
                                    size="lg"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    noRipple="true"
                                >
                                    <MDBIcon
                                        fab icon="google"
                                        className="mx-2"
                                    />
                                    Iniciar sesión con Google
                                </MDBBtn>

                                <MDBBtn
                                    className="mb-4 w-100"
                                    size="lg"
                                    style={{ backgroundColor: '#3b5998' }}
                                    noRipple="true"
                                >
                                    <MDBIcon
                                        fab icon="facebook-f"
                                        className="mx-2"
                                    />
                                    Iniciar sesión con Facebook
                                </MDBBtn>
                                <Link className="w-100 mt-4 mb-2" to="/register">
                                    <p className="text-blue-50 text-center p-3 mt-6 mb-3">¿No tienes cuenta? Ir a registro</p>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Benefits />
            <Footer />
        </>
    )

}




