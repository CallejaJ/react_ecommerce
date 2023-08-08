import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(
    {
        user: null,
        loginMessage: null,
        registerMessage: null,
        login: () => { },
        logout: () => { },
        register: () => { }
    });

const USER_KEY = "USER_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [loginMessage, setLoginMessage] = useState(null);
    const [registerMessage, setRegisterMessage] = useState(null);

    setTimeout(() => {
        setRegisterMessage(null)
    }, 5000)

    setTimeout(() => {
        setLoginMessage(null)
    }, 5000)

    async function login({ email, password }) {
        try {

            const response = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            })
            if (response.ok) {
                const token = await response.json()
                const user = jwtDecode(token.jwt)
                setUser(user)
                localStorage.setItem(USER_KEY, JSON.stringify(user))
                setLoginMessage("Ya puedes navegar")
            }
            else {
                setLoginMessage("Inténtalo de nuevo")

            }


            // if (email === "user@mail.com" && password === "3Dreams") {
            //     setUser({ email })
            //     localStorage.setItem(USER_KEY, email)
            //     setMessage("Ya puedes navegar")
            // }
            // else {
            //     setMessage("Inténtalo de nuevo")
            // }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async function register({ username, surname, newEmail, password }) {
        try {
            const response = await fetch("http://localhost:3000/user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: username, surname: surname, email: newEmail, password: password })
            })
            if (response.ok) {
                console.log("Usuario registrado");
                setRegisterMessage("Registro correcto. Ir a login.")
            } else {
                setRegisterMessage("El usuario ya existe.")
            }
        }
        catch (err) {
            throw new Error(err.message)
        }
    }


    function logout() {
        localStorage.removeItem(USER_KEY);
        setUser(null)
    }

    const value = {
        user, login, logout, loginMessage, registerMessage, register
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}