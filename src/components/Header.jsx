import React from 'react'
import '../../src/styles/Header.css'

const Header = () => {
  return (
    <nav>
        <ul className='contents'>
            <li><button>About</button></li>
            <li><button>Education</button></li>
            <li><button>Skill</button></li>
            <li><button>Projects</button></li>
            <li><button>Contact Me</button></li>
        </ul>
    </nav>
  )
}

export default Header
