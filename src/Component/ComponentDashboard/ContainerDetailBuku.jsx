
import {useState,useEffect} from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import parseToRupiah from '../../modules/parseToRupiah.mjs';


const ContainerDetailBuku = ()=>{
        let {id} = useParams()
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [stock, setStock] = useState("");
        const [description, setDescription] = useState("");
        const [picturePath, setPicturePath] = useState("");
        const [category, setCategory] = useState("");
        const [createdAt, setCreateAt] = useState("");
        const [updatedAt, setUpdateAt] = useState("");
      
        const dateFormat = (date) => {
          const newDate = new Date(date);
          const options = { year: "numeric", month: "long", day: "numeric" };
          return newDate.toLocaleDateString("id-ID", options);
        };
        useEffect(() => {
            document.title = 'detail page'
            if (id) {
              fetch(`https://serverinventory-ramdhey.koyeb.app/inventory/${id}`)
                .then((res) => res.json())
                .then((data) => {
                  setName(data.name);
                  setPrice(data.price);
                  setStock(data.stock);
                  setDescription(data.description);
                  setPicturePath(data.picturePath);
                  setCategory(data.category);
                  setCreateAt(data.createdAt);
                  setUpdateAt(data.updatedAt);
        
                });
                return
            }
          }, [id]);
   

    return (
        <section className="container-detail-buku  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] ">
            <div className=" relative max-w-6xl mx-auto">
                    <div className="flex">
                        <Link to='/dashboard' className='px-5 text-white py-2 bg-blue-500 rounded-md'>
                            back
                        </Link>
                    </div>
                <div className="card-detail mt-6 relative w-full grid min-[700px]:grid-cols-[auto_1fr] gap-4 auto-rows-auto ">
                    <div className="img-detail w-ful min-[700px]:w-[350px] h-[400px] ">
                        <img src={picturePath.url} alt={picturePath} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="detail-description w-full  py-5 px-2 flex flex-col gap-4">
                        <h4 className=""><span className="capitalize font-semibold">nama product:</span> {name}</h4>   
                        <h4 className=""><span className="capitalize font-semibold">harga product:</span> {parseToRupiah(price)}</h4>
                        <h4 className=""><span className="capitalize font-semibold">stock product:</span> {parseToRupiah(stock)}</h4>
                        <h4 className=""><span className="capitalize font-semibold">deskripsi product:</span> {description}</h4>   
                         <h4 className=""><span className="capitalize font-semibold">laporan dibuat :</span> {dateFormat(createdAt)}</h4>  
                        <h4 className=""><span className="capitalize font-semibold">laporan diUpdate:</span> {dateFormat(createdAt)}</h4>  

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerDetailBuku;