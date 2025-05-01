import React, { useState } from 'react';
import styles from './BmiCalculator.module.css';

const BmiCalculator = ({ onCalculate }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  const calculateBmi = (e) => {
    e.preventDefault();
    
    let bmi;
    if (unit === 'metric') {
      // Height in meters, weight in kg
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else {
      // Height in inches, weight in pounds
      bmi = (weight * 703) / (height * height);
    }
    
    onCalculate(parseFloat(bmi.toFixed(1)));
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.unitToggle}>
        <button
          className={`${styles.unitButton} ${unit === 'metric' ? styles.active : ''}`}
          onClick={() => setUnit('metric')}
        >
          Metric
        </button>
        <button
          className={`${styles.unitButton} ${unit === 'imperial' ? styles.active : ''}`}
          onClick={() => setUnit('imperial')}
        >
          Imperial
        </button>
      </div>

      <form onSubmit={calculateBmi} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="height">Height</label>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
              required
              min="1"
              step="any"
            />
            <span className={styles.unit}>{unit === 'metric' ? 'cm' : 'in'}</span>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weight">Weight</label>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              required
              min="1"
              step="any"
            />
            <span className={styles.unit}>{unit === 'metric' ? 'kg' : 'lb'}</span>
          </div>
        </div>

        <button type="submit" className={styles.calculateButton}>
          Calculate BMI
        </button>
      </form>
    </div>
  );
};

export default BmiCalculator; 