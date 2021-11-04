import '../App.css';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
            <div className='navbar'> 
                    <ul className='nav'>
                        <li><Link to="/Lists">Lists</Link></li>
                        <li><Link to ='/Today'>Today</Link></li>                     
                        <li><Link to='/Week'>Week</Link></li>
                    </ul>                                                
            </div>     
    );
}


export default Navbar;
