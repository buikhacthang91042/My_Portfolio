import React from "react";
import '../styles/About.css';
import hinhAnh from '../assets/hinhAnhAbout.jpg'
const About: React.FC = () => {
    const skills: string[] = ["Lập trình web", "Lập trình mobile", "Làm việc nhóm", "Tự học hỏi"];
    return (
        <section className="about-section">
            <h1 className="title-about">About me</h1>
            <div className="about-container">
                
                <div className="about-image">
                    <img src={hinhAnh} alt="hinhAnhAbout" />
                </div>

                <div className="about-information">
                
                    <p>I am currently a final-year student majoring in <strong>Software Engineering</strong> at the <strong>Industrial University of Ho Chi Minh City</strong>. With a strong passion for technology, I aspire to become a well-rounded software engineer, capable of contributing to the sustainable development of real-world projects.
                        I am particularly interested in back-end development, where I aim to enhance my programming skills and practical experience. At the same time, I have a solid foundation in front-end technologies, which allows me to support building user interfaces when needed.
                        Throughout my studies, I have participated in multiple projects that combine both <strong>front-end and back-end development</strong>, working with technologies such as <strong> Java, JavaScript, React Native, Spring Boot, Node.js, Express.js, MongoDB, SQL Server, MariaDB, and AWS.</strong>
                        I am eager to apply the knowledge I have gained, continuously improve myself, and work in a professional environment that fosters growth and innovation.</p>

                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span className="skill" key={index}>
                                {skill}
                            </span>
                        ))
                        }

                    </div>


                </div>
            </div>
        </section>
    );
}
export default About;