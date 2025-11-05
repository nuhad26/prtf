import React from 'react'
// import Navbar from './Navbar/navbar.jsx';
import './navbar.css'
import Hero from './Hero/Hero'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuBurger from '../../../prtf/src/menu-burger.svg'
import arrow from '../../../prtf/public/img/icons/arrow-right.png'
const Navbar = () => {
  const [menu, setMenu] = React.useState("home");
  const menuRef = React.useRef(null);


  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350%";
  }
  return (
    <div className='navbar'>
      <img src={menuBurger} alt="" className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={arrow} alt="" className='nav-mob-close' onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' offset={50}href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"}</AnchorLink></li>        
      </ul>
        <div className="nav-logo"><h1>Portfolio</h1></div>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
