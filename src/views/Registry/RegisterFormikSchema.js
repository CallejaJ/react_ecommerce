import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const RegisterFormikSchema = yup.object().shape({

    username: yup
        .string()
        .min(3, "Al menos 3 caracteres.")
        .required("Obligatorio"),

    surname: yup
        .string()
        .min(3, "Al menos 3 caracteres.")
        .required("Obligatorio"),

    newEmail: yup.string().email("Por favor, escriba un email válido").required("Obligatorio"),

    password: yup
        .string()
        .matches(passwordRules, {
            message:
                "Al menos 5 caracteres, 1 mayúscula, 1 minúscula, 1 dígito numérico",
        })
        .required("Obligatorio"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newpassword"), null], "Las contraseñas no coinciden")
        .required("Obligatorio"),
    acceptedTC: yup
        .boolean()
        .oneOf([true], "Por favor, acepta los términos y condiciones."),
});