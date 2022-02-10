import React from "react"

import './styles.css'

import { FiMenu, FiX } from 'react-icons/fi'

// const navbarLinks = [{url: "/home", title: "Home" }]

const Navbar = ({ navbarLinks }) => {
    return (
    <nav className="navbar">
        <span className="navbar__logo">viajAir</span>
        <ul className="navbar__list">
            {navbarLinks.map((item) => {
                return ( //o react sempre vai esperar uma CHAVE UNICA, nesse caso utilizaremos o titulo 
                    <li className="navbar__item" key={item.title}> 
                        <a className="navbar__link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
    )
}

export default Navbar