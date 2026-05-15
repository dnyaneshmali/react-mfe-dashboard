import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import authService from 'loginApp/AuthService';

const LoginApp = lazy(() => import('loginApp/Login'));
const DashboardApp = lazy(() => import('dashboardApp/Dashboard'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(authService.isAuthenticated());
    };

    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <div className="App-content">
            <Suspense fallback={<div className="Suspense-fallback">Loading...</div>}>
              <Routes>
                <Route 
                  path="/login" 
                  element={!isAuthenticated ? <LoginApp /> : <Navigate to="/dashboard" />} 
                />
                <Route 
                  path="/dashboard" 
                  element={isAuthenticated ? <DashboardApp /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/" 
                  element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
                />
              </Routes>
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

