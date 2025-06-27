import './PortfolioGraphicsSection.css'
import landingpagedesign from '../images/landingpagedesign.png'
import webdesignpage from '../images/webdesignpage.png'
import rocketbusinesspage from '../images/rocketbusinesspage.svg'
import shoppingpage from '../images/shoppingpage.svg'
import geometricshapespage from '../images/geometricshapespage.svg'
import trickortreatpage from '../images/trickortreatpage.svg'
import halloweenpage from '../images/halloweenpage.svg'
import virtualrealitypage from '../images/virtualrealitypage.png'
import learnmorebtndark from '../images/learnmorebtndark.png'

const PortfolioGraphicsSection = () => {
    return ( 
        <section>
        <div>
            <div className="portfoliographics">
                <img src={landingpagedesign} className="landingpage" alt="LandingPage" />
                <img src={webdesignpage} className="webdesign" alt="WebDesign" />
                <img src={rocketbusinesspage} className="rocketbusiness" alt="RocketBusiness" />
                <img src={shoppingpage} className="shopping" alt="Shopping" />
                <img src={geometricshapespage} className="geometricshapes" alt="GeometricShapes" />
                <img src={trickortreatpage} className="trickortreat" alt="TrickorTreat" /> 
                <img src={halloweenpage} className="halloween" alt="Halloween" />
                <img src={virtualrealitypage} className="virtualreality" alt="VirtualReality" />              
            </div>
            <img src={learnmorebtndark} className="learnbtn3" alt="LearnBtn3"/>
        </div>
        </section>
        );
    }
    
export default PortfolioGraphicsSection ;