 import './pages/HeaderSection.css';
import AbtImg from './Images/About2.jpg';


// ---Material UI-----
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThumbUpOffAlt } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
// ---Material UI-----


const AboutPage = () => {
       return ( 
          <>
            <Grid className="title_design" container>
                <Grid  xs={12} sm={12} md={6} >
                <Typography sx={{fontFamily:'cursive'}} variant="h2"> ASTITVA </Typography>
                </Grid>
                <Grid className="abtLink" xs={12} sm={12} md={6} >
                
                </Grid>
            </Grid>
            
            <Grid sx={{backgroundColor:'whitesmoke'}} container>
                 <Grid xs={12} sm={12} md={4}>
                    <Box
                      component="img"
                       sx={{
                       height: 600,
                       width: 500,
                        }}
                     alt="Image_abt_astitva"
                     // src={AbtImg}
                     />
                  </Grid>
                  <Grid sx={{marginTop:'20px',fontFamily:'Georgia',fontSize:'20px',color:'dimgray'}} xs={12} sm={12} md={8}>
                     We at Astitva Supply a wide range of critical care pharmaceiuticals to market across <br></br>India. 
                     We are located at Malad West, Mumbai, Maharastra and have been <br></br> functioning since 1958.
                     <br></br><br></br>Our commitment to provide world class quality, competitive pricing & constant<br></br> urge to explore new
                     theraupatic segments and expand our product portfolio have gained us 
                     a reputation as a global manufacturer of world class quality medicines &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and pharmaceiutical products.
                  </Grid>
           </Grid>
              
          </>)
              }
export default AboutPage;