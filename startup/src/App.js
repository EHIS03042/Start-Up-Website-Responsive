import './App.css';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import NavBar from './Components/NavBar';
import FooterSection from './Components/FooterSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Portfolio/>
      <FooterSection />
    </div>
    </Router>
  );
}

export default App;
