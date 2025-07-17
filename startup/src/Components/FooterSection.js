import './FooterSection.css'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.png'
import pinterest from '../images/pinterest.png'
import tiktok from '../images/tiktok.png'
import whatsapp from '../images/whatsapp.svg'
import youtube from '../images/youtube.png'

const FooterSection = () => {
    return (
<div className="footersection">
            <section className="socialmediaicons">
                <img src={facebook} className="facebook-icon" alt="Facebook-Icon" />
                <img src={instagram} className="instagram-icon" alt="Instagram-Icon" />
                <img src={twitter} className="twitter-icon" alt="Twitter-Icon" />
                <img src={pinterest} className="pinterest-icon" alt="Pinterest-Icon" />
                <img src={tiktok} className="tiktok-icon" alt="TikTok-Icon" />
                <img src={whatsapp} className="whatsapp-icon" alt="Whatsapp-Icon" />
                <img src={youtube} className="youtube-icon" alt="YouTube-Icon" />
            </section>
            <p className='copyright'>© Start, 2022. All rights reserved.</p>
        </div>
    );
}

export default FooterSection;