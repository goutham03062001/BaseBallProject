import React from 'react'
import  LoginPage  from './Pages/LoginPage/LoginPage.js'
import RegisterPage from './Pages/RegisterPage/Register.js'
import {Routes , Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import HomePage from './Pages/HomePage/HomePage.js';

function App() {
  return (
    <>
    <Routes>
      <Route  path = "/" element = {<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path ="/login" element = {<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App