import React from 'react';
import styles from './BmiGuide.module.css';

const BmiGuide = () => {
  return (
    <div className={styles.guideContainer}>
      <h1 className={styles.title}>BMI Calculator Guide</h1>
      <p className={styles.intro}>This is a comprehensive guide to understanding and using the BMI Calculator effectively.</p>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>BMI Interpretation</h2>
        
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Underweight</h3>
          <p className={styles.categoryDescription}>
            BMI below 18.5. This may indicate nutritional deficiencies or other health issues.
          </p>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Healthy Weight</h3>
          <p className={styles.categoryDescription}>
            BMI between 18.5 and 24.9. This range is generally considered a healthy weight for adults.
          </p>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Overweight</h3>
          <p className={styles.categoryDescription}>
            BMI between 25.0 and 29.9. This range is associated with increased health risks, such as heart disease and diabetes.
          </p>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Obese</h3>
          <p className={styles.categoryDescription}>
            BMI of 30 or higher. This range is associated with significant health risks and may be further classified into classes (I, II, III) based on BMI value.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Important Considerations</h2>
        <ul className={styles.considerationsList}>
          <li>BMI does not differentiate between fat, muscle, and bone mass.</li>
          <li>It's a general indicator and may not accurately reflect body composition or health in all individuals, especially athletes or those with high muscle mass.</li>
          <li>Other factors like waist circumference and overall health should also be considered when assessing an individual's health risk.</li>
          <li>For older adults, a slightly higher BMI (between 25 and 27) may be considered healthy.</li>
        </ul>
        <p className={styles.summary}>
          In summary, BMI provides a quick estimate of weight relative to height, but it's important to consider it in conjunction with other factors and individual circumstances when assessing overall health.
        </p>
      </section>
    </div>
  );
};

export default BmiGuide; 