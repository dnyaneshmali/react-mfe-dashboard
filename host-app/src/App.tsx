import { lazy, Suspense } from 'react';
import './App.css';

const LoginApp = lazy(() => import('loginApp/Login'));
const DashboardApp = lazy(() => import('dashboardApp/Dashboard'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Host Application</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <p>This is the main host application shell.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <section>
            <h3>Remote: Login App</h3>
            <Suspense fallback={<div>Loading Login...</div>}>
              <LoginApp />
            </Suspense>
          </section>

          <section>
            <h3>Remote: Dashboard App</h3>
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <DashboardApp />
            </Suspense>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
