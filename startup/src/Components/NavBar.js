import './NavBar.css'
import navlogo from '../images/navlogo.svg'
import hamburgerMenu from'../images/hamburgerMenu.png'


const NavBar = () => {
    return (  
        <header className="home-header">
                <img src={navlogo} className="logo" alt="Logo"/>
                <h2>Start</h2>
                <img src={hamburgerMenu} className="menu-button"/>
        </header>
    );
}

export default NavBar;