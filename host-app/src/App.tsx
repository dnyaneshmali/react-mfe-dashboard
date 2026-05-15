import { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LoginApp = lazy(() => import('loginApp/Login'));
const DashboardApp = lazy(() => import('dashboardApp/Dashboard'));

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', color: '#111827', marginBottom: '10px' }}>Welcome to EduNexus Portal</h2>
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Access your personalized learning dashboard and modules.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <section style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6' }}>
            <h3 style={{ color: '#4f46e5', marginTop: 0, marginBottom: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>🔐</span> Authentication
            </h3>
            <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>Loading secure login module...</div>}>
              <LoginApp />
            </Suspense>
          </section>

          <section style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6' }}>
            <h3 style={{ color: '#4f46e5', marginTop: 0, marginBottom: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>📊</span> Progress Dashboard
            </h3>
            <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>Loading analytics dashboard...</div>}>
              <DashboardApp />
            </Suspense>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
