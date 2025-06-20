import Home from './Pages/Home';
import './App.css';
import Test from './Pages/Test';
import NavBar from './Components/NavBar';
import WelcomeSection from './Components/WelcomeSection';
import PartnersSection from './Components/PartnersSection';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Test />
      <NavBar/>
      <WelcomeSection/>
      <PartnersSection/>
    </div>
  );
}

export default App;
