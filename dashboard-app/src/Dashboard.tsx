

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid green', borderRadius: '8px' }}>
      <h2>Dashboard Application (Micro Frontend)</h2>
      <p>This is the exposed Dashboard component from the dashboard-app.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ padding: '10px', background: '#eef', flex: 1 }}>Stat 1: 100</div>
        <div style={{ padding: '10px', background: '#efe', flex: 1 }}>Stat 2: 250</div>
        <div style={{ padding: '10px', background: '#fee', flex: 1 }}>Stat 3: 50</div>
      </div>
    </div>
  );
};

export default Dashboard;
