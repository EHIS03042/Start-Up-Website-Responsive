import './Contact.css'
import ContactIntro from '../Components/ContactIntro';
import GoogleMap from '../Components/GoogleMap';
import Form4Details from '../Components/Form4Details';



const Contact = () => {
    return ( 
        <div>
            <ContactIntro/>
            <GoogleMap/>
            <Form4Details/>
        </div>
    );
}

export default Contact;