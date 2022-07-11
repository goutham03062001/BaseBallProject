import React from 'react'
import  LoginPage  from './Pages/LoginPage/LoginPage.js'
import RegisterPage from './Pages/RegisterPage/Register.js'
import {Routes , Route} from 'react-router-dom'
import 'antd/dist/antd.css';

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path ="/login" element = {<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App