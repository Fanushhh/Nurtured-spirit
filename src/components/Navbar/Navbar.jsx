import { useEffect, useRef, useState } from "react";
import './Navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarRef = useRef(null);
    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    function handleDocumentClick(event) {
    
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
    }
    }
    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return(
        <header>
            <nav>
                <div>
                    <Link to='/'><img src='./images/logo-img.png' alt='logo img' /></Link>
                </div>
                <div></div>
                <MenuIcon ref={navbarRef} onClick={handleOpenMenu} fontSize="large" color="#FFFFFF"/>
                {isMenuOpen && (
                    <ul >
                        <Link className="link" to='/'>Home</Link>
                        <Link className="link" to='about'>About me</Link>
                        <Link className="link" to='services'>Services</Link>
                        <Link className="link" to='contact'>Contact</Link>
                        <Link className="link" to='blog'>Blog</Link>
                    </ul>
                )}
            </nav>
        </header>
    )
}