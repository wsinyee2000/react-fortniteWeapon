import React from 'react'
import './Header.css';
import fortnite_icon from './img/toppng.com-fortnite-logo-vector-download-logo-fortnite-1600x1599.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="header">
                <img src={fortnite_icon} alt="" />
                <ul>
                    <Link to='/react-fortniteWeapon'>
                        <li>Home</li>
                    </Link>

                    <Link to='/weapons'>
                        <li>Weapons</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Header
