
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-timeline">
                    {experience.map((job, index) => (
                        <div key={index} className="experience-item glass-card">
                            <div className="experience-header">
                                <h3 className="experience-role">{job.role}</h3>
                                <div className="experience-company-group">
                                    <span className="experience-company">
                                        <Briefcase size={16} className="text-secondary" />
                                        {job.company}
                                    </span>
                                    <span className="experience-period">
                                        <Calendar size={16} className="text-secondary" />
                                        {job.period}
                                    </span>
                                </div>
                            </div>
                            <ul className="experience-description">
                                {Array.isArray(job.description) ? (
                                    job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))
                                ) : (
                                    <li>{job.description}</li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
