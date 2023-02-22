import React,{useContext,useEffect} from "react"
import { Outlet,Navigate } from "react-router-dom"
import contextToken from "../Context/contextToken.mjs";


const ProtectedLogin  = ()=>{

    let {dataToken} = useContext(contextToken)

    let userToken =localStorage.getItem('token'); 


    if(userToken !== null && userToken === dataToken){
        return <Navigate to="/dashboard" replace/>
    }
    
    return <Outlet/> 

}

export {ProtectedLogin}
