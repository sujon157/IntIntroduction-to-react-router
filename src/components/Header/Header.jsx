import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            <nav className='text-blue-700'>
                <span className='text-black'>My website</span>
                <br />
                <Link to="/">Home</Link>
                <Link to="/users">Our Users</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;