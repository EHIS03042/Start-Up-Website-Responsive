import './PartnersSection.css'
import googlelogo from '../images/googlelogo.svg'
import microsoftlogo from '../images/microsoftlogo.svg'
import airbnblogo from '../images/airbnblogo.svg'
import facebooklogo from '../images/facebooklogo.svg'
import spotifylogo from '../images/spotifylogo.svg'
import learnmorebtndark from '../images/learnmorebtndark.png'

const PartnersSection = () => {
    return ( 
        <section className="partners-section">
                <h1>PARTNERS</h1>
                <p>Lorem Ipsum Dolor</p>
                <p>
                    Lorem ipsum, dolor sit amet
                    <br/>consectetur
                    <br/>adipisicing elit.
                </p>
                <ul className='partnerlogo'>
                    <li>
                        <img src={googlelogo} className="google" alt="Google"/>
                    </li>
                    <li>
                        <img src={microsoftlogo} className="microsoft" alt="Microsoft"/>
                    </li>
                    <li>
                        <img src={airbnblogo} className="airbnb" alt="AirBnb"/>
                    </li>
                    <li>
                        <img src={facebooklogo} className="facebook" alt="Facebook"/>
                    </li>
                    <li>
                        <img src={spotifylogo} className="spotify" alt="Spotify"/>
                    </li>
                </ul>
                    <img src={learnmorebtndark} className="learn-btn1" alt="Learn-Btn1"/>
            </section>
        
        );
    }
    
export default PartnersSection ;