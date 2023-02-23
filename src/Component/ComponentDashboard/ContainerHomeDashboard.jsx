// component book info
import BookInfo from "./ComponentHomeDashboard/BookInfo";
// component table buku
import TableBuku from "./TableBuku";



const ContainerHomeDashboard = ()=>{
    return (
        <section className="container-home  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] border-2 border-red-500">
            <section className="sub-container mx-auto relative max-w-6xl ">
                  <BookInfo/>

                {/* component card book item */}
                <div className="container-card-book-item mt-10 relative w-full ">
                  
                <div className="flex items-center justify-between  gap-2 mb-4 p-1">
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full min-[500px]:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                            </div>
                            <select name="" id="" className="px-2 h-[40px] min-[500px]:h-[40px] bg-blue-700 rounded-lg text-white" >
                                <option>filter buku</option>
                                <option value="buku_fiksi" className="truncate">bukufiksi</option>
                            </select>
                </div>

                   
                {/* component table buku */}
                <TableBuku/>
                  

                </div>
            </section>
        </section>
    )
}

export default ContainerHomeDashboard;