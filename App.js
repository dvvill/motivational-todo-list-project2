import './App.css';	
import React from 'react'
import {  Switch, Route, Link } from "react-router-dom"


function App() {
return (
<div className="App">
  <header>
    <h1>Welcome</h1>
  </header>

  <Route>
      <Switch>
	            <Route path='/Lists' element={<Lists />} /> 
	            <Route  path='/Today' element={<Today />}/>  
	            <Route path='/Week' element={<Week />} />	               
	        </Switch>
    </Route>
</div>
);
}

function Lists() {
  return (
      <>
      <div className="list">
          <h1>Lists Page</h1>
      </div> 
      <nav>
      <Link to='/Lists'>Lists</Link>
      </nav>
      </>
  );
};

function Today() {
  return (
      <>
      <div className="today">
          <h1>Today</h1>
      </div> 
      <nav>
      <Link to ='/Today'>Today</Link>
      </nav>
      </>
  );
};

function Week() {
  return (
      <>
      <div className="week">
          <h1>Week Page</h1>
      </div> 
      <nav>
      <Link to='/Week'>Week</Link>
      </nav>
      </>     
  );
};

export default App;
