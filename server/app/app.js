
const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const fileUpload = require("express-fileupload");
const orderRouter = require("./routes/orderRouter");

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "Imagen demasiado grande",
        uploadTimeout: 0,
    })
);

app.use(cors())

// ENTIDADES //

app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/order", orderRouter)

module.exports = app;