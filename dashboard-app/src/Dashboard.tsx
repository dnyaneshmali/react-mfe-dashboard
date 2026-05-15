import authService from 'loginApp/AuthService';
import './Dashboard.css';

const Dashboard = () => {
  const user = authService.getUser() || { name: 'Guest', role: 'Visitor' };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user.name}! 👋</h1>
          <p>Ready to continue your learning journey? Here's your overview.</p>
        </div>
        <div className="user-badge">
          <span className="role-tag">{user.role}</span>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">📚</div>
          <div className="stat-info">
            <h3>Active Courses</h3>
            <p className="stat-value">12</p>
            <span className="stat-trend positive">↑ 2 this month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">🏆</div>
          <div className="stat-info">
            <h3>Certificates</h3>
            <p className="stat-value">4</p>
            <span className="stat-trend positive">Next: React Mastery</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">⏱️</div>
          <div className="stat-info">
            <h3>Study Hours</h3>
            <p className="stat-value">128h</p>
            <span className="stat-trend positive">↑ 12% vs last week</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">🎯</div>
          <div className="stat-info">
            <h3>Current Rank</h3>
            <p className="stat-value">Top 5%</p>
            <span className="stat-trend">Global Leaderboard</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="courses-section">
          <div className="section-header">
            <h2>Continue Learning</h2>
            <button className="view-all">View all</button>
          </div>
          <div className="course-list">
            <div className="course-card">
              <div className="course-thumb react"></div>
              <div className="course-details">
                <h4>Advanced React Architecture</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
                <div className="course-meta">
                  <span>75% complete</span>
                  <span>12 lessons left</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-thumb node"></div>
              <div className="course-details">
                <h4>Microservices with Node.js</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '30%' }}></div>
                </div>
                <div className="course-meta">
                  <span>30% complete</span>
                  <span>24 lessons left</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-timeline">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-text">
                <p>Completed <strong>Module 4: Authentication</strong></p>
                <small>2 hours ago</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-text">
                <p>Submitted <strong>Project: Dashboard UI</strong></p>
                <small>Yesterday</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-text">
                <p>Joined <strong>Advanced Typescript</strong> community</p>
                <small>4 days ago</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
