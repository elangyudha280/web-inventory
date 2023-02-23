import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";

// data context token
import contextToken from "../../Context/contextToken.mjs";




// component devide navbar
const DeviveNav = ({toggleDevideNav})=>{
    let {dataToken,dispatchToken} = useContext(contextToken);
    
    // navigate logout
    let navLogout = useNavigate()


    // event logout
    let eventLogout = ()=>{
        toggleDevideNav(false)
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('imgUser')
        dispatchToken({type:'successLogout',payload:{token:null,username:null}})
        navLogout('/')
    }

    return (
     <div className="devide-nav-item absolute right-0 top-[130%] rounded-md overflow-hidden w-[100px]  bg-slate-800  text-white flex flex-col">
            <h2 className="devide-username truncate w-full p-2 ">
                {localStorage.getItem('username')} 
            </h2>
            <button onClick={eventLogout} className="btn-login border-t-[1px] border-slate-500 text-left w-full p-2  outline-none">Logout</button>
    </div>
    )
}


// component navbar
const Navbar = ()=>{

    // STATE devide nav
    let [devideNav,setDevideNav] = useState(false)


    // event toggle devide nav
    const toggleDevide = ()=>{
        (devideNav) ? setDevideNav(false) : setDevideNav(true)
    }
    return (
        <nav className="navbar fixed top-0 left-0 w-full py-2 px-4 bg-slate-900 z-[5]">
            <div className="container max-w-6xl relative h-[45px] mx-auto   flex items-center gap-2">
                    <Link to='/dashboard' className="title-nav text-white text-[0.9em] min-[243px]:text-xl">Inverntory Project</Link>
                    <div className="nav-item relative flex-1 w-full h-full  flex justify-end">
                    
                        <img src={localStorage.getItem('imgUser')} onClick={toggleDevide} alt="img-profile" className="img-profile overflow-hidden h-full w-[45px] rounded-full cursor-pointer object-cover object-center"/>

                        
                        {/* component devide  */}
                        {(devideNav) && <DeviveNav toggleDevideNav={setDevideNav}/>}
                    </div>            
            </div>
        </nav>
    )
}


export default Navbar;