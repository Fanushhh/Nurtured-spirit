
import './Form.scss';
import React, { useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
const ReactPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;


export default function Form(){
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a4mjyf9', 'template_glu23fh', form.current, 'ZUFI60sRcmDZk0ocU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      alert("Email successfully sent");
      e.target.reset();
    }




    return(
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Full Name
                <input placeholder='Your full name' type='text' name='user_name' />
                </label>
            </div>
            <div>
                <label>
                    Email Address
                    <input placeholder='Your email address' type='email' name='user_email' />
                </label>
            </div>
            <div>
                <label className='phoneInput'>
                    Phone Number
                    <ReactPhoneInput  
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false
                    }}/>
                </label>
            </div>
            <div>
                <label>
                    Message
                    <textarea rows={5} placeholder="Enter your message here..." type='text' name='message' />
                </label>
            </div>
            <button type='submit' value='Send'>Send</button>
                
            
        </form>
    )
}