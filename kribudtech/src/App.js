import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
 //import Portfolio from './components/Portfolio';


function App() {
  useEffect(() => {
    AOS.init({
      once: true, // Ensures animations only trigger once
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  
    window.addEventListener('resize', () => {
      AOS.refresh(); // Refresh AOS on resize
    });
  
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);
  

  useDocTitle("Kribudtech");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            
            
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
