import { Link } from "react-router-dom"
import Contact from "../../../components/Contact/Contact"
import './Kinesiology.scss';

export default function Kinesiology(){
    return(
        <section className="kinesiologySection">
            <div className="linksContainer">
                <Link to='/Nurtured-spirit/'>Homepage <span className='arrow'>{'>'}</span></Link>
                <Link to="/Nurtured-spirit/services">Services <span className='arrow'>{'>'}</span></Link>
                <span>Kinesiology</span>
            </div>
            <h1>Kinesiology</h1>
            <div className='kinesiologyDescriptionContainer'>
                <div>
                    <img src='./images/Kinesiology-img.svg' alt='kinesiology image'/>
                </div>
                <div>
                    <p>Kinesiology is a hands-on healing technique with its roots in Chinese medicine.</p>
                    <p>Kinesiology uses the body’s muscles and meridian pathways to discover where issues lay in the body via the use of muscle monitoring/testing.</p>
                    <p>While Kinesiology does not diagnose disease, it can be effective in the release of physical, emotional, and mental discomfort and general stressors or issues being experienced in day-to-day life and the effects they are having on the body and the person as a whole.</p>
                    <p>In our bodies we have organs which store different emotions and have a connection to different muscles in the body (based on Chinese medicine). This is how muscle monitoring comes into play. Muscles in the body are ‘tested’ for imbalances, and if there is an imbalance in a particular muscle, we do some investigation as to why and apply some balancing techniques to release the imbalance or blockage. </p>
                </div>
            </div>
            <div className='sessionDescription'>
                <h2>What to Expect in a Session</h2>
                <p>The way Kinesiology works is the practitioner and client will discuss the reason for the session and sometimes set an intention for the healing.</p>
                <p>Each person is different as are their needs and Ebony works with a gentle approach making sure to connect with what you need knowing and respecting that everyone is different and unique.</p>
                <p>Ebony provides a safe and nurturing space for her clients to ensure that the healing process is carried out without judgment and for the highest good of the client.</p>
                <p>During a Kinesiology session with Ebony, you can expect to:</p>
                <ul>
                    <li>Discuss the reason you have decided to seek support.</li>
                    <li>Receive a full body balance to determine where imbalances in the body are that are related to the session’s intention (sometimes a general balance is appropriate also).</li>
                    <li>A follow up plan to ensure the client is getting the most out of treatment and the support they need going forward.</li>
                </ul>
            </div>
            <Contact />
        </section>
    )
}