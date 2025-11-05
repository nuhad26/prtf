import React from 'react'
import './contact.css'
import loc from '../../../prtf/public/marker.svg'
import call from '../../../prtf/public/circle-phone.svg'
import mail from '../../../prtf/public/circle-envelope.svg'
const contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
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
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");}
  };
  return (
    <div id="contact"className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
        <div className="contact-left">
            <h1>Lets Talk !</h1>
            <p>If you have any questions or just want to say hi, feel free to reach out!</p>
        </div>
        <div className="contact-details">
        <div className="contact-detail">
          <img src={mail} alt="mail" />
    <p>amannuhadpv@gmail.com</p>
        </div>
        <div className="contact-detail">
              <img src={call} alt="phone" />

            <p>+91 9388111107</p>
        </div>
        <div className="contact-detail">
          <img src={loc} alt="location" />
            <p>kallai,Calicut,Kerala</p>
            </div>
        </div>
      </div>
      <form onSubmit={onSubmit}className="contact-right">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
        <label htmlFor="email">Email</label>
        <input type="email"  name="email" placeholder="Your Email" required />
        <label htmlFor="message">Message</label>
        <textarea  name="message" rows="6" width="50%" placeholder="Your Message" required></textarea>
        <button type="submit" className='contact-submit'>Send Message</button>

      </form>
    </div>
  )
}

export default contact
