import { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LoginApp = lazy(() => import('loginApp/Login'));

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="App-content">
          <Suspense fallback={<div className="Suspense-fallback">Loading secure login module...</div>}>
            <LoginApp />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
