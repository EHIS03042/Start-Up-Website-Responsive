import './Connectivity.css'
import connectivitypicture from '../images/connectivitypicture.svg'
import learnmorebtndark from '../images/learnmorebtndark.png'


const Connectivity = () => {
    return ( 
        <section className='connectivitysection'>
            <div>
                <img src={connectivitypicture} className="connect" alt="Connect" />
            </div>
            <div className='sittext'>
                <h2 className='sitbold'>Lorem ipsum dolor sit amet consectetur </h2>
                <p className='sitlight'>
                    Lorem ipsum, dolor sit amet consectetur
                    <br/>adipisicing elit. Suscipit nemo hic quos, ab,
                    <br/> dolor aperiam nobis cum est eos error 
                    <br/>ipsum, voluptate culpa nesciunt delectus 
                    <br/>iste?
                </p>
                <div className='conbtn'>
            <img src={learnmorebtndark} className="learn-btn2a" alt="Learn-Btn2"/>
        </div>
            </div>
    </section>

    );
}

export default Connectivity;