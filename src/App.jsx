import React from 'react'
import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/Navbar/Hero/Hero.jsx';
import About from './components/About/about.jsx';
import Services from './components/Services/services.jsx';
import Contact from './components/Contact/contact.jsx';
import Footer from './components/Footer/footer.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
     <Hero />
 <About />
 <Services />
  <Contact />
 <Footer />

    </div>     
     
  );
};

export default App
