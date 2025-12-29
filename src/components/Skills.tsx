
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item glass-card">
                            <span className="skill-name">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
