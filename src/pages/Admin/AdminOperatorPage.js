import {NavLink, Outlet,useNavigate } from "react-router-dom";
import '../HeaderSection.css';
// import { BrowserRouter,Routes, Route,Redirect } from "react-router-dom";
// ---Material UI-----
import ViewOperator from './ViewOperator';


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// ---Material UI-----

 const AdminOperatorPage = () => {

   const navigate = useNavigate();
       return (
         <>
         <AppBar sx={{p:1,'backgroundColor':'steelblue'}} position="static">
           <Grid container>
           <Grid item xs={12} sm={12} md={6}>
           <Toolbar>
           <Typography variant="h2">Admin</Typography>
           </Toolbar>
           </Grid>
           <Grid item xs={12} sm={12} md={6}>
           <Button onClick={()=>navigate("/login")} 
               sx={{backgroundColor:'white',
               marginLeft:'70%',
               padding:'10px',
               'marginTop':'12%',
               '&:hover':{backgroundColor:'cornsilk'}}}>Log out
          </Button>
          </Grid>
          </Grid> 
          </AppBar>
       
      <Grid container> 
         <Grid item xs={12} sm={12} md={2} >
              
              <Box 
               sx={{'backgroundColor':'gainsboro',
               'width':'100%',
               'padding':'10%',
               'marginLeft':'5px',
               'marginTop':'10px',
               'fontSize':'20px',
               'color':'indigo',
               '&:hover':{backgroundColor:' lightsteelblue','color':'red'}
                  }} >
 



               <NavLink to="viewoperator" style={{ textDecoration: 'none'}}>View Operators</NavLink> 
               </Box>  
            
               
                <Box 
              sx={{'backgroundColor':' gainsboro ',
              'width':'100%',
              'padding':'10%',
              'marginLeft':'5px',
              'marginTop':'10px',
              'fontSize':'20px',
              'color':'white',
              '&:hover':{backgroundColor:'lightsteelblue','color':'red'}
                 }} >
                <NavLink to="addoperator" style={{ textDecoration: 'none'}}>Add Operators</NavLink>   
                
                </Box> 

                <Box 
                sx={{'backgroundColor':'gainsboro',
               'width':'100%',
               'padding':'10%',
               'marginLeft':'5px',
               'marginTop':'10px',
               'fontSize':'20px',
               'color':'indigo',
               '&:hover':{backgroundColor:'lightsteelblue','color':'red'}
                  }} >
               
                <NavLink to="addUsers" style={{ textDecoration: 'none'}}>Add Users</NavLink>   
                </Box>  
               
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
                <Box sx={{'marginLeft':'20%'}} >
                <Outlet /> 
                </Box>
         
         </Grid>
      </Grid>

  
      </>)};
export default AdminOperatorPage;