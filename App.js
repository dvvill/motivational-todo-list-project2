import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Lists from './Components/Lists';
import Today from './Components/Today';
import Week from './Components/Week';


const App = () => {
  return (  
    <div className="App">     
      <Router>
      
          <Navbar />
         
          <Route path='/Lists' component={Lists}/>
          <Route path='/Today' component={Today} />
          <Route path='/Week' component={Week} />
        
      </Router>
    </div>
  );
}


export default App;
