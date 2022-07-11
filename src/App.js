import React from 'react'
import './App.css'
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
import NavBar from './Components/NavBar/NavBar'
import AdminPage from './Pages/HomePage/AdminPage'

function App() {
  return (
    <div className='App-Wrapper'>
    <div className="NavBar-Wrapper">
      <NavBar/>
      </div>
      <div className="Content-Wrapper">
    <Routes>
      
      <Route exact path="/register" element={<RegisterPage/>}/>
      <Route exact path ="/login" element = {<LoginPage/>}/>
      <Route exact path ="/Register2" element = {<UserSignUp/>}/>
      <Route exact path ="/Login2" element = {<UserLogin/>}/>
      <Route exact path ="/Register2" element = {<AdminSignUp/>}/>
      <Route exact path ="/Admin/Login2" element = {<AdminLogin/>}/>
      <Route exact path="/Account/:UserName" element={<HomePage/>} />
      <Route exact path ="/:UserType/:UserName" element={<AdminPage/>} />
      <Route  path = "/" element = {<UserLogin/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default App