import { Formik } from "formik"
import LoginFormikView from "../LoginFormik/LoginFormikView";
import { LoginFormikSchema } from "../LoginFormik/LoginFormikSchema";
import { initialValues } from "../LoginFormik/utils/form";
import { useAuthContext } from "../../context/AuthContext";

export default function LoginFormik() {
    const { login } = useAuthContext();

    function onSubmit(values, actions) {
        login(values);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginFormikSchema}
            onSubmit={onSubmit}
        >
            {(props) => <LoginFormikView formik={props} />}
        </Formik>
    );
}