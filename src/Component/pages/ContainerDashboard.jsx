import { useEffect } from "react";

// component navbar
import Navbar from "../ComponentDashboard/Navbar";


const ContainerDashboard = ()=>{

    useEffect(()=>{
        document.title = 'Home Dashboard'
    })


    return (
        <section className="container-dashboard relative w-full h-screen bg-slate-200">
            <Navbar/>
        </section>
    )
}



export default ContainerDashboard;