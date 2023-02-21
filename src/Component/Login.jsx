


const Login = ()=>{
    return (
        <section className="container-login overflow-y-auto overflow-x-hidden relative w-full h-screen bg-[url('../images/cloudy.svg')] bg-center bg-cover bg-no-repeat grid place-items-center p-3 ">

            {/* component login */}
            {/* <div className="card-login w-full min-[420px]:w-[400px]  p-4 rounded-md">
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

                <span className="block text-center text-[0.8em] text-white mt-1">Dont have account ?</span>
            </div> */}


                {/* component register */}
                {/* <div className="card-register w-full min-[420px]:w-[400px]  p-4 rounded-md">
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
                <span className="block text-center text-[0.8em] text-white mt-1">Have account ?</span>
                </div> */}


        </section>  
    )
}

export default Login;