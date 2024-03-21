import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=''>

            <nav className='text-blue-700 flex gap-2 items-center justify-center'>
                <span className='text-black'>My website</span>
                <br />
                <Link to="/">Home</Link>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About us </NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav>
        </div>
    );
};

export default Header;