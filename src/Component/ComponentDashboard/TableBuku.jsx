import { Link } from "react-router-dom";


const TableBuku = ()=>{
    return (
       

<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
<th scope="row" className="px-3   py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        1
    </th>
<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate dark:text-white r">
    Apple MacBook Pro 17"
</td>
<td className="px-6 py-4">
    category buku
</td>
<td className="px-6 py-4">
    $2999
</td>
<td className="px-6 py-4 flex justify-start gap-2">
    <Link to='/detail' className="font-medium hover:underline  text-blue-600 dark:text-blue-500">Detail</Link>
    <Link href="#" className="font-medium text-orange-500 dark:text-orange-500  hover:underline">Edit</Link>
    <button className="btn-delete-buku text-red-400 font-medium hover:underline">
        Delete
    </button>
</td>
</tr>
    
    )
}

export default TableBuku;