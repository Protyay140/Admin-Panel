import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");
    const storeToken = (serverToken) => {
        setToken(serverToken);
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
            console.log("error : ", error);
        }

    }

    // function to get the services ............

    const getServices = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/service`, {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                // }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setServices(data);
            }else{
                console.log("get services data create problem");
            }

        } catch (error) {
            console.log(`get data from service backend error : ${error}`)
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ storeToken, isLoggedIn, LogoutUser, user, services }}>
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