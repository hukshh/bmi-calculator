import React from 'react';
import styles from './Guide.module.css';

const Guide = () => {
  return (
    <div className={styles.guidePage}>
      <section className={styles.hero}>
        <h1>Understanding BMI</h1>
        <p>A comprehensive guide to Body Mass Index and its importance for your health</p>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>What is BMI?</h2>
          <p>Body Mass Index (BMI) is a simple measurement using your weight and height to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared.</p>
          
          <div className={styles.card}>
            <h3>BMI Categories</h3>
            <ul className={styles.categories}>
              <li className={styles.underweight}>
                <span className={styles.range}>Under 18.5</span>
                <span className={styles.category}>Underweight</span>
              </li>
              <li className={styles.normal}>
                <span className={styles.range}>18.5 - 24.9</span>
                <span className={styles.category}>Normal Weight</span>
              </li>
              <li className={styles.overweight}>
                <span className={styles.range}>25.0 - 29.9</span>
                <span className={styles.category}>Overweight</span>
              </li>
              <li className={styles.obese}>
                <span className={styles.range}>30.0 or higher</span>
                <span className={styles.category}>Obese</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Understanding Your BMI Results</h2>
          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <h3>Underweight</h3>
              <p>Being underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Normal Weight</h3>
              <p>Keep up the good work! For tips on maintaining a healthy weight, check out our healthy living guide.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Overweight</h3>
              <p>The best way to lose weight if you're overweight is through a combination of diet and exercise.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Obese</h3>
              <p>The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>BMI Limitations</h2>
          <div className={styles.limitationsCard}>
            <p>BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number.</p>
            <ul className={styles.limitationsList}>
              <li>Athletes may have high BMI but not be overweight</li>
              <li>Elderly people may have low BMI but need medical attention</li>
              <li>Children should use age-adjusted BMI charts</li>
              <li>Pregnancy causes natural weight gain</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Tips for a Healthy BMI</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <h3>Balanced Diet</h3>
              <p>Eat a variety of foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Regular Exercise</h3>
              <p>Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity weekly.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Stay Hydrated</h3>
              <p>Drink plenty of water throughout the day. Aim for 8 glasses (about 2 liters) daily.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Regular Check-ups</h3>
              <p>Monitor your BMI regularly and consult healthcare professionals for personalized advice.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guide; 