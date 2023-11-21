
const express = require("express");
const validateLoginDto = require("../middlewares/validateLoginDto")
const userController = require("../controllers/userController")

const userRouter = express.Router();

// registro de un nuevo usuario
userRouter.post("/", userController.addUser);

// login de un nuevo usuario
userRouter.post("/login", validateLoginDto, userController.login);

// borrar un nuevo usuario por id sin token
userRouter.delete("/:id", userController.deleteUser);

// actualizar un usuario por id con token
userRouter.patch("/:id", userController.updateUser);

module.exports = userRouter;