import dataDashboard from "../../Context/contextDashboard.mjs";
import { useContext,useState } from "react";
import SpanInvalid from "./spanInvalid.jsx";
import validator from "validator";
import Loading from "../ComponentLoading/Loading.jsx";
const ModalAddBuku = ()=>{

    // DATA CONTEXT DASHBOARD
    let {dataBuku,setModalAddBuku,loading,setLoading,checkUpdate,setCheckUpdate} = useContext(dataDashboard)

   

    // event ADD data Buku
    const AddBuku =(e)=>{
        e.preventDefault();
        setLoading(true)

       
        // form data buku
        const formData =  new FormData(e.target)
        formData.append('createAt', Date.now())

        fetch('https://serverinventory-ramdhey.koyeb.app/inventory/',{
            method:'post',
            body:formData
        }).then(e=>e.status)
        .then(e=> {
                alert('data berhasil ditambahkan')
                setModalAddBuku(false)
                setLoading(false)
        })
        .catch(e => console.log(e))
        .finally(()=>{
            (checkUpdate) ? setCheckUpdate(false) : setCheckUpdate(true)
            setLoading(false)
        })
        
    }

    return (
    <section onClick={()=>{setModalAddBuku(false)}} className="container-modal-buku fixed px-3 py-8 overflow-x-hidden overflow-y-auto  top-0 left-0 z-30 w-full h-screen grid place-items-center bg-[rgba(0,0,0,0.5)]">
            <div onClick={(e)=>{e.stopPropagation()}} className="card-modal   p-4 rounded-md bg-slate-100">
                <form onSubmit={AddBuku}>
                    <div className="grid gap-2 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Buku</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama Buku" required />
                        </div>
                        <div>
                            <label htmlFor="price"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga Buku</label>
                            <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 peer dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Harga Buku" required pattern="\d*"/>
                        </div>
                        <div>
                            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Buku</label>
                            <input type="text" name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Stock Buku" required pattern="\d*"  />
                            <div className="flex gap-2">
                            <div className="flex-1">
                                <label htmlFor="category" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Buku</label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled={(loading) ? true : false} name="category" id="category" required>
                                    
                                    {
                                      (loading) ? <option defaultValue=''>loading...</option> :   dataBuku.map((e,i)=>{
                                        return <option key={i+1} defaultValue={e.category} >{e.category}</option>
                                    })
                                    }
                                </select>
                            </div>
                            <div className="flex-1">
                                <label htmlFor="picturePath" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar Buku</label>
                            <input type="file" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="picturePath" id="picturePath" required/>
                            </div>

                            </div>
                        </div> 
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Buku</label>
                            <textarea name="description" id="description" cols="" rows="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Deskripsi Buku" required></textarea>
                        </div>  
                    
                    </div>
                
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{(loading)? <Loading/> : 'Kirim'}</button>
                    <button className="text-white bg-slate-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 sm:mt-0 sm:ml-2" onClick={()=>{setModalAddBuku(false)}}>Close</button>
                </form>
            </div>
    </section>
    )
}

export default ModalAddBuku;