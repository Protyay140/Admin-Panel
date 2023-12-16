import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");

    const storeToken = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    }

    const isLoggedIn = !!token;

    console.log("are you logged in ? --> ", isLoggedIn);
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    const userAuthentication = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/user`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const data = await response.json();
                // console.log(data.userData);
                setUser(data.userData);
            }
            console.log(user);
        } catch (error) {
            console.log("error : ",error);
        }

    }

    useEffect(() => {
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ storeToken, isLoggedIn, LogoutUser, user }}>
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