import { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LoginApp = lazy(() => import('loginApp/Login'));

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      <main style={{ flex: 1, padding: 0, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flex: 1, width: '100%', height: '100%' }}>
          <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>Loading secure login module...</div>}>
            <LoginApp />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
