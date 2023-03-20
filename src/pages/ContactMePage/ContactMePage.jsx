
import './ContactMePage.scss';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';

export default function ContactMePage(){
    return(
        <section className="contactMePageSection">
            <div className='linksContainer'>
            <Link to='/'>Home<span className='arrow'>{'>'}</span></Link><span>Contact</span>
            </div>
            <Contact />
        </section>
    )
}