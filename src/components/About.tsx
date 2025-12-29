
import { personalInfo } from '../data';
import profileImg from '../assets/profile.jpg';


const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-image-container">
                    <img src={profileImg} alt="Profile" className="about-image" />
                </div>
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-bio">{personalInfo.bio}</p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
