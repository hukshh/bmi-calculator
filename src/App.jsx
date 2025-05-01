import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import BmiCalculator from './components/BmiCalculator/BmiCalculator';
import BmiResult from './components/BmiResult/BmiResult';
import UserProfile from './components/UserProfile/UserProfile';
import BmiChart from './components/BmiChart/BmiChart';
import BmiHistory from './components/BmiHistory/BmiHistory';
import Guide from './pages/Guide/Guide';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [bmi, setBmi] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  const [bmiHistory, setBmiHistory] = React.useState([]);

  const handleBmiCalculate = (value) => {
    setBmi(value);
    if (value) {
      setBmiHistory(prev => [...prev, { date: new Date().toISOString(), bmi: value }]);
    }
  };

  const handleProfileUpdate = (profile) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  React.useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>BMI Calculator</h1>
          <p>A simple tool to assess your body mass index</p>
          <Link to="/guide" className={styles.guideButton}>
            BMI Calculator Guide
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Calculator</Link>
            <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
            <Link to="/guide" className={styles.navLink}>Guide</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.grid}>
                  <div className={styles.leftColumn}>
                    <UserProfile
                      profile={userProfile}
                      onProfileUpdate={handleProfileUpdate}
                    />
                    <div className={styles.calculatorContainer}>
                      <BmiCalculator onCalculate={handleBmiCalculate} />
                    </div>
                  </div>
                  <div className={styles.rightColumn}>
                    {bmi && <BmiResult bmi={bmi} />}
                    <BmiChart bmi={bmi} history={bmiHistory} />
                    <BmiHistory history={bmiHistory} />
                  </div>
                </div>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 BMI Calculator. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;