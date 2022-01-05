import { Link } from 'react-router-dom';
import '../Scss/navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <h2><Link to="/">Innlandet IT</Link></h2>
                </div>
                <div className="navbar-items">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/om-oss">Om Oss</Link></li>
                    <li className="nav-login"><Link to="/auth/login">Login</Link></li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;