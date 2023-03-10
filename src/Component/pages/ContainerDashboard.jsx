import { useEffect,useReducer, useState } from "react";
import { Outlet } from "react-router";
// CONTEXT DASHBOARD
import dataDashboard from "../../Context/contextDashboard.mjs";
// component navbar
import Navbar from "../ComponentDashboard/Navbar";

// component modal Add Buku
import ModalAddBuku from "../componentModal/ModalAddBuku.jsx";
import ModalDeleteBuku from "../componentModal/ModalDeleteBuku.jsx";


const ContainerDashboard = ()=>{

    // state reducer dashboard
    let [dataBuku,setDataBuku] = useState([]);
    // state check update
    let [checkUpdate,setCheckUpdate] = useState(false)
    // state loading
    let [loading,setLoading] = useState(true)
    // state modal add buku
    let [modalAddBuku,setModalAddBuku] = useState(false)
    // state modal delete bukut
    let [modalDeleteBuku,setModalDeleteBuku] = useState(false)
    // state id modal
    let [idModal,setIdModal] = useState('')

    let detail = {
        dataBuku,
        setDataBuku,
        checkUpdate,
        setCheckUpdate,
        loading,
        setLoading,
        modalAddBuku,
        setModalAddBuku,
        modalDeleteBuku,
        setModalDeleteBuku,
        idModal,
        setIdModal
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

            {/* component modal add buku */}
            {
                (modalAddBuku) && <ModalAddBuku/>
            }
            {/* component modal delete buku */}
            {
                (modalDeleteBuku) && <ModalDeleteBuku/>
            }
         </section>
       </dataDashboard.Provider>
    )
}



export default ContainerDashboard;