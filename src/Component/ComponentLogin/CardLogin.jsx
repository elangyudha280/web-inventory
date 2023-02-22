
import { useEffect,useContext,useState } from "react";
import contextToken from "../../Context/contextToken.mjs";
import { Link,useNavigate } from "react-router-dom";
import SpanInvalid from "../componentModal/spanInvalid";
import validator from "validator";
import Loading from "../ComponentLoading/Loading.jsx";





const CardLogin = ()=>{

    // state token 
    let {dispatchToken} = useContext(contextToken);

    // input email
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    // state validate input
    let [emailError,setEmailError] = useState(false)
    let [passwordError,setPasswordError] = useState(false)

    // state loading
    let [loading,setLoading] = useState(false)

    // navigate to dashboard
    let toDashboard = useNavigate()

    useEffect(()=>{
        document.title = 'Login Page'
    },[])


    // event login
    const requestLogin = (e)=>{
        e.preventDefault()
        setLoading(true)
        setEmailError(false)
        setPasswordError(false)


        let datasForm = {
            email,
            password
        }

        // request data
        fetch('https://serverinventory-ramdhey.koyeb.app/auth/login',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(datasForm)
        }).then(e => e.json())
        .then(user => {

            // check apakah usernya tidak ada
            if(user.msg){
                // check apakah data user atau password yang tidak ditemukan
                if(user.msg === 'User tidak di temukan!'){
                    setEmailError(true)
                    setPasswordError(false)
                    return
                }
                    setEmailError(false)
                    setPasswordError(true)
                    return
            }
            
            setEmailError(false)
            setPasswordError(false);
            localStorage.setItem('token',user.token)
            dispatchToken({type:'successLogin',payload:user.token})
            toDashboard('/dashboard')
            return
        })
        .catch(e => e)
        .finally(e=> {setLoading(false)})
    }
    
    return (
         <div className="card-login w-full min-[420px]:w-[400px]  p-4 rounded-md">
                <h3 className="title-login text-2xl text-white">Login</h3>
        
                <form action="" onSubmit={requestLogin} className="relative  mt-4" autoComplete="off">

                    <div className="input-group">
                            <input type="email" required defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}} className="input-item placeholder:text-white text-white border-b-2 bg-transparent  w-full mt-1 px-2 py-2 rounded-md  outline-none" placeholder="masukan email.." />
                            {
                                (!validator.isEmail(email) && email.length !== 0 || emailError) && <SpanInvalid msg={`email ${(!validator.isEmail(email)) ? 'tidak valid' : 'tidak ditemukan' }`}/>
                            }
                    </div>

                    <div className="input-group  mt-2">
                            <input type="password" required defaultValue={password} onChange={(e)=>{setPassword(e.target.value)}} className="input-item placeholder:text-white text-white border-b-2 bg-transparent  w-full mt-1 px-2 py-2 rounded-md  outline-none" placeholder="masukan password.." />
                            {
                                (passwordError) && <SpanInvalid msg='Password tidak ditemukan'/>
                            }
                    </div>

                    <button className="btn btn-login border-2 grid place-items-center" type="submit">
                        {(loading) ? <Loading/> : 'Login'}
                    </button>
                </form>

                <Link to='/register' className="block text-center text-[0.8em] text-white mt-1">Dont have account ?</Link>
        </div> 
    )
}

export default CardLogin;