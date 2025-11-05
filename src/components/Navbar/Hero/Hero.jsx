import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../../../prtf/public/profile.jpg'
const Hero = () => {
  return (
    <div id="home"className='hero'>
        <img src={profile} alt="Profile" className='hero-image'/>
        <h2>I'm <span>Aman Nuhad,<br></br></span>
         Full Stack Developer.</h2>
        <h3>I am a Web Developer from Calicut,
        Kerala, India. With a passion for coding and problem-solving,
        I specialize in <u>React, javaScript, Node.js, and Express.js</u> to build robust 
        and scalable web applications and drive business success.<br />
        Iam also proficient in Quality Assurance & Testing.
          </h3>
        <br />
        <p1>I am also a video editor and content creator! </p1> <p2>Sharing my knowledge and experiences
         Let's connect and collaborate on exciting projects!
        </p2>
        <div className="hero-action">
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'><AnchorLink className='anchor-link' offset={50} href='#about'>My Resume</AnchorLink></div>
        </div>
    </div>
  )
}

export default Hero