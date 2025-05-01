import React from 'react';
import styles from './BmiResult.module.css';

const BmiResult = ({ bmi }) => {
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'var(--underweight)' };
    if (bmi < 25) return { category: 'Normal Weight', color: 'var(--normal)' };
    if (bmi < 30) return { category: 'Overweight', color: 'var(--overweight)' };
    return { category: 'Obese', color: 'var(--obese)' };
  };

  const { category, color } = getBmiCategory(bmi);

  return (
    <div className={styles.result}>
      <h2>Your BMI Result</h2>
      <div className={styles.bmiValue} style={{ color }}>
        {bmi}
      </div>
      <div className={styles.category} style={{ color }}>
        {category}
      </div>
      <div className={styles.scale}>
        <div className={styles.marker} style={{ left: `${Math.min(Math.max((bmi - 15) * 4, 0), 100)}%` }}>
          ▼
        </div>
        <div className={styles.ranges}>
          <span className={styles.underweight}>Underweight</span>
          <span className={styles.normal}>Normal</span>
          <span className={styles.overweight}>Overweight</span>
          <span className={styles.obese}>Obese</span>
        </div>
      </div>
    </div>
  );
};

export default BmiResult;