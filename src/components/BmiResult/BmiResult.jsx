import React from 'react';
import styles from './BmiResult.module.css';

const BmiResult = ({ bmi }) => {
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'var(--underweight)' };
    if (bmi < 25) return { category: 'Normal', color: 'var(--normal)' };
    if (bmi < 30) return { category: 'Overweight', color: 'var(--overweight)' };
    return { category: 'Obese', color: 'var(--obese)' };
  };

  const { category, color } = getBmiCategory(bmi);
  
  // Calculate marker position (15 to 40 BMI range)
  const markerPos = Math.min(Math.max((bmi - 15) / (40 - 15) * 100, 0), 100);

  return (
    <div className={styles.result}>
      <h2>Current Index</h2>
      <div className={styles.bmiValue} style={{ color }}>
        {bmi}
      </div>
      <div className={styles.category} style={{ color }}>
        {category}
      </div>
      
      <div className={styles.scale}>
        <div className={styles.marker} style={{ left: `${markerPos}%`, color }}>
          ▼
        </div>
        <div className={styles.ranges}>
          <span className={styles.underweight}></span>
          <span className={styles.normal}></span>
          <span className={styles.overweight}></span>
          <span className={styles.obese}></span>
        </div>
        <div className={styles.labels}>
          <span>15</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>40+</span>
        </div>
      </div>
    </div>
  );
};

export default BmiResult;