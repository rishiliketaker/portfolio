import { personalInfo } from '../data';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content glass-card">
                    <div className="contact-info">
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-text">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="contact-links">
                            <a href={`mailto:${personalInfo.email}`} className="contact-link-item">
                                <Mail size={24} />
                                <span>{personalInfo.email}</span>
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" action="https://formspree.io/f/mgoedypq" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="form-input" rows={4} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
