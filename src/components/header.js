import React from 'react'
import './header.css'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Jess Taylor</h1>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul> 
            </nav>
                       
        </header>
    )
}

export default Header