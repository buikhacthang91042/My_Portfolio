import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>("home");
    const navItem: string[] = ["Home", "About", "Skills", "Project", "Contact"];
    
   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-50px 0px -90% 0px",
      threshold: 0,
    }
  );

  navItem.forEach((item) => {
    const id = item.toLowerCase();
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });

  return () => {
    navItem.forEach((item) => {
      const id = item.toLowerCase();
      const section = document.getElementById(id);
      if (section) {
        observer.unobserve(section);
      }
    });
  };
}, []);

    
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