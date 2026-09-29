import React, { useEffect, useRef, useState } from 'react'
import * as motion from 'motion/react-client'
import './about.css'
const nestLogo = '/nest-logo.svg'
const pythonLogo = '/python-logo.png'
const reactLogo = '/logo.svg'
const jsLogo = '/js-logo.png'
import resume from '../../assets/resume.pdf'
const newResumePath = '/resume/Aman_Nuhad_Resume_2026.pdf'
const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)
  const resumeLink = newResumePath

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
      name: 'JavaScript & TypeScript', 
      percentage: 70,
      icon: jsLogo,
      iconType: 'image',
      tagline: 'Making web magic happen ✨',
      color: '#3178c6'
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
      name: 'Tailwind CSS',
      percentage: 75,
      icon: (
        <svg width="48" height="48" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8"/>
        </svg>
      ),
      iconType: 'svg',
      tagline: 'Styling at the speed of thought 🌊',
      color: '#38bdf8'
    },
    {
      name: 'PostgreSQL',
      percentage: 55,
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="16" cy="10" rx="10" ry="5" stroke="#336791" strokeWidth="2" fill="none"/>
          <path d="M6 10 Q6 22 16 24 Q26 22 26 10" stroke="#336791" strokeWidth="2" fill="none"/>
          <line x1="26" y1="10" x2="26" y2="16" stroke="#336791" strokeWidth="2"/>
          <path d="M26 16 Q29 14 29 18 Q29 22 26 22" stroke="#336791" strokeWidth="2" fill="none"/>
        </svg>
      ),
      iconType: 'svg',
      tagline: 'Advanced relational databases 🐘',
      color: '#336791'
    },
    {
      name: 'Git & GitHub',
      percentage: 75,
      icon: (
        <svg width="48" height="48" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/>
        </svg>
      ),
      iconType: 'svg',
      tagline: 'Version control & collaboration 🌿',
      color: '#24292f'
    },
    {
      name: 'SEO / GEO / AEO',
      percentage: 70,
      icon: '🔍',
      tagline: 'Ranking higher, reaching further 📈',
      color: '#4285f4'
    },
    {
      name: 'UI/UX Design',
      percentage: 65,
      icon: '🎨',
      tagline: 'Crafting intuitive experiences ✏️',
      color: '#a855f7'
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
                Full Stack Developer from Calicut, Kerala. I build scalable SaaS applications using
                React, Next.js, NestJS, TypeScript, and MySQL. I recently built an enterprise HRMS
                platform from scratch and deliver multilingual websites with SEO, GEO, and AEO best
                practices—from initial concept through deployment and beyond.
              <br /> <br />
             I'm also a video editor who loves creating trending Instagram Reels. Using CapCut, 
             I edit raw footage into engaging content with smooth transitions, eye-catching effects, 
             and perfect audio sync. I know what makes people stop scrolling—and how to deliver it.
            </p>
          </div>
          
          <div className="about-actions card-links">
            <a
              className="card-link"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View or download Aman Nuhad resume"
            >
              View Resume
              <span className="card-link-icon" aria-hidden="true">
                ↗
              </span>
            </a>
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
