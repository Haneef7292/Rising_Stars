import React from 'react';

import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Mylogin from "./Login";
import Myregister from "./Register";



function App() {
  return (
    <>
      <Mylogin/>
      
    </>
    /*
   <HashRouter>

     <Routes>
        <Route exact path="/login"  element={<Mylogin/>} />
       <Route exact path="/register"  element={<Myregister/>}/>
     </Routes>
   </HashRouter>
     */
  )
}

export default App;
