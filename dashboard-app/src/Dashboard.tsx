
import authService from 'loginApp/AuthService';

const Dashboard = () => {
  const user = authService.getUser() || { name: 'Guest', role: 'Visitor' };

  return (
    <div style={{ padding: '20px', border: '2px solid green', borderRadius: '8px' }}>
      <h2>Dashboard Application (Micro Frontend)</h2>
      <p>Welcome back, <strong>{user.name}</strong>!</p>
      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Role: {user.role}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <div style={{ padding: '10px', background: '#eef', flex: 1 }}>Stat 1: 100</div>
        <div style={{ padding: '10px', background: '#efe', flex: 1 }}>Stat 2: 250</div>
        <div style={{ padding: '10px', background: '#fee', flex: 1 }}>Stat 3: 50</div>
      </div>
    </div>
  );
};

export default Dashboard;
