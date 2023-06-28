import {useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import '../HeaderSection.css';

// ---Material UI-----



import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Hidden from '@mui/material/Hidden';

// ---Material UI-----



const ViewOperator = () => {
  const [data, setData] = useState([]);

  const getData2=()=>
     { 
      let record_id = document.getElementById('inpOperatorId').value;
       axios.get(`http://localhost:4000/operator_records/${record_id}`)
        .then((getData) => {
          setData(getData.data);
                  })
         document.getElementById("table_head").style.visibility= "visible";
         console.log(data)
         console.log(record_id)
      }

      const navigate = useNavigate();
          return (
              <>
            <Grid container>
              
              <Grid item xs={12} sm={12} md={9}>

              <TextField 
           sx={{'marginLeft':'4%',
           'marginTop':'4%',
           'width':'45%'}} 
           id="inpOperatorId"
           type="text" 
           placeholder='Enter Operator Id here..' 
           variant="outlined"/>

            <Hidden >
            <Button 
           sx={{'&:hover':{backgroundColor:'tan'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'2%',
           'width':'18%'}}
           variant="contained"
           onClick={getData2}>Submit
            </Button>
            </Hidden>

         <TableContainer sx={{'width':'100%',
             'alignItems':'left',
               'margin':'1%' }}>

          <Table  id="table_head" aria-label="customized table">

          <TableHead >
          
              <TableRow>
                  <TableCell align="right">Id</TableCell>
                 <TableCell align="right">Operator Name</TableCell>
                 <TableCell align="right">Operator Email</TableCell>
                 <TableCell align="right">Operator Mobile</TableCell>
                 <TableCell align="right">Operator Status</TableCell>
                 <TableCell align="right"> Added on </TableCell>
                 
             </TableRow>
            
          </TableHead>

          <TableBody>
          {data.map((datas) => (
                  <TableRow >
      
                     <TableCell align="right" key={datas.id}>{datas.id}</TableCell>  
                     <TableCell align="right"key={datas.id} >{datas.operator_name}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.operator_email}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.operator_mobile}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.operator_status}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.dates}</TableCell>
                     </TableRow>
                   ))}
           </TableBody>
        </Table>
        </TableContainer> 

       </Grid>
          </Grid>
                </>)}
            
export default ViewOperator;





