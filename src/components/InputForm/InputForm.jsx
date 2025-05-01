import { useState, useEffect } from 'react';
import styles from './InputForm.module.css';
import {Link} from 'react-router-dom';
 // or wherever it's located



function InputForm({
  unitSystem,
  weight,
  heightCm,
  heightFt,
  heightIn,
  onWeightChange,
  onHeightCmChange,
  onHeightFtChange,
  onHeightInChange,
  onSubmit,
  isLoading,
}) {
  const [isMetric, setIsMetric] = useState(unitSystem === 'metric');

  useEffect(() => {
    setIsMetric(unitSystem === 'metric');
  }, [unitSystem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="weight" className={styles.floatingLabel}>
          Weight ({isMetric ? 'kg' : 'lbs'})
        </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => onWeightChange(e.target.value)}
          className={styles.input}
          step="0.1"
          min="0"
          required
          aria-required="true"
        />
      </div>

      {isMetric ? (
        <div className={styles.inputGroup}>
          <label htmlFor="heightCm" className={styles.floatingLabel}>
            Height (cm)
          </label>
          <input
            type="number"
            id="heightCm"
            value={heightCm}
            onChange={(e) => onHeightCmChange(e.target.value)}
            className={styles.input}
            min="0"
            required
            aria-required="true"
          />
        </div>
      ) : (
        <div className={styles.heightImperial}>
          <div className={styles.inputGroup}>
            <label htmlFor="heightFt" className={styles.floatingLabel}>
              Height (ft)
            </label>
            <input
              type="number"
              id="heightFt"
              value={heightFt}
              onChange={(e) => onHeightFtChange(e.target.value)}
              className={styles.input}
              min="0"
              max="8"
              required
              aria-required="true"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="heightIn" className={styles.floatingLabel}>
              Height (in)
            </label>
            <input
              type="number"
              id="heightIn"
              value={heightIn} 
              onChange={(e) => onHeightInChange(e.target.value)}
              className={styles.input}
              min="0"
              max="11"
              required
              aria-required="true"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner} aria-hidden="true"></span>
            Calculating...
          </>
        ) : (
          'Calculate BMI'
        )}
      </button>

      <Link to="/guide" style={{ textDecoration: 'none' }}>
        <button style={{ width: '500px', height: '50px',marginLeft:"20px",marginTop:"100px", cursor:"pointer"}}>BMI Calculator Guide</button>
    </Link>

      
    </form>

    
  );
}

export default InputForm;