import React, {useState} from 'react'	
	import '../App.css';
	import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
	import Lists from './Lists';
	import Today from './Today';
	import Week from './Week';
	//import { NavLink } from 'react-router-dom';
	
	
	const Navbar = () => {
	    // const [navbar, setNavbar] = useState ();
	
        return (
	    <Router>
	        <div className='navbar'>
	            <nav>
	                <ul className='navlinks'>
	                    <li className='lists'><Link to='/Lists'>Lists</Link></li>
	                    <li className='today'><Link to ='/Today'>Today</Link></li>
	                    <li className='week'><Link tp='/Week'>Week</Link></li>
	                </ul>
	            </nav>

	        <Switch>
	            <Route path='/Lists'> 
	                <Lists />
	            </Route>
	            <Route path='/Today'>
	                <Today />
	            </Route>
	            <Route path='/Week'>
	                <Week />
	            </Route>
	        </Switch>
	
	        </div>
	    </Router>
	    );
	}
	
	
	export default Navbar;