import React, { useState } from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";

function MobileNav() {
  const [open,setOpen] = useState(false);
  const handleMenu=()=>{
    setOpen(!open)
  }

  const handleMenuClick = ()=>{
    setOpen(false)
  }
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open?(<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleMenu}/>):(<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleMenu} />)}
        
        <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (<div className='mobile-nav-menu'>
        <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="TechStack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="WorkExp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
        </div>)}
        
    </div>
    
      
    </>
  )
}

export default MobileNav
