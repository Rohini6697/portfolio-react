import React, { useState } from 'react'
import '../../src/styles/Header.css';
import ResumePopup from './ResumePop'

const Header = () => {
  const [open,setOpen] = useState(false)
  // const show = () =>{
  //   setOpen(true)
  // }
  // const close = () => {
  //   setOpen(false)
  // }
  return (
    <>
      <nav>
        <ul className='contents'>
            <li><button>About</button></li>
            <li><button>Education</button></li>
            <li><button>Skill</button></li>
            <li><button>Projects</button></li>
            <li><button>Contact Me</button></li>
            <li><button onClick={() => setOpen(true)}>Resume</button></li>
        </ul>
    </nav>
    {open && <ResumePopup close={() => setOpen(false)} />}
    </>
  )
}

export default Header
