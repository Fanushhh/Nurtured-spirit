import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return(
        <header>
            <nav>
                <div>
                    <img src='./images/logo-img.png' alt='logo img' />
                </div>
                <div></div>
                <MenuIcon onClick={handleOpenMenu} fontSize="large" color="#FFFFFF"/>
                {isMenuOpen && (
                    <ul>
                        <Link className="link" to='/'>Home</Link>
                        <Link className="link" to='/services'>Services</Link>
                        <Link className="link" to='/contact'>Contact</Link>
                        <Link className="link" to='/blog'>Blog</Link>
                    </ul>
                )}
            </nav>
        </header>
    )
}