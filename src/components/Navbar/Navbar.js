import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='navbar'>
     <Link style={{textDecoration: 'none'}} to="/"><h2 className="logo" style={{color:'white', paddingLeft: '10px', fontSize: '25px'}}
><i className="fa-fa-grav"></i> DAOfind.com</h2></Link>
      <SearchBar />
      <button className='connect-wallet'>Connect Wallet</button>
        </nav>
    )
}

export default Navbar;