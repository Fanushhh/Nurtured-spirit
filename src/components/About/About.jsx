import './About.scss';
import { Link } from 'react-router-dom';

export default function About(){
    return(
        <section className='aboutSection'>
            <h2 className='aboutMeTitle'>About Ebony</h2>
            <div className="aboutSectionWrapper">
                <div className='profileImgContainer'>
                    <img src='./images/profile-img.png' alt='profile image' />
                </div>
                <div className='aboutDetails'>
                    <p>Hi,</p>
                    <p>I’m Ebony, creator of Nurtured Spirit. I’ve been passionate about growth, healing and support for both myself and others for a long time.</p>
                    <p>I started my journey in 2009, attending my first course and shortly after attending one on one personal development/healing sessions.</p>
                    <div className='extendedSection'>
                        <p>I have always had a passion and a natural desire to want to help others so I learnt Kinesiology and Reiki as a means to do so.</p>
                        <p>I soon learnt that my life and the way things were going for me at the time could change as I became more aware and understanding of my own internal patterns, choices and responses/reactions in life.</p>
                    </div>
                    <Link to='/Nurtured-spirit-project/about'>See more <img src='./images/arrow-icon.svg' alt='arrow icon' /></Link>
                </div>
            </div>
        </section>
    )
}