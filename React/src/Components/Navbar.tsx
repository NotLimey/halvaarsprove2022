import { Link } from 'react-router-dom';
import '../Scss/navbar.scss';

const Navbar = () => {

    function scrollToElement(id : string) {
        const elem : any = document.getElementById(id);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <h2><Link to="/">Innlandet IT</Link></h2>
                </div>
                <div className="navbar-items">
                    <li><button onClick={() => scrollToElement("home")}>Home</button></li>
                    <li><button onClick={() => scrollToElement("omoss")}>Om Oss</button></li>
                    <li><button onClick={() => scrollToElement("vaartteam")}>Vårt Team</button></li>
                    <li><button onClick={() => scrollToElement("footer")}>Kontakt</button></li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;