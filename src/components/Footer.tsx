
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
