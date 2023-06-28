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

 const AddOperator = () => {

          const handleSubmit = (event) => 
          {
             event.preventDefault();
            alert("Operator Added Successfully");
          }

        const [operator_name,setoperatorName] = useState("") 
        const [operator_email,setoperatorEmail] = useState("")
        const [operator_mobile,setoperatorMobile] = useState("")
        const [operator_status,setoperatorStatus] = useState("")
        const [dates,setoperatorAdded] = useState("")

        const operNameHandler = (e)=>{setoperatorName(e.target.value);}
        const operEmailHandler = (e)=>{ setoperatorEmail(e.target.value);}
        const operMobileHandler = (e)=>{ setoperatorMobile(e.target.value);}
        const operStatusHandler = (e)=>{ setoperatorStatus(e.target.value);}
        const operDateHandler = (e)=>{ setoperatorAdded(e.target.value);}
        
       const navigate = useNavigate();

        const postData = () => {
                                axios.post(`http://localhost:4000/operator_records`, 
                                {
                                 operator_name,
                                 operator_email,
                                 operator_mobile,
                                 operator_status,
                                 dates,
                                }).then(() => {
                                navigate('/addoperator')
                                })}

           return (
                      <>
            <form  sx={{width:'80%'}} onSubmit={handleSubmit}>

             <TextField
              onChange={(e)=>{operNameHandler(e)}} 
              value={operator_name}
              sx={{marginLeft:'65px',width:'40%','marginTop':'4%'}} 
              required  type="text" id="txtOperName" label="Operator Name" variant="standard"/><br></br>

              <TextField 
              onChange={(e)=>{operEmailHandler(e)}}
              value={operator_email}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="email" id="txtOperEmail" label="Email" variant="standard"/><br></br>
             
             <TextField 
              onChange={(e)=>{operMobileHandler(e)}}
              value={operator_mobile}
              sx={{marginLeft:'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperMobile" label="Mobile Number" variant="standard"/><br></br>
  
              <TextField 
              onChange={(e)=>{operStatusHandler(e)}}
              value={operator_status}
              sx={{'marginLeft':'65px',width:'40%','marginTop':'2%'}} 
              required type="text" id="txtOperStatus" label="Status" variant="standard"/><br></br>

               {/* <TextField 
               value={dates}
               sx={{marginLeft:'7%',fontSize:'100%','marginTop':'2%'}}>
                  Date:</TextField> 
               <LocalizationProvider 
                onChange={(e)=>{operDateHandler(e)}}
                dateAdapter={AdapterDayjs}>
                 <DatePicker sx={{marginLeft:'7%',marginTop:'1%',width:'40%'}}/>
                 </LocalizationProvider> */}
                 
              <br></br> 
                 <Typography 
                  sx={{marginLeft:'7%',fontSize:'100%','marginTop':'1%','color':'grey'}}>
                    Date
                  </Typography> 
                  <TextField type="date" 
                    sx={{marginLeft:'7%',fontSize:'100%','marginTop':'1%','width':'350px'}} 
                    onChange={(e)=>{operDateHandler(e)}} value={dates}>
                  </TextField> 
                <br></br> 
              
                <Button onClick={postData} 
                sx={{'&:hover':{backgroundColor:' darkcyan'},padding:'1%',marginLeft:'65px','marginTop':'4%','width':'260px'}} 
                type="submit" 
                variant="contained">
                Submit
                </Button>&nbsp;
         
                   </form>
                   </>)};
 export default AddOperator;