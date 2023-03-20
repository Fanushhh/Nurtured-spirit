import './AboutMe.scss';
import { Link } from 'react-router-dom';

export default function AboutMePage(){
    return(
        <section className="aboutMePageSection">
            <div className='linksContainer'>
            <Link to='/'>Home<span className='arrow'>{'>'}</span></Link><span>About me</span>
            </div>
            <h1>Ebony Gafa</h1>
            <div className='aboutMeSectionWrapper'>
                <div className="descriptionContainer">
                    <p>I’m Ebony, creator of Nurtured Spirit. I’ve been passionate about growth, healing and support for both myself and others for a long time.</p>
                    <p>I started my journey in 2009, attending my first course and shortly after attending one on one personal development/healing sessions.</p>
                    <p>I have always had a passion and a natural desire to want to help others so I learnt Kinesiology and Reiki as a means to do so.</p>
                    <p>I soon learnt that my life and the way things were going for me at the time could change as I became more aware and understanding of my own internal patterns, choices and responses/reactions in life.</p>
                    <p>I soon thereafter started to learn about different healing modalities and settled happily with kinesiology. I am also a qualified Reiki Master. I use both of these modalities to support you to not just relax and unwind but to transform your inner world so you can connect to more of your true self and discover more of who you TRULY are.</p>
                    <p>I believe we are all here to find out who we really are and our experiences in life are the pathway to getting there.</p>
                    <p>I soon learnt that my life and the way things were going for me at the time could change as I became more aware and understanding of my own internal patterns, choices and responses/reactions in life.</p>
                    <p>No matter where you are at in your journey, what is going on for you, we are all unique and I believe the path to self-healing while challenging at times can be approached with a sense of love and compassion and I provide this for my clients.</p>
                    <p>If you would like to know more or would like to book an appointment, reach out, Id love to help you.</p>
                </div>
                <div className='profileImgContainer'>
                    <img src='./images/profile-img-2.svg' alt='profile image' />
                </div>
                
            </div>
            <div className='testimonialsSection'>
                <h2>Testimonials</h2>
                <div className='testimonialsContainer'>
                    <div className='testimonial-item'>
                        <p className='name'>Jacob Jones</p>
                        <p className='review'>“Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim“</p>
                    </div>
                    <div className='testimonial-item'>
                        <p className='name'>Theresa Webb</p>
                        <p className='review'>“Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim“</p>
                    </div>
                    <div className='testimonial-item'>
                        <p className='name'>Robert Fox</p>
                        <p className='review'>“Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim“</p>
                    </div>
                </div>
                <div className='arrowNavigator'>
                    <img className='leftArrow' src='./images/left-arrow.svg' alt='arrow icon'/>
                    <p><span>1</span>/3</p>
                    <img className='rightArrow' src='./images/arrow-icon.svg' alt='arrow icon'/>
                </div>
            </div>
        </section>
    )
}