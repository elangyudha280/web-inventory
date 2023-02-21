

import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardRegister = ()=>{

        useEffect(()=>{
                document.title = 'Register Page'
        },[])
        
    return (
            <div className="card-register w-full min-[420px]:w-[400px]  p-4 rounded-md">
                <h3 className="title-register text-2xl text-white">Register</h3>
              
                <form action="" className="relative  mt-4" autoComplete="no">
                    <div className="input-group mt-2">
                            <input type="text" className="input-item" placeholder="Firstname..." />
                    </div>
                    <div className="input-group  mt-2">
                            <input type="text" className="input-item" placeholder="Lastname..." />
                    </div>
                    <div className="input-group mt-2">
                            <input type="email" className="input-item" placeholder="email..." />
                    </div>

                    <div className="input-group  mt-2">
                            <input type="password" className="input-item" placeholder="password..." />
                    </div>
                    <div className="input-group  mt-2">
                            <input type="password" className="input-item" placeholder="Confirm password..." />
                    </div>
                    <button className="btn btn-login border-2" type="submit">
                        Register
                    </button>
                </form>
                <Link to='/' className="block text-center text-[0.8em] text-white mt-1">Have account ?</Link>
            </div> 
    )
}

export default CardRegister;