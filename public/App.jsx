import React, { useState } from 'react'
import Navbar from '../src/components/Navbar/navbar.jsx';
import Hero from '../src/components/Navbar/Hero/Hero.jsx';
import About from '../src/components/About/about.jsx';
import Experience from '../src/components/Experience/experience.jsx';
import Services from '../src/components/Services/services.jsx';
import Features from '../src/components/Features/features.jsx';
import Contact from '../src/components/Contact/contact.jsx';
import Footer from '../src/components/Footer/footer.jsx';
import Loader from '../src/components/Loader/Loader.jsx';
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
