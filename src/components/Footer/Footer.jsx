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
                    <img src='./images/fb-icon.svg' alt='socials icon' />
                    <img src='./images/insta-icon.svg' alt='socials icon' />
                    <img src='./images/linkedin-icon.svg' alt='socials icon' />
                </div>
            </div>
            <div className='copyright'>
                <p>© Copyright. Nurtured Spirit All rights are reserved.</p>
            </div>
        </footer>
    )
}