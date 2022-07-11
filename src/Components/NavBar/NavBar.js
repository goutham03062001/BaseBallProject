import React,{useState} from 'react';
import './NavBar.css';
import InputBase from '@mui/material/InputBase';
import { BrowserRouter , NavLink,Routes,Link } from 'react-router-dom';




const NavBar = ({resKey}) => {
    const Logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vs2NXUmgDyKBE26tEdIaQXSH66HybLdXNaMamViFrr9x7bB_QtvMJypwp2yyQ5jfF8s&usqp=CAU"

  const urlParams =window.location.pathname;
  
  console.log(window.location.pathname );
   
const [activeKey , setActiveKey] =  useState('Home');

   
      


    const tabKey= 'Home'; 
    const changeNavState = (tab,activeKey)=>{
        if(tab!=activeKey ) { console.log({activeKey});
          
            const temp=tab;
             setActiveKey(tab);
           
        }
        
    }
    console.log(activeKey);
    console.log(resKey);


    return(
       <div className="NavBar-Main-Wrapper">
           <div className="Logo-Container">
           <NavLink exact to="/" >
                <img className="Nav-Logo" src={Logo} alt="broken" />
            </NavLink>
           </div>
           <div className='NavBar-SearchBarWrapper'>
          
            </div>
        <div className={"NavBar-Content-Wrapper" + (resKey==="res-active"? " res-active" : " res-inactive")}>
            
         
           
        <div className="About-Dropdown">
           <div  className={"NavBar-Element-Container Community-Element"+ (activeKey==="SignUp"? " Active" : "")}  onClick={ () => {changeNavState('SignUp',activeKey)}}>
              <NavLink exact to ="/Register2"    className="NavLink" >
              <span className="Link-Text">SignUp</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu Community-Menu-Nav">
          <NavLink exact to ="/Register2"    className={"NavLink"+ (activeKey==="User"? " Active" : "")}  onClick={ () => {changeNavState('User',activeKey)}}>
          <span className="Link-Text">User</span> 
              </NavLink>
              <NavLink exact to ="/Register2"   className={"NavLink"+ (activeKey==="Admin"? " Active" : "")}  onClick={ () => {changeNavState('Admin',activeKey)}}>
              <span className="Link-Text">Admin</span> 
              </NavLink>
          </div>
          </div><div className="About-Dropdown">
           <div  className={"NavBar-Element-Container Community-Element"+ (activeKey==="Login"? " Active" : "")}  onClick={ () => {changeNavState('Login',activeKey)}}>
              <NavLink exact to ="/Login2"    className="NavLink" >
              <span className="Link-Text">Login</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu Community-Menu-Nav">
          <NavLink exact to ="/Login2"    className={"NavLink"+ (activeKey==="User"? " Active" : "")}  onClick={ () => {changeNavState('User',activeKey)}}>
          <span className="Link-Text">User</span> 
              </NavLink>
              <NavLink exact to ="/Login2"   className={"NavLink"+ (activeKey==="Admin"? " Active" : "")}  onClick={ () => {changeNavState('Admin',activeKey)}}>
              <span className="Link-Text">Admin</span> 
              </NavLink>
          </div>
          </div>
        
        </div>
        </div>
    );
}
const NavBar2 = ({resKey}) =>{
    const Logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vs2NXUmgDyKBE26tEdIaQXSH66HybLdXNaMamViFrr9x7bB_QtvMJypwp2yyQ5jfF8s&usqp=CAU"

    return(
        <div className="NavBar2-Main-Wrapper">
           <div className="Logo-Container">
           <NavLink exact to="./" >
                <img className="Nav-Logo" src={Logo} alt="broken" />
            </NavLink>
           </div>
           </div>
    
    
    );
}

export default NavBar;
export {NavBar2};

