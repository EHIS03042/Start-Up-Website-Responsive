import React from "react";
import './Home.css';
import navlogo from '../images/navlogo.svg'
import googlelogo from '../images/googlelogo.svg'
import teamThreePeople from '../images/teamThreePeople.png'
const Home = () => {
    return (
        <div className="home-container">
    <header className="home-header">
        <img src={navlogo} className="logo" alt="Logo"/>
        <button className="menu-button">☰</button>
        <img src={teamThreePeople} className="team3" alt="Team3"/>
    </header>

    <section className="intro-section">
        <h1>WELCOME</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>
            Lorem ipsum, dolor sit amet consectetur
            <br/>adipisicing elit. Suscipit nemo hic quos, ab,
            <br/> dolor aperiam nobis cum est eos error ipsum, 
            <br/>voluptate culpa nesciunt delectus iste?
        </p>
        <button className="btn-1"></button>
        <img src="images/explore-btn-white.png" className="explore-btn" alt="Explore-Btn"/>
    </section>

    <section className="partners-section">
        <h1>PARTNERS</h1>
        <p>Lorem Ipsum Dolor</p>
        <p>
            Lorem ipsum, dolor sit amet
            <br/>consectetur
            <br/>adipisicing elit.
        </p>
        <img src={googlelogo} className="google" alt="Google"/>
        <img src="images/microsoft-logo.svg" className="microsoft" alt="Microsoft"/>
        <img src="images/airbnb-logo.svg" className="airbnb" alt="AirBnb"/>
        <img src="images/facebook-logo.svg" className="facebook" alt="Facebook"/>
        <img src="images/spotify-logo.svg" className="spotify" alt="Spotify"/>
        <img src="images/learn-more-btn-dark.png" className="learn-btn1" alt="Learn-Btn1"/>
        <button className="btn-2"></button>
    </section>

    <div>
        <img src="images/inter-three.svg" className="inter3" alt="Inter3" />
        <h2>Lorem ipsum dolor sit amet consectetur </h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur
            <br/>adipisicing elit. Suscipit nemo hic quos, ab,
            <br/> dolor aperiam nobis cum est eos error 
            <br/>ipsum, voluptate culpa nesciunt delectus 
            <br/>iste?
        </p>
        <img src="images/learn-more-btn-dark.png" className="learn-btn2" alt="Learn-Btn2"/>
    </div>

    <div>
        <img src="images/connectivity-picture.svg" className="connect" alt="Connect" />
        <h2>Lorem ipsum dolor sit amet consectetur </h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur
            <br/>adipisicing elit. Suscipit nemo hic quos, ab,
            <br/> dolor aperiam nobis cum est eos error 
            <br/>ipsum, voluptate culpa nesciunt delectus 
            <br/>iste?
        </p>
        <img src="images/learn-more-btn-dark.png" className="learn-btn2" alt="Learn-Btn2"/>
    </div>

    <section className="teams-section">
        <h1>TEAM</h1>
        <h2>Our Talents</h2>
        <p>
            Lorem ipsum, dolor sit amet
            <br/>consectetur
            <br/>adipisicing elit.
        </p>
        <ul>
            <li>
                <img src="images/peg-legge.svg" className="peg" alt="Peg"/>
                <h3>Peg Legge</h3>
                <p>CEO</p>
            </li>
            <li>
                <img src="images/richard-guerra.svg" className="richard" alt="Richard"/>
                <h3>Richard Guerra</h3>
                <p>CTO</p>
            </li>
            <li>
                <img src="images/alexandra-stolz.svg" className="alexandra" alt="Alexandra"/>
                <h3>Alexandra Stolz</h3>
                <p>DESIGNER</p>
            </li>
            <li>
                <img src="images/janet-bray.svg" className="janet" alt="Janet"/>
                <h3>Janet Bray</h3>
                <p>DEVELOPER</p>
            </li>
        </ul>
        <img src="images/learn-more-btn-dark.png" className="learn-btn3" alt="Learn-Btn3"/>
        <button className="btn-3"></button>
    </section>

    <footer className="home-footer">
        <div>
            <img src="images/predesigned-footer.png" alt="Twitter" />
        </div>
    </footer>
</div>

    );
};

export default Home;