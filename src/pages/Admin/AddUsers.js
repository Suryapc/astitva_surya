// ---Material UI-----

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ---Material UI-----

import {useNavigate } from "react-router-dom";
import React, {useState,useEffect} from "react";
import axios from "axios";
import LoginPage from '../LoginPage';

 const AddUsers = () => {

          const handleSubmit = (event) => 
          {
             event.preventDefault();
            alert("Operator Added Successfully");
          }

        const [user_email,setUserEmail] = useState("") 
        const [pwd,setUserPwd] = useState("")
        const [user_type,setUserType] = useState("")
//         const [user_name,setUsername] = useState("")

        const userEmailHandler = (e)=>{setUserEmail(e.target.value);}
        const userPwdHandler = (e)=>{setUserPwd(e.target.value);}
        const operTypeHandler = (e)=>{setUserType(e.target.value);}
//         const operNameHandler = (e)=>{ setUsername(e.target.value);}
   
        
       const navigate = useNavigate();

        const postData = () => {
                                axios.post(`http://localhost:4000/login_verify`, 
                                {
                                 user_email,
                                 pwd,
                                 user_type,
                                //  user_name,
                                
                                }).then(() => {
                                navigate.push('/read')
                                })
                               console.log(pwd) 
                }

           return (
                      <>
            <form  sx={{width:'80%'}} onSubmit={handleSubmit}>

             <TextField
              onChange={(e)=>{userEmailHandler(e)}} 
              value={user_email}
              sx={{marginLeft:'65px',width:'40%','marginTop':'4%'}} 
              required  type="text" id="txtOperName" label="User Email" variant="standard"/><br></br>

              <TextField 
              onChange={(e)=>{userPwdHandler(e)}}
              value={pwd}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperEmail" label="Password" variant="standard"/><br></br>
             
             <TextField 
              onChange={(e)=>{operTypeHandler(e)}}
              value={user_type}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperMobile" label="User Type" variant="standard"/><br></br>
  
              {/* <TextField 
              onChange={(e)=>{operNameHandler(e)}}
              value={user_name}
              sx={{'marginLeft':'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperStatus" label="Name" variant="standard"/><br></br> */}

           <Button onClick={postData} 
                sx={{'&:hover':{backgroundColor:' darkcyan'},padding:'1%',marginLeft:'65px','marginTop':'4%','width':'260px'}} 
                type="submit" 
                variant="contained">
                Submit
                </Button>&nbsp;
         
                   </form>
                   </>)};

 export default AddUsers;