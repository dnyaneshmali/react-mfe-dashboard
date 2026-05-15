import './Header.css';

const Header = () => {
  return (
    <header className="lms-header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <h1>EduNexus</h1>
        </div>

        <nav className="main-nav">
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-search" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href="#login" className="btn-login">Log In</a>
          <a href="#signup" className="btn-signup">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
