import React,{useState} from 'react'
import './AuthCSS.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignUp.css';
import axios from 'axios';
import { Route } from 'react-router';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const AdminLogin = () =>{
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [AuthStatus,setAuthStatus] = useState('NotValid');
  const [Message,SetMessage] = useState('');
  const CheckUserName = (e) =>{
   setUserName(e.target.value); console.log(UserName);
   
  }
  const CheckPassword = (e)=>{
   setPassword(e.target.value); console.log(UserName);
  }


async function submitSignUp (e){
   
     
   await  axios.post('Auth/Admin/Login',  {
       UserName:UserName,
       Password:Password
   }).then(Response=>{
     console.log("response->")
       console.log(Response.data);   
       if (typeof Response.data.resval === 'string' || Response.data.resval instanceof String)
       SetMessage(Response.data.resval);
       const accessToken=Response.data.token;
       if(accessToken){
       localStorage.setItem(`Admin ${UserName}`, accessToken);
       
   }
       if(Response.data.resval)
       SetMessage(Response.data.resval);
  const AccessToken = localStorage.getItem(`Admin ${UserName}`);
  console.log(AccessToken);
   })

 
    .catch(error=>{
          console.log("error while Logging in");
              console.log(error);
    })
   

const AccessToken = localStorage.getItem(`Admin ${UserName}`);
console.log("fetched from local->")
  console.log(AccessToken);
await axios.get('Auth/TokenValidate', {headers:{"authorization" : `Bearer ${AccessToken}`  }}).then(Response=>{
       
     if(Response.data.resval === "TokenVerified")
     { 
      window.location.replace(`/Admin/${UserName}`);
      
     }
   console.log(Response.data); 
   
}).catch(error=>{
   console.log(error);
})

 }
 





   return(
       <div className="SignUp-Wrapper">
       <Box sx={{display:'flex',flexFlow:'column nowrap',alignItems:'center',justifyContent:'space-around',width:'100%',position:'relative',padding:'30px 30px',maxWidth:'360px',boxShadow:4 ,borderRadius:'10px',backgroundColor:'white'}}>
           <span className="On-Box-Text">Login</span>
       <TextField id="standard-basic" label="UserName" variant="outlined" inputProps={{style: {fontSize: 40}}} InputLabelProps={{style: {fontSize: 40}}} onChange={(e)=>{CheckUserName(e)}}            sx={{width:'100%',margin:'30px'}}    />
       <TextField id="standard-basic" label="Password" variant="outlined" inputProps={{style: {fontSize: 40}}} InputLabelProps={{style: {fontSize: 40}}} helperText="At least 5 char"  onChange={(e)=>{CheckPassword(e)}}             sx={{width:'100%'}} />
       <div className="SignUp-Button"  onClick={e=>{submitSignUp(e)}} >Login</div>
       <NavLink exact to="/auth/Admin/SignUp" >
       SignUp
       </NavLink>
       <span className="SignUp-Message">{Message}</span>

       </Box>
       </div>
   );

}

export default AdminLogin;