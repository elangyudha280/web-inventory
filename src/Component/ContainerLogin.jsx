import CardLogin from "./ComponentLogin/CardLogin";
import CardRegister from "./ComponentLogin/CardRegister";



const Login = ()=>{
    return (
        <section className="container-login overflow-y-auto overflow-x-hidden relative w-full h-screen bg-[url('../images/cloudy.svg')] bg-center bg-cover bg-no-repeat grid place-items-center p-3 ">

            {/* component login */}
             {/* <CardLogin/> */}

            {/* component Register */}
              <CardRegister/>  
        </section>  
    )
}

export default Login;