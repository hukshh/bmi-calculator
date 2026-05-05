import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './App.module.css';
import BmiCalculator from './components/BmiCalculator/BmiCalculator';
import BmiResult from './components/BmiResult/BmiResult';
import UserProfile from './components/UserProfile/UserProfile';
import BmiChart from './components/BmiChart/BmiChart';
import BmiHistory from './components/BmiHistory/BmiHistory';
import BmiScene from './components/BmiScene/BmiScene';
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
        {/* Animated Background Blobs */}
        <div className={styles.bgBlobs}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
        </div>

        <header className={styles.header}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            BMI Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Elevate your health journey with precision and style.
          </motion.p>
          
          <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>
              Calculator
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>
              Dashboard
            </NavLink>
            <NavLink to="/guide" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>
              Guide
            </NavLink>
          </nav>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.grid}>
                  <motion.div 
                    className={styles.leftColumn}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <UserProfile
                      profile={userProfile}
                      onProfileUpdate={handleProfileUpdate}
                    />
                    <div className={styles.calculatorContainer}>
                      <BmiCalculator onCalculate={handleBmiCalculate} />
                    </div>
                  </motion.div>

                  <motion.div 
                    className={styles.rightColumn}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="glass-card" style={{ padding: '2rem', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                       <BmiScene bmi={bmi} />
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {bmi && (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                        >
                          <BmiResult bmi={bmi} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <BmiChart bmi={bmi} history={bmiHistory} />
                    <BmiHistory history={bmiHistory} />
                  </motion.div>
                </div>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 BMI Calculator. Designed with passion for health.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;