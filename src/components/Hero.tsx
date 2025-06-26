import React, { useEffect, useState } from "react";
import './Hero.css'
import hinhAvatar from '../assets/avatar.jpg'

interface InfoItem {
    value: string,
    label: string
};

const Hero: React.FC = () => {
    const itemlinks: string[] = ["Explore Projects" , "Contact Me"];
    const info : InfoItem[] =  [
        {value: "3+", label: "Dự án"},
        {value: "127", label: "Tín chỉ"},
        {value: "2.81", label: "GPA"}];
    const [vaiTro, setVaiTro] = useState<string>('');
    const [vaiTroDone, setVaitroDone] = useState<boolean>(false);
    const fullTextVaitro = "Full Stack Developer";
    useEffect(() => {
        let current = 0; 
        setVaiTro("");
        const interval = setInterval(() => {
            setVaiTro(fullTextVaitro.slice(0, current+1));
            current++;
            if(current === fullTextVaitro.length) { clearInterval(interval)
                setVaitroDone(true);
            
            }
            },80)
            return () => clearInterval(interval)
    },[])
    return (
    <section className="hero">
        <div className="avatar">
            <img src={hinhAvatar} alt="" />

        </div>
        <h1 className="ten">BUI KHAC THANG</h1>
        <h2 className={`vaiTro${vaiTroDone ? " done" : ""}`}> {vaiTro}</h2>
      
       <div className="infos">
            {info.map((info, index) => (
                <div key={index} className="info">
                    <strong className="giaTriInfo">{info.value}</strong>
                    <p className="tenInfo">{info.label}</p>
                </div>
            ))}
        </div>
        <div>
            <nav className="navHero">
                <ul className="navlinksHero">
                {
                    itemlinks.map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <li key={id} className="o">
                                <a href={`#${id}`} className="nav-linkHero">{item}</a>
                            </li>

                        )
                    })
                }
                </ul>
            </nav>

        </div>
    </section>
    )
}

export default Hero;