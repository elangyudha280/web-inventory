import { useEffect, useReducer } from 'react'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import card Login
import CardLogin from './Component/ComponentLogin/CardLogin'
// import component card Register
import CardRegister from './Component/ComponentLogin/CardRegister'


// import component Pages Login
import ContainerLogin from './Component/pages/ContainerLogin'
// import component pages dashboard
import ContainerDashboard from './Component/pages/ContainerDashboard'


// context token
import contextToken from './Context/contextToken.mjs'

// fungsi reducer token
import TokenReducer from './Context/reducer/TokenReducer'

import { ProtectedLogin } from './Protected/ProtectedLogin'
import { ProtectedDashboard } from './Protected/ProtectedDashboard'

let initialToken = {
  token:null,
  username:null
}

function App() {
  let [dataToken,dispatchToken] = useReducer(TokenReducer, initialToken)

    
  return (
    <div className="App">
     
     <contextToken.Provider value={{dataToken,dispatchToken}}>
      <Router>  
            <Routes>
              {/* router about Login */}
              <Route  element={<ProtectedLogin/>}>
                <Route path='/' element={<ContainerLogin/>}>
                    <Route path='/' element={<CardLogin/>}/>
                    <Route path='register' element={<CardRegister/>}/>
                </Route>
              </Route>

                  {/* Router about dashboard */}
              <Route path='/dashboard' element={<ProtectedDashboard/>}>
                <Route path='/dashboard' element={<ContainerDashboard/>}/>
              </Route>
            </Routes>
        </Router>
     </contextToken.Provider>
    

    </div>
  )
}

export default App
