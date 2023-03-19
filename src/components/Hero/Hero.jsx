import { Link } from 'react-router-dom';
import './Hero.scss';


export default function Hero(){
    return(
        <section className='heroSection'>
            <h1 className="heroTitle">What we offer</h1>
            <div className='heroImgContainer'>
                <img src='./images/hero-img.png' alt='women hovering hands above man'/>
            </div>
            <div className="heroDescription">
                <div>
                    <p>Nurtured Spirit has been created to support both women and men uncover more of who they truly are using Reiki and Kinesiology as tools to heal the body and discover the root cause of issues and imbalances being experienced in daily life.</p>
                    <p>Have you ever had that niggling back pain or perhaps you are just feeling as though you are holding stress and tension in your body and can’t seem to shake it? That's your body trying to tell you something.</p>
                </div>
                <p>More often than not we get caught up in the throes of daily life rarely taking the time to listen to ourselves and when we ignore it, pain and discomfort persists, issues arise, and we are forced to stop and reassess.</p>
                <p>If you are experiencing pain and discomfort in your body and in certain areas of your life and would like some support with this, reach out. We are here to help.</p>
                <p>To find out more about our services, <Link className='aboutMeLink' to='/Nurtured-spirit/about'>click here</Link></p>
                
            </div>
        </section>
    )
}