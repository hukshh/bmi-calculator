import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import styles from './BmiChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BmiChart = ({ history }) => {
  if (!history || history.length < 2) {
    return null;
  }

  const data = {
    labels: history.map(entry => {
      const date = new Date(entry.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'BMI History',
        data: history.map(entry => entry.bmi),
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'var(--bg-secondary)',
        titleColor: 'var(--text-primary)',
        bodyColor: 'var(--text-secondary)',
        borderColor: 'var(--border-color)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (items) => {
            return items[0].label;
          },
          label: (item) => {
            return `BMI: ${item.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'var(--text-secondary)',
        },
      },
      y: {
        min: Math.floor(Math.min(...history.map(entry => entry.bmi)) - 1),
        max: Math.ceil(Math.max(...history.map(entry => entry.bmi)) + 1),
        grid: {
          color: 'var(--border-color)',
        },
        ticks: {
          color: 'var(--text-secondary)',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <h2>Trend Analysis</h2>
      </div>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendColor} style={{ background: 'var(--primary)' }}></div>
          <span>BMI Index</span>
        </div>
      </div>
    </div>
  );
};

export default BmiChart;