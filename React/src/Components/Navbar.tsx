import { Link } from 'react-router-dom';
import '../Scss/navbar.scss';
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import IconButton from '@mui/material/IconButton';
import { useRef, useState } from 'react';

const Navbar = () => {

    const dropdownContent = useRef<HTMLDivElement>(null);
    const dropdownButton = useRef<HTMLDivElement>(null);

    const [DropdownActive, setDropdownActive] = useState(false);

    const getHeight = (el : any) => el.scrollHeight

    function scrollToElement(id : string) {
        const elem : any = document.getElementById(id);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const handleMenuDropdown = async () => {
        const elem = dropdownContent.current;
        if(elem !== null) 
        {
            dropdownButton.current?.classList.toggle("active");

            if (elem?.style?.height === "0px"|| elem?.style?.height === "") {
                setDropdownActive(true);
                elem.style.height = `${getHeight(elem) + 20}px`;
                return;
            } else {
                setDropdownActive(false);
                elem.style.height = `0px`;
            }
        }
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
                <div ref={dropdownButton} className='hamburger-menu'>
                    <IconButton size='large' onClick={handleMenuDropdown} aria-label="hamburger-menu">
                        {DropdownActive ? <MdClose className='spin-in' /> : <BiMenu className='spin-in-reverse' />}
                    </IconButton>
                </div>
            </div>
            <div ref={dropdownContent} className='dropdown-content'>
                <li><button onClick={() => scrollToElement("home")}>Home</button></li>
                <li><button onClick={() => scrollToElement("omoss")}>Om Oss</button></li>
                <li><button onClick={() => scrollToElement("vaartteam")}>Vårt Team</button></li>
                <li><button onClick={() => scrollToElement("footer")}>Kontakt</button></li>
            </div>
        </nav>
    );
}

export default Navbar;