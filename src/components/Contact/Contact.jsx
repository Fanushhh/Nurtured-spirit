import Form from "../Form/Form"
import './Contact.scss';

export default function Contact(){
    return(
        <section className="contactSection">
            <div className="contactDescription">
                <h2>Contact Us</h2>
                <p>Send us your enquiry below and we will get back to you within 24 hours</p>
            </div>
            <Form />
        </section>
    )
}