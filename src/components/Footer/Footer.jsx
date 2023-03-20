import { Link } from 'react-router-dom';
import './Footer.scss';


export default function Footer(){

    return(
        <footer>
            <div className='footerWrapper'>
                <div className='logoImgContainer'>
                    <img src='./images/logo-img.png' alt='logo img'/>
                </div>
                <div className="contactDetails">
                    <p>ebony@nurturedspirit.com.au</p>
                    <p>Canberra, ACT</p>
                </div>
                <div className="socialsContainer">
                    <Link to='https://www.facebook.com/nurturedspirit'><img src='./images/fb-icon.svg' alt='socials icon' /></Link>
                    <Link to='https://www.instagram.com/nurtured_spirit/?igshid=YmMyMTA2M2Y%3D'><img src='./images/insta-icon.svg' alt='socials icon' /></Link>
                </div>
            </div>
            <div className='copyright'>
                <p>© Copyright. Nurtured Spirit All rights are reserved.</p>
            </div>
        </footer>
    )
}