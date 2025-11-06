import React, { useEffect, useRef, useState } from 'react'
import * as motion from 'motion/react-client'
import './about.css'
import nestLogo from '../../../prtf/public/nest-logo.svg'
import pythonLogo from '../../../prtf/public/python-logo.png'
import reactLogo from '../../../prtf/public/logo.svg'
import jsLogo from '../../../prtf/public/js-logo.png'
import htmlLogo from '../../../prtf/public/html-logo.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  const skills = [
    { 
      name: 'HTML & CSS', 
      percentage: 80,
      icon: '🎨',
      tagline: 'Building beautiful UIs since 2021 🚀',
      color: '#e34c26'
    },
    { 
      name: 'JavaScript & TypeScript', 
      percentage: 70,
      icon: jsLogo,
      iconType: 'image',
      tagline: 'Making web magic happen ✨',
      color: '#3178c6'
    },
    { 
      name: 'MySQL', 
      percentage: 50,
      icon: '🐬',
      tagline: 'Storing data like a pro 💾',
      color: '#4479a1'
    },
    { 
      name: 'React.js', 
      percentage: 85,
      icon: reactLogo,
      iconType: 'image',
      tagline: 'Creating interactive experiences 🎯',
      color: '#61dafb'
    },
    { 
      name: 'Next.js', 
      percentage: 70,
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L38 34H10L24 8Z" fill="#000000"/>
        </svg>
      ),
      iconType: 'svg',
      tagline: 'Building full-stack apps 🚀',
      color: '#000000'
    },
    { 
      name: 'Nest.js', 
      percentage: 65,
      icon: nestLogo,
      iconType: 'image',
      tagline: 'Scalable backend architecture 🏗️',
      color: '#e0234e'
    },
    { 
      name: 'Node.js', 
      percentage: 60,
      icon: '🟢',
      tagline: 'Powering the server side 🔥',
      color: '#339933'
    },
    { 
      name: 'Python', 
      percentage: 60,
      icon: pythonLogo,
      iconType: 'image',
      tagline: 'Coding with elegance 💎',
      color: '#3776ab'
    },
    { 
      name: 'Video Editing', 
      percentage: 80,
      icon: '🎬',
      tagline: 'Bringing stories to life 📹',
      color: '#ff6b6b'
    }
  ]

  const SkillCard = ({ skill, index, isVisible }) => {
    return (
      <motion.div
        className="skill-card"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          delay: index * 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="skill-card-inner">
          <div className="skill-card-front">
            <div className="skill-icon">
              {skill.iconType === 'image' ? (
                <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
              ) : skill.iconType === 'svg' ? (
                <div className="skill-icon-svg">{skill.icon}</div>
              ) : (
                skill.icon
              )}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-tagline">{skill.tagline}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div id="about" className="about">
      <div className={`about-title ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>About Me</h1>
      </div>
      
      <div className="about-sections" ref={sectionRef}>
        <div className={`about-right ${isVisible ? 'fade-in-right' : ''}`}>
          <div className="about-para">
            <p>
              A passionate Full Stack Developer based in Calicut, Kerala, specializing in modern web technologies including React.js, JavaScript/TypeScript, Node.js, and a comprehensive suite of cutting-edge libraries and frameworks. I thrive on transforming complex challenges into elegant, scalable solutions through innovative code and creative problem-solving.
              <br /> <br />
              Beyond coding, I channel my creativity as a skilled video editor and content creator, crafting engaging visual narratives that make information accessible and compelling. My multidisciplinary approach allows me to blend technical expertise with storytelling, delivering experiences that resonate with audiences across digital platforms.
            </p>
          </div>
          
          <div className="divider"></div>
        
          <div className="about-skills" ref={skillsRef}>
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
