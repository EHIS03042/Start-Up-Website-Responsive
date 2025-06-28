import './PaymentPlanSection.css'
import basicplancard from '../images/basicplancard.png'
import plusplancard from  '../images/plusplancard.png'
import proplancard from '../images/proplancard.png'
import learnmorebtndark from '../images/learnmorebtndark.svg'


const PaymentPlanSection = () => {
    return ( 
        <section className="paymentplan">
            <div className="servicecharge">
                <h1>PLAN</h1>
                <h2>Our Services</h2>
                <p>Lorem ipsum, dolor sit amet
                <br />consectetur
                <br />adipisicing elit.
                </p>
            </div>
            <ul className='payplanlist'>
                <li>
                    <div className="basiccard">
                    <img src={basicplancard} className="basicplan" alt="BasicPlan"/>
                    <img src={learnmorebtndark} className="btndark" alt="BtnDark"/>
                    </div>
                </li>
                <li>
                    <div className="pluscard">
                    <img src={plusplancard} className="basicplan" alt="BasicPlan"/>
                    <img src={learnmorebtndark} className="btndark" alt="BtnDark"/>
                    </div>
                </li>
                <li>
                    <div className="procard">
                    <img src={proplancard} className="basicplan" alt="BasicPlan"/>
                    <img src={learnmorebtndark} className="btndark" alt="BtnDark"/>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default PaymentPlanSection ;