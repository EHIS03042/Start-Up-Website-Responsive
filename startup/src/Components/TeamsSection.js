import './TeamsSection.css'
import peglegge from '../images/peglegge.png'
import richardguerra from '../images/richardguerra.png'
import alexandrastolz from '../images/alexandrastolz.png'
import janetbray from '../images/janetbray.png'
import learnmorebtndark from '../images/learnmorebtndark.png'


const TeamsSection = () => {
    return ( 
        <section className="teams-section">
        <h2 className="team">TEAM</h2>
        <h3 className="talent">Our Talents</h3>
        <p className="ametnormal">
            Lorem ipsum, dolor sit amet
            <br/>consectetur
            <br/>adipisicing elit.
        </p>
        
        <ul className='designations'>
            <li className='card1'>
                <img src={peglegge} className="peg" alt="Peg"/>
            </li>
            <li>
                <img src={richardguerra} className="richard" alt="Richard"/>
            </li>
            <li>
                <img src={alexandrastolz} className="alexandra" alt="Alexandra"/>
            </li>
            <li>
                <img src={janetbray} className="janet" alt="Janet"/>
            </li>
        </ul>
        <img src={learnmorebtndark} className="learn-btn3" alt="Learn-Btn3"/>
    </section>
    );
}

export default TeamsSection ;