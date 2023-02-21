
import { useEffect } from "react";
import { Link } from "react-router-dom";
const CardLogin = ()=>{

    useEffect(()=>{
        document.title = 'Login Page'
    },[])
    
    return (
         <div className="card-login w-full min-[420px]:w-[400px]  p-4 rounded-md">
                <h3 className="title-login text-2xl text-white">Login</h3>
        
                <form action="" className="relative  mt-4" autoComplete="no">

                    <div className="input-group">
                            <input type="email" className="input-item placeholder:text-white text-white border-b-2 bg-transparent  w-full mt-1 px-2 py-2 rounded-md  outline-none" placeholder="masukan email.." />
                    </div>

                    <div className="input-group  mt-2">
                            <input type="password" className="input-item placeholder:text-white text-white border-b-2 bg-transparent  w-full mt-1 px-2 py-2 rounded-md  outline-none" placeholder="masukan password.." />
                    </div>

                    <button className="btn btn-login border-2" type="submit">
                        Login
                    </button>
                </form>

                <Link to='/register' className="block text-center text-[0.8em] text-white mt-1">Dont have account ?</Link>
        </div> 
    )
}

export default CardLogin;