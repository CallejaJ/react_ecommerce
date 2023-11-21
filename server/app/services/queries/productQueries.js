
const db = require("../mysql");
const moment = require("moment");

const productQueries = {};

productQueries.addImage = async (imageData) => {
    // conectamos con la base de datos y añadimos el usuario
    let conn = null;
    try {
        conn = await db.createConnection();
        // creamos un objeto con los datos de la imagen a guardar en la base de datos
        // usamos la librería momentjs para registrar la fecha actual
        let imageObj = {
            name: imageData.name,
            path: imageData.path,
            productId: imageData.productId,
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        return await db.query("INSERT INTO images SET?", imageObj, "insert", conn);
    }
    catch (err) {
        throw new Error(err);
    } finally {
        conn && (await conn.end());
    }
};

productQueries.getImageById = async (id) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el id
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM images WHERE id = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }
}

productQueries.getProductByReference = async (reference) => {
    // conectamos con la base de datos y buscamos si existe el usuario por el id
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM products WHERE reference = ?', reference, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end(); // cierra la conexion siempre que exista
        // si no se crea la conexión no se cierra la conexión para que no pete!!
    }
}

productQueries.addProduct = async (productData) => {
    // conectamos con la base de datos y añadimos el usuario
    let conn = null;
    try {
        conn = await db.createConnection();
        // creamos un objeto con los datos de la imagen a guardar en la base de datos
        // usamos la librería momentjs para registrar la fecha actual
        let productObj = {
            name: productData.name,
            reference: productData.reference,
            description: productData.description,
            stock: productData.stock,
            price: productData.price,
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        return await db.query("INSERT INTO products SET?", productObj, "insert", conn);
    }
    catch (err) {
        throw new Error(err);
    } finally {
        conn && (await conn.end());
    }
}

module.exports = productQueries;