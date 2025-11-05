import React, { useEffect, useState } from 'react'
import './navbar.css'
import Hero from './Hero/Hero'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import * as motion from 'motion/react-client'
import LinkPreview from '../Preview/LinkPreview'
import previewImg from '../../assets/profile.jpg'
import aboutPreview from '../../../prtf/public/about-me.jpg'
import contactPreview from '../../../prtf/public/contact.jpg'
import servicesPreview from '../../../prtf/public/services.jpg'
import featuresPreview from '../../../prtf/public/features.jpg'
import homePreview from '../../../prtf/public/homee.avif'
import experiencePreview from '../../../prtf/public/experience.avif'

const Navbar = () => {
  const [menu, setMenu] = React.useState("home");
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
    setIsOpen(false)
  }

  // Close menu on Escape, lock scroll when open, and update shadow on scroll
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('scroll', onScroll)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Scroll spy to highlight section in view
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'services', 'features', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setMenu(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.25, 0.5, 0.75] }
    )
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`navbar${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-logo"><h1>Portfolio</h1></div>
      
      {/* Desktop Menu */}
      <ul className='nav-menu-desktop'>
        <li className={menu === 'home' ? 'active' : ''}>
          <LinkPreview href='#home' title='Hero' description='Intro and quick overview' image={homePreview}>
            <p onClick={()=>setMenu("home")}>Home</p>
          </LinkPreview>
        </li>
        <li className={menu === 'about' ? 'active' : ''}>
          <LinkPreview href='#about' title='About Me' description='Background, skills and story' image={aboutPreview}>
            <p onClick={()=>setMenu("about")}>About Me</p>
          </LinkPreview>
        </li>
        <li className={menu === 'experience' ? 'active' : ''}>
          <LinkPreview href='#experience' title='Experience' description='Roles and selected projects' image={experiencePreview}>
            <p onClick={()=>setMenu("experience")}>Experience</p>
          </LinkPreview>
        </li>
        <li className={menu === 'services' ? 'active' : ''}>
          <LinkPreview href='#services' title='Services' description='What I can do for you' image={servicesPreview}>
            <p onClick={()=>setMenu("services")}>Services</p>
          </LinkPreview>
        </li>
        <li className={menu === 'features' ? 'active' : ''}>
          <LinkPreview href='#features' title='Featured Work' description='Highlights and projects' image={featuresPreview}>
            <p onClick={()=>setMenu("features")}>Features</p>
          </LinkPreview>
        </li>
        <li className={menu === 'contact' ? 'active' : ''}>
          <LinkPreview href='#contact' title='Contact' description='Get in touch' image={contactPreview}>
            <p onClick={()=>setMenu("contact")}>Contact</p>
          </LinkPreview>
        </li>        
      </ul>

      {/* Mobile Menu */}
      <motion.nav
        className={`nav-menu-mobile${isOpen ? ' open' : ''}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <motion.div 
          className='nav-menu-background' 
          variants={sidebarVariants} 
        />
        <Navigation handleMenuClick={handleMenuClick} menu={menu} isOpen={isOpen} />
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </motion.nav>

      <div>
        {/* <LinkPreview href='#contact' title='Contact' description='Email, socials and form' image={contactPreview}>
          Contact Me
        </LinkPreview> */}
      </div>
    </div>
  )
}

const navVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = ({ handleMenuClick, menu, isOpen }) => (
  <motion.ul 
    className='nav-menu-list' 
    variants={navVariants}
    animate={isOpen ? "open" : "closed"}
    initial="closed"
    id="mobile-menu"
    role="menu"
  >
    <MenuItem 
      i={0} 
      href="#home" 
      label="Home" 
      menuItem="home" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "home"}
    />
    <MenuItem 
      i={1} 
      href="#about" 
      label="About Me" 
      menuItem="about" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "about"}
    />
    <MenuItem 
      i={2} 
      href="#experience" 
      label="Experience" 
      menuItem="experience" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "experience"}
    />
    <MenuItem 
      i={3} 
      href="#services" 
      label="Services" 
      menuItem="services" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "services"}
    />
    <MenuItem 
      i={4} 
      href="#features" 
      label="Features" 
      menuItem="features" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "features"}
    />
    <MenuItem 
      i={5} 
      href="#contact" 
      label="Contact" 
      menuItem="contact" 
      handleMenuClick={handleMenuClick}
      isActive={menu === "contact"}
    />
  </motion.ul>
)

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const colors = ["#7929bb", "#5078b8", "#3c0867", "#764ba2", "#274980", "#2e7d6b"]

const MenuItem = ({ i, href, label, menuItem, handleMenuClick, isActive }) => {
  return (
    <motion.li
      className='nav-menu-item'
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      role="none"
    >
      <AnchorLink 
        className='anchor-link' 
        offset={50} 
        href={href}
        onClick={() => handleMenuClick(menuItem)}
        role="menuitem"
        aria-current={isActive ? 'page' : undefined}
      >
        <span style={{ color: isActive ? colors[i] : '#b9c8d3' }}>{label}</span>
      </AnchorLink>
    </motion.li>
  )
}

const sidebarVariants = {
  open: {
    opacity: 1,
    x: 0,
    visibility: "visible",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    visibility: "hidden",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
}

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#b9c8d3"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle, isOpen }) => (
  <motion.button 
    className='menu-toggle-btn' 
    onClick={toggle}
    animate={isOpen ? "open" : "closed"}
    initial={false}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
)



export default Navbar
