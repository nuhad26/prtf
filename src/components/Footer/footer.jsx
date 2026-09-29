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
          <p>© 2026 Aman Nuhad. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <a href="https://github.com/nuhad26" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 98 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'4px'}}>
              <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/aman-nuhad-726166372" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'4px'}}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://aman-nuhad.web.app" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="Portfolio Website">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'4px'}}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Portfolio
          </a>
          <a href="#terms" className="footer-link">Terms of Services</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#contact" className="footer-link">Contact with Me</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
