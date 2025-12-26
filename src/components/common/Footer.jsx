import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                {/* Categories */}
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/careers" className="footer-link">Careers</a>
                    <a href="/blog" className="footer-link">Blog</a>
                </div>

                <div className="footer-links">
                    <a href="/help" className="footer-link">Help Center</a>
                    <a href="/faq" className="footer-link">FAQ</a>
                    <a href="/contact" className="footer-link">Contact Us</a>
                </div>

                <div className="footer-links">
                    <a href="/terms" className="footer-link">Terms of Service</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                    <a href="/cookies" className="footer-link">Cookie Policy</a>
                </div>

                {/* Social Icons */}
                <div className="footer-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaLinkedinIn />
                    </a>
                </div>

                <p style={{ marginTop: "10px" }}>&copy; {new Date().getFullYear()} DN. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
