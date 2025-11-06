import React, { useEffect, useRef } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LinkPreview from '../../Preview/LinkPreview'
import previewImg from '../../../assets/profile.jpg'
import profile from '../../../../prtf/public/profile.jpg'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-action')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="home" className='hero' ref={heroRef}>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img src={profile} alt="Profile" className='hero-image'/>
        </div>
        <h2 className="hero-title">
          Hello!<br/> I'm <span className="gradient-text">Aman Nuhad,<br/></span>
          a Full Stack Web Developer.
        </h2>
        <h3 className="hero-subtitle">
          A passionate Full Stack Developer from Calicut, Kerala, India, dedicated to crafting 
          exceptional digital experiences. I specialize in <u className="highlight-text">React, JavaScript/TypeScript, Next.js, and Nest.js </u> 
          to architect robust, scalable web applications that deliver measurable business value.
        </h3>
        {/* <div className="hero-description">
          <p className="hero-p1">Beyond coding, I'm a creative content creator and video editor, sharing insights and 
          knowledge with the developer community.</p>
          <p className="hero-p2">Ready to bring innovative ideas to life? Let's connect and explore how we can 
          collaborate on your next exciting project!
          </p>
        </div> */}
        <div className="hero-action">
            <div className='hero-connect'>
              <LinkPreview href='#contact' title='Contact' description='Say hello or request a quote' image={previewImg}>
                <span>Connect with me</span>
              </LinkPreview>
            </div>
            <div className='hero-resume'>
              <LinkPreview href='#about' title='About Me' description='Experience and skills snapshot' image={previewImg}>
                <span>My Resume</span>
              </LinkPreview>
            </div>
        </div>
    </div>
  )
}

export default Hero