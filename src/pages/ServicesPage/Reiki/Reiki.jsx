import { Link } from 'react-router-dom';
import './Reiki.scss';
import Contact from '../../../components/Contact/Contact';


export default function Reiki(){
    return(
        <section className="reikiSection">
            <div class="linksContainer">
                <Link to='/'>Homepage <span className='arrow'>{'>'}</span></Link>
                <Link to="/services">Services <span className='arrow'>{'>'}</span></Link>
                <span>Reiki</span>
            </div>
            <h1>Reiki</h1>
            <div className='reikiDescriptionContainer'>
                <div>
                    <img src='./images/reiki-pic.svg' alt='reiki image'/>
                </div>
                <div>
                    <p>Reiki is a hands-on type of energy healing that is used to release and clear energy in the body. Energy can become stuck in the body where there has been a physical injury or emotional and mental pain. Reiki helps to release the energy and supports the person to heal using their own innate healing ability. Reiki works with the chakra system as well to release and clear energy but can be used on any area of the body where discomfort is present.</p>
                </div>
            </div>
            <div className='sessionDescription'>
                <h2>What to Expect in a Session</h2>
                <p>During a reiki session Ebony will work to understand the reason you have come for the reiki healing, discussing what’s going on for you, how you are feeling and where you are at. It may be for relaxation which is perfectly fine too. All sessions are one hour.</p>
            </div>
            <Contact />
        </section>
    )
}