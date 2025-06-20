import './WelcomeSection.css'
import teamThreePeople from '../images/teamThreePeople.png'
import exploreBtnWhite from '../images/exploreBtnWhite.png'

const WelcomeSection = () => {
    return ( 
        <div>
        <section className="intro-section">
            <img src={teamThreePeople} className="team3" alt="Team3"/>
            <h1 className='welcome'>WELCOME</h1>
            <p className='lorembold'>Lorem ipsum dolor sit amet consectetur</p>
            <p className='loremlight'>
                Lorem ipsum, dolor sit amet consectetur
                <br/>adipisicing elit. Suscipit nemo hic quos, ab,
                <br/> dolor aperiam nobis cum est eos error ipsum, 
                <br/>voluptate culpa nesciunt delectus iste?
            </p>
            <img src={exploreBtnWhite} className="explore-btn" alt="Explore-Btn"/>
        </section>
        </div>
    );
}

export default WelcomeSection;
