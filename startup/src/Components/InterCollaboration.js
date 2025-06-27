import './InterCollaboration.css'
import interthree from '../images/interthree.svg'
import learnmorebtndark from '../images/learnmorebtndark.png'

const InterCollaboration = () => {
    return ( 
        <div className="intercollaboration">
            <div className='colla3'>
                <img src={interthree} className="inter3" alt="Inter3" />
            </div>
        <div className='textinter'>
            <h2 className='dolorbold'>Lorem ipsum dolor sit amet consectetur </h2>
            <p className='dolorlight'>
                Lorem ipsum, dolor sit amet consectetur
                <br/>adipisicing elit. Suscipit nemo hic quos, ab,
                <br/> dolor aperiam nobis cum est eos error 
                <br/>ipsum, voluptate culpa nesciunt delectus 
                <br/>iste?
            </p>
        <div className='collabtn'>
            <img src={learnmorebtndark} className="learn-btn2b" alt="Learn-Btn2"/>
        </div>
        </div>
        </div>
        );
}

export default InterCollaboration ;