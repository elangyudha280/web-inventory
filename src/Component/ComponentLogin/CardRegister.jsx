import { useEffect,useState,useContext } from "react";
import { ContextLogin } from "../../Context/login.mjs";
import { Link,useNavigate } from "react-router-dom";

import validator from "validator";

// component span invalid 
import SpanInvalid from "../componentModal/spanInvalid";
// component loading
import Loading from "../ComponentLoading/Loading.jsx";



const CardRegister = ()=>{

        //  dispatch login
        let {dispatchLogin} = useContext(ContextLogin)

        // state data input
        let [firstname,setFirstName] = useState('')
        let [lastName,setLastName] = useState('')
        let [email,setEmail] = useState('')
        let [password,setPassword] = useState('')
        let [confirmPassword,setConfirmPass] = useState('')
        let [loading,setLoading] =useState(false)
        let [validateError,setValidateError] = useState(false)


        // state check server error
        let [serverError,setResponseError] = useState(false)

        // navigate
        let toLogin = useNavigate()


        useEffect(()=>{
                document.title = 'Register Page'
        },[])

 
        // event send data register
        const sendData = (e)=>{
                e.preventDefault();
                
                setLoading(true)

                // validate input form
                if(!validator.isEmail(email) || password.length === 0 || password !== confirmPassword )  {
                        setLoading(false)
                        return
                } 
              
                const formData = new FormData(e.target);

                // post data form 
                 fetch("https://serverinventory-ramdhey.koyeb.app/register", {
                        method: "POST",
                        body: formData,
                      }).then(e => {
                        if(!e.ok){
                             throw new Error('bad server')   
                        }
                        return e.json()
                      })
                      .then(e=> {
                        // check jika error maka tampilkan pesan error
                         if(e.error){
                                setValidateError(true)        
                        return 
                        }   

                        // jika berhasil
                        // arahkan ke halaman login 
                        toLogin('/')

                        // hilangkan pesan errors
                        setValidateError(false)
                        
                        // tampilkan modal success register
                        setTimeout(() => {
                        dispatchLogin({type:'showModalSuccess'})
                        }, 100);
                })
                      .catch(e=>{
                        alert('server error,silahkan coba lagi nanti')
                        console.log('server not response')
                      })
                      .finally(()=>{
                        setLoading(false)
                      })
        }
        
    return (
            <div className="card-register w-full min-[420px]:w-[400px]  p-4 rounded-md">
                <h3 className="title-register text-2xl text-white" >Register</h3>
              
                <form action="" onSubmit={sendData} className="relative  mt-4" autoComplete="off">
                    <div className="input-group mt-2">
                            <input type="text" defaultValue={firstname} onChange={(e)=>{setFirstName(e.target.value)}} required className="input-item peer" name="firstName" placeholder="Firstname..." />
                    </div>
                    <div className="input-group  mt-2">
                            <input type="text" name="lastName" defaultValue={lastName} onChange={(e)=>{setLastName(e.target.value)}} required className="input-item" placeholder="Lastname..." />
                    </div>
                    <div className="input-group mt-2">
                            <input type="email" name="email" defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}} required className="input-item" placeholder="email..." />
                            {
                            (!validator.isEmail(email) && email.length !== 0 || validateError === true ) &&  <SpanInvalid msg={(validateError) ? 'email sudah terdaftar':'email tidak valid' }/> 
                            }
                           
                    </div>

                    <div className="input-group  mt-2">
                            <input type="password" defaultValue={password} minLength='5' onChange={(e)=>{setPassword(e.target.value)}} required className="input-item peer" name="password" placeholder="password..." />
                         {
                            (password.length !== 0) && <SpanInvalid msg='Password harus lebih dari 5 karakter'/>        
                         }
                    </div>
                    <div className="input-group  mt-2">
                            <input type="password" defaultValue={confirmPassword} onChange={(e)=>{setConfirmPass(e.target.value)}} required className="input-item" name="confirmPassword" placeholder="Confirm password..." />
                            {
                            (password !== confirmPassword) && <SpanInvalid msg='Confirm Password harus sama dengan password'/>  
                         }
                    </div>
                        <div className="input-group  mt-2">
                                <input type="file"  name="picturePath" required className="input-item" placeholder="masukan gambar profile..." />
                                
                        </div>
                    <button className="btn btn-login border-2 grid place-items-center" type="submit">
                        {(loading) ? <Loading/> :'Register'}
                    </button>
                </form>
                <Link to='/' className="block text-center text-[0.8em] text-white mt-1">Have account ?</Link>
            </div> 
    )
}

export default CardRegister;