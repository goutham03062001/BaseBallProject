import React from 'react'
import  LoginPage  from './Pages/LoginPage/LoginPage.js'
import RegisterPage from './Pages/RegisterPage/Register.js'
import {Routes , Route
,BrowserRouter as Router

} from 'react-router-dom'
import 'antd/dist/antd.css';
import HomePage from './Pages/HomePage/HomePage.js';
import UserSignUp from './Pages/TestLogin/UserSignUp.js';
import UserLogin from './Pages/TestLogin/UserLogin.js';
import AdminSignUp from './Pages/TestLogin/AdminSignUp.js';
import AdminLogin from './Pages/TestLogin/AdminLogin.js';
import {Routes , Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import HomePage from './Pages/HomePage/HomePage.js';

function App() {
  return (
    <>
    
    <Routes>
      
      <Route exact path="/register" element={<RegisterPage/>}/>
      <Route exact path ="/login" element = {<LoginPage/>}/>
      <Route exact path ="/Register2" element = {<UserSignUp/>}/>
      <Route exact path ="/Login2" element = {<UserLogin/>}/>
      <Route exact path ="/Register2" element = {<AdminSignUp/>}/>
      <Route exact path ="/Admin/Login2" element = {<AdminLogin/>}/>
      <Route exact path="/Account/:UserName" element={<HomePage/>} />
      
      <Route  path = "/" element = {<HomePage/>}/>

    </Routes>
    
    <Routes>
      <Route  path = "/" element = {<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path ="/login" element = {<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App