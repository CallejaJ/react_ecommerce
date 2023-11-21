
// importamos Type de la librería @sinclair/typebox
const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");



// importamos los paquetes
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');

// componemos el esquema de la librería con la propiedad Type
const LoginDTOSchema = Type.Object({
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo de email debe ser un string',
            format: 'El email debe contener un correo electrónico'
        }
    }),
    password: Type.String({
        errorMessage: 'El tipo de password debe ser un string'
    })
}, {
    additionalProperties: false,
    errorMessage: {
        type: 'Deber ser un objeto',
        additionalProperties: 'El formato del objeto no es válido',
        required: {
            email: 'El email es requerido',
            password: 'La password es requerida'
        }
    }
})

// instanciamos la clase para que nos valide los fallos de los dos campos, email y password.
const ajv = new Ajv({ allErrors: true });

addFormats(ajv, ['email']);
addErrors(ajv, { keepErrors: false });

// Metemos el esquema en el ajv para generar una fucnión de validación
const validate = ajv.compile(LoginDTOSchema);


// crearemos una función para validar el dto(email,password)
const validateLoginDto = (req, res, next) => {
    // le pasamos la función de validación
    const isDTOValid = validate(req.body);
    // si no ha pasado la validación enviamos un 400
    if (!isDTOValid) return res.status(400).send(ajv.errorsText(validate.errors, { separator: '\n' }));

    next();
};



module.exports = validateLoginDto;