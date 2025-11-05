import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
             <p>Interested in learning more? We'd love to hear from you.We welcome your inquiries and feedback.<br /> Please share:
             <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Any questions or suggestions you may have</li>
 </ul><br />
Thank you for your interest.<br />We look forward to hearing from you.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div >
                   <button className='footer-email-button'>Contact</button>
                </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                <p>© 2025 Aman Nuhad. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact with Me</p>
                </div>
                        </div>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default footer
