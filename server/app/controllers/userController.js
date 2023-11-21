
const md5 = require("md5");
const dao = require("../services/dao")

// importamos función de la libreria jose
const { SignJWT, jwtVerify } = require("jose");

// const userController = {}; // lo comentamos para que funcione el testing
// creamos  la variable usercontroller con dao para sea visible desde mi test, y lo pueda modificar
let userController = {
    dao: dao
};

userController.addUser = async (req, res) => {
    const { name, surname, email, password } = req.body;

    if (!name || !surname || !email || !password) return res.status(400).send("Error al recibir del body");
    try {
        let user = await userController.dao.getUserByEmail(email)
        if (user.length > 0) return res.status(409).send("Usuario ya registrado");
        const addUser = await dao.addUser(req.body)
        if (addUser) {
            return res.send(`Usuario ${name} con id: ${addUser} registrado`);
        }
        else {
            return res.sendStatus(500);
        }

    } catch (e) {
        console.log(e.message)
        throw new Error(e)
    }
}

userController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Error al recibir del body");
    try {
        let user = await dao.getUserByEmail(email);
        [user] = user;
        if (!user) {
            // el email no existe
            return res.status(404).send("usuario no encontrado")
        }
        console.log(md5(password));
        if (md5(password) !== user.password) {
            console.log(user.password);
            console.log(md5(password));
            return res.status(401).send("password incorrecta")
        }
        // le metemos el rol en el constructor del login
        const jwtConstructor = new SignJWT({
            name: user.name,
            surname: user.surname,
            email: user.email,
            id: user.id,
            role: user.userRole
        });
        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
            .setProtectedHeader({ alg: 'HS256', typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_SECRET));

        console.log(jwt);
        return res.send({ jwt })
    }
    catch (err) {
        console.log(err)
        return res.sendStatus(401);
    }
}

// userController.deleteUser = async (req, res) => {
//     const { id } = req.params;
//     // user es un array o un objeto
//     let user = await dao.getUserById(id);
//     // la mandamos una respuesta negativa para poder continuar
//     [user] = user;
//     if (!user) return res.sendStatus(404).send("El usuario no existe")
//     try {
//         const deleteUser = await dao.deleteUser(id)
//         if (!deleteUser) {
//             return res.sendStatus(500);
//         }
//         return res.send(`Usuario con id ${id} eliminado.`)
//     }

//     catch (err) {
//         console.log(err);
//         return res.sendStatus(500)
//     }
// }

userController.updateUser = async (req, res) => {

    const { id } = req.params

    // extraigo el payload del token y comprobar su autentcidad y caducidad
    const { authorization } = req.headers;
    if (!authorization) return res.sendStatus(401);

    // si no nos llega ningún campo por el body
    if (Object.entries(req.body).length === 0) return res.status(400).send("Error al recibir el body");

    // obtenemos el token de la cabecera
    const token = authorization.split(" ")[1];
    // split [1] para quitar la palabra BEARER y quedarnos con la posición 1

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        console.log(payload);

        // verificamos que el id del payload es el mismo que el id del usuario que queremos modificar
        if (payload.id !== Number(id)) return res.status(401).send("Usuario no autorizado");

        // si todo va bien actualizo
        const updateUser = await dao.updateUser(id, req.body)
        if (updateUser) return res.send(`Usuario con id ${id} actualizado.`)
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

userController.deleteUser = async (req, res) => {

    const { id } = req.params;
    // extraigo el payload del token y comprobar su autenticidad y caducidad
    const { authorization } = req.headers;

    // si no existe enviamos un 401 (unauthorized)
    if (!authorization) return res.sendStatus(401);

    // obtenemos el token de la cabecera
    const token = authorization.split(" ")[1];
    // split [1] para quitar la palabra BEARER y quedarnos con la posición 1

    try {
        // codificamos la clave secreta
        const encoder = new TextEncoder();
        // verificamos el token con la función jwtverify. Le pasamos el token y la clave secreta codificada.
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        console.log(payload);

        // verificamos que seamos el usuario administrador
        if (!payload.userRole) return res.status(401).send("No tiene permisos de administrador");

        // buscamos si el id del usuario existe en la base de datos
        await dao.getUserById(id);

        // si existe, eliminamos el usuario por el id
        const isDeleted = await dao.deleteUser(id);

        // devolvemos la respuesta
        if (isDeleted) return res.send(`Usuario con id ${id} eliminado.`)
        else return res.sendStatus(204)
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = userController;