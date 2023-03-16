import './Form.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Form(){
    return(
        <form>
            <div>
                <label>Full Name
                <input placeholder='Your full name' type='text' name='name' />
                </label>
            </div>
            <div>
                <label>
                    Email Address
                    <input placeholder='Your email address' type='email' name='email' />
                </label>
            </div>
            <div>
                <label className='phoneInput'>
                    Phone Number
                    <PhoneInput type='phone' name='phone' />
                </label>
            </div>
            <div>
                <label>
                    Message
                    <textarea rows={5} placeholder="Enter your message here..." type='text' name='message' />
                </label>
            </div>
            <button>Send</button>
                
            
        </form>
    )
}