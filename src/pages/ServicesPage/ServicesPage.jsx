import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import './ServicesPage.scss';
   



export default function ServicesPage(){
    return(
        <section className="servicesPageSection">
            <div className="linksContainer">
                <Link to='/Nurtured-spirit-project/'>Home</Link><span className="arrow">{'>'}</span><span>Services</span>
            </div>
            <h1>Services we Offer</h1>
            <ImageSlider />
        </section>
    )
}