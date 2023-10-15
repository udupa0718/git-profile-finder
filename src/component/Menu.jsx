import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (
        <header>
            <div className="menu-container">
            <div id="logo">
                <NavLink to={'/'}>Git-Profile-Finder</NavLink>
            </div>
            <nav>
                <ul className="navbar">
                    <li className="nav-item">
                        <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={'nav-link'} to={'/ex1'}>Function</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={'nav-link'} to={'/ex2'}>Class</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Menu