import React from "react";
import '../styles/Skill.css';
import ngonnguLapTrinh from '../assets/ngonngulaptrinh.png';
interface Skills {
    value: string;
    label: string[];
}
const Skill: React.FC = () => {
    const skills: Skills[] = [
        {
            value: "Frontend Development",
            label: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            value: "Backend Development",
            label: ["Node.js", "Express.js", "Spring Boot", "Java", "MongoDB"]
        },
        {
            value: "DevOps and Deployment",
            label: ["Docker", "AWS", "CI/CD"]
        }
    ]
    return (
        <div className="skill-section">
            <h1 className="title-skills">Skills</h1>
            <div className="skill-container">
                <div className="skill-information">
                    {skills.map((skill,index) => (
                        <div className="skill" key={index}>
                            <h1>{skill.value}</h1>
                            <ul className="skill-list">
                                  {skill.label.map((item, indexItem) => (
                                <li className="item-skill">{item}</li>
                            ))}
                            </ul>
                          
                        </div>
                    ))}
                </div>
                <div className="skill-image">
                        <img src={ngonnguLapTrinh} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Skill;