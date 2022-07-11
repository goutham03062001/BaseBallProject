import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  "./AuthCSS.css";
import axios from 'axios';
import { Route } from 'react-router';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserSignUp = () =>{
   const [UserName, setUserName] = useState('');
   const [Password, setPassword] = useState('');
   const [SecretKey, setSecretKey] = useState("");
   const [AuthStatus,setAuthStatus] = useState('NotValid');
   const [Message,SetMessage] = useState('');
   const CheckUserName = (e) =>{
    setUserName(e.target.value); console.log(UserName);
    
   }
   const CheckPassword = (e)=>{
    setPassword(e.target.value); console.log(Password);
   }
   const CheckSecretKey = (e) => {
    setSecretKey(e.target.value);
    console.log(SecretKey);
  };

   const [UserType,setUserType] = useState('');
   async function submitSignUp (e){
      
        var CheckMessage="";
      await  axios.post(`/Auth/${UserType}/SignUp`,  {
        UserName:UserName,
        Password:Password,
        Email:"Email",
        Mobile:"00000",
        AdminKey:SecretKey
    }).then(Response=>{
        console.log("SignUp API Response ->",Response.data);   
        if (typeof Response.data === 'string' || Response.data instanceof String)
        SetMessage(Response.data);
        const accessToken=Response.data.AccessToken;
        if(accessToken){
        localStorage.setItem(`${UserType} ${UserName}`, accessToken);
        
    }
        if(Response.data.resval)
        SetMessage(Response.data.resval);
   const AccessToken = localStorage.getItem(`${UserType} ${UserName}`);
   console.log(AccessToken);
    })

  
     .catch(error=>{
           console.log("error while Signing Up");
               console.log(error);
     })
    

const token = localStorage.getItem(`${UserType} ${UserName}`);
console.log("fetched from local->")
   console.log(token);
   
   await axios
   .get("/Auth/TokenValidate", {
     headers: { authorization: `Bearer ${token}` },
   })
   .then((Response) => {
     if (Response.data.resval === "TokenVerified") {
       window.location.replace(`/Admin/${UserName}`);
     }
     console.log(Response.data);
   })
   .catch((error) => {
     console.log(error);
   });
}





    return(
        
        <div className="SignUp-Wrapper">
        <Box sx={{display:'flex',flexFlow:'column nowrap',alignItems:'center',justifyContent:'space-around',width:'100%',position:'relative',padding:'30px 30px',maxWidth:'360px',boxShadow:4 ,borderRadius:'10px',backgroundColor:'white'}}>
            <span className="On-Box-Text">Sign Up</span>
        <TextField 
        id="standard-basic" 
        name='password'
        autoComplete='off'
        inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
        label="UserName"
        variant="outlined" 
        error={ UserName.length<5 ? true : false      }
        helperText="At least 5 char" 
        onChange={(e)=>{CheckUserName(e)}}    
        sx={{width:'100%',margin:'30px'}} />

        <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              width: "600px",
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            UserType
          </InputLabel>
          <Select
            sx={{ width: "150px", marginBottom: "3vh" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={UserType}
            label="User Type"
            inputProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            InputLabelProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            onChange={(e) => {
              setUserType(e.target.value); const UserTypeX=e.target.value; console.log(UserType); console.log(UserTypeX);
              if (UserTypeX === "Admin") {
                const AdminSecretKey = document.getElementById("CheckAdmin");
                AdminSecretKey.style.display = "flex";
              } else {
                const AdminSecretKey = document.getElementById("CheckAdmin");
                AdminSecretKey.style.display = "none";
              }
            }}
          >
            <MenuItem value={"User"}>User</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <div
          id="CheckAdmin"
          className={
            "Check-Admin" + (UserType === "Admin" ? " Visiblex" : " Hiddenx")
          }
        >
          <TextField
            name="password"
            autoComplete="off"
            id="standard-basic"
            label="Admin Secret Key"
            variant="outlined"
            inputProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            InputLabelProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            onChange={(e) => {
              CheckSecretKey(e);
            }}
            sx={{ width: "100%", boxShadow: 4, marginBottom: "3vh" }}
          />
        </div>

        <TextField id="standard-basic" 
        name='password'
        autoComplete='off'
        inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
        label="Password" 
        error={ Password.length<5 ? true : false      }
        variant="outlined" 
        helperText="At least 5 char" 
         onChange={(e)=>{CheckPassword(e)}}           
           sx={{width:'100%'}} />
           <div className="Button-Holder-Log">
        <div className="SignUp-Button"  onClick={ e=>{submitSignUp(e)}} >Sign Up</div>
        <NavLink exact to="/Login2" >
        Login
        </NavLink>
        </div>
        <span className="SignUp-Message">{Message}</span>
        </Box>
        </div>
        
    );
}

export default UserSignUp;