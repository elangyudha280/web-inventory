
import { useContext, useEffect } from "react";

// import context dashboard
import dataDashboard from "../../Context/contextDashboard.mjs";


// component book info
import BookInfo from "./ComponentHomeDashboard/BookInfo";
// component table buku
import TableBuku from "./TableBuku";



const ContainerHomeDashboard = ()=>{

    // data context 
    let {dataBuku,setDataBuku,loading,setLoading,setModalAddBuku} = useContext(dataDashboard)



    return (
        <section className="container-home  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] ">
            <section className="sub-container mx-auto relative max-w-6xl ">
                  <BookInfo/>

                {/* component card book item */}
                <div className="container-card-book-item mt-10 relative w-full ">
                  
                <div className="flex items-center justify-end  gap-2 mb-4 p-1">
                          
                        <button onClick={()=>{setModalAddBuku(true)}} className="btn-add-buku px-4 py-3 rounded-md bg-yellow-500 text-white">Add</button>
                    
                </div>

                   
                {/* component table buku */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-3  w-[10px] py-3">
                                    no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock buku
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (loading) ? (<tr>
                                     <td className="text-center p-2" colSpan={5}>loading...</td>
                                    </tr>):
                                (dataBuku.length === 0) ? (<tr>
                                     <td className="text-center p-2" colSpan={5}>data kosong</td>
                                     </tr>) :
                                dataBuku.map((e,i)=>{
                                    return <TableBuku key={e._id} id={i+1} idDelete={e._id} namaBuku={e.name} categoryBuku={e.category} hargaBuku={e.price} StockBuku={e.stock}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                  

                </div>
            </section>
        </section>
    )
}

export default ContainerHomeDashboard;
