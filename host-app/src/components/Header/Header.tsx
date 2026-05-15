import { Link } from 'react-router-dom';
import authService from 'loginApp/AuthService';
import './Header.css';

const Header = () => {
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    window.location.href = '/login'; // Force redirect to login on logout
  };

  return (
    <header className="lms-header">
      <div className="header-container">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <span className="logo-icon">🎓</span>
          <h1>EduNexus</h1>
        </Link>

        <nav className="main-nav">
          <ul>
            {!isAuthenticated ? (
              <>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/my-learning">My Learning</Link></li>
                <li><Link to="/assignments">Assignments</Link></li>
                <li><Link to="/messages">Messages</Link></li>
              </>
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-search" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn-login">Log In</Link>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn-signup">Log Out</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

