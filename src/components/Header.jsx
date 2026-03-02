import React, { useState } from 'react'
import '../../src/styles/Header.css';
import ResumePopup from './ResumePop'
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open,setOpen] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-container">
          
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`contents ${menuOpen ? "active" : ""}`}>
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
            <li><a href="#education" onClick={()=>setMenuOpen(false)}>Education</a></li>
            <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skill</a></li>
            <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
            <li><button onClick={() => setOpen(true)}>Resume</button></li>
          </ul>
        </div>
      </nav>

      {open && <ResumePopup close={() => setOpen(false)} />}
    </>
  )
}

export default Header