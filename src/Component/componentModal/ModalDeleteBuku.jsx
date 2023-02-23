import { useContext, useState } from "react";
import dataDashboard from "../../Context/contextDashboard.mjs";
import Loading from "../ComponentLoading/Loading.jsx";


const ModalDeleteBuku = ()=>{

  let {checkUpdate,setCheckUpdate,modalDeleteBuku,setModalDeleteBuku,idModal} = useContext(dataDashboard)
  // loading delete 
  let [loadingDelete,setLoadingDelete] = useState(false)


//   event delete data 
    const deleteBuku = (e)=>{
        setLoadingDelete(true)
                fetch(`https://serverinventory-ramdhey.koyeb.app/inventory/${e.target.dataset.modalDelete}`, {
                method: "DELETE",
        })
        .then(e => e.status)
        .then(e => {
            alert('behasil menghapus buku')
            setModalDeleteBuku(false)
        })
        .catch(e =>{
            setModalDeleteBuku(false)
        })
        .finally(()=>{
            (checkUpdate) ? setCheckUpdate(false) : setCheckUpdate(true)
            setLoadingDelete(false)
        })
        
    }



    return(
        <section className="container-modal-delete-buku fixed p-4 overflow-x-hidden overflow-y-auto  top-0 left-0 z-30 w-full h-screen  bg-[rgba(0,0,0,0.5)]">
            <div className="card-modal mx-auto max-w-sm p-2 rounded-md overflow-hidden bg-slate-100">
                <h2 className="title-modal-delete text-center text-red-400 font-semiBold">Apakah anda yakin ingin menghapus? </h2>
                <div className="flex gap-2 w-full justify-center  flex-wrap mt-4 ">
                        <button onClick={()=>setModalDeleteBuku(false)} className="btn-batal-delete h-[40px] w-[100px] rounded-full bg-slate-300" disabled={loadingDelete ? true : false}>back</button>
                        <button onClick={deleteBuku} className="btn-delete grid place-items-center h-[40px] w-[100px] rounded-full bg-red-400 text-white" data-modal-delete={idModal} disabled={loadingDelete ? true : false}>{loadingDelete ? <Loading/> : 'hapus'}</button>
                </div>
            </div>
        </section>
    )
}

export default ModalDeleteBuku;