import React from 'react'
import './about.css'
import profilee from '../../../prtf/public/profile.jpg'
const About = () => {
  return (
    <div id="about"className='about'>
      <div className="about-title">
        <h2>About Me</h2>

    </div>
        <div className="about-sections"> </div>
                 <div className="about-left">
            <img src={profilee} alt="dp" />
                 </div>

        <div className="about-right">
            <div className="about-para">
                <p>Web Developer from Calicut,Kerala. Having experience in React.js,javascript,node.js and many commonly used libraries and frameworks. I have a passion for coding and problem-solving,
                  <br/> I am also a video editor and content creator, making videos reachable and interesting.
                </p>
            </div>
            <hr style={{width:"100%"}}/>
          
            <div className="about-skills">
                <h2>Skills</h2>
            </div><div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>PostgreSQL</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Express.js</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React.js</p><hr style={{width:"85%"}}/></div>
                <div className="about-skill"><p>Node.js</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Django</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Video Editing</p><hr style={{width:"80%"}}/></div>

            </div>
    </div>
  )
}

export default About
