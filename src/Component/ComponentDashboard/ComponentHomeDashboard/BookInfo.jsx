import dataDashboard from "../../../Context/contextDashboard.mjs";
import { useContext,useEffect,useState } from "react";
import parseToRupiah from "../../../modules/parseToRupiah.mjs";


const BookInfo = ()=>{

    let {dataBuku,checkUpdate} = useContext(dataDashboard)

    // state jumlah product
    let [jumlahProduct,setJumlahProduct] = useState(0)
    // state jumlah harga product
    let [JumlahHargaProduct,setJumlahHargaProduct] = useState(0)
    // state jumlah stock 
    let [jumlahTotalStock,setjumlahTotalStock] = useState(0)
  useEffect(()=>{
    fetch("https://serverinventory-ramdhey.koyeb.app/inventory/")
    .then((res) => res.json())
    .then((data) => {
      let reduceJumlahHargaProduct = data.map(e => e.price).reduce((a,b)=>a+b,0)
      let reduceJumlahProduct = data.length
      let reduceJumlahStockProduct = data.map(e => e.stock).reduce((a,b)=>a+b,0)
     
      setJumlahProduct(reduceJumlahProduct)
      setJumlahHargaProduct(reduceJumlahHargaProduct) 
      setjumlahTotalStock(reduceJumlahStockProduct)
    });
  },[checkUpdate])

    return (
        <div className="container-book-info   relative w-full grid  gap-2  sm:grid-cols-[1fr_1fr]   auto-rows-auto place-items-center lg:grid-cols-[1fr_1fr_1fr]">
        <div className="card-info-book w-full  py-5 px-3 flex-1 border-2 rounded-xl bg-slate-800 overflow-hidden ">
            <h2 className="title-card-info-book text-white text-center text-xl ">Jumlah Product</h2>
            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                {jumlahProduct}
            </h2>
        </div>
        <div className="card-info-book w-full  py-5 px-3 flex-1  rounded-xl bg-slate-800 overflow-hidden ">
            <h2 className="title-card-info-book text-white text-center text-xl ">Jumlah Harga Product</h2>
            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                Rp. {parseToRupiah(JumlahHargaProduct)}
            </h2>
        </div>
        <div className="card-info-book w-full  py-5 px-3 flex-1  rounded-xl bg-slate-800 overflow-hidden ">
            <h2 className="title-card-info-book text-white text-center text-xl ">Stock semua Product</h2>
            <h2 className="count-jumlah-product text-white text-center text-xl mt-5 truncate">
                {parseToRupiah(jumlahTotalStock)}
            </h2>
        </div>
    </div>
    )
}


export default BookInfo;