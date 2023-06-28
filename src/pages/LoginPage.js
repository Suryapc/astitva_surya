
import './HeaderSection.css';
 import axios from "axios";
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";

// ---Material UI-----
import Link from '@mui/material/Link';
import { TextField, FormControl, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThumbUpOffAlt } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

// ---Material UI-----

          const LoginPage = () => {

            const [userEmail, setEmail] = useState("");
            const [password, setpassword] = useState("");
            const [data, setData] = useState([]);

             axios.get(`http://localhost:4000/login_verify`)
               .then((getData) => {
                setData(getData.data);
                                  })

            const account_allEmails = data.map((records)=> records.user_email);

            const navigate = useNavigate();

            const handleSubmit = (e) => {
                  e.preventDefault()

            const account_allEmails = data.map((records)=> records.user_email);
            const indexof_inpEmail = account_allEmails.indexOf(userEmail);
           if(indexof_inpEmail<0)
            {console.log("Invalid records")}
        
           else {
              const tablePwd = (data[indexof_inpEmail].pwd)
              const tableUserType = (data[indexof_inpEmail].user_type)
            
             if (account_allEmails.includes(userEmail) && (tablePwd===password))
                {
                  if(tableUserType==="Chemist")
                    {
                      navigate("/chemisthome");
                      console.log("He is a chemist")
                      }
                  else if(tableUserType==="Operator")
                    {
                      navigate("/operhome");
                      console.log("He is a Operator")
                    }
                  else{
                      console.log("He is an Admin")
                      navigate("/adminhome");
                      }
                }

             else{
                console.log("fail")  
                alert("Invalid credentials")     
                }}
                  };

     return (
        <>
        
        <Box className="loginPageTitle">
           <Typography sx={{fontFamily:'cursive'}} variant="h2">ASTITVA</Typography>
        </Box>
        <Grid container>
            <Grid xs={12} sm={12} md={6}>
              <div>
                <Typography 
                sx={{
                fontFamily:'cursive',
                color:' lightslategrey',
                textDecoration: 'underline',
                marginLeft:'20%',
                marginTop:'5%',
                }} 
                variant="h4">
                Login Form
               </Typography>

              <form onSubmit={handleSubmit}>
     
              <TextField 
              name="txtEmail"
              required
              value={userEmail}
              variant="standard"  
              label="Email"
              type="text"
              sx={{marginLeft:'15%',
              marginTop:'4%',
              width:'22%'}} 
              onChange={(e) => setEmail(e.target.value)}/>
             <br></br> 

             <TextField 
             name="txtPassword"
             required
             value={password}
             variant="standard"  
             label="Password"
            type="password"
            sx={{marginLeft:'15%',
             marginTop:'5%',
             width:'22%'}} 
            onChange={(e) => setpassword(e.target.value)}/> 
            <br></br>

           <Button  sx={{marginLeft:'15%',
           marginTop:'5%',
           width:'12%',
           '&:hover':{backgroundColor:'tan'}}}  type="submit" variant="contained">Submit</Button>
      </form>
       <div style={{marginLeft:'13%',fontSize:'27px',marginTop:'30px'}}>
      <Link href="#" underline="always">Forgot Password?</Link> &nbsp;&nbsp;
      <Link href="signup" underline="always">Create an Account?</Link>
      </div>
       </div>
            </Grid>
            <Grid>
              
            </Grid>
        </Grid>
        
  </>
  )
};


export default LoginPage;