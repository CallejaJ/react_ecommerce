

const db = require("../mysql");
const moment = require("moment");
const md5 = require("md5")
const userQueries = {}
const utils = require("../../helpers/utils")

userQueries.getUserByEmail = async (email) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el email
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM users WHERE email = ?', email, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }
}


userQueries.getUserById = async (id) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el id
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM users WHERE id = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }

}


userQueries.addUser = async (userData) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el email
    let conn = null
    try {
        conn = await db.createConnection()
        let userObj = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: md5(userData.password),
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss")
        }

        return await db.query("INSERT INTO users SET?", userObj, 'insert', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }
}


userQueries.deleteUser = async (id) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el id
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM users WHERE id = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }

}


userQueries.updateUser = async (id, userData) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el email
    let conn = null
    try {
        conn = await db.createConnection()
        let userObj = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: userData.password ? md5(userData.password) : undefined,
            updateDate: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        userObj = await utils.removeUndefinedKeys(userObj)

        return await db.query('UPDATE users SET ? WHERE id = ?', [userObj, id], 'update', conn)
    }
    catch (e) {
        throw new Error(e)
    }
    finally {
        conn & await conn.end(); // cierra la conexión siempre que exista, y evitamos que pete
    }
}


module.exports = userQueries;