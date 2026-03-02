import React, { useState } from 'react'
import '../../src/styles/Header.css';
import ResumePopup from './ResumePop'

const Header = () => {
  const [open,setOpen] = useState(false)

  return (
    <>
      <nav>
        <ul className='contents'>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><button onClick={() => setOpen(true)}>Resume</button></li>
        </ul>
      </nav>

      {open && <ResumePopup close={() => setOpen(false)} />}
    </>
  )
}

export default Header