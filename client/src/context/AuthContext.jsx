import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

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
const TOKEN_KEY = "TOKEN_KEY"


export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) ?? null)

    const [loginMessage, setLoginMessage] = useState(null);
    const [registerMessage, setRegisterMessage] = useState(null);

    setTimeout(() => {
        setRegisterMessage(null)
    }, 5000)

    setTimeout(() => {
        setLoginMessage(null)
    }, 5000)

    const navigate = useNavigate();


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
                setToken(token.jwt)
                localStorage.setItem(USER_KEY, JSON.stringify(user))
                localStorage.setItem(TOKEN_KEY, `${token.jwt}`)
                setLoginMessage("Ya puedes navegar")
            }
            else {
                setLoginMessage("Inténtalo de nuevo")

            }
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
                setRegisterMessage("¡Registro correcto! Ya puedes iniciar sesión")
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            } else {
                setRegisterMessage("El usuario ya existe.")
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
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

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return useContext(AuthContext);
}