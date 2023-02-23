// component book info
import BookInfo from "./ComponentHomeDashboard/BookInfo";



const ContainerHomeDashboard = ()=>{
    return (
        <section className="container-home  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] border-2 border-red-500">
            <section className="sub-container mx-auto relative max-w-6xl ">
                  <BookInfo/>

                {/* component card book item */}
                <div className="container-card-book-item mt-10 relative w-full ">
                    <nav className="nav-card-book-item relative w-full flex  gap-3 h-auto max-[500px]:flex-col min-[500px]:h-[40px]">
                        <button className="btn-add-data-book border-none outline-none px-3 rounded-xl bg-blue-600 text-white transition-all duration-200 hover:opacity-70 h-[50px] min-[500px]:h-full">tambah buku</button>
                        <div className="flex-1 flex gap-3 justify-end">
                            <form action="">
                                <input type="text" className="input-search-buku text-black placeholder:text-black w-full min-[500px]:w-[150px] bg-transparent border-b-[1px] border-slate-800 outline-none text-sm h-full px-2" placeholder="cari buku..."  />
                            </form>
                            <select name="" id="" className="px-2 h-[40px] min-[500px]:h-full bg-blue-700 rounded-lg text-white" >
                                <option>filter buku</option>
                                <option value="buku_fiksi" className="truncate">bukufiksi</option>
                            </select>
                        </div>
                    </nav>

                    {/* component card item book */}
                    <div className="container-card-item relative w-full border-2 border-red-600 grid mt-5">

                    </div>

                </div>
            </section>
        </section>
    )
}

export default ContainerHomeDashboard;