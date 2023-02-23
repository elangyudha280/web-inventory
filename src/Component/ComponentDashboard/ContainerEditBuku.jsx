import { useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dataDashboard from "../../Context/contextDashboard.mjs";

const ContainerEditBuku = ()=>{
    let {checkUpdate,setCheckUpdate} = useContext(dataDashboard)
    let navigate = useNavigate()

    const {id} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    // GET DATA
    useEffect(() => {
        if (id) {
          fetch(`https://serverinventory-ramdhey.koyeb.app/inventory/${id}`)
            .then((res) => res.json())
            .then((data) => {
              setName(data.name);
              setPrice(data.price);
              setStock(data.stock);
              setDescription(data.description);
              
              setCategory(data.category);
              
            });
        }
      }, [id]);

    //   event edit data
    const editData =async (e)=>{
        e.preventDefault()

        try {
            await axios.patch(`https://serverinventory-ramdhey.koyeb.app/inventory/${id}`, {
                name,
                price,
                stock,
                description,
              
            });
            navigate('/dashboard');
          


            
        } catch (error) {
            console.log(error);

            
        }
        finally{
            (checkUpdate) ? setCheckUpdate(false) : setCheckUpdate(true)
        }
    }

    return (
        <section  className="container-home   pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] ">
            <div className="sub-container  mx-auto relative max-w-6xl ">
                <form onSubmit={editData}>
                <div className="grid gap-6 mb-6  md:grid-cols-2  rounded-xl">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" defaultValue={name} onChange={(e)=>{setName(e.target.value)}} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edit name" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga</label>
                        <input type="text" id="price" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Harga buku" required />
                    </div>
                    <div>
                        <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">stock</label>
                        <input type="text" id="stock" defaultValue={stock} onChange={(e)=>{setStock(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Stock buku" required />
                    </div>  
                    {/* <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select defaultValue={category} onChange={(e)=>{setCategory(e.target.value)}} name="category" id="category"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            {
                                (category!== '') &&  <option defaulvalue={category}>{category}</option>
                            }
                        </select>
                    </div> */}
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desription buku</label>
                        <textarea defaultValue={description} onChange={(e)=>{setDescription(e.target.value)}} name="desciption"  id="description" cols="10" rows="1"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Description buku"></textarea>
                    </div>
                        
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>   
                <button type="reset" className="text-white bg-red-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 sm:mt-0 sm:ml-2">Reset</button>  
                </form>
            </div>
        </section>
    )
    }
    
 export default ContainerEditBuku;