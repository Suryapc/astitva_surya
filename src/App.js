import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Dropdowns from './pages/Dropdowns';


import LandingPage from './pages/LandingPage';
import ChemistSignup from './pages/ChemistSignup';
import LoginPage from './pages/LoginPage';
import AboutPage from './AboutPage';
import ChemistHomePage from './pages/chemist/ChemistHomePage';
import OperatorHomePage from './pages/operator/OperatorHomePage';

import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminChemistPage from './pages/Admin/AdminChemistPage';
import AdminOperatorPage from './pages/Admin/AdminOperatorPage';
import AddOperator from './pages/Admin/AddOperator';
import ViewOperator from './pages/Admin/ViewOperator';
import AddUsers from './pages/Admin/AddUsers';

      
  function App() {
     return (
       <>    
       <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<LandingPage/>}/>   
            <Route exact path= "signup" element={<ChemistSignup/>}/>
            <Route exact path= "login" element={<LoginPage/>}/>  
            <Route exact path="about" element={<AboutPage/>}/>
            <Route path="chemisthome" element={<ChemistHomePage />}/>  
            <Route path="operhome" element={<OperatorHomePage />}/> 
            <Route path="adminhome" element={<AdminHomePage/>}/>
            <Route path="adminhomechemistpg" element={<AdminChemistPage/>}/> 

            <Route path="adminhomeoperatorpg" element={<AdminOperatorPage/>}> 
               <Route path="addoperator" element={<AddOperator/>} />
               <Route path="viewoperator" element={<ViewOperator/>} /> 
               <Route path="addUsers" element={<AddUsers/>} /> 
            </Route>
         </Routes>
      </BrowserRouter>    
   </>
   );
   }
export default App;








