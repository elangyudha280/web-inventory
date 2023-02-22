import { useEffect, useReducer } from 'react'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import card Login
import CardLogin from './Component/ComponentLogin/CardLogin'
// import component card Register
import CardRegister from './Component/ComponentLogin/CardRegister'
// import component Login
import ContainerLogin from './Component/ContainerLogin'

import { ProtectedLogin } from './Protected/ProtectedLogin'

// context token
import contextToken from './Context/contextToken.mjs'

// fungsi reducer token
import TokenReducer from './Context/reducer/TokenReducer'
import { ProtectedDashboard } from './Protected/ProtectedDashboard'

let initialToken = {
  token:null
}

function App() {
  let [dataToken,dispatchToken] = useReducer(TokenReducer, initialToken)

    
  return (
    <div className="App ">
     
     <contextToken.Provider value={{dataToken,dispatchToken}}>
      <Router>  
            <Routes>
              <Route  element={<ProtectedLogin/>}>
                <Route path='/' element={<ContainerLogin/>}>
                    <Route path='/' element={<CardLogin/>}/>
                    <Route path='register' element={<CardRegister/>}/>
                </Route>
              </Route>

              <Route path='/dashboard' element={<ProtectedDashboard/>}>
                <Route path='/dashboard' element={<p>halaman dashboard</p>}/>
              </Route>
            </Routes>
        </Router>
     </contextToken.Provider>
    

    </div>
  )
}

export default App
