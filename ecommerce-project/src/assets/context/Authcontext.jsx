import { Children, createContext, useState
 } from "react";
const AuthContext=createContext(null)
export default function AuthProvider({children}){
    const [user,setuser]= useState(null)
    function signup(email,password){

    }
    function login(){

    }
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}