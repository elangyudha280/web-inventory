import React,{useContext,useEffect} from "react"
import { Outlet,Navigate } from "react-router-dom"
import contextToken from "../Context/contextToken.mjs";


const ProtectedDashboard  = ()=>{

    let {dataToken} = useContext(contextToken)

    let localToken =localStorage.getItem('token'); 


    
    if(!localToken && localToken !== dataToken){
        return <Navigate to="/" replace/>
    }
    
    return <Outlet/> 

}

export {ProtectedDashboard}
