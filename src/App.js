import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'materialize-css'
import FormPage from './pages/Form'
import ResultPage from './pages/ResultPage'

function App() {

  const [localStorageData, setLocalStorageData] = useState(null)
 
  return (
    <Router>
      <div className='container'>
        {!localStorageData ?
          <Routes>
            <Route path={'/form'} exact element={<FormPage setLocalStorageData={setLocalStorageData} />}></Route>
            <Route path='*' element={<Navigate replace to="/form" />}></Route>
          </Routes>
          :
          <Routes>
            <Route path={'/result'} exact element={<ResultPage localStorageData={localStorageData} setLocalStorageData={setLocalStorageData} />}></Route>
            <Route path='*' element={<Navigate replace to="/result" />}></Route>
          </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
