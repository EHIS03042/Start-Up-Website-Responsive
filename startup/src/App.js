import Home from './Pages/Home';
import './App.css';
import Test from './Pages/Test';
import NavBar from './Components/NavBar';
import WelcomeSection from './Components/WelcomeSection';
import PartnersSection from './Components/PartnersSection';
import InterCollaboration from './Components/InterCollaboration';
import Connectivity from './Components/Connectivity';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Test />
      <NavBar/>
      <WelcomeSection/>
      <PartnersSection/>
      <InterCollaboration/>
      <Connectivity/>
    </div>
  );
}

export default App;
