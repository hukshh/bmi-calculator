import React from 'react';
import styles from './BmiHistory.module.css';

const BmiHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return null;
  }

  const sortedHistory = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getBmiTrend = (current, previous) => {
    if (!previous) return null;
    if (current > previous) return 'increased';
    if (current < previous) return 'decreased';
    return 'unchanged';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.historyCard}>
      <h2>BMI History</h2>
      <div className={styles.historyList}>
        {sortedHistory.map((entry, index) => {
          const trend = getBmiTrend(
            entry.bmi,
            index < sortedHistory.length - 1 ? sortedHistory[index + 1].bmi : null
          );

          return (
            <div key={entry.date} className={styles.historyItem}>
              <div className={styles.date}>{formatDate(entry.date)}</div>
              <div className={styles.bmiValue}>{entry.bmi.toFixed(1)}</div>
              {trend && (
                <div className={`${styles.trend} ${styles[trend]}`}>
                  {trend === 'increased' && '↑'}
                  {trend === 'decreased' && '↓'}
                  {trend === 'unchanged' && '→'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BmiHistory; 