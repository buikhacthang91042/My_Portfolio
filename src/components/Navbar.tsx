import React, { useState } from "react";
import '../styles/Navbar.css'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>("");
    const navItem: string[] = ["Home", "About", "Skills", "Project", "Contact"];
    return(
        <nav className="navbar">
            <h1 className="hoTen">Bùi Khắc Thắng</h1>
            <ul className="nav-links">
                {
                    navItem.map((item) => {
                        const id = item.toLowerCase();
                        return (
                        <li key={id}>
                            <a href={`#${item.toLowerCase()}`} className={`nav-link ${activeLink === id ? 'active' : ''}`} 
                                onClick={() => setActiveLink(id)}
                            
                            
                            >{item}</a>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>

    )
}
export default Navbar;