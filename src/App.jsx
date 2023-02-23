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
// component container  home dashboard
import ContainerHomeDashboard from './Component/ComponentDashboard/ContainerHomeDashboard'


// context token
import contextToken from './Context/contextToken.mjs'

// fungsi reducer token
import TokenReducer from './Context/reducer/TokenReducer'

import { ProtectedLogin } from './Protected/ProtectedLogin'
import { ProtectedDashboard } from './Protected/ProtectedDashboard'
import ContainerDetailBuku from './Component/ComponentDashboard/ContainerDetailBuku'

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
              <Route  element={<ProtectedDashboard/>}>
                <Route path='/dashboard' element={<ContainerDashboard/>}>
                  <Route path='/dashboard' element={<ContainerHomeDashboard/>} />
                  <Route path='detail/:id' element={<ContainerDetailBuku/>} />
                </Route>
              </Route>
            </Routes>
        </Router>
     </contextToken.Provider>
    

    </div>
  )
}

export default App
