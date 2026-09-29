import React, { useState, useCallback } from 'react'
import './contact.css'
const loc = '/marker.svg'
const call = '/circle-phone.svg'
const mail = '/circle-envelope.svg'
const contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = useCallback(async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopiedItem(itemId);
          setTimeout(() => {
            setCopiedItem(null);
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      document.body.removeChild(textArea);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const name    = formData.get('name')    || '';
    const email   = formData.get('email')   || '';
    const message = formData.get('message') || '';

    const text =
      `Hi Aman! 👋 I just visited your portfolio and wanted to reach out.\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n\n` +
      `*Message:*\n${message}\n\n` +
      `_(Sent via your portfolio website)_`;

    const phoneNumber = '918848044148'; // country code + number, no dashes
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    event.target.reset();
    setIsSubmitting(false);
  };
  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-sections">
        <div className="contact-left">
            <h1>Lets Talk !</h1>
            <p>If you have any questions or just want to say hi, feel free to reach out!</p>
            <div className="contact-details">
              <div 
                className="contact-detail contact-detail-email" 
                onClick={() => copyToClipboard('amannuhadpv@gmail.com', 'email')}
                title="Click to copy email"
              >
                <div className="contact-icon-wrapper">
                  <img src={mail} alt="mail" />
                </div>
                <p>
                  {copiedItem === 'email' ? (
                    <span className="copied-feedback">✓ Copied!</span>
                  ) : (
                    'amannuhadpv@gmail.com'
                  )}
                </p>
                {/* <span className="copy-hint">Click to copy</span> */}
              </div>
              <div 
                className="contact-detail contact-detail-phone" 
                onClick={() => copyToClipboard('+91-9388111107', 'phone')}
                title="Click to copy phone number"
              >
                <div className="contact-icon-wrapper">
                  <img src={call} alt="phone" />
                </div>
                <p>
                  {copiedItem === 'phone' ? (
                    <span className="copied-feedback">✓ Copied!</span>
                  ) : (
                    '+91-9388111107'
                  )}
                </p>
                {/* <span className="copy-hint">Click to copy</span> */}
              </div>
              <div className="contact-detail contact-detail-no-copy">
                <div className="contact-icon-wrapper">
                  <img src={loc} alt="location" />
                </div>
                <p>Kallai,Calicut,Kerala</p>
              </div>
              <div className="contact-social-links" style={{display:'flex', gap:'12px', marginTop:'8px', flexWrap:'wrap'}}>
                <a href="https://github.com/nuhad26" target="_blank" rel="noopener noreferrer" className="card-link" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 98 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/aman-nuhad-726166372" target="_blank" rel="noopener noreferrer" className="card-link" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <div className="contact-input-wrapper">
            <label htmlFor="name">Name</label>
            <div className="contact-input-container">
              <svg className="contact-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
            </div>
          </div>
          
          <div className="contact-input-wrapper">
            <label htmlFor="email">Email</label>
            <div className="contact-input-container">
              <svg className="contact-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input type="email" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          
          <div className="contact-input-wrapper">
            <label htmlFor="message">Message</label>
            <div className="contact-textarea-container">
              <svg className="contact-textarea-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <textarea name="message" id="message" rows="6" placeholder="Your Message" required></textarea>
            </div>
          </div>
          
          <button type="submit" className='contact-submit' disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            {!isSubmitting && (
              <svg className="button-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default contact
