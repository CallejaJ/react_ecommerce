import { useAuthContext } from '../../context/AuthContext';
import Benefits from "../../Components/Benefits/Benefits"
import Alert from 'react-bootstrap/Alert';
import Checkbox from './utils/ui/Checkbox';
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

import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Footer from "../../Components/Footer/Footer"


export default function RegisterFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { registerMessage } = useAuthContext();

    return (

        <>

            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <h2 className="fw-bold mb-2 text-center">Registro de usuario</h2>
                                <p className="text-white-50 mb-3">Por favor, rellena los campos</p>
                                <form id="login" onSubmit={handleSubmit}>
                                    {errors.username && touched.username && (
                                        <p className="error">{errors.username}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 mt-2 w-100'
                                        id='formControlLg'
                                        size="lg"
                                        type="text"
                                        name="username"
                                        placeholder="Escribe tu nombre"
                                        value={values.username}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.username && touched.username ? "input-error" : ""}
                                    />
                                    {errors.surname && touched.surname && (
                                        <p className="error">{errors.surname}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 mt-2 w-100'
                                        id='formControlLg'
                                        size="lg"
                                        type="text"
                                        name="surname"
                                        placeholder="Escribe tus apellidos"
                                        value={values.surname}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.surname && touched.surname ? "input-error" : ""}
                                    />
                                    {errors.newEmail && touched.newEmail && (
                                        <p className="error">{errors.newEmail}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 mt-2 w-100'
                                        id='formControlLg'
                                        size="lg"
                                        type="email"
                                        name="newEmail"
                                        placeholder="Escribe tu correo electrónico"
                                        value={values.newEmail}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.newEmail && touched.newEmail ? "input-error" : ""}
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 mt-2 w-100'
                                        id='formControlLg'
                                        type='password'
                                        size="lg"
                                        name="password"
                                        placeholder="Escribe tu contraseña"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.password && touched.password ? "input-error" : ""}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <p className="error">{errors.confirmPassword}</p>
                                    )}
                                    <MDBInput
                                        wrapperClass='mb-4 mt-2 w-100'
                                        id='formControlLg'
                                        type='password'
                                        size="lg"
                                        name="confirmPassword"
                                        placeholder="Repite tu contraseña"
                                        value={values.confirmPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                                    />

                                    <div><Checkbox type="checkbox" name="acceptedTC" />
                                    </div>

                                    <MDBBtn
                                        type='submit'
                                        className='mt-4 mb-3'
                                        size='lg'
                                        noRipple="true"
                                    >
                                        Crear cuenta ahora
                                    </MDBBtn>
                                </form>

                                {registerMessage ? (
                                    <Alert variant='info' >
                                        {registerMessage}
                                    </Alert>
                                ) : null}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Benefits />
            <ScrollToTop />
            <Footer />
        </>
    )

}