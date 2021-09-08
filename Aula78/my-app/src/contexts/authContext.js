import { createContext, useState } from "react";
import authServices from "../services/authServices";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [accessToken, setAccessToken] = useState()

    async function sigIn(email,password){
        const {accessToken} = await authServices.login(email, password)

        setAccessToken(accessToken)
    }

    function signOut() {
        setAccessToken(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{ accessToken, signIn, signOut }}>
          { children }
        </AuthContext.Provider>
    );
}
