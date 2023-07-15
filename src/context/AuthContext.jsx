import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(
    {
        user: null,
        errorMessage: null,
        login: () => { },
        logout: () => { }
    });

const USER_KEY = "USER_KEY"

export default function AuthContextProvider({ children }) {


    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(localStorage.getItem(USER_KEY) ?? null);
    const [errorMessage, setErrorMessage] = useState(null);

    function login({ email, password }) {
        if (email === "user@mail.com" && password === "3Dreams") {
            setUser({ email })
            localStorage.setItem(USER_KEY, email)
            setErrorMessage(null)
        }
        setErrorMessage("Inténtalo de nuevo")
    }

    function logout() {
        localStorage.removeItem(USER_KEY);
        setUser(null)
    }

    const value = {
        user, login, logout, errorMessage,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}