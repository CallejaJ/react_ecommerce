
const mime = require("mime");
const dao = require("../services/dao")
const path = require("path");
const fs = require("fs");

const productController = {}

// controlador para subir una imagen a nuestro servidor y guardar el path en la base de datos

productController.uploadImage = async (req, res) => {

    try {
        // controlamos cuando el objeto files sea null
        if (req.files === null) return;
        // controlamos si nos viene algún tipo de archivo en el objeto files
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("no se ha cargado ningún archivo");
        }
        // obtenemos un array  de objetos con todas las imágenes
        const images = !req.files.imagen.length
            ? [req.files.imagen]
            : req.files.imagen;
        console.log(images);
        // recorremos el array para procesar cada imagen
        for (const image of images) {
            // ya podemos acceder a las propiedades del objeto image
            // obtenemos la ruta de la imagen
            let uploadPath = path.join(__dirname, "../public/images/" + image.name);
            // usamos el método mv() para ubicar en nuestro servidor
            image.mv(uploadPath, (err) => {
                if (err) return res.status(500).send(err);
            });
            await dao.addImage({ name: image.name, path: uploadPath });
        }
        return res.send("imagen subida");
    } catch (e) {
        console.log(e.message);
        return res.status(400).send(e.message)
    }
};

// controlador para obtener una imagen por su ID //

productController.getImage = async (req, res) => {
    const { id } = req.params;

    try {
        let getImage = await dao.getImageById(id)
        console.log(getImage);

        if (getImage.length === 0) return res.sendStatus(404).send("No se encuentra la imagen");
        [getImage] = getImage;
        return res.send(getImage.path)
    }

    catch (err) {
        console.log(err);
        return res.sendStatus(500)
    }
}

productController.getFile = async (req, res) => {
    try {
        const image = await dao.getImageById(req.params.id)
        if (image.length <= 0) return res.status(404).send("la imagen no existe")
        console.log(image[0].path)
        const ruta = image[0].path

        // obtiene el tipo de contenido del archivo 
        const tipo = mime.getType(image[0].path)

        // lee el archivo desde el directorio local
        fs.readFile(ruta, function (err, data) {
            if (err) {
                //Maneja el error si ocurre
                console.log(err);
                res.status(500).send('Error al leer el archivo')
            }
            else {
                // establece el tipo de contenido según el archivo
                res.setHeader('Content-Type', tipo)
                // envía el contenido del archivo al cliente
                res.send(data)
            }
        })


    } catch (e) {
        console.log(e.message);
        return res.status(400).send(e.message)

    }
}

productController.addProduct = async (req, res) => {

    //insertamos el producto en la tabla products y obtenemos el id del producto creado
    const { name, reference } = req.body
    // si no recibimos alguno de estos campos recibidos por el body le devolvemos un 400 bad request
    if (!name || !reference) {
        return res.status(400).send("Error al recibir del body")
    }
    // buscamos el producto en la base de datos
    try {

        const product = await dao.getProductByReference(reference)
        // si existe el producto responderemos con un 409
        if (product.length > 0) return res.status(409).send("El producto ya existe en la base de datos")
        // si no existe en la base de datos lo registramos
        // la query devuelve el id del registro, ese id nos lo devuelve en la constante
        const addProduct = await dao.addProduct(req.body)

        if (addProduct)
            // insertamos las imagenes del producto en la tabla "images" y en el objeto que le pasamos
            // ademas de name y path le pasamos el id del producto

            // verificación de que vienen archivos en el objeto files
            if (!req.files || req.files === null || Object.keys(req.files).length === 0) {
                return res.status(400).send("No se ha cargado ningún archivo")
            }
        console.log("imagenes que subimos", req.files.imagen)
        // obtenemos un array  de objetos con todas las imágenes
        const images = !req.files.imagen.length ? [req.files.imagen] : req.files.imagen
        console.log("images", images);

        // recorremos el array para procesar cada imagen
        for (const image of images) {
            // ya podemos acceder a la propiedades del objeto image
            // obtenemos la ruta de la imagen
            let uploadPath = path.join(__dirname, "../public/images/" + image.name);
            // usamos el método mv() para ubicar en nuestro servidor
            image.mv(uploadPath, (err) => {
                if (err) return res.status(500).send(err);
            });
            await dao.addImage({ name: image.name, path: uploadPath, productId: addProduct });
        }
        return res.send("imagen subida");
    } catch (e) {
        console.log(e.message);
        return res.status(400).send(e.message)
    }
}


// productController.getProduct = async (req, res) => {

// buscamos el producto y que nos de un array

//     try {
//         const getProduct = await dao.getProductById

//     } 
//     catch(err)

// }




module.exports = productController;