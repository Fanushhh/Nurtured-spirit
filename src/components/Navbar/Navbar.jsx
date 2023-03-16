import { useState } from "react";
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
                        <a className="a" href='/Nurtured-spirit-project'>Home</a>
                        <a className="a" href='/services'>Services</a>
                        <a className="a" href='/contact'>Contact</a>
                        <a className="a" href='/blog'>Blog</a>
                    </ul>
                )}
            </nav>
        </header>
    )
}