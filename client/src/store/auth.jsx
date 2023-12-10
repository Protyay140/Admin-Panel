import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{

    const storeToken = (serverToken)=>{
        return localStorage.setItem('token',serverToken);
    }

    return <AuthContext.Provider value={storeToken}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{
    const authData = useContext(AuthContext);
    if(!authData){
        throw new Error("you did not wrap the provider in main.jsx....");
    }
    return authData;
}