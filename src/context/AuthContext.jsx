import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(
    {
        user: null,
        message: null,
        login: () => { },
        logout: () => { }
    });

const USER_KEY = "USER_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)) ?? null);
    const [message, setMessage] = useState(null);

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
                setMessage("Ya puedes navegar")
            }
            else {
                setMessage("Inténtalo de nuevo")

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

    function logout() {
        localStorage.removeItem(USER_KEY);
        setUser(null)
    }

    const value = {
        user, login, logout, message,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}