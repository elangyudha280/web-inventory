import { useState } from 'react'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CardLogin from './Component/ComponentLogin/CardLogin'
import CardRegister from './Component/ComponentLogin/CardRegister'



// import component Login
import ContainerLogin from './Component/ContainerLogin'
import { ProtectedLogin } from './Protected/ProtectedLogin'



function App() {

  return (
    <div className="App ">
     
      <Router>  
          <Routes>
            <Route  element={<ProtectedLogin/>}>
              <Route path='/' element={<ContainerLogin/>}>
                  <Route path='/' element={<CardLogin/>}/>
                  <Route path='register' element={<CardRegister/>}/>
              </Route>
            </Route>

            <Route path='/dashboard' element={<h1>halaman dashboard</h1>}/>

          </Routes>
      </Router>
    

    </div>
  )
}

export default App
