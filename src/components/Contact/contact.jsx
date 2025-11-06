import React, { useState, useCallback } from 'react'
import './contact.css'
import loc from '../../../prtf/public/marker.svg'
import call from '../../../prtf/public/circle-phone.svg'
import mail from '../../../prtf/public/circle-envelope.svg'
const contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "a5774b43-683a-426f-a65e-8fa1d6f3365d");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMessage("Message sent successfully! ✓");
        event.target.reset();
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitMessage("This Functionality is not available yet. Would Resolve Soon.");
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }
    } catch (error) {
      setSubmitMessage("Network error. Please check your connection and try again.");
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                <span className="copy-hint">Click to copy</span>
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
                <span className="copy-hint">Click to copy</span>
              </div>
              <div className="contact-detail contact-detail-no-copy">
                <div className="contact-icon-wrapper">
                  <img src={loc} alt="location" />
                </div>
                <p>Kallai,Calicut,Kerala</p>
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
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default contact
