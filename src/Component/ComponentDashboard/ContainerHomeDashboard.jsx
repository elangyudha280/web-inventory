


const ContainerHomeDashboard = ()=>{
    return (
        <section className="container-home  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] border-2 border-red-500">
            <section className="sub-container relative max-w-6xl ">
                    <div className="container-book relative w-full grid  gap-2  sm:grid-cols-[1fr_1fr]   auto-rows-auto place-items-center lg:grid-cols-[1fr_1fr_1fr]">
                        <div className="card-info-book w-full  py-5 px-3 flex-1 border-2 rounded-xl bg-slate-800 overflow-hidden ">
                            <h2 className="title-card-info-book text-white text-center text-xl ">Jumlah Product</h2>
                            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                                2
                            </h2>
                        </div>
                        <div className="card-info-book w-full  py-5 px-3 flex-1  rounded-xl bg-slate-800 overflow-hidden ">
                            <h2 className="title-card-info-book text-white text-center text-xl ">Jumlah Harga Product</h2>
                            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                                Rp. 200.000
                            </h2>
                        </div>
                        <div className="card-info-book w-full  py-5 px-3 flex-1  rounded-xl bg-slate-800 overflow-hidden ">
                            <h2 className="title-card-info-book text-white text-center text-xl ">Stock semua Product</h2>
                            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                                Rp. 200.000
                            </h2>
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default ContainerHomeDashboard;