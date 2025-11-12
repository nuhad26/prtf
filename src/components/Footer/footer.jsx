import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h3 className="footer-title">Get In Touch</h3>
          <p className="footer-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and explore how we can work together.
          </p>
         {/*  <p className="footer-subtitle">What to include:</p>
          <ul className="footer-list">
            <li>Your name and company</li>
            <li>Email address</li>
            <li>Project details or inquiry</li>
          </ul>
          <p className="footer-thanks">
            I'll respond promptly to discuss how we can bring your ideas to life.
          </p> */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 Aman Nuhad. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <a href="#terms" className="footer-link">Terms of Services</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#contact" className="footer-link">Contact with Me</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
