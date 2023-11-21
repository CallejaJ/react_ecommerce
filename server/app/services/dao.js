

// data adquisition object DAO contiene todas las funciones que nos servirán de enlace
// entre el controlador y la bbdd

const userQueries = require("./queries/userQueries");
const productQueries = require("./queries/productQueries");
const orderQueries = require("./queries/orderQueries");

const dao = {}

// ** USER ** //

// buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

// buscar un usuario por el id
dao.getUserById = async (id) => await userQueries.getUserById(id);

// añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

// borrar un nuevo usuario
dao.deleteUser = async (userData) => await userQueries.deleteUser(userData);

// modificar un usuario
dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);



// ** PRODUCT **  //

// subir imágenes
dao.addImage = async (imageData) => await productQueries.addImage(imageData)

// buscar una imagen por id
dao.getImageById = async (id) => await productQueries.getImageById(id)

// añadir un producto

dao.addProduct = async (productData) => await productQueries.addProduct(productData)

// buscar producto por referencia

dao.getProductByReference = async (reference) => await productQueries.getProductByReference(reference)


//  ** ORDER **  //

// añadir pedido

dao.addOrder = async (orderData) => await orderQueries.addOrder(orderData)

// añadir relación entre producto y pedido
dao.addRProductOrder = async (rProductOrderData) => await orderQueries.addRProductOrder(rProductOrderData)

// obtener los pedidos de un cliente por idCliente
dao.getOrderByIdCliente = async (idClient) => await orderQueries.getOrderByIdCliente(idClient)



module.exports = dao;