
import { Outlet } from "react-router-dom";

import { useReducer } from "react";

// import context login
import { ContextLogin } from "../Context/login.mjs";

// import fungsi reducer login
import LoginReducer from "../Context/reducer/LoginReducer.js";


// component modal success
import ModalSuccess from "./componentModal/ModalSuccess";


// data awal modal state untuk reducer Login
let initialState = {
    modalCheck:false
}

const Login = ()=>{
    // data terkait Login dan Register page
    let [dataLogin,dispatchLogin] = useReducer(LoginReducer,initialState)


    return (
        <ContextLogin.Provider value={{dataLogin,dispatchLogin}}>
            <section onClick={()=>{dispatchLogin({type:'hiddenModalSuccess'})}} className="container-login overflow-y-auto overflow-x-hidden relative w-full h-screen bg-[url('../images/cloudy.svg')] bg-center bg-cover bg-no-repeat grid place-items-center p-3 ">
                
                {/* modal success */}
               {(dataLogin.modalCheck) &&  <ModalSuccess/>}

            {/* component card login and register */}
                <Outlet/>
            </section>  
        </ContextLogin.Provider>
    )
}

export default Login;