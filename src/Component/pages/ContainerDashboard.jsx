import { useEffect,useReducer, useState } from "react";
import { Outlet } from "react-router";
// CONTEXT DASHBOARD
import dataDashboard from "../../Context/contextDashboard.mjs";
// component navbar
import Navbar from "../ComponentDashboard/Navbar";


const ContainerDashboard = ()=>{

    // state reducer dashboard
    let [dataBuku,setDataBuku] = useState([]);
    // state check update
    let [checkUpdate,setCheckUpdate] = useState(false)
    // state loading
    let [loading,setLoading] = useState(true)

    let detail = {
        dataBuku,
        setDataBuku,
        checkUpdate,
        setCheckUpdate,
        loading,
        setLoading
    }
   
useEffect(()=>{
    document.title = 'Dashboard';
},[])


useEffect(()=>{
    setLoading(true)
    fetch('https://serverinventory-ramdhey.koyeb.app/inventory/')
    .then(e => e.json())
    .then(dataBuku =>{
        setDataBuku(dataBuku)
    })
    .catch(e => console.log(e))
    .finally(()=>{
        setLoading(false)
    })
},[checkUpdate])




    return (
       <dataDashboard.Provider value={detail}>
         <section className="container-dashboard relative w-full h-screen bg-slate-200">
            <Navbar/>
            <Outlet/>
        </section>
       </dataDashboard.Provider>
    )
}



export default ContainerDashboard;