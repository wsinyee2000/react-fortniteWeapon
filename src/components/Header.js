import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="header">
                <img src="/toppng.com-fortnite-logo-vector-download-logo-fortnite-1600x1599.png" alt="" />
                <ul>
                    <Link to='/'>
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
