const userController = require('../app/controllers/userController');
const dao = require("../app/services/dao")

// instalamos jest con npm i jest

let req;
let res;
let send;
let status;

// Add user test //

beforeEach(() => {
    send = jest.fn((message) => { });
    status = jest.fn((statusCode) => { return { send: send } })
    res = {
        status: status
    }
});


test('happy path', () => {

});

test('no inputs fail', () => {

});

test('user exists fail', () => {
    const name = "hohe"
    const email = "hohe@gmail.com";
    const password = "1234";
    req = { body: { email: email, name: name, password: password } };

    userController.dao = {
        getUserByEmail: jest.fn(async (email) => {
            if (email === email) {
                return [{ email: email, name: name, password: password }]
            } else {
                return false
            }
        })
    };

    userController.addUser(req, res);

    // comprueba función mock se ha llamado una vez(sendStatus(400))
    expect(userController.dao.getUserByEmail.mock.calls).toHaveLength(1);
    // comprueba que la llamada a la función mock tiene como primer argumento el valor 400
    expect(status.mock.calls).toHaveLength(1);
    expect(status.mock.calls[0][0]).toBe(409);
    expect(send.mock.calls).toHaveLength(1);
    expect(send.mock.calls[0][0]).toBe("usuario ya existe")

})