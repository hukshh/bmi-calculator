import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  // Sample data - replace with actual user data
  const bmiHistory = [
    { date: '2024-01-01', bmi: 26.5 },
    { date: '2024-02-01', bmi: 25.8 },
    { date: '2024-03-01', bmi: 25.2 },
    { date: '2024-04-01', bmi: 24.7 },
  ];

  const goals = [
    { id: 1, title: 'Target BMI', current: 24.7, target: 23.0, deadline: '2024-06-01' },
    { id: 2, title: 'Weekly Exercise', current: 120, target: 150, unit: 'minutes' },
    { id: 3, title: 'Daily Water Intake', current: 6, target: 8, unit: 'glasses' },
  ];

  const activities = [
    { date: '2024-04-01', type: 'BMI Update', value: '24.7', change: 'decreased' },
    { date: '2024-03-15', type: 'Goal Achievement', value: 'Weekly Exercise Target Met', change: 'achieved' },
    { date: '2024-03-01', type: 'BMI Update', value: '25.2', change: 'decreased' },
  ];

  const chartData = {
    labels: bmiHistory.map(entry => {
      const date = new Date(entry.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'BMI Progress',
        data: bmiHistory.map(entry => entry.bmi),
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 20,
        max: 30,
        grid: {
          color: 'var(--border-color)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Personal Health Dashboard</h1>
        <p>Track your progress and achieve your health goals</p>
      </header>

      <div className={styles.grid}>
        <section className={styles.mainSection}>
          <div className={styles.card}>
            <h2>BMI Progress</h2>
            <div className={styles.chartContainer}>
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className={styles.card}>
            <h2>Health Goals</h2>
            <div className={styles.goals}>
              {goals.map(goal => (
                <div key={goal.id} className={styles.goalCard}>
                  <div className={styles.goalInfo}>
                    <h3>{goal.title}</h3>
                    <p className={styles.goalProgress}>
                      {goal.current} / {goal.target} {goal.unit}
                    </p>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                  <p className={styles.deadline}>
                    Target Date: {new Date(goal.deadline).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.card}>
            <h2>Recent Activity</h2>
            <div className={styles.activities}>
              {activities.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    {activity.type === 'BMI Update' ? '📊' : '🎯'}
                  </div>
                  <div className={styles.activityInfo}>
                    <h3>{activity.type}</h3>
                    <p>{activity.value}</p>
                    <time>{new Date(activity.date).toLocaleDateString()}</time>
                  </div>
                  <div className={`${styles.activityStatus} ${styles[activity.change]}`}>
                    {activity.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h2>Quick Tips</h2>
            <ul className={styles.tips}>
              <li>Stay hydrated throughout the day</li>
              <li>Take regular breaks for short walks</li>
              <li>Practice mindful eating habits</li>
              <li>Get 7-8 hours of quality sleep</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard; 