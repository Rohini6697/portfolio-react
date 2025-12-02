import React from 'react'
import '../../src/styles/Header.css'

const Header = () => {
  return (
    <nav>
        <ul className='contents'>
            <li><button>Home</button></li>
            <li><button>Skill</button></li>
            <li><button>Projects</button></li>
        </ul>
    </nav>
  )
}

export default Header
