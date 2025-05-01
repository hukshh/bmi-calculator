import React from "react"
import styles from './UnitToggle.module.css';

function UnitToggle({ unitSystem, onUnitChange }) {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${unitSystem === 'metric' ? styles.active : ''}`}
        onClick={() => onUnitChange('metric')}
        aria-label="Use metric units (kg and cm)"
      >
        Metric (kg, cm)
      </button>
      <button
        className={`${styles.toggleButton} ${unitSystem === 'imperial' ? styles.active : ''}`}
        onClick={() => onUnitChange('imperial')}
        aria-label="Use imperial units (lbs and ft/in)"
      >
        Imperial (lbs, ft/in)
      </button>
    </div>
  );
}


export default UnitToggle