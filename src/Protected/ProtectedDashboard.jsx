import React,{useContext,useEffect} from "react"
import { Outlet,Navigate } from "react-router-dom"
import contextToken from "../Context/contextToken.mjs";


const ProtectedDashboard  = ()=>{

    let {dataToken} = useContext(contextToken)

    let userToken =localStorage.getItem('token'); 

    if(!userToken && userToken !== dataToken){
        return <Navigate to="/" replace/>
    }
    
    return <Outlet/> 

}

export {ProtectedDashboard}
