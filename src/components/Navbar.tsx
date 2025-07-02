import React, { useEffect, useRef, useState } from "react";
import '../styles/Navbar.css'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>("home");
    const navItem: string[] = ["Home", "About", "Skills", "Project", "Contact"];
    const isScrollning = useRef<boolean>(false);
   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if(!isScrollning.current) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }
    },
    {
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0.1,
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

    const handleClick = (id: string) => {
      setActiveLink(id);
      isScrollning.current = true;
      setTimeout(() => {
        isScrollning.current = false;
      },1000);
    }
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
                                onClick={() => handleClick(id)}
                            
                            
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