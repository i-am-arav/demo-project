import React, {useEffect} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ReactGA from 'react-ga4';

const App = () => {
  useEffect(() => {
    initReactGa();

  }, [])

  const initReactGa = () => {
    ReactGA.initialize([{trackingId:'G-R8518JG1Y4'}], {debug:true });
    ReactGA.pageview();
    
    
  }
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
