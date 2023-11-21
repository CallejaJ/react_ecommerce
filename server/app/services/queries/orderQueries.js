
// const { or } = require("ajv/dist/compile/codegen")
const db = require("../mysql")
const moment = require("moment")

const orderQueries = {}

orderQueries.addOrder = async (orderData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        // creamos un objeto con los datos del usuario a guardar en la base de datos
        let orderObj = {
            product: orderData.product,
            quantity: orderData.quantity,
            idClient: orderData.idClient,
            orderDate: moment().format('YYYY-MM-DD HH:mm:ss')
        }

        return await db.query('INSERT INTO orders SET?', orderObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)

    } finally {
        conn & await conn.end()
    }
}

/**
 * Query para añadir una relación entre producto y pedido
 * @param {Obj} rProductOrderData 
 * @returns id de la relación
 */


orderQueries.addRProductOrder = async (rProductOrderData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        // creamos un objeto con los datos del usuario a guardar en la base de datos
        let rProductOrderObj = {
            idProduct: rProductOrderData.idProduct,
            idOrder: rProductOrderData.idOrder,
        }

        return await db.query('INSERT INTO r_products_orders SET?', rProductOrderObj, 'insert', conn)

    } catch (e) {
        throw new Error(e)

    } finally {
        conn & await conn.end()
    }
}


orderQueries.getOrderByIdCliente = async (idClient) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el id
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM orders WHERE idClient = ?', idClient, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }
}



module.exports = orderQueries;