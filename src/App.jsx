import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/Navbar/Hero/Hero.jsx';
import About from './components/About/about.jsx';
import Experience from './components/Experience/experience.jsx';
import Services from './components/Services/services.jsx';
import Features from './components/Features/features.jsx';
import Contact from './components/Contact/contact.jsx';
import Footer from './components/Footer/footer.jsx';
import Loader from './components/Loader/Loader.jsx';
const App = () => {
  const [showLoader, setShowLoader] = useState(true)
  return (
    <div>
      {showLoader && (
        <Loader onDone={() => setShowLoader(false)} />
      )}
      <Navbar />
     <Hero />
 <About />
<Experience />
 <Services />
 <Features />
  <Contact />
 <Footer />

    </div>     
     
  );
};

export default App
