import './Footer.css';

const Footer = () => {
  return (
    <footer className="lms-footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <h2>EduNexus</h2>
          </div>
          <p>Empowering learners worldwide with cutting-edge micro frontend technology and world-class educational content.</p>
        </div>

        <div className="footer-section links">
          <h3>Platform</h3>
          <ul>
            <li><a href="#browse">Browse Courses</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#career-paths">Career Paths</a></li>
            <li><a href="#enterprise">For Enterprise</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Community</h3>
          <ul>
            <li><a href="#blog">Blog & Articles</a></li>
            <li><a href="#forums">Student Forums</a></li>
            <li><a href="#events">Webinars & Events</a></li>
            <li><a href="#affiliates">Affiliate Program</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Support</h3>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduNexus LMS Platform. All rights reserved.</p>
        <div className="social-links">
          <a href="#twitter" aria-label="Twitter">𝕏</a>
          <a href="#linkedin" aria-label="LinkedIn">in</a>
          <a href="#github" aria-label="GitHub">gh</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
