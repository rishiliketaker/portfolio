import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background Elements */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="container hero-content">
                <div className="status-badge">
                    <span className="status-text">Available for new opportunities</span>
                </div>

                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                <h2 className="hero-subtitle">
                    {personalInfo.title}
                </h2>

                <p className="hero-description">
                    Specializing in architecting automation frameworks and building scalable distributed systems.
                </p>

                <div className="hero-buttons">
                    <a
                        href="#projects"
                        className="btn btn-primary group"
                    >
                        View My Work
                        <ArrowRight size={20} className="btn-icon" />
                    </a>

                    <a
                        href="#contact"
                        className="btn btn-secondary"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
