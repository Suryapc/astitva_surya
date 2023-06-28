
 import './HeaderSection.css';
 import {useNavigate } from "react-router-dom";
 // ---Material UI-----
 import Typography from '@mui/material/Typography';
 import Box from '@mui/material/Box';
// ---Material UI-----



function LandingPage(){

   const navigate = useNavigate();
      return(
            <>
            <Box  className='title_design'>
            <Typography sx={{fontFamily:'cursive'}} variant="h2">ASTITVA</Typography>
            </Box>
            <a className="landingPgLink" onClick={()=>navigate("/about")}>About </a>
            <a className="landingPgLink" onClick={()=>navigate("/signup")}>SignUp</a>
            <a className="landingPgLink" onClick={()=>navigate("/login")}>LogIn</a>
           </>
             
           )
     }

export  default LandingPage;
