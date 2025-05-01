import styles from './HealthTips.module.css';

function HealthTips({ category }) {
  const tips = {
    Underweight: [
      "Eat more frequently - 5-6 smaller meals per day",
      "Choose nutrient-rich foods like nuts, avocados, and whole grains",
      "Include protein with every meal",
      "Try smoothies or shakes instead of soda or coffee",
      "Consult a dietitian for personalized advice"
    ],
    Normal: [
      "Maintain your balanced diet with plenty of fruits and vegetables",
      "Stay active with at least 150 minutes of exercise per week",
      "Monitor your weight periodically to maintain your healthy range",
      "Get enough sleep (7-9 hours per night)",
      "Manage stress through meditation or hobbies"
    ],
    Overweight: [
      "Aim for gradual weight loss (1-2 lbs per week)",
      "Increase physical activity - aim for 30 minutes most days",
      "Reduce portion sizes and limit high-calorie snacks",
      "Choose water over sugary drinks",
      "Focus on long-term lifestyle changes rather than fad diets"
    ],
    Obese: [
      "Consult with a healthcare provider before starting any weight loss program",
      "Set realistic weight loss goals (5-10% of body weight)",
      "Consider working with a dietitian for meal planning",
      "Find physical activities you enjoy to stay consistent",
      "Address emotional eating with professional help if needed"
    ]
  };

  return (
    <div className={styles.tipsCard}>
      <h3>Health Tips for {category}</h3>
      <ul className={styles.tipsList}>
        {tips[category]?.map((tip, index) => (
          <li key={index} className={styles.tipItem}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HealthTips;