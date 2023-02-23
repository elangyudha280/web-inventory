import { useEffect,useReducer, useState } from "react";
import { Outlet } from "react-router";
import dataDashboard from "../../Context/contextDashboard.mjs";
import dashboardReducer from "../../Context/reducer/DashboardReducer.js";
// component navbar
import Navbar from "../ComponentDashboard/Navbar";


const ContainerDashboard = ()=>{

    // state reducer dashboard

    // state check update
    let [checkUpdate,setCheckUpdate] = useState(false)
   

    // get data buku 




    return (
       <dataDashboard.Provider value=''>
         <section onClick={()=>{(checkUpdate) ? setCheckUpdate(false) : setCheckUpdate(true) }} className="container-dashboard relative w-full h-screen bg-slate-200">
            <Navbar/>
            <Outlet/>
        </section>
       </dataDashboard.Provider>
    )
}



export default ContainerDashboard;