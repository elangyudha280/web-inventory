

const TableBuku = ()=>{
    return (
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
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
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
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <button className="btn-delete-buku text-red-400 font-medium hover:underline">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    )
}

export default TableBuku;