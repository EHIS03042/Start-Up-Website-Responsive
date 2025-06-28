import './Contact.css'
import ContactIntro from '../Components/ContactIntro';

import ContactSection from '../Components/ContactSection';



const Contact = () => {
    return ( 
        <div>
            <ContactIntro/>
            {/* <GoogleMap/>
            <Form4Details/> */}
            <ContactSection/>
        </div>
    );
}

export default Contact;