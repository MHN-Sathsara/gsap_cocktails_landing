import React from 'react'
import { navLinks } from '../../constants'

const NavBar = () => {
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <p>Black Spades</p>
            </a>
        </div>
        <ul>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar