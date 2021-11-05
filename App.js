import './App.css';	
import React, from 'react';

import {   Switch, Route, Link, Redirect, } from "react-router-dom";
import Lists from './Components/Lists';
import Today from './Components/Today';
import Week from './Components/Week';

export default App

function App() {
return (
<div className="App">
  {/* <header>
    <h1>Welcome</h1>
  </header> */}

<nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to='/Lists'>Lists</Link>
       
      <Link to ='/Today'>Today</Link>
        <Today />
      <Link to='/Week'>Week</Link>
        <Week />   
  </nav>

  <Route>
      <Switch>
	            <Route path='/Lists' exact render={() => <Redirect to="/Lists" />}  /> 
	            <Route  path='/Today' element={<Today />}/>  
	            <Route path='/Week' element={<Week />} />	               
	        </Switch>
    </Route>
</div>
  );
};


;
