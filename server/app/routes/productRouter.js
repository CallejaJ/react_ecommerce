
const express = require("express")
const productController = require("../controllers/productController")
const productRouter = express.Router();

// subir una o varias imágenes
productRouter.post("/upload", productController.uploadImage)

productRouter.get("/image/:id", productController.getImage)

productRouter.get("/file/:id", productController.getFile)



// listar producto por su id
// productRouter.get("/:id", productController.getProduct)

// añadir producto
productRouter.post("/", productController.addProduct)

module.exports = productRouter;