import { useEffect } from "react";


const ContainerDashboard = ()=>{

    useEffect(()=>{
        document.title = 'Home Dashboard'
    })


    return (
        <section className="container-dashboard relative w-full h-screen bg-slate-200">
            
        </section>
    )
}



export default ContainerDashboard;