import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const LoginFormikSchema = yup.object().shape({

    email: yup.string().email("Por favor, escriba un email válido").required("Obligatorio"),

    password: yup
        .string()
        .matches(passwordRules, {
            message:
                "Al menos 5 caracteres, 1 mayúscula, 1 minúscula, 1 dígito numérico",
        })
        .required("Obligatorio"),
});