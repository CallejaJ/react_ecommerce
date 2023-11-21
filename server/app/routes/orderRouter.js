
const express = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = express.Router()

/**
 * Router para añadir un pedido nuevo por un usuario
 */

orderRouter.post("/", orderController.addOrder)



orderRouter.get("/user/:idClient", orderController.getUserOrders)






module.exports = orderRouter;