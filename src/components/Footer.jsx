import { useLocation } from 'react-router-dom';
import '../styles/Footer.css';
import CTAButton from './CTAButton';

// Import social media icons
import FacebookIcon from '../assets/Footer/fb.svg';
import TwitterIcon from '../assets/Footer/X.svg';
import YoutubeIcon from '../assets/Footer/yt.svg';
import LinkedinIcon from '../assets/Footer/linkedin.svg';

const Footer = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, '').toLowerCase(); // Remove trailing slash and convert to lowercase
    const isRootPage = pathname === '/' || pathname === '/publisher';
    const isInfraPage = pathname === '/infra';
    const isOEMPage = pathname === '/oem';
    const isEnterprisePage = pathname === '/enterprise';
    const isDSPPage = pathname === '/dsp';
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main-content">
                    {/* Left Column - Get Started */}
                    <div className="footer-left-column">
                        <h3 className="footer-section-title">
                            {isRootPage
                                ? 'Get Started'
                                : isDSPPage
                                    ? 'Request DSP Demo'
                                    : isOEMPage
                                        ? 'Request OEM Demo'
                                        : isInfraPage
                                            ? 'Request Infra Demo'
                                            : isEnterprisePage
                                                ? 'Request Enterprise Demo'
                                                : 'Get Started'
                            }
                        </h3>
                        <nav className="footer-nav">
                            <div className="footer-nav-columns">
                                {/* First Column */}
                                <ul className="footer-nav-list">
                                    <li className="footer-nav-item">
                                        <a href="/about" className="footer-nav-link">About</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="#contact" className="footer-nav-link">Contact Us</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="#demo" className="footer-nav-link">Watch Demo</a>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="footer-nav-list">
                                    <li className="footer-nav-item">
                                        <a href="/monetize" className="footer-nav-link">Canvas Monetize</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="/engage" className="footer-nav-link">Canvas Engage</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        {/* CTA Button */}
                        <div className="footer-cta-container">
                            <CTAButton
                                name="Request Demo"
                            />
                        </div>
                    </div>

                    {/* Right Column - Company Info */}
                    <div className="footer-right-column">
                        <h3 className="footer-company-title">
                            {isRootPage
                                ? 'Canvas Space Inc.'
                                : isDSPPage
                                    ? <>Canvas Space Inc. <br />— CTV Interaction Intelligence</>
                                    : isOEMPage
                                        ? <>Canvas Space Inc.<br /> — Native CTV Interaction Infrastructure</>
                                        : isInfraPage
                                            ? <>Canvas Space Inc.<br />—Runtime Interaction Infrastructure for CTV</>
                                            : isEnterprisePage
                                                ? 'Canvas Space — Runtime Interaction & Intent Infrastructure for CTV'
                                                : 'Canvas Space Inc.'
                            }
                        </h3>
                        <div className="footer-company-info">
                            {isRootPage ? (
                                <>
                                    <p className="footer-address">
                                        5548, Abington Drive, Newark,<br />
                                        California, 94560
                                    </p>
                                    <p className="footer-email">
                                        <a href="mailto:hello@canvas.space" className="footer-email-link">hello@canvas.space</a>
                                    </p>
                                </>
                            ) : isDSPPage ? (
                                <p className="footer-address">
                                    Deterministic intent. In-session. At scale.
                                </p>
                            ) : isOEMPage ? (
                                <p className="footer-address">
                                    One runtime. Platform-wide. Monetizable.
                                </p>
                            ) : isInfraPage ? (
                                <p className="footer-address">
                                    Deterministic intent. In-session. At scale.
                                </p>
                            ) : isEnterprisePage ? (
                                <p className="footer-address">
                                    Deterministic intent. In-session. At scale.
                                </p>
                            ) : (
                                <>
                                    <p className="footer-address">
                                        5548, Abington Drive, Newark,<br />
                                        California, 94560
                                    </p>
                                    <p className="footer-email">
                                        <a href="mailto:hello@canvas.space" className="footer-email-link">hello@canvas.space</a>
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Social Media Icons */}
                        <div className="footer-social-media">
                            <a href="https://www.facebook.com/canvsspace/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                                <img src={FacebookIcon} alt="Facebook" className="footer-social-icon" />
                            </a>
                            <a href="https://x.com/CanvasSpace" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                                <img src={TwitterIcon} alt="Twitter" className="footer-social-icon" />
                            </a>
                            <a href="https://www.youtube.com/@canvas_space" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                                <img src={YoutubeIcon} alt="YouTube" className="footer-social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/company/canvas-space/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                                <img src={LinkedinIcon} alt="LinkedIn" className="footer-social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    {/* Legal Links */}
                    <div className="footer-legal-links">
                        <a href="#terms" className="footer-legal-link">Terms & Conditions</a>
                        <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
                        <a href="#terms-of-use" className="footer-legal-link">Terms Of Use</a>
                    </div>

                    {/* Copyright */}
                    <div className="footer-copyright">
                        <p className="footer-copyright-text">©2026 Canvas Space Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;