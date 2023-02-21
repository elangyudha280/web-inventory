import React from "react"
import { Outlet,Navigate } from "react-router-dom"

const ProtectedLogin  = ()=>{

    let userToken =localStorage.getItem('token'); 

    if(userToken){
        return <Navigate to="/dashboard" replace/>
    }
    
    return <Outlet/> 

}

export {ProtectedLogin}
