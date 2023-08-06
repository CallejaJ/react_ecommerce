import { Formik } from "formik"
import RegisterFormikView from "../Registry/RegisterFormikView";
import { RegisterFormikSchema } from "../Registry/RegisterFormikSchema";
import { initialValues } from "./utils/registerForm";
import { useAuthContext } from "../../context/AuthContext";

export default function RegisterFormik() {
    const { register } = useAuthContext();

    function onSubmit(values) {
        register(values);
        // actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <RegisterFormikView formik={props} />}
        </Formik>
    );
}