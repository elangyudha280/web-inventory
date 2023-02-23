import { Link } from "react-router-dom";
import { useContext } from "react";
import dataDashboard from "../../Context/contextDashboard.mjs";
import parseToRupiah from "../../modules/parseToRupiah.mjs";

const TableBuku = ({id,idDelete,namaBuku,categoryBuku,hargaBuku,StockBuku})=>{

    // DATA CONTEXT DASHBOARD
    let {setIdModal,setModalDeleteBuku} = useContext(dataDashboard)

    // event delete data
    const setIdModalDelete = (e)=>{
            setIdModal(e.target.dataset.delete)
            setModalDeleteBuku(true)
    
    } 


    return (
       

<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
<th scope="row" className="px-3   py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {id}
    </th>
<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate dark:text-white r">
  {namaBuku}
</td>
<td className="px-6 py-4">
    {categoryBuku}
</td>
<td className="px-6 py-4">
    Rp.{parseToRupiah(hargaBuku)}
</td>
<td className="px-6 py-4">
   {parseToRupiah(StockBuku)}
</td>
<td className="px-6 py-4 flex justify-start gap-2">
    <Link to='/detail' className="font-medium hover:underline  text-blue-600 dark:text-blue-500">Detail</Link>
    <Link href="#" className="font-medium text-orange-500 dark:text-orange-500  hover:underline">Edit</Link>
    <button onClick={setIdModalDelete} className="btn-delete-buku grid place-items-center text-red-400 font-medium hover:underline" data-delete={idDelete}>
        Delete
    </button>
</td>
</tr>
    
    )
}

export default TableBuku;