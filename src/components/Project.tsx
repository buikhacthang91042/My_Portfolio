import React from "react";
import '../styles/Project.css'; 
import hinhAnh from "../assets/Project.jpg"
interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    linkCode: string;
}
const Project: React.FC = () => {
   const projects: Project[] = [
        {
            title: "Shiba Talk Chat App",
            description: "Develop a real-time chat application",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: hinhAnh,
            linkCode: "https://github.com/Hungdacam/ChatApp_G1 "
        },
         {
            title: "Shiba Talk Chat App",
            description: "Develop a real-time chat application",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: hinhAnh,
            linkCode: " "
        },
         {
            title: "Shiba Talk Chat App",
            description: "Develop a real-time chat application",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: hinhAnh,
            linkCode: " "
        }
   ];
const handleLinkCode = (link: string) => {
    if(link) {
        window.open(link);
    }else {
        alert("Link code is not available");
    }
}
    return (
        <div className="project-section">
            <div className="project-container">
                <div className="project-title">
                    <h1>Personal Project</h1>
                    <h3>Project built with passion, focusing on performance and scalabiluty.</h3>
                </div>

                <div className="project-information">
                    {projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt="" />
                            </div>

                            <div className="project-title-des">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>

                            </div>

                            <div className="project-tech">
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, index) => (
                                        <li>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-btn">
                                    <button onClick={() => handleLinkCode(project.linkCode)}
                                        className="btn-link">Link code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Project;