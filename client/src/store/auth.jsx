import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const storeToken = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    }

    const isLoggedIn = !!token;
    console.log("are you logged in ? --> ",isLoggedIn);
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    return <AuthContext.Provider value={{storeToken, isLoggedIn, LogoutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authData = useContext(AuthContext);
    if (!authData) {
        throw new Error("you did not wrap the provider in main.jsx....");
    }
    return authData;
}