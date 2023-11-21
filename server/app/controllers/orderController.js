
const { jwtVerify } = require("jose")
const dao = require("../services/dao")

const orderController = {}

/**
 * Añadir una nueva orden por un usuario
 * @param {*} req petición
 * @param {*} res respuesta
 */

orderController.addOrder = async (req, res) => {
    // obtenemos la cabecera para coger el token
    const { authorization } = req.headers
    // si no existe el token enviamos un 401
    if (!authorization) return res.sendStatus(401)
    // obtenemos el token y eliminamos el bearer
    const token = authorization.split(' ')[1]
    // console.log(token);
    // si no existe el body enviamos un 400(bad request)
    if (Object.entries(req.body).length === 0) return res.sendStatus(400)
    // extraemos el body de la petición
    const { product, quantity } = req.body

    try {

        // obtenemos el id del usuario
        const encoder = new TextEncoder()
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET))

        // console.log(payload) para comprobar que nos devuelve el id desde el token
        const idClient = payload.id // id del usuario que hace el pedido

        // obtenemos el id del producto por la referencia(product)
        const getProduct = await dao.getProductByReference(product)
        if (getProduct.lenght === 0) return res.sendStatus(404)
        const idProduct = getProduct[0].id

        // añadimos la orden
        const idOrder = await dao.addOrder({ product, quantity, idClient })
        if (!idOrder) return res.sendStatus(500)

        // añadimos la relación entre producto y pedido
        const addRPO = await dao.addRProductOrder({ idProduct: idProduct, idOrder: idOrder })
        if (!addRPO) return res.sendStatus(500)

        return res.sendStatus(200)

    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err.message)
    }
}

orderController.getUserOrders = async (req, res) => {

    if (!req.params) return res.sendStatus(500)
    const { idClient } = req.params

    try {
        //obtenemos los pedidos del cliente por su idCliente
        const getOrder = await dao.getOrderByIdCliente(idClient)
        // recibo un array de objetos con los pedidos y tengo que recorrer el array en un bucle que por cada iteración haga una query
        const result = []
        for (const order of getOrder) {
            let [product] = await dao.getProductByReference(order.product)
            result.push({ ...order, product })
        }
        return res.status(200).send(result)

    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err.message)
    }


}

module.exports = orderController;